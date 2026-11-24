"use client";

import { cn } from "@/lib/utils";
import { Section, SectionContent } from "@/components/layout/section";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { CountUp } from "@/hooks/useAnimatedCounter";
import { useLocale } from "@/i18n/locale-context";
import { MEMBERSHIP_FEES, LOAN_PRODUCTS, BRANCHES } from "@/config/sacco-config";

type WhyProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
  stats?: boolean;
};

export default function Why({ gap = "default", stats = true, className }: WhyProps) {
  const { locale } = useLocale();

  const STATS = [
    {
      end: MEMBERSHIP_FEES.pricePerShare.value,
      prefix: "",
      suffix: "",
      title: { en: "ETB per share", am: "ብር በድርሻ" },
      description: { en: "Fixed price for every SACCO share you purchase.", am: "ለሚገዙት እያንዳንዱ ድርሻ ቋሚ ዋጋ።" },
    },
    {
      end: MEMBERSHIP_FEES.minimumShareCapital.value,
      prefix: "",
      suffix: "",
      title: { en: "ETB minimum share capital", am: "ብር ዝቅተኛ የካፒታል ድርሻ" },
      description: { en: "The minimum share capital required to become a member.", am: "አባል ለመሆን የሚያስፈልገው ዝቅተኛ የድርሻ ካፒታል።" },
    },
    {
      end: LOAN_PRODUCTS.normal.maxAmount,
      prefix: "",
      suffix: "",
      title: { en: "ETB maximum Normal Loan", am: "ብር ከፍተኛ መደበኛ ብድር" },
      description: { en: "The ceiling for a Normal Loan, repaid over up to 84 months.", am: "የመደበኛ ብድር ከፍተኛ ጣሪያ፣ እስከ 84 ወር ድረስ ይከፈላል።" },
    },
    {
      end: BRANCHES.length,
      prefix: "",
      suffix: "",
      title: { en: "branches nationwide", am: "ቅርንጫፎች በመላ ሀገሪቱ" },
      description: { en: "Serving Moenco employees across Ethiopia.", am: "በመላው ኢትዮጵያ የሞኤንኮ ሰራተኞችን እናገለግላለን።" },
    },
  ];

  return (
    <Section gap={gap} className={className}>
      <SectionContent>
        <div className="container">
          <div className="row justify-center text-center">
            <div className="lg:column-8">
              <ScrollReveal delay={100}>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl leading-[1.167] font-bold text-darker mb-5">
                  {locale === "am" ? "ስለ ማህበራችን" : "About the Cooperative"}
                </h2>
                <p className="text-lg/relaxed text-body text-pretty">
                  {locale === "am"
                    ? "ሞኤንኮ ሳኮ በሞኤንኮ ሰራተኞች ባለቤትነት የተያዘ፣ ለአባላት ጥቅም ብቻ የሚሰራ የቁጠባና ብድር ህብረት ስራ ማህበር ነው። ቁጠባና የብድር ክፍያ በወርሃዊ ደመወዝ ተቆራጭ ይፈጸማል፣ የአባላት ገንዘብም በዘመን ባንክ ይያዛል።"
                    : "Moenco SACCO is a workplace cooperative owned and governed by Moenco employees, for Moenco employees. Savings and loan repayments are deducted directly through payroll each month, and member funds are held with our banking partner, Zemen Bank."}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>
      {stats && (
        <SectionContent>
          <div className="container">
            <div className="justify-between row gy-6">
              {STATS.map((item, index) => (
                <div key={index} className="sm:column-6 lg:column-3">
                  <ScrollReveal className={cn("group border border-b-4 bg-white hover:bg-primary border-primary/50 transition-all p-6 rounded-2xl hover:border-primary hover:scale-105 cursor-default h-full", getDelayClass(index))}>
                    <div className="text-darker transition-colors group-hover:text-white font-semibold text-4xl/[1.1] mb-5">
                      <CountUp end={item.end} prefix={item.prefix} suffix={item.suffix} />
                    </div>
                    <h5 className="text-dark transition-colors group-hover:text-white font-semibold text-lg/relaxed mb-3">{locale === "am" ? item.title.am : item.title.en}</h5>
                    <p className="text-body transition-colors group-hover:text-white/85 text-sm/snug">{locale === "am" ? item.description.am : item.description.en}</p>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </SectionContent>
      )}
    </Section>
  );
}
