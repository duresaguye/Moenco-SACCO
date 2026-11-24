"use client";

import Link from "next/link";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";
import { LOAN_PRODUCTS, GENERAL_LOAN_RULES, GUARANTOR_RULES, type LoanProductConfig } from "@/config/sacco-config";
import { Wallet, WalletNew, CalendarCheck, ArrowLongRight, CheckCircleFill } from "@/components/icons";
import { cn } from "@/lib/utils";

const ICONS = { normal: Wallet, material: WalletNew, holiday: CalendarCheck } as const;

function LoanSection({ product, index }: { product: LoanProductConfig; index: number }) {
  const { t, locale } = useLocale();
  const Icon = ICONS[product.id];

  return (
    <Section id={product.id} className={index % 2 === 1 ? "bg-primary-lighter/40" : ""}>
      <SectionContent>
        <div className="container">
          <div className={cn("row g-10 items-start", index % 2 === 1 ? "xl:flex-row-reverse" : "")}>
            <div className="xl:column-5">
              <ScrollReveal delay={100}>
                <div className="size-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <Icon className="size-8 fill-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-darker mb-4">{t(product.name)}</h2>
                <p className="text-lg/relaxed text-body mb-6">{t(product.description)}</p>
                {product.applicationWindow && <p className="text-sm font-medium text-primary mb-1">{t(product.applicationWindow)}</p>}
                {product.mustBeRepaidBy && <p className="text-sm font-medium text-body mb-6">{t(product.mustBeRepaidBy)}</p>}
                <Button nativeButton={false} render={<Link href={`/loan-calculator?type=${product.id}`} />} icon={<ArrowLongRight />} size="lg">
                  {t(DICT.cta.useCalculator)}
                </Button>
              </ScrollReveal>
            </div>
            <div className="xl:column-7">
              <ScrollReveal delay={200} className="bg-white rounded-2xl border border-lighter p-8">
                <div className="row g-6 mb-6">
                  <div className="column-6">
                    <div className="text-xs uppercase tracking-wide text-body mb-1">{locale === "am" ? "ከፍተኛ መጠን" : "Maximum amount"}</div>
                    <div className="text-xl font-bold text-darker">{product.maxAmount.toLocaleString()} ETB</div>
                  </div>
                  <div className="column-6">
                    <div className="text-xs uppercase tracking-wide text-body mb-1">{locale === "am" ? "ከፍተኛ የክፍያ ጊዜ" : "Max repayment period"}</div>
                    <div className="text-xl font-bold text-darker">{product.maxMonths} {locale === "am" ? "ወራት" : "months"}</div>
                  </div>
                  <div className="column-6">
                    <div className="text-xs uppercase tracking-wide text-body mb-1">{product.interestType === "reducing-balance" ? (locale === "am" ? "ወለድ (በዓመት)" : "Interest (p.a.)") : (locale === "am" ? "የአገልግሎት ክፍያ" : "Service charge")}</div>
                    <div className="text-xl font-bold text-darker">
                      {product.interestType === "reducing-balance" ? `${(product.annualInterestRate! * 100).toFixed(0)}%` : `${(product.serviceChargeRate! * 100).toFixed(0)}% (${locale === "am" ? "ያለወለድ" : "interest-free"})`}
                    </div>
                  </div>
                  <div className="column-6">
                    <div className="text-xs uppercase tracking-wide text-body mb-1">{locale === "am" ? "ዝቅተኛ የአባልነት ጊዜ" : "Minimum membership"}</div>
                    <div className="text-xl font-bold text-darker">{product.minMembershipMonths} {locale === "am" ? "ወራት" : "months"}</div>
                  </div>
                </div>
                <div className="border-t border-lighter pt-6">
                  <h5 className="font-semibold text-darker mb-3">{locale === "am" ? "ብቁነትና ተያዥ" : "Eligibility & guarantor requirements"}</h5>
                  <ul className="flex flex-col gap-2.5 text-sm text-body">
                    <li className="flex gap-2.5"><CheckCircleFill className="size-4.5 shrink-0 fill-primary mt-0.5" /><span>{locale === "am" ? `ወርሃዊ ቅናሽ ከደመወዝ ${Math.round(product.salaryRepaymentCapFraction * 100)}% መብለጥ የለበትም።` : `Monthly deduction cannot exceed ${Math.round(product.salaryRepaymentCapFraction * 100)}% of salary.`}</span></li>
                    <li className="flex gap-2.5"><CheckCircleFill className="size-4.5 shrink-0 fill-primary mt-0.5" /><span>{locale === "am" ? "ቀድሞ ለቀው የተቀላቀሉ አባላት 12 ወር አባልነት ያስፈልጋቸዋል።" : `Members who resigned and rejoined need ${product.rejoinedMembershipMonths} months of renewed membership.`}</span></li>
                    {product.maxMultipleOfSavings && (
                      <li className="flex gap-2.5"><CheckCircleFill className="size-4.5 shrink-0 fill-primary mt-0.5" /><span>{locale === "am" ? `ከፍተኛ ብድር ከቁጠባ ${product.maxMultipleOfSavings} እጥፍ ነው።` : `Maximum loan is ${product.maxMultipleOfSavings}× your savings balance.`}</span></li>
                    )}
                    <li className="flex gap-2.5"><CheckCircleFill className="size-4.5 shrink-0 fill-primary mt-0.5" /><span>{locale === "am" ? "ተያዥ ያስፈልጋል፤ ዋስትና አማራጭ ነው።" : "A guarantor is required; collateral is optional."}</span></li>
                    {!product.insuranceFeeConfirmed && product.insuranceFeeNote && (
                      <li className="flex gap-2.5 text-secondary"><CheckCircleFill className="size-4.5 shrink-0 fill-secondary mt-0.5" /><span>{t(product.insuranceFeeNote)}</span></li>
                    )}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}

export default function LoansContent() {
  const { t, locale } = useLocale();
  const products = Object.values(LOAN_PRODUCTS);

  return (
    <>
      {products.map((product, index) => (
        <LoanSection key={product.id} product={product} index={index} />
      ))}

      <Section>
        <SectionContent>
          <div className="container">
            <SectionHead>
              <div className="row justify-center text-center">
                <div className="lg:column-7">
                  <ScrollReveal delay={100}>
                    <h2 className="text-darker font-bold text-3xl lg:text-4xl leading-tight mb-4">
                      {locale === "am" ? "አጠቃላይ ደንቦች" : "General rules"}
                    </h2>
                  </ScrollReveal>
                </div>
              </div>
            </SectionHead>
            <div className="row g-6 justify-center mb-16">
              {[GENERAL_LOAN_RULES.cutoffRule, GENERAL_LOAN_RULES.earlyRepayment, GENERAL_LOAN_RULES.resignationRecovery].map((rule, index) => (
                <div key={index} className="lg:column-4">
                  <ScrollReveal delay={100 + index * 50} className="h-full bg-primary-lighter/40 rounded-2xl p-6">
                    <p className="text-sm/relaxed text-darker">{t(rule)}</p>
                  </ScrollReveal>
                </div>
              ))}
            </div>

            <SectionHead>
              <div className="row justify-center text-center">
                <div className="lg:column-7">
                  <ScrollReveal delay={100}>
                    <h2 className="text-darker font-bold text-3xl lg:text-4xl leading-tight mb-4">
                      {locale === "am" ? "ስለ ተያዥ" : "About guarantors"}
                    </h2>
                  </ScrollReveal>
                </div>
              </div>
            </SectionHead>
            <div className="row g-6 justify-center">
              {[GUARANTOR_RULES.membersOnly, GUARANTOR_RULES.crossGuarantee, GUARANTOR_RULES.normalLoanRestriction].map((rule, index) => (
                <div key={index} className="lg:column-4">
                  <ScrollReveal delay={100 + index * 50} className="h-full bg-primary-lighter/40 rounded-2xl p-6">
                    <p className="text-sm/relaxed text-darker">{t(rule)}</p>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
