"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, SectionContent, SectionHead, SectionFooter } from "@/components/layout/section";
import { cn } from "@/lib/utils";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";
import shapeA from "@/images/decoration/shape-a.png";
import lineB from "@/images/decoration/line-b.png";
import lineC from "@/images/decoration/line-c.png";

type HowItWorksProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

const STEPS = [
  {
    title: { en: "Check eligibility", am: "ብቁነትን ያረጋግጡ" },
    description: { en: "Confirm you are a current Moenco employee.", am: "የአሁኑ የሞኤንኮ ሰራተኛ መሆንዎን ያረጋግጡ።" },
  },
  {
    title: { en: "Apply & pay fees", am: "ያመልክቱና ክፍያዎችን ይክፈሉ" },
    description: { en: "Submit your application with the registration and share purchase fees.", am: "ማመልከቻዎን ከምዝገባና ከድርሻ ግዢ ክፍያ ጋር ያስገቡ።" },
  },
  {
    title: { en: "Set up payroll deduction", am: "የደመወዝ ተቆራጭ ያስተካክሉ" },
    description: { en: "Choose your savings percentage or amount for automatic payroll deduction.", am: "ለራስ-ሰር የደመወዝ ተቆራጭ የቁጠባ መቶኛ ወይም መጠን ይምረጡ።" },
  },
  {
    title: { en: "Start saving & borrowing", am: "ቁጠባና ብድር ይጀምሩ" },
    description: { en: "Build your savings and shares, and become eligible for loan products.", am: "ቁጠባዎንና ድርሻዎን ይገንቡ፣ ለብድር አገልግሎቶችም ብቁ ይሆናሉ።" },
  },
];

export default function HowItWorks({ gap = "default", className }: HowItWorksProps) {
  const { t, locale } = useLocale();

  return (
    <Section gap={gap} className={cn("bg-primary-lighter/50", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image src={shapeA} width={515} height={367} alt="" className="absolute top-0 inset-s-0 w-128.75 h-91.75" />
        <Image src={lineB} width={348} height={373} alt="" className="absolute top-0 inset-s-0 w-87 h-93.25" />
        <Image src={lineC} width={361} height={362} alt="" className="absolute bottom-0 inset-e-0 w-90.25 h-90.5" />
      </div>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-6 xl:column-5">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                  {locale === "am" ? "አባልነት እንዴት ይሰራል" : "How membership works"}
                </h2>
                <p className="text-base xl:text-lg leading-relaxed text-body">
                  {locale === "am" ? "ከማመልከቻ እስከ ቁጠባና ብድር ተጠቃሚነት በአራት ቀላል ደረጃዎች።" : "From application to your first savings deposit, in four simple steps."}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>
      <SectionContent>
        <div className="container">
          <div className="relative z-0">
            <div className="hidden xl:block absolute top-10 left-1/8 w-3/4 h-0.5 bg-linear-to-r from-primary to-secondary -z-1"></div>
            <div className="justify-between row gy-6">
              {STEPS.map((item, index) => (
                <div key={index} className="md:column-6 xl:column-3">
                  <ScrollReveal className={cn("text-center px-4 xl:px-0 2xl:px-4", getDelayClass(index))}>
                    <div className="mb-6 size-14 rounded-full border-2 border-primary bg-white text-lg/normal font-semibold flex justify-center items-center text-primary mx-auto">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h5 className="font-semibold text-xl xl:text-2xl leading-normal text-darker mb-4">{t(item.title)}</h5>
                    <p className="text-sm xl:text-base leading-relaxed text-body">{t(item.description)}</p>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContent>
      <SectionFooter>
        <div className="container text-center">
          <ScrollReveal delay={150}>
            <Button nativeButton={false} render={<Link href="/membership" />} size="lg" className="uppercase">{t(DICT.cta.becomeMember)}</Button>
          </ScrollReveal>
        </div>
      </SectionFooter>
    </Section>
  );
}
