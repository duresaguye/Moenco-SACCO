"use client";

import { Section, SectionContent } from "@/components/layout/section";
import { cn } from "@/lib/utils";
import { CheckCircleFill } from "@/components/icons";
import shapeA from "@/images/decoration/shape-a.png";
import lineB from "@/images/decoration/line-b.png";
import Image from "next/image";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";

type ValuesProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

const PILLARS = [
  {
    title: { en: "Our Vision", am: "ራዕያችን" },
    description: {
      en: "A financially secure Moenco workforce, where every employee has the tools to save, build assets, and access fair credit.",
      am: "እያንዳንዱ ሰራተኛ የመቆጠብ፣ ንብረት የመገንባትና ፍትሃዊ ብድር የማግኘት መሳሪያ ያለው፣ የገንዘብ ነክ ደህንነት ያለው የሞኤንኮ የሰራተኛ ማህበረሰብ።",
    },
  },
  {
    title: { en: "Our Mission", am: "ተልዕኮአችን" },
    description: {
      en: "To mobilize regular savings and provide affordable, transparent credit to Moenco employees through a member-owned cooperative structure.",
      am: "በአባላት ባለቤትነት በተዋቀረ ህብረት ስራ ማህበር አማካኝነት ለሞኤንኮ ሰራተኞች መደበኛ ቁጠባን ማንቀሳቀስና ተመጣጣኝና ግልጽ ብድር ማቅረብ።",
    },
  },
  {
    title: { en: "Our Objectives", am: "ዓላማዎቻችን" },
    description: {
      en: "Encourage a savings culture, build member-owned share capital, and extend responsible, affordable loan products to members in good standing.",
      am: "የቁጠባ ባህልን ማበረታታት፣ በአባላት ባለቤትነት የድርሻ ካፒታልን መገንባትና ብቁ ለሆኑ አባላት ኃላፊነት የተሞላበትና ተመጣጣኝ ብድር ማቅረብ።",
    },
  },
];

const CORE_VALUES = [
  { en: "Transparency", am: "ግልጽነት" },
  { en: "Member ownership", am: "የአባላት ባለቤትነት" },
  { en: "Financial discipline", am: "የገንዘብ ስነ-ስርዓት" },
  { en: "Mutual trust", am: "የጋራ መተማመን" },
];

export default function Values({ gap = "default", className }: ValuesProps) {
  const { t, locale } = useLocale();

  return (
    <Section gap={gap} className={cn("bg-primary-lighter", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image src={shapeA} width={515} height={367} alt="" className="absolute top-0 inset-s-0 w-128.75 h-91.75" />
        <Image src={lineB} width={348} height={373} alt="" className="absolute top-0 inset-s-0 w-87 h-93.25" />
      </div>
      <SectionContent>
        <div className="container">
          <div className="row justify-center text-center mb-12">
            <div className="lg:column-8">
              <ScrollReveal delay={100}>
                <div className="mb-3 text-sm/4.25 font-medium uppercase text-primary">{locale === "am" ? "ስለ ማህበራችን" : "About the cooperative"}</div>
                <h2 className="mb-4 text-darker text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold">
                  {locale === "am" ? "ታሪክ፣ ራዕይና ተልዕኮ" : "Our history, vision & mission"}
                </h2>
                <p className="text-lg/relaxed text-body">
                  {locale === "am"
                    ? "[ታሪክ ቦታ ያዥ] ሞኤንኮ ሳኮ የተመሰረተበት ትክክለኛ ዓመትና ታሪክ እዚህ ይገባል።"
                    : "[History placeholder] The cooperative's founding year and background will be added here once confirmed by Moenco SACCO."}
                </p>
              </ScrollReveal>
            </div>
          </div>
          <div className="row g-6 mb-12">
            {PILLARS.map((pillar, index) => (
              <div key={index} className="lg:column-4">
                <ScrollReveal className={cn("h-full bg-white rounded-2xl p-8", getDelayClass(index))}>
                  <h5 className="text-darker font-semibold text-xl mb-3">{t(pillar.title)}</h5>
                  <p className="text-base/relaxed text-body">{t(pillar.description)}</p>
                </ScrollReveal>
              </div>
            ))}
          </div>
          <div className="row justify-center">
            <div className="lg:column-10">
              <ScrollReveal delay={200} className="bg-darker rounded-2xl p-8 lg:p-10">
                <h5 className="text-white font-semibold text-xl mb-6">{locale === "am" ? "ዋና ዋና እሴቶቻችን" : "Our core values"}</h5>
                <div className="row g-5">
                  {CORE_VALUES.map((value, index) => (
                    <div key={index} className="sm:column-6 lg:column-3 flex items-center gap-2.5">
                      <CheckCircleFill className="size-5 shrink-0 fill-primary-light" />
                      <span className="text-white text-base font-medium">{t(value)}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
