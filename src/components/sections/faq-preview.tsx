"use client";

import Link from "next/link";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ_DATA } from "@/data/faqs";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";
import { ArrowLongRight } from "@/components/icons";

type FaqPreviewProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function FaqPreview({ gap = "default", className }: FaqPreviewProps) {
  const { t, locale } = useLocale();
  // One representative question from each category, for a short homepage teaser.
  const picks = FAQ_DATA.map((category) => category.questions[0]);

  return (
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-8 xl:column-7">
              <ScrollReveal delay={100}>
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                  {locale === "am" ? "ተደጋጋሚ ጥያቄዎች" : "Frequently asked questions"}
                </h2>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>
      <SectionContent>
        <div className="container">
          <div className="row justify-center">
            <div className="lg:column-9">
              <ScrollReveal delay={150}>
                <Accordion defaultValue={["faq-0"]} className="flex flex-col gap-4">
                  {picks.map((item, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger>
                        <span className="text-lg font-medium text-darker pe-4">{t(item.question)}</span>
                      </AccordionTrigger>
                      <AccordionContent>{t(item.answer)}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="text-center mt-10">
                  <Button nativeButton={false} render={<Link href="/faqs" />} variant="link" icon={<ArrowLongRight />}>
                    {locale === "am" ? "ሁሉንም ጥያቄዎች ይመልከቱ" : "View all FAQs"}
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
