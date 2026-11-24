"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { WalletSaving, Coins } from "@/components/icons";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";
import { SAVINGS_RULES, SHARES, MEMBERSHIP_FEES } from "@/config/sacco-config";

type ServicesFeaturedProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function ServicesFeatured({ gap = "default", className }: ServicesFeaturedProps) {
  const { t, locale } = useLocale();

  return (
    <Section gap={gap} className={cn("bg-white", className)}>
      <SectionContent>
        <div className="container">
          <div className="justify-between xl:flex-row-reverse row items-center gy-8">
            <div className="xl:column-6">
              <ScrollReveal delay={300} className="bg-primary-lighter rounded-2xl p-10 xl:p-14 h-full flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border-b-4 border-primary">
                    <div className="text-3xl font-bold text-primary mb-1">{SAVINGS_RULES.nonManagement.minPercentOfSalary}–{SAVINGS_RULES.nonManagement.maxPercentOfSalary}%</div>
                    <div className="text-sm text-body">{locale === "am" ? "ከደመወዝ ቁጠባ" : "of salary saved"}</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-b-4 border-secondary">
                    <div className="text-3xl font-bold text-secondary mb-1">+{SAVINGS_RULES.management.annualIncreasePercent}%</div>
                    <div className="text-sm text-body">{locale === "am" ? "ዓመታዊ ጭማሪ (አመራር)" : "annual increase (management)"}</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-b-4 border-primary">
                    <div className="text-3xl font-bold text-primary mb-1">{MEMBERSHIP_FEES.pricePerShare.value.toLocaleString()}</div>
                    <div className="text-sm text-body">{locale === "am" ? "ብር በድርሻ" : "ETB per share"}</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-b-4 border-secondary">
                    <div className="text-3xl font-bold text-secondary mb-1">{MEMBERSHIP_FEES.minimumShares.value}+</div>
                    <div className="text-sm text-body">{locale === "am" ? "ዝቅተኛ ድርሻ" : "shares minimum"}</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="xl:column-6">
              <ScrollReveal delay={100} className="text-block xl:pe-15">
                <div className="rounded-full bg-primary/16 size-15 xl:size-18 flex justify-center items-center mb-6">
                  <WalletSaving className="size-8 xl:size-10 fill-primary" />
                </div>
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                  {locale === "am" ? "ቁጠባ የእርስዎ ልማድ ይሁን" : "Savings that build your future"}
                </h2>
                <p className="text-base xl:text-lg leading-relaxed text-body mb-2.5">{t(SAVINGS_RULES.nonManagement.description)}</p>
                <p className="text-base xl:text-lg leading-relaxed text-body">{t(SAVINGS_RULES.management.description)}</p>
                <div className="pt-7 xl:pt-11">
                  <Button nativeButton={false} render={<Link href="/savings" />} className="uppercase" size="lg">{t(DICT.cta.learnMore)}</Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>
      <SectionContent gap="large">
        <div className="container">
          <div className="justify-between items-center row gy-8">
            <div className="xl:column-6">
              <ScrollReveal delay={100} className="bg-darker rounded-2xl p-10 xl:p-14 h-full flex flex-col justify-center text-white">
                <Coins className="size-10 fill-secondary mb-6" />
                <blockquote className="text-xl xl:text-2xl leading-snug mb-4">{t(SHARES.dividendBasis)}</blockquote>
                <p className="text-sm text-white/60">{locale === "am" ? "ድርሻ ሊወጣ አይችልም፤ ባለቤትነት ብቻ ነው የሚተላለፈው።" : "Shares are not withdrawable — ownership is held for the life of your membership."}</p>
              </ScrollReveal>
            </div>
            <div className="xl:column-6">
              <ScrollReveal delay={300} className="text-block xl:ps-15">
                <div className="rounded-full bg-primary/16 size-15 xl:size-18 flex justify-center items-center mb-6">
                  <Coins className="size-8 xl:size-10 fill-primary" />
                </div>
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                  {locale === "am" ? "ድርሻ ባለቤትነትና ትርፍ ድርሻ" : "Share ownership & dividends"}
                </h2>
                <p className="text-base xl:text-lg leading-relaxed text-body">
                  {locale === "am"
                    ? `እያንዳንዱ አባል ቢያንስ ${MEMBERSHIP_FEES.minimumShares.value} ድርሻዎች በ${MEMBERSHIP_FEES.pricePerShare.value.toLocaleString()} ብር ይገዛል፣ ይህም የማህበሩ ባለቤትነት ድርሻ ይሰጣል። ትርፍ ድርሻ በየዓመቱ በጠቅላላ ጉባኤ ተወስኖ ይከፈላል።`
                    : `Every member purchases at least ${MEMBERSHIP_FEES.minimumShares.value} shares at ${MEMBERSHIP_FEES.pricePerShare.value.toLocaleString()} ETB each, giving you a real ownership stake in the cooperative. Dividends are declared annually by the General Assembly.`}
                </p>
                <div className="pt-7 xl:pt-11">
                  <Button nativeButton={false} render={<Link href="/savings#shares" />} className="uppercase" size="lg" variant="outline-dark">{t(DICT.cta.learnMore)}</Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
