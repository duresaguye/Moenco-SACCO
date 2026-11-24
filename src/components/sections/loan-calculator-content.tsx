"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Section, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";
import { LOAN_PRODUCTS, type LoanType } from "@/config/sacco-config";
import { calculateLoan } from "@/lib/loan-calculator";
import { cn } from "@/lib/utils";
import { AlertCircle, Info, TableView } from "@/components/icons";

const inputStyle = "border border-lighter bg-primary-lighter/20 text-darker placeholder-body/60 rounded-xl px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent focus:bg-white transition-all";

function isLoanType(value: string | null): value is LoanType {
  return value === "normal" || value === "material" || value === "holiday";
}

export default function LoanCalculatorContent() {
  const { t, locale } = useLocale();
  const searchParams = useSearchParams();

  const [loanType, setLoanType] = useState<LoanType>("normal");
  const [amount, setAmount] = useState(100_000);
  const [months, setMonths] = useState(24);
  const [salary, setSalary] = useState("");
  const [savings, setSavings] = useState("");

  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (isLoanType(typeParam)) setLoanType(typeParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const product = LOAN_PRODUCTS[loanType];

  const handleTypeChange = (next: LoanType) => {
    setLoanType(next);
    const p = LOAN_PRODUCTS[next];
    setAmount((prev) => Math.min(Math.max(prev, p.minAmount), p.maxAmount));
    setMonths((prev) => Math.min(Math.max(prev, p.minMonths), p.maxMonths));
  };

  const result = useMemo(
    () =>
      calculateLoan({
        loanType,
        amount,
        months,
        monthlySalary: salary ? Number(salary) : undefined,
        savingsBalance: savings ? Number(savings) : undefined,
      }),
    [loanType, amount, months, salary, savings]
  );

  return (
    <Section gap="top">
      <SectionContent>
        <div className="container">
          <div className="row g-10">
            <div className="lg:column-5">
              <ScrollReveal delay={100} className="bg-white border border-lighter rounded-2xl p-8">
                <div className="flex gap-1 p-1 mb-8 rounded-xl bg-primary-lighter/50">
                  {Object.values(LOAN_PRODUCTS).map((p) => (
                    <button key={p.id} type="button" onClick={() => handleTypeChange(p.id)} className={cn("flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors", loanType === p.id ? "bg-primary text-white" : "text-darker hover:bg-white/60")}>
                      {t(p.name)}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-6">
                  <div>
                    <label htmlFor="calc-amount" className="block text-sm font-medium text-darker mb-2">
                      {locale === "am" ? `የብድር መጠን (ብር) — ${product.minAmount.toLocaleString()} እስከ ${product.maxAmount.toLocaleString()}` : `Loan amount (ETB) — ${product.minAmount.toLocaleString()} to ${product.maxAmount.toLocaleString()}`}
                    </label>
                    <input id="calc-amount" type="number" value={amount} min={0} onChange={(e) => setAmount(Number(e.target.value))} className={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="calc-months" className="block text-sm font-medium text-darker mb-2">
                      {locale === "am" ? `የክፍያ ጊዜ (ወራት) — ${product.minMonths} እስከ ${product.maxMonths}` : `Repayment period (months) — ${product.minMonths} to ${product.maxMonths}`}
                    </label>
                    <input id="calc-months" type="number" value={months} min={0} onChange={(e) => setMonths(Number(e.target.value))} className={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="calc-salary" className="block text-sm font-medium text-darker mb-2">
                      {locale === "am" ? "ወርሃዊ ደመወዝ (ብር) — አማራጭ" : "Monthly salary (ETB) — optional"}
                    </label>
                    <input id="calc-salary" type="number" value={salary} min={0} onChange={(e) => setSalary(e.target.value)} className={inputStyle} placeholder={t(DICT.common.optional)} />
                  </div>
                  {loanType === "normal" && (
                    <div>
                      <label htmlFor="calc-savings" className="block text-sm font-medium text-darker mb-2">
                        {locale === "am" ? "የቁጠባ ቀሪ ሂሳብ (ብር) — አማራጭ" : "Current savings balance (ETB) — optional"}
                      </label>
                      <input id="calc-savings" type="number" value={savings} min={0} onChange={(e) => setSavings(e.target.value)} className={inputStyle} placeholder={t(DICT.common.optional)} />
                      <p className="text-xs text-body mt-1.5">{locale === "am" ? "መደበኛ ብድር ከቁጠባዎ 4 እጥፍ መብለጥ አይችልም።" : "A Normal Loan cannot exceed 4× your savings balance."}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:column-7">
              <ScrollReveal delay={150} className="flex flex-col gap-6">
                {result.issues.length > 0 && (
                  <div className="flex flex-col gap-3">
                    {result.issues.map((issue, index) => (
                      <div key={index} className={cn("flex gap-3 rounded-xl p-4 text-sm", issue.severity === "error" ? "bg-danger-lighter text-danger" : "bg-secondary/10 text-darker")}>
                        <AlertCircle className="size-5 shrink-0 fill-current" />
                        <span>{t(issue.message)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {result.calculation && (
                  <>
                    <div className="bg-darker rounded-2xl p-8 text-white">
                      <div className="text-sm text-white/60 mb-2">{locale === "am" ? "ወርሃዊ ክፍያ" : "Estimated monthly repayment"}</div>
                      <div className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{result.calculation.monthlyRepayment.toLocaleString()} <span className="text-2xl font-medium text-white/60">ETB</span></div>
                      <div className="flex gap-10 pt-6 border-t border-white/10">
                        <div>
                          <div className="text-xs text-white/50 mb-1">{product.interestType === "reducing-balance" ? (locale === "am" ? "ጠቅላላ ወለድ" : "Total interest") : (locale === "am" ? "ጠቅላላ አገልግሎት ክፍያ" : "Total service charge")}</div>
                          <div className="text-lg font-semibold">{result.calculation.totalInterestOrServiceCharge.toLocaleString()} ETB</div>
                        </div>
                        <div>
                          <div className="text-xs text-white/50 mb-1">{locale === "am" ? "ጠቅላላ ክፍያ" : "Total repayment"}</div>
                          <div className="text-lg font-semibold">{result.calculation.totalRepayment.toLocaleString()} ETB</div>
                        </div>
                      </div>
                    </div>

                    {!product.insuranceFeeConfirmed && product.insuranceFeeNote && (
                      <p className="flex items-start gap-2 text-xs text-body">
                        <Info className="size-4 shrink-0 fill-secondary mt-0.5" />
                        <span>{t(product.insuranceFeeNote)}</span>
                      </p>
                    )}

                    <div className="bg-white border border-lighter rounded-2xl overflow-hidden">
                      <div className="flex items-center gap-2 px-6 py-3.5 bg-primary-lighter/40">
                        <TableView className="size-4 fill-primary" />
                        <h4 className="text-sm font-medium text-darker">{locale === "am" ? "የክፍያ መርሃ ግብር" : "Amortization schedule"}</h4>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        <table className="w-full text-sm text-left">
                          <thead className="sticky top-0 bg-white text-darker">
                            <tr>
                              <th className="px-4 py-2.5 font-medium border-b border-lighter">{locale === "am" ? "ወር" : "Month"}</th>
                              <th className="px-4 py-2.5 font-medium border-b border-lighter">{locale === "am" ? "ክፍያ" : "Payment"}</th>
                              <th className="px-4 py-2.5 font-medium border-b border-lighter">{locale === "am" ? "ዋና ገንዘብ" : "Principal"}</th>
                              <th className="px-4 py-2.5 font-medium border-b border-lighter">{product.interestType === "reducing-balance" ? (locale === "am" ? "ወለድ" : "Interest") : (locale === "am" ? "ክፍያ" : "Charge")}</th>
                              <th className="px-4 py-2.5 font-medium border-b border-lighter">{locale === "am" ? "ቀሪ ሂሳብ" : "Balance"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.calculation.schedule.map((row) => (
                              <tr key={row.month} className="border-t border-lighter/60">
                                <td className="px-4 py-2 text-body">{row.month}</td>
                                <td className="px-4 py-2 text-darker font-medium">{row.payment.toLocaleString()}</td>
                                <td className="px-4 py-2 text-body">{row.principalPortion.toLocaleString()}</td>
                                <td className="px-4 py-2 text-body">{row.interestOrChargePortion.toLocaleString()}</td>
                                <td className="px-4 py-2 text-body">{row.remainingBalance.toLocaleString()}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                )}

                <p className="text-xs text-body">{t(DICT.common.estimateOnly)}</p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
