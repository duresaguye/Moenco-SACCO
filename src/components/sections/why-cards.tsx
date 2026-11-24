"use client";

import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { UserGroup, Wallet, ShieldCheck, TrendUp } from "@/components/icons";
import { useLocale } from "@/i18n/locale-context";

type WhyCardsProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

const CARDS = [
  {
    icon: UserGroup,
    title: { en: "Member-owned & governed", am: "በአባላት ባለቤትነትና አስተዳደር" },
    description: { en: "Moenco SACCO is run by and for Moenco employees, with leadership elected from among members.", am: "ሞኤንኮ ሳኮ በሞኤንኮ ሰራተኞች የሚመራ ነው፤ መሪዎችም ከአባላት መካከል ይመረጣሉ።" },
  },
  {
    icon: Wallet,
    title: { en: "Payroll convenience", am: "በደመወዝ ቀላልነት" },
    description: { en: "Savings and loan repayments are deducted automatically — no manual payments to track.", am: "ቁጠባና የብድር ክፍያ ራስ-ሰር በደመወዝ ይቆረጣል — በእጅ መክፈል አያስፈልግም።" },
  },
  {
    icon: ShieldCheck,
    title: { en: "Transparent terms", am: "ግልጽ ውሎች" },
    description: { en: "Clear fees, rates, and eligibility rules for every savings and loan product we offer.", am: "ለሁሉም የቁጠባና ብድር አገልግሎቶቻችን ግልጽ ክፍያ፣ ወለድና ብቁነት መስፈርቶች።" },
  },
  {
    icon: TrendUp,
    title: { en: "Affordable credit", am: "ተመጣጣኝ ብድር" },
    description: { en: "Loan products priced for members, not for profit margins — including interest-free options.", am: "ለአባላት ተብሎ የተዘጋጀ ብድር እንጂ ለትርፍ አይደለም — ያለወለድ አማራጮችንም ያካትታል።" },
  },
];

export default function WhyCards({ gap = "default", className }: WhyCardsProps) {
  const { t, locale } = useLocale();

  return (
    <Section gap={gap} className={cn("bg-white", className)}>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-10 xl:column-9 2xl:column-8">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                  {locale === "am" ? "ለምን ሞኤንኮ ሳኮ" : "Why choose Moenco SACCO"}
                </h2>
                <p className="text-base xl:text-lg leading-relaxed text-body max-w-md mx-auto">
                  {locale === "am" ? "የማህበሩ ጥንካሬ ለአባላቱ ጥቅም ብቻ መቆሙ ነው።" : "A cooperative built around one priority: the financial wellbeing of its members."}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>

      <SectionContent>
        <div className="container">
          <div className="row gy-6">
            {CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="sm:column-6 lg:column-3">
                  <ScrollReveal className={cn("group border border-b-4 bg-white hover:bg-primary border-primary/50 transition-all p-6 rounded-2xl hover:border-primary cursor-default h-full", getDelayClass(index))}>
                    <div className="flex items-center justify-center size-13 bg-primary group-hover:bg-white text-white group-hover:text-primary rounded-xl mb-5">
                      <Icon className="size-6.5 fill-current" />
                    </div>
                    <h5 className="text-dark transition-colors group-hover:text-white font-semibold text-xl/relaxed mb-3">{t(card.title)}</h5>
                    <p className="text-body transition-colors group-hover:text-white/85 text-base/snug">{t(card.description)}</p>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
