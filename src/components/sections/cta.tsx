"use client";

import Link from "next/link";
import { Section, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";

type CtaProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Cta({ gap = "none", className }: CtaProps) {
  const { t, locale } = useLocale();

  return (
    <Section gap={gap} className={className}>
      <SectionContent>
        <div className="container">
          <ScrollReveal direction="bottom">
            <div className="bg-darker p-8 sm:p-12 md:p-16 xl:p-20 flex flex-wrap items-center justify-between xl:gap-x-15 gap-y-7 rounded-[1.25rem]">
              <h2 className="text-white font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.27] text-pretty max-w-md">
                {locale === "am" ? "ዛሬ የሞኤንኮ ሳኮ አባል ይሁኑ" : "Become a Moenco SACCO member today"}
              </h2>
              <Button nativeButton={false} render={<Link href="/membership" />} size="xl" pill>{t(DICT.cta.becomeMember)}</Button>
            </div>
          </ScrollReveal>
        </div>
      </SectionContent>
    </Section>
  );
}
