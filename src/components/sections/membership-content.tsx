"use client";

import Link from "next/link";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { CheckCircleFill } from "@/components/icons";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";
import { MEMBERSHIP_FEES } from "@/config/sacco-config";
import { cn } from "@/lib/utils";

const ELIGIBILITY = [
  { en: "You are a current Moenco employee.", am: "የአሁኑ የሞኤንኮ ሰራተኛ ነዎት።" },
  { en: "You are willing to save regularly through payroll deduction.", am: "በደመወዝ ተቆራጭ መደበኛ ቁጠባ ለማድረግ ፈቃደኛ ነዎት።" },
  { en: "You can purchase the minimum required shares.", am: "ዝቅተኛውን የሚያስፈልግ ድርሻ መግዛት ይችላሉ።" },
];

const STEPS = [
  { en: "Collect the membership application form from the SACCO office.", am: "የአባልነት ማመልከቻ ቅጽ ከማህበሩ ጽሕፈት ቤት ይውሰዱ።" },
  { en: "Complete the form and pay the registration and application fees.", am: "ቅጹን ይሙሉ እና የምዝገባና የማመልከቻ ክፍያ ይክፈሉ።" },
  { en: "Purchase the minimum required shares.", am: "ዝቅተኛውን የሚያስፈልግ ድርሻ ይግዙ።" },
  { en: "Choose your savings percentage (or initial amount, for management staff) for payroll deduction.", am: "ለደመወዝ ተቆራጭ የቁጠባ መቶኛ (ወይም ለአመራር ሰራተኞች የመጀመሪያ መጠን) ይምረጡ።" },
  { en: "Your application is reviewed and approved by the SACCO.", am: "ማመልከቻዎ በማህበሩ ተገምግሞ ይፀድቃል።" },
  { en: "Payroll deduction begins and you are officially a member.", am: "የደመወዝ ተቆራጭ ይጀምራል፣ በይፋም አባል ይሆናሉ።" },
];

const FEES = [
  { label: { en: "Registration fee", am: "የምዝገባ ክፍያ" }, item: MEMBERSHIP_FEES.registration, unit: "ETB" },
  { label: { en: "Application fee", am: "የማመልከቻ ክፍያ" }, item: MEMBERSHIP_FEES.application, unit: "ETB" },
  { label: { en: "Annual charity contribution", am: "ዓመታዊ የበጎ አድራጎት መዋጮ" }, item: MEMBERSHIP_FEES.annualCharity, unit: "ETB" },
  { label: { en: "Annual retirement contribution", am: "ዓመታዊ የጡረታ መዋጮ" }, item: MEMBERSHIP_FEES.annualRetirement, unit: "ETB" },
  { label: { en: "Minimum shares (at 1,000 ETB each)", am: "ዝቅተኛ ድርሻ (እያንዳንዱ 1,000 ብር)" }, item: MEMBERSHIP_FEES.minimumShares, unit: "" },
  { label: { en: "Minimum share capital", am: "ዝቅተኛ የድርሻ ካፒታል" }, item: MEMBERSHIP_FEES.minimumShareCapital, unit: "ETB" },
];

export default function MembershipContent() {
  const { t, locale } = useLocale();

  return (
    <>
      <Section gap="top">
        <SectionContent>
          <div className="container">
            <div className="row justify-center text-center mb-14">
              <div className="lg:column-8">
                <ScrollReveal delay={100}>
                  <h2 className="text-darker font-bold text-3xl lg:text-4xl leading-tight mb-5">
                    {locale === "am" ? "ማን ማመልከት ይችላል" : "Who can become a member"}
                  </h2>
                  <p className="text-lg/relaxed text-body">
                    {locale === "am"
                      ? "ማንኛውም የአሁኑ የሞኤንኮ ሰራተኛ ከዚህ በታች ያሉትን መስፈርቶች ካሟላ ለአባልነት ማመልከት ይችላል።"
                      : "Any current Moenco employee who meets the requirements below is eligible to apply for membership."}
                  </p>
                </ScrollReveal>
              </div>
            </div>
            <div className="row g-6 mb-16">
              {ELIGIBILITY.map((item, index) => (
                <div key={index} className="lg:column-4">
                  <ScrollReveal className={cn("h-full flex gap-4 p-6 rounded-2xl bg-primary-lighter/50", getDelayClass(index))}>
                    <CheckCircleFill className="size-6 shrink-0 fill-primary" />
                    <p className="text-base text-darker font-medium">{t(item)}</p>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-primary-lighter/40">
        <SectionContent>
          <div className="container">
            <SectionHead>
              <div className="row justify-center text-center">
                <div className="lg:column-7">
                  <ScrollReveal delay={100}>
                    <h2 className="text-darker font-bold text-3xl lg:text-4xl leading-tight mb-4">
                      {locale === "am" ? "የመግቢያ ክፍያዎች" : "Fees to join"}
                    </h2>
                    <p className="text-base text-body">
                      {locale === "am" ? "ሁሉም ክፍያዎች በኢትዮጵያ ብር ናቸው።" : "All figures are in Ethiopian Birr (ETB)."}
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            </SectionHead>
            <div className="row justify-center">
              <div className="lg:column-9">
                <ScrollReveal delay={150} className="bg-white rounded-2xl border border-lighter overflow-hidden">
                  {FEES.map((fee, index) => (
                    <div key={index} className={cn("flex items-center justify-between gap-4 px-6 py-4", index % 2 === 0 ? "bg-primary-lighter/30" : "bg-white")}>
                      <span className="text-darker font-medium">{t(fee.label)}</span>
                      <span className="flex items-center gap-2">
                        <span className="font-bold text-primary">{fee.item.value.toLocaleString()} {fee.unit}</span>
                        {!fee.item.confirmed && (
                          <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">{locale === "am" ? "ይረጋገጣል" : "To confirm"}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </ScrollReveal>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <div className="container">
            <SectionHead>
              <div className="row justify-center text-center">
                <div className="lg:column-7">
                  <ScrollReveal delay={100}>
                    <h2 className="text-darker font-bold text-3xl lg:text-4xl leading-tight mb-4">
                      {locale === "am" ? "የማመልከቻ ሂደት" : "Step-by-step application process"}
                    </h2>
                  </ScrollReveal>
                </div>
              </div>
            </SectionHead>
            <div className="row justify-center">
              <div className="lg:column-9">
                <ScrollReveal delay={150} className="flex flex-col gap-5">
                  {STEPS.map((step, index) => (
                    <div key={index} className="flex gap-5 items-start">
                      <span className="shrink-0 size-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">{index + 1}</span>
                      <p className="text-base/relaxed text-body pt-2">{t(step)}</p>
                    </div>
                  ))}
                </ScrollReveal>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-darker" gap="bottom">
        <SectionContent>
          <div className="container">
            <div className="row justify-center text-center">
              <div className="lg:column-8">
                <ScrollReveal delay={100}>
                  <h2 className="text-white font-bold text-3xl lg:text-4xl mb-5">
                    {locale === "am" ? "ለመቀላቀል ዝግጁ ነዎት?" : "Ready to join?"}
                  </h2>
                  <p className="text-white/75 text-lg/relaxed mb-8">
                    {locale === "am"
                      ? "ይህ ገጽ መረጃ ለማሳወቅ ብቻ ነው — ማመልከቻዎን ለማስገባት የማህበሩን ጽሕፈት ቤት ያነጋግሩ።"
                      : "This page is informational only — to submit an application, please contact the SACCO office directly."}
                  </p>
                  <Button nativeButton={false} render={<Link href="/contact" />} size="xl" pill>{t(DICT.cta.contactUs)}</Button>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
