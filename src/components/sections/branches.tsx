"use client";

import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { Building } from "@/components/icons";
import { useLocale } from "@/i18n/locale-context";
import { BRANCHES } from "@/config/sacco-config";
import { cn } from "@/lib/utils";

type BranchesProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Branches({ gap = "default", className }: BranchesProps) {
  const { t, locale } = useLocale();

  return (
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-7">
              <ScrollReveal delay={100}>
                <h2 className="text-darker font-bold text-3xl lg:text-4xl leading-[1.166] mb-4">
                  {locale === "am" ? "ቅርንጫፎቻችን" : "Our Branches"}
                </h2>
                <p className="text-base leading-relaxed text-body">
                  {locale === "am" ? "አድራሻና ስልክ ቁጥሮች እስኪረጋገጡ ድረስ ለጊዜው ባዶ ናቸው።" : "Addresses and phone numbers below are placeholders pending confirmation from each branch."}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>
      <SectionContent>
        <div className="container">
          <div className="row g-6">
            {BRANCHES.map((branch, index) => (
              <div key={branch.id} className="sm:column-6 lg:column-4">
                <ScrollReveal className={cn("h-full p-6 rounded-2xl border border-lighter bg-white", getDelayClass(index))}>
                  <div className="size-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Building className="size-5 fill-primary" />
                  </div>
                  <h5 className="font-semibold text-darker mb-2">{t(branch.name)}</h5>
                  <p className="text-sm text-body mb-1">{t(branch.address)}</p>
                  <p className="text-sm text-body">{branch.phone}</p>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
