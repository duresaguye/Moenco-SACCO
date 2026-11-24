"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ_DATA } from "@/data/faqs";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";

type FaqsAllProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function FaqsAll({ gap = "default", className }: FaqsAllProps) {
  const { t, locale } = useLocale();

  return (
    <>
      {/* FAQ Section */}
      <Section gap={gap} className={className}>
        <div className="container">
          <div className={cn("row g-12 items-start lg:flex-row-reverse justify-between")}>
            <div className="xl:column-7">
              <ScrollReveal delay={300} className="flex flex-col gap-12.5">
                {FAQ_DATA.map((item, index) => (
                  <div key={index} className="">
                    <h4 className="text-3xl/none font-bold text-darker mb-3">{t(item.title)}</h4>
                    <p className="mb-8 text-base/relaxed text-body">{t(item.description)}</p>
                    <Accordion defaultValue={[`faq-${index}-0`]} className="flex flex-col gap-4">
                      {item.questions.map((qItem, qIndex) => (
                        <AccordionItem key={index + qIndex} value={`faq-${index}-${qIndex}`}>
                          <AccordionTrigger>
                            <span className="text-lg font-medium lg:text-xl text-darker pe-4">
                              {t(qItem.question)}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            {t(qItem.answer)}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </ScrollReveal>
            </div>
            <div className="xl:column-5">
              <ScrollReveal delay={100} className="text-block">
                <h2 className="text-3xl md:text-4xl xl:text-5xl leading-tight font-bold text-darker text-pretty mb-5">
                  {locale === "am" ? "ተጨማሪ ጥያቄ አለዎት?" : "Do you have more questions?"}
                </h2>
                <p className="text-base xl:text-xl leading-relaxed text-body text-pretty mb-8">
                  {locale === "am" ? "ቡድናችን ማንኛውንም ጥያቄ ለመመለስ ዝግጁ ነው።" : "Our team is here to answer anything not covered above."}
                </p>
                <Button nativeButton={false} size="lg" render={<Link href="/contact" />} className="uppercase" >
                  <span>{t(DICT.cta.contactUs)}</span>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
