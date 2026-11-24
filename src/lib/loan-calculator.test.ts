import { describe, expect, it } from "vitest";
import { calculateLoan, previewSavings, round2 } from "./loan-calculator";

describe("calculateLoan — Normal loan (reducing balance, 9% APR)", () => {
  it("matches the standard PMT formula for a typical loan", () => {
    const amount = 120_000;
    const months = 24;
    const rate = 0.09 / 12;
    const expectedPmt = (amount * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);

    const result = calculateLoan({ loanType: "normal", amount, months });

    expect(result.valid).toBe(true);
    expect(result.calculation?.monthlyRepayment).toBeCloseTo(round2(expectedPmt), 1);
    expect(result.calculation?.schedule).toHaveLength(months);
  });

  it("fully amortizes to a zero balance with no leftover drift", () => {
    const result = calculateLoan({ loanType: "normal", amount: 87_500, months: 37 });
    const schedule = result.calculation!.schedule;
    expect(schedule[schedule.length - 1].remainingBalance).toBe(0);

    const totalPrincipalPaid = round2(schedule.reduce((sum, row) => sum + row.principalPortion, 0));
    expect(totalPrincipalPaid).toBeCloseTo(87_500, 1);
  });

  it("rejects an amount above the maximum (1,400,000 ETB)", () => {
    const result = calculateLoan({ loanType: "normal", amount: 1_500_000, months: 24 });
    expect(result.valid).toBe(false);
    expect(result.issues.some((i) => i.code === "amount-out-of-range")).toBe(true);
  });

  it("rejects a term above the 84-month maximum", () => {
    const result = calculateLoan({ loanType: "normal", amount: 50_000, months: 90 });
    expect(result.valid).toBe(false);
    expect(result.issues.some((i) => i.code === "months-out-of-range")).toBe(true);
  });

  it("flags a monthly repayment above one-third of the stated salary", () => {
    const result = calculateLoan({ loanType: "normal", amount: 400_000, months: 12, monthlySalary: 10_000 });
    expect(result.valid).toBe(false);
    expect(result.issues.some((i) => i.code === "exceeds-salary-cap")).toBe(true);
  });

  it("passes the salary cap check when the repayment fits within one-third of salary", () => {
    const result = calculateLoan({ loanType: "normal", amount: 20_000, months: 24, monthlySalary: 10_000 });
    expect(result.issues.some((i) => i.code === "exceeds-salary-cap")).toBe(false);
  });

  it("rejects a loan amount above 4x the member's savings balance", () => {
    const result = calculateLoan({ loanType: "normal", amount: 100_000, months: 24, savingsBalance: 10_000 });
    expect(result.valid).toBe(false);
    expect(result.issues.some((i) => i.code === "exceeds-savings-multiple")).toBe(true);
  });

  it("allows a loan amount at exactly 4x the savings balance", () => {
    const result = calculateLoan({ loanType: "normal", amount: 40_000, months: 24, savingsBalance: 10_000 });
    expect(result.issues.some((i) => i.code === "exceeds-savings-multiple")).toBe(false);
  });
});

describe("calculateLoan — Material loan (0% interest, 5% flat service charge)", () => {
  it("charges exactly 5% of principal as the service charge", () => {
    const result = calculateLoan({ loanType: "material", amount: 50_000, months: 10 });
    expect(result.valid).toBe(true);
    expect(result.calculation?.totalInterestOrServiceCharge).toBeCloseTo(2_500, 2);
    expect(result.calculation?.totalRepayment).toBeCloseTo(52_500, 2);
  });

  it("rejects an amount above the 100,000 ETB maximum", () => {
    const result = calculateLoan({ loanType: "material", amount: 150_000, months: 10 });
    expect(result.valid).toBe(false);
    expect(result.issues.some((i) => i.code === "amount-out-of-range")).toBe(true);
  });

  it("rejects a term above the 12-month maximum", () => {
    const result = calculateLoan({ loanType: "material", amount: 20_000, months: 18 });
    expect(result.valid).toBe(false);
  });
});

describe("calculateLoan — Holiday loan (0% interest, 5% flat service charge)", () => {
  it("rejects an amount below the 15,000 ETB minimum", () => {
    const result = calculateLoan({ loanType: "holiday", amount: 10_000, months: 6 });
    expect(result.valid).toBe(false);
    expect(result.issues.some((i) => i.code === "amount-out-of-range")).toBe(true);
  });

  it("rejects an amount above the 20,000 ETB maximum", () => {
    const result = calculateLoan({ loanType: "holiday", amount: 25_000, months: 6 });
    expect(result.valid).toBe(false);
  });

  it("computes equal installments across the schedule", () => {
    const result = calculateLoan({ loanType: "holiday", amount: 18_000, months: 6 });
    const payments = result.calculation!.schedule.map((row) => row.payment);
    const first = payments[0];
    payments.slice(0, -1).forEach((p) => expect(p).toBeCloseTo(first, 2));
  });
});

describe("calculateLoan — invalid inputs", () => {
  it("rejects a zero or negative amount", () => {
    const result = calculateLoan({ loanType: "normal", amount: 0, months: 12 });
    expect(result.valid).toBe(false);
    expect(result.issues.some((i) => i.code === "amount-invalid")).toBe(true);
    expect(result.calculation).toBeUndefined();
  });

  it("rejects a zero or non-integer term", () => {
    const result = calculateLoan({ loanType: "normal", amount: 10_000, months: 0 });
    expect(result.valid).toBe(false);
    expect(result.issues.some((i) => i.code === "months-invalid")).toBe(true);
  });
});

describe("previewSavings", () => {
  it("projects flat contributions for non-management employees", () => {
    const result = previewSavings({ isManagement: false, monthlySalary: 10_000, savingsPercent: 10, years: 3 });
    expect(result.issues).toHaveLength(0);
    expect(result.monthlySavingsYear1).toBe(1_000);
    expect(result.projectedTotalSaved).toBe(1_000 * 12 * 3);
  });

  it("compounds the 15% annual January increase for management employees", () => {
    const result = previewSavings({ isManagement: true, monthlySalary: 20_000, initialAmount: 2_000, years: 2 });
    const year1 = 2_000 * 12;
    const year2 = 2_000 * 1.15 * 12;
    expect(result.projectedTotalSaved).toBeCloseTo(year1 + year2, 1);
  });

  it("rejects a savings percentage outside the 5–50% range", () => {
    const result = previewSavings({ isManagement: false, monthlySalary: 10_000, savingsPercent: 80, years: 1 });
    expect(result.issues.some((i) => i.code === "percent-out-of-range")).toBe(true);
  });
});
