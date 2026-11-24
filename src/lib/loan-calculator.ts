import { LOAN_PRODUCTS, type LoanProductConfig, type LoanType } from "@/config/sacco-config";
import type { Bi } from "@/i18n/locale-context";

export interface LoanCalculatorInput {
  loanType: LoanType;
  /** Loan amount in ETB. */
  amount: number;
  /** Repayment term in months. */
  months: number;
  /** Optional gross monthly salary in ETB, used for the one-third repayment cap check. */
  monthlySalary?: number;
  /** Optional current savings balance in ETB, used for the Normal loan 4x-savings cap check. */
  savingsBalance?: number;
}

export interface AmortizationRow {
  month: number;
  payment: number;
  principalPortion: number;
  /** Interest (Normal loan) or share of the flat service charge (Material/Holiday loans). */
  interestOrChargePortion: number;
  remainingBalance: number;
}

export interface LoanCalculation {
  monthlyRepayment: number;
  totalInterestOrServiceCharge: number;
  totalRepayment: number;
  schedule: AmortizationRow[];
}

export type ValidationSeverity = "error" | "warning";

export interface ValidationIssue {
  code: string;
  severity: ValidationSeverity;
  message: Bi;
}

export interface LoanCalculatorResult {
  valid: boolean;
  issues: ValidationIssue[];
  calculation?: LoanCalculation;
}

export function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function productOf(loanType: LoanType): LoanProductConfig {
  return LOAN_PRODUCTS[loanType];
}

function buildReducingBalanceSchedule(amount: number, annualRate: number, months: number): AmortizationRow[] {
  const monthlyRate = annualRate / 12;
  const payment =
    monthlyRate === 0
      ? amount / months
      : (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

  const schedule: AmortizationRow[] = [];
  let balance = amount;

  for (let month = 1; month <= months; month++) {
    const interest = balance * monthlyRate;
    let principal = payment - interest;
    let roundedPayment = payment;

    if (month === months) {
      // Final installment absorbs any rounding drift so the balance lands exactly on zero.
      principal = balance;
      roundedPayment = principal + interest;
    }

    balance = Math.max(0, balance - principal);

    schedule.push({
      month,
      payment: round2(roundedPayment),
      principalPortion: round2(principal),
      interestOrChargePortion: round2(interest),
      remainingBalance: round2(balance),
    });
  }

  return schedule;
}

function buildFlatChargeSchedule(amount: number, serviceCharge: number, months: number): AmortizationRow[] {
  const principalPerMonth = amount / months;
  const chargePerMonth = serviceCharge / months;
  const paymentPerMonth = principalPerMonth + chargePerMonth;

  const schedule: AmortizationRow[] = [];
  let balance = amount;

  for (let month = 1; month <= months; month++) {
    const isLast = month === months;
    const principal = isLast ? balance : principalPerMonth;
    balance = Math.max(0, balance - principal);

    schedule.push({
      month,
      payment: round2(isLast ? principal + chargePerMonth : paymentPerMonth),
      principalPortion: round2(principal),
      interestOrChargePortion: round2(chargePerMonth),
      remainingBalance: round2(balance),
    });
  }

  return schedule;
}

function msg(code: string, severity: ValidationSeverity, message: Bi): ValidationIssue {
  return { code, severity, message };
}

export function validateLoanInput(input: LoanCalculatorInput): ValidationIssue[] {
  const product = productOf(input.loanType);
  const issues: ValidationIssue[] = [];

  if (!Number.isFinite(input.amount) || input.amount <= 0) {
    issues.push(
      msg("amount-invalid", "error", {
        en: "Enter a loan amount greater than zero.",
        am: "ከዜሮ የሚበልጥ የብድር መጠን ያስገቡ።",
      })
    );
  } else if (input.amount < product.minAmount || input.amount > product.maxAmount) {
    issues.push(
      msg("amount-out-of-range", "error", {
        en: `${product.name.en} amount must be between ${product.minAmount.toLocaleString()} and ${product.maxAmount.toLocaleString()} ETB.`,
        am: `የ${product.name.am} መጠን ከ${product.minAmount.toLocaleString()} እስከ ${product.maxAmount.toLocaleString()} ብር መሆን አለበት።`,
      })
    );
  }

  if (!Number.isInteger(input.months) || input.months <= 0) {
    issues.push(
      msg("months-invalid", "error", {
        en: "Enter a repayment period of at least 1 month.",
        am: "ቢያንስ የ1 ወር የክፍያ ጊዜ ያስገቡ።",
      })
    );
  } else if (input.months < product.minMonths || input.months > product.maxMonths) {
    issues.push(
      msg("months-out-of-range", "error", {
        en: `${product.name.en} repayment period must be between ${product.minMonths} and ${product.maxMonths} months.`,
        am: `የ${product.name.am} የክፍያ ጊዜ ከ${product.minMonths} እስከ ${product.maxMonths} ወራት መሆን አለበት።`,
      })
    );
  }

  if (product.id === "normal" && input.savingsBalance !== undefined && input.savingsBalance > 0 && product.maxMultipleOfSavings) {
    const maxBySavings = input.savingsBalance * product.maxMultipleOfSavings;
    if (input.amount > maxBySavings) {
      issues.push(
        msg("exceeds-savings-multiple", "error", {
          en: `A Normal Loan cannot exceed ${product.maxMultipleOfSavings} times your savings balance (maximum ${maxBySavings.toLocaleString()} ETB based on the savings you entered).`,
          am: `መደበኛ ብድር ከቁጠባዎ ${product.maxMultipleOfSavings} እጥፍ መብለጥ አይችልም (በገባው ቁጠባ መሰረት ከፍተኛ መጠን ${maxBySavings.toLocaleString()} ብር ነው)።`,
        })
      );
    }
  }

  return issues;
}

export function calculateLoan(input: LoanCalculatorInput): LoanCalculatorResult {
  const product = productOf(input.loanType);
  const issues = validateLoanInput(input);

  const canCompute = Number.isFinite(input.amount) && input.amount > 0 && Number.isInteger(input.months) && input.months > 0;

  let calculation: LoanCalculation | undefined;

  if (canCompute) {
    const schedule =
      product.interestType === "reducing-balance"
        ? buildReducingBalanceSchedule(input.amount, product.annualInterestRate ?? 0, input.months)
        : buildFlatChargeSchedule(input.amount, input.amount * (product.serviceChargeRate ?? 0), input.months);

    const totalRepayment = round2(schedule.reduce((sum, row) => sum + row.payment, 0));
    const totalInterestOrServiceCharge = round2(totalRepayment - input.amount);
    const monthlyRepayment = schedule[0]?.payment ?? 0;

    calculation = {
      monthlyRepayment,
      totalInterestOrServiceCharge,
      totalRepayment,
      schedule,
    };

    if (input.monthlySalary !== undefined && input.monthlySalary > 0) {
      const cap = input.monthlySalary * product.salaryRepaymentCapFraction;
      if (monthlyRepayment > cap + 0.01) {
        issues.push(
          msg("exceeds-salary-cap", "error", {
            en: `The estimated monthly repayment (${monthlyRepayment.toLocaleString()} ETB) exceeds one-third of the salary you entered (maximum ${round2(cap).toLocaleString()} ETB). Consider a smaller amount or a longer term.`,
            am: `የተገመተው ወርሃዊ ክፍያ (${monthlyRepayment.toLocaleString()} ብር) ከገባው ደመወዝ ሲሶ (ከፍተኛ ${round2(cap).toLocaleString()} ብር) ይበልጣል። ያነሰ መጠን ወይም ረዘም ያለ ጊዜ ያስቡ።`,
          })
        );
      }
    }
  }

  return {
    valid: issues.every((issue) => issue.severity !== "error"),
    issues,
    calculation,
  };
}

export interface SavingsPreviewInput {
  isManagement: boolean;
  monthlySalary: number;
  /** Non-management only: chosen percentage between 5 and 50. */
  savingsPercent?: number;
  /** Management only: chosen initial monthly savings amount. */
  initialAmount?: number;
  years: number;
}

export interface SavingsPreviewResult {
  monthlySavingsYear1: number;
  /** Simple projected total principal saved over the period, before any dividends. No investment return is assumed or implied. */
  projectedTotalSaved: number;
  issues: ValidationIssue[];
}

/**
 * A simple, conservative savings preview. It only projects contributed
 * principal (payroll deductions) — it never assumes or promises a dividend
 * or investment return, per Moenco SACCO's request.
 */
export function previewSavings(input: SavingsPreviewInput): SavingsPreviewResult {
  const issues: ValidationIssue[] = [];

  if (!Number.isFinite(input.monthlySalary) || input.monthlySalary <= 0) {
    issues.push(
      msg("salary-invalid", "error", {
        en: "Enter a monthly salary greater than zero.",
        am: "ከዜሮ የሚበልጥ ወርሃዊ ደመወዝ ያስገቡ።",
      })
    );
    return { monthlySavingsYear1: 0, projectedTotalSaved: 0, issues };
  }

  let monthlySavingsYear1: number;

  if (input.isManagement) {
    monthlySavingsYear1 = input.initialAmount ?? 0;
    if (monthlySavingsYear1 <= 0) {
      issues.push(
        msg("initial-amount-invalid", "error", {
          en: "Enter an initial monthly savings amount greater than zero.",
          am: "ከዜሮ የሚበልጥ የመጀመሪያ ወርሃዊ ቁጠባ መጠን ያስገቡ።",
        })
      );
    }
  } else {
    const percent = input.savingsPercent ?? 0;
    if (percent < 5 || percent > 50) {
      issues.push(
        msg("percent-out-of-range", "error", {
          en: "Savings percentage must be between 5% and 50% of salary.",
          am: "የቁጠባ መቶኛ ከደመወዝ 5% እስከ 50% መሆን አለበት።",
        })
      );
    }
    monthlySavingsYear1 = input.monthlySalary * (percent / 100);
  }

  let totalSaved = 0;
  let currentMonthly = monthlySavingsYear1;
  for (let year = 0; year < input.years; year++) {
    totalSaved += currentMonthly * 12;
    if (input.isManagement) {
      currentMonthly = currentMonthly * 1.15;
    }
  }

  return {
    monthlySavingsYear1: round2(monthlySavingsYear1),
    projectedTotalSaved: round2(totalSaved),
    issues,
  };
}
