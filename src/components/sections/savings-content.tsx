"use client";

import { useMemo, useState } from "react";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { WalletSaving, Coins, ShieldCheck } from "@/components/icons";
import { useLocale } from "@/i18n/locale-context";
import { SAVINGS_RULES, SHARES, MEMBERSHIP_FEES } from "@/config/sacco-config";
import { previewSavings } from "@/lib/loan-calculator";
import { DICT } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

export default function SavingsContent() {
  const { t, locale } = useLocale();

  return (
    <>
      <Section gap="top">
        <SectionContent>
          <div className="container">
            <div className="row g-8">
              <div className="lg:column-6">
                <ScrollReveal delay={100} className="h-full bg-primary-lighter/50 rounded-2xl p-8 lg:p-10">
                  <div className="size-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                    <WalletSaving className="size-7 fill-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-darker mb-4">
                    {locale === "am" ? "ለአመራር ያልሆኑ ሰራተኞች" : "Non-management employees"}
                  </h3>
                  <p className="text-base/relaxed text-body mb-4">{t(SAVINGS_RULES.nonManagement.description)}</p>
                  <ul className="text-sm text-body flex flex-col gap-2">
                    <li className="flex justify-between"><span>{locale === "am" ? "ዝቅተኛ መቶኛ" : "Minimum percentage"}</span><span className="font-semibold text-darker">{SAVINGS_RULES.nonManagement.minPercentOfSalary}%</span></li>
                    <li className="flex justify-between"><span>{locale === "am" ? "ከፍተኛ መቶኛ" : "Maximum percentage"}</span><span className="font-semibold text-darker">{SAVINGS_RULES.nonManagement.maxPercentOfSalary}%</span></li>
                  </ul>
                </ScrollReveal>
              </div>
              <div className="lg:column-6">
                <ScrollReveal delay={200} className="h-full bg-primary-lighter/50 rounded-2xl p-8 lg:p-10">
                  <div className="size-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                    <WalletSaving className="size-7 fill-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-darker mb-4">
                    {locale === "am" ? "ለአመራር ሰራተኞች" : "Management employees"}
                  </h3>
                  <p className="text-base/relaxed text-body mb-4">{t(SAVINGS_RULES.management.description)}</p>
                  <ul className="text-sm text-body flex flex-col gap-2">
                    <li className="flex justify-between"><span>{locale === "am" ? "ዓመታዊ ጭማሪ" : "Annual increase"}</span><span className="font-semibold text-darker">+{SAVINGS_RULES.management.annualIncreasePercent}%</span></li>
                    <li className="flex justify-between"><span>{locale === "am" ? "ወር" : "Month"}</span><span className="font-semibold text-darker">{t(SAVINGS_RULES.management.increaseMonth)}</span></li>
                  </ul>
                </ScrollReveal>
              </div>
            </div>
            <ScrollReveal delay={250} className="mt-8 bg-secondary/10 border border-secondary/30 rounded-xl p-5 text-sm text-darker">
              {t(SAVINGS_RULES.frequencyNote)} <span className="font-semibold">({t(DICT.common.toConfirm)})</span>
            </ScrollReveal>
          </div>
        </SectionContent>
      </Section>

      <Section id="shares" className="bg-primary-lighter/40">
        <SectionContent>
          <div className="container">
            <SectionHead>
              <div className="row justify-center text-center">
                <div className="lg:column-7">
                  <ScrollReveal delay={100}>
                    <h2 className="text-darker font-bold text-3xl lg:text-4xl leading-tight mb-4">
                      {locale === "am" ? "የድርሻ ባለቤትነት" : "Share ownership"}
                    </h2>
                  </ScrollReveal>
                </div>
              </div>
            </SectionHead>
            <div className="row g-6 justify-center">
              <div className="sm:column-6 lg:column-3">
                <ScrollReveal delay={100} className="h-full text-center bg-white rounded-2xl p-6 border-b-4 border-primary">
                  <Coins className="size-8 fill-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-darker mb-1">{MEMBERSHIP_FEES.pricePerShare.value.toLocaleString()} ETB</div>
                  <div className="text-sm text-body">{locale === "am" ? "ዋጋ በድርሻ" : "Price per share"}</div>
                </ScrollReveal>
              </div>
              <div className="sm:column-6 lg:column-3">
                <ScrollReveal delay={150} className="h-full text-center bg-white rounded-2xl p-6 border-b-4 border-primary">
                  <Coins className="size-8 fill-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-darker mb-1">{SHARES.minimumShares}</div>
                  <div className="text-sm text-body">{locale === "am" ? "ዝቅተኛ የድርሻ ብዛት" : "Minimum shares"}</div>
                </ScrollReveal>
              </div>
              <div className="sm:column-6 lg:column-3">
                <ScrollReveal delay={200} className="h-full text-center bg-white rounded-2xl p-6 border-b-4 border-secondary">
                  <ShieldCheck className="size-8 fill-secondary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-darker mb-1">{locale === "am" ? "አይወጣም" : "Not withdrawable"}</div>
                  <div className="text-sm text-body">{locale === "am" ? "የድርሻ ገደብ" : "Share restriction"}</div>
                </ScrollReveal>
              </div>
            </div>
            <ScrollReveal delay={250} className="row justify-center mt-10">
              <div className="lg:column-8 text-center">
                <p className="text-base/relaxed text-body">{t(SHARES.dividendBasis)}</p>
              </div>
            </ScrollReveal>
          </div>
        </SectionContent>
      </Section>

      <SavingsPreview />
    </>
  );
}

function SavingsPreview() {
  const { t, locale } = useLocale();
  const [isManagement, setIsManagement] = useState(false);
  const [salary, setSalary] = useState(15_000);
  const [percent, setPercent] = useState(10);
  const [initialAmount, setInitialAmount] = useState(1_500);
  const [years, setYears] = useState(5);

  const result = useMemo(
    () =>
      previewSavings({
        isManagement,
        monthlySalary: salary,
        savingsPercent: percent,
        initialAmount,
        years,
      }),
    [isManagement, salary, percent, initialAmount, years]
  );

  return (
    <Section>
      <SectionContent>
        <div className="container">
          <SectionHead>
            <div className="row justify-center text-center">
              <div className="lg:column-7">
                <ScrollReveal delay={100}>
                  <h2 className="text-darker font-bold text-3xl lg:text-4xl leading-tight mb-4">
                    {locale === "am" ? "የቁጠባ ግምት" : "Savings preview"}
                  </h2>
                  <p className="text-base text-body">
                    {locale === "am" ? "ይህ የተገመተ የመዋጮ ድምር ብቻ ነው — ትርፍ ድርሻ ዋስትና አይሰጥም።" : "This projects your contributed principal only — it does not assume or promise any dividend."}
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </SectionHead>
          <div className="row justify-center">
            <div className="lg:column-8">
              <ScrollReveal delay={150} className="bg-white border border-lighter rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8">
                <div className="flex gap-2 mb-6">
                  <button type="button" onClick={() => setIsManagement(false)} className={cn("px-4 py-2 rounded-full text-sm font-medium", !isManagement ? "bg-primary text-white" : "bg-primary-lighter text-darker")}>
                    {locale === "am" ? "አመራር ያልሆነ" : "Non-management"}
                  </button>
                  <button type="button" onClick={() => setIsManagement(true)} className={cn("px-4 py-2 rounded-full text-sm font-medium", isManagement ? "bg-primary text-white" : "bg-primary-lighter text-darker")}>
                    {locale === "am" ? "አመራር" : "Management"}
                  </button>
                </div>
                <div className="row g-5 mb-6">
                  <div className="column-12 sm:column-6">
                    <label className="block text-sm font-medium text-darker mb-2">{locale === "am" ? "ወርሃዊ ደመወዝ (ብር)" : "Monthly salary (ETB)"}</label>
                    <input type="number" min={1} value={salary} onChange={(e) => setSalary(Number(e.target.value))} className="border border-lighter rounded-lg px-4 py-2.5 w-full" />
                  </div>
                  {isManagement ? (
                    <div className="column-12 sm:column-6">
                      <label className="block text-sm font-medium text-darker mb-2">{locale === "am" ? "የመጀመሪያ ወርሃዊ ቁጠባ (ብር)" : "Initial monthly savings (ETB)"}</label>
                      <input type="number" min={1} value={initialAmount} onChange={(e) => setInitialAmount(Number(e.target.value))} className="border border-lighter rounded-lg px-4 py-2.5 w-full" />
                    </div>
                  ) : (
                    <div className="column-12 sm:column-6">
                      <label className="block text-sm font-medium text-darker mb-2">{locale === "am" ? "የቁጠባ መቶኛ (5–50%)" : "Savings percentage (5–50%)"}</label>
                      <input type="number" min={5} max={50} value={percent} onChange={(e) => setPercent(Number(e.target.value))} className="border border-lighter rounded-lg px-4 py-2.5 w-full" />
                    </div>
                  )}
                  <div className="column-12">
                    <label className="block text-sm font-medium text-darker mb-2">{locale === "am" ? "ዓመታት" : "Years"}</label>
                    <input type="range" min={1} max={20} value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-primary" />
                    <div className="text-sm text-body mt-1">{years} {locale === "am" ? "ዓመታት" : "years"}</div>
                  </div>
                </div>
                {result.issues.length > 0 ? (
                  <p className="text-sm text-danger">{t(result.issues[0].message)}</p>
                ) : (
                  <div className="bg-primary-lighter rounded-xl p-6 grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-body mb-1">{locale === "am" ? "የዓመት 1 ወርሃዊ ቁጠባ" : "Year 1 monthly savings"}</div>
                      <div className="text-2xl font-bold text-primary">{result.monthlySavingsYear1.toLocaleString()} ETB</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-body mb-1">{locale === "am" ? `የ${years} ዓመት ድምር ቁጠባ` : `Total saved over ${years} years`}</div>
                      <div className="text-2xl font-bold text-darker">{result.projectedTotalSaved.toLocaleString()} ETB</div>
                    </div>
                  </div>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
