"use client";

import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { GOVERNANCE_ROLES } from "@/config/sacco-config";
import { cn } from "@/lib/utils";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";

type TeamProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Team({ gap = "default", className }: TeamProps) {
  const { t, locale } = useLocale();

  return (
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-9 xl:column-8 2xl:column-7">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                  {locale === "am" ? "የማህበሩ አስተዳደር መዋቅር" : "Governance Structure"}
                </h2>
                <p className="text-base xl:text-lg leading-relaxed text-body">
                  {locale === "am"
                    ? "ከዚህ በታች ያሉት ስሞችና ፎቶዎች ቦታ ያዥ ናቸው — በእውነተኛ የማህበሩ የስራ ሀላፊዎች ይተኩ።"
                    : "Names and photographs below are editable placeholders — replace with the SACCO's actual office holders."}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>
      <SectionContent>
        <div className="container">
          <div className="row g-6">
            {GOVERNANCE_ROLES.map((role, index) => (
              <div key={index} className="sm:column-6 lg:column-3">
                <ScrollReveal className={cn("h-full text-center p-8 rounded-2xl border border-lighter bg-white", getDelayClass(index))}>
                  <div className="size-20 rounded-full bg-primary-lighter text-primary font-bold text-xl flex items-center justify-center mx-auto mb-5">
                    {locale === "am" ? "ስም" : "Name"}
                  </div>
                  <h5 className="text-lg font-bold text-darker mb-1">{locale === "am" ? "[ስም ቦታ ያዥ]" : "[Name placeholder]"}</h5>
                  <div className="text-sm font-medium text-primary">{t(role)}</div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
