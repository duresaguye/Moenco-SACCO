"use client";

import Link from "next/link";
import { Section, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";
import { Mobile, WalletSaving, Coins, TrendUp, FileCheck, ClipboadCheck, Bell, AppleStore, GooglePlayStore } from "@/components/icons";

type MobileAppPromoProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
  compact?: boolean;
};

const FEATURES = [
  { icon: WalletSaving, title: { en: "Check your savings", am: "ቁጠባዎን ይመልከቱ" } },
  { icon: Coins, title: { en: "View your shares", am: "ድርሻዎን ይመልከቱ" } },
  { icon: TrendUp, title: { en: "Check dividends", am: "ትርፍ ድርሻ ይመልከቱ" } },
  { icon: FileCheck, title: { en: "Apply for loans", am: "ለብድር ያመልክቱ" } },
  { icon: ClipboadCheck, title: { en: "Track repayments", am: "ክፍያ ይከታተሉ" } },
  { icon: Bell, title: { en: "Announcements & notifications", am: "ማስታወቂያና ማሳወቂያ ይቀበሉ" } },
];

export default function MobileAppPromo({ gap = "default", className, compact = false }: MobileAppPromoProps) {
  const { locale } = useLocale();

  return (
    <Section gap={gap} className={className}>
      <SectionContent>
        <div className="container">
          <ScrollReveal className="bg-darker rounded-[1.5rem] p-8 md:p-12 xl:p-16 relative overflow-hidden">
            <div className="row items-center gy-10">
              <div className="lg:column-7">
                <div className="size-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <Mobile className="size-7 fill-white" />
                </div>
                <h2 className="text-white font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.15] mb-5 max-w-lg">
                  {locale === "am" ? "ማህበርዎ በኪስዎ ውስጥ" : "Your SACCO, in your pocket"}
                </h2>
                <p className="text-white/75 text-base xl:text-lg leading-relaxed mb-8 max-w-lg">
                  {locale === "am"
                    ? "የሞባይል መተግበሪያችን ቁጠባዎን፣ ድርሻዎን፣ ብድርዎንና ክፍያዎን በማንኛውም ጊዜ እንዲከታተሉ ያስችልዎታል።"
                    : "Our mobile app lets you track savings, shares, loans, and repayments anytime, anywhere — and stay informed with instant announcements."}
                </p>
                {!compact && (
                  <div className="row g-5 mb-10 max-w-lg">
                    {FEATURES.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="column-6 flex items-center gap-3">
                          <span className="shrink-0 size-10 rounded-lg bg-white/10 flex items-center justify-center">
                            <Icon className="size-5 fill-primary-light" />
                          </span>
                          <span className="text-white text-sm font-medium">{locale === "am" ? feature.title.am : feature.title.en}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="flex flex-wrap gap-4">
                  <span className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 text-white/60 cursor-not-allowed" aria-disabled title={locale === "am" ? "በቅርብ ጊዜ ይመጣል" : "Coming soon"}>
                    <AppleStore className="size-6 fill-current" />
                    <span className="text-sm font-medium">App Store</span>
                  </span>
                  <span className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 text-white/60 cursor-not-allowed" aria-disabled title={locale === "am" ? "በቅርብ ጊዜ ይመጣል" : "Coming soon"}>
                    <GooglePlayStore className="size-6 fill-current" />
                    <span className="text-sm font-medium">Google Play</span>
                  </span>
                </div>
                {compact && (
                  <div className="pt-8">
                    <Button nativeButton={false} render={<Link href="/mobile-app" />} variant="outline" size="lg">
                      {locale === "am" ? "ተጨማሪ ይመልከቱ" : "Learn more"}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionContent>
    </Section>
  );
}
