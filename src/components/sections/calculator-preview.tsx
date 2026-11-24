"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";
import { LOAN_PRODUCTS, type LoanType } from "@/config/sacco-config";
import { calculateLoan } from "@/lib/loan-calculator";
import { ArrowLongRight } from "@/components/icons";

type CalculatorPreviewProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function CalculatorPreview({ gap = "default", className }: CalculatorPreviewProps) {
  const { t, locale } = useLocale();
  const [loanType, setLoanType] = useState<LoanType>("normal");
  const product = LOAN_PRODUCTS[loanType];

  const [amount, setAmount] = useState(50_000);
  const [months, setMonths] = useState(24);

  const clampedAmount = Math.min(Math.max(amount, product.minAmount), product.maxAmount);
  const clampedMonths = Math.min(Math.max(months, product.minMonths), product.maxMonths);

  const result = useMemo(
    () => calculateLoan({ loanType, amount: clampedAmount, months: clampedMonths }),
    [loanType, clampedAmount, clampedMonths]
  );

  const handleTypeChange = (next: LoanType) => {
    setLoanType(next);
    const nextProduct = LOAN_PRODUCTS[next];
    setAmount(Math.min(Math.max(amount, nextProduct.minAmount), nextProduct.maxAmount));
    setMonths(Math.min(Math.max(months, nextProduct.minMonths), nextProduct.maxMonths));
  };

  return (
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-8 xl:column-7">
              <ScrollReveal delay={100}>
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                  {locale === "am" ? "የብድር ክፍያዎን ይገምቱ" : "Estimate your loan repayment"}
                </h2>
                <p className="text-base xl:text-lg leading-relaxed text-body">
                  {locale === "am" ? "መጠንና ጊዜ ይምረጡ፣ ወርሃዊ ግምታዊ ክፍያ ወዲያው ይመልከቱ።" : "Pick an amount and term to see an instant monthly repayment estimate."}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>
      <SectionContent>
        <div className="container">
          <div className="row justify-center">
            <div className="lg:column-10 xl:column-8">
              <ScrollReveal delay={150} className="bg-white border border-lighter rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 lg:p-10">
                <div className="flex flex-wrap gap-2 mb-8">
                  {Object.values(LOAN_PRODUCTS).map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleTypeChange(p.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${loanType === p.id ? "bg-primary text-white" : "bg-primary-lighter text-darker hover:bg-primary/20"}`}
                    >
                      {t(p.name)}
                    </button>
                  ))}
                </div>

                <div className="row g-6 mb-8">
                  <div className="column-12 md:column-6">
                    <label className="flex justify-between text-sm font-medium text-darker mb-2">
                      <span>{locale === "am" ? "የብድር መጠን (ብር)" : "Loan amount (ETB)"}</span>
                      <span className="font-semibold">{clampedAmount.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min={product.minAmount}
                      max={product.maxAmount}
                      step={Math.max(1000, Math.round((product.maxAmount - product.minAmount) / 100))}
                      value={clampedAmount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full accent-primary"
                      aria-label={locale === "am" ? "የብድር መጠን" : "Loan amount"}
                    />
                    <div className="flex justify-between text-xs text-body mt-1">
                      <span>{product.minAmount.toLocaleString()}</span>
                      <span>{product.maxAmount.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="column-12 md:column-6">
                    <label className="flex justify-between text-sm font-medium text-darker mb-2">
                      <span>{locale === "am" ? "የክፍያ ጊዜ (ወራት)" : "Repayment term (months)"}</span>
                      <span className="font-semibold">{clampedMonths}</span>
                    </label>
                    <input
                      type="range"
                      min={product.minMonths}
                      max={product.maxMonths}
                      step={1}
                      value={clampedMonths}
                      onChange={(e) => setMonths(Number(e.target.value))}
                      className="w-full accent-primary"
                      aria-label={locale === "am" ? "የክፍያ ጊዜ" : "Repayment term"}
                    />
                    <div className="flex justify-between text-xs text-body mt-1">
                      <span>{product.minMonths}</span>
                      <span>{product.maxMonths}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-lighter rounded-xl p-6 grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-body mb-1">{locale === "am" ? "ወርሃዊ ክፍያ (ግምት)" : "Est. monthly repayment"}</div>
                    <div className="text-2xl font-bold text-primary">{(result.calculation?.monthlyRepayment ?? 0).toLocaleString()} ETB</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-body mb-1">{product.interestType === "reducing-balance" ? (locale === "am" ? "ጠቅላላ ወለድ" : "Total interest") : (locale === "am" ? "ጠቅላላ አገልግሎት ክፍያ" : "Total service charge")}</div>
                    <div className="text-2xl font-bold text-darker">{(result.calculation?.totalInterestOrServiceCharge ?? 0).toLocaleString()} ETB</div>
                  </div>
                </div>

                <p className="text-xs text-body mb-6">{t(DICT.common.estimateOnly)}</p>

                <Button nativeButton={false} render={<Link href="/loan-calculator" />} size="lg" icon={<ArrowLongRight />} full>
                  {t(DICT.cta.useCalculator)}
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
