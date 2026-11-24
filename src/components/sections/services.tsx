"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section, SectionContent } from "@/components/layout/section";
import { ArrowLongRight, Wallet, WalletNew, CalendarCheck } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";
import { LOAN_PRODUCTS } from "@/config/sacco-config";
import shapeA from "@/images/decoration/shape-a.png";
import lineA from "@/images/decoration/line-a.png";
import hexagonSmallA from "@/images/decoration/hexagon-small-a.png";

type ServicesProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

const ICONS = { normal: Wallet, material: WalletNew, holiday: CalendarCheck } as const;

export default function Services({ gap = "default", className }: ServicesProps) {
  const { t, locale } = useLocale();
  const products = Object.values(LOAN_PRODUCTS);

  return (
    <Section gap={gap} className={cn("bg-primary-lighter/50", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image src={shapeA} width={515} height={367} alt="" className="absolute top-0 inset-s-0 w-128.75 h-91.75" />
        <Image src={lineA} width={348} height={373} alt="" className="absolute top-0 inset-s-0 w-87 h-93.25" />
        <Image src={hexagonSmallA} width={181} height={157} alt="" className="absolute top-1/10 translate-container-end w-45.25 h-39.25" />
      </div>
      <SectionContent>
        <div className="container">
          <div className="justify-between row gy-8 mb-10 xl:mb-14">
            <div className="lg:column-7">
              <ScrollReveal delay={100}>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl leading-[1.167] font-bold text-darker mb-4 text-pretty">
                  {locale === "am" ? "ለሞኤንኮ ሰራተኞች የተዘጋጁ የብድር አገልግሎቶች" : "Loan products built for Moenco employees"}
                </h2>
                <Button nativeButton={false} render={<Link href="/loans" />} variant="link" icon={<ArrowLongRight />}>{t(DICT.cta.learnMore)}</Button>
              </ScrollReveal>
            </div>
            <div className="lg:column-5">
              <ScrollReveal delay={200} className="bg-darker p-8 rounded-2xl flex gap-6 h-full items-center">
                <div className="w-1 bg-primary shrink-0 rounded-full self-stretch"></div>
                <blockquote className="text-lg leading-snug text-white">
                  {locale === "am"
                    ? "ሁሉም ብድሮቻችን ለአባላት ጥቅም ብቻ የተዘጋጁ ሲሆን ያለተደበቀ ክፍያ ናቸው።"
                    : "Every loan product is designed for members first — transparent terms, no hidden charges."}
                </blockquote>
              </ScrollReveal>
            </div>
          </div>

          <div className="row g-6">
            {products.map((product, index) => {
              const Icon = ICONS[product.id];
              return (
                <div key={product.id} className="md:column-6 xl:column-4">
                  <ScrollReveal className={cn("flex flex-col bg-white shadow-[0_2px_26px_0_rgba(0,0,0,.07)] rounded-2xl h-full p-8", getDelayClass(index))}>
                    <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="size-7 fill-primary" />
                    </div>
                    <h5 className="text-xl leading-normal font-semibold text-darker mb-3">{t(product.name)}</h5>
                    <p className="text-sm leading-relaxed text-body mb-6">{t(product.description)}</p>
                    <ul className="text-sm text-body flex flex-col gap-2 mb-6">
                      <li className="flex justify-between gap-3">
                        <span>{locale === "am" ? "ከፍተኛ መጠን" : "Max amount"}</span>
                        <span className="font-semibold text-darker">{product.maxAmount.toLocaleString()} ETB</span>
                      </li>
                      <li className="flex justify-between gap-3">
                        <span>{locale === "am" ? "ከፍተኛ ጊዜ" : "Max term"}</span>
                        <span className="font-semibold text-darker">{product.maxMonths} {locale === "am" ? "ወራት" : "months"}</span>
                      </li>
                      <li className="flex justify-between gap-3">
                        <span>{product.interestType === "reducing-balance" ? (locale === "am" ? "ወለድ" : "Interest") : (locale === "am" ? "የአገልግሎት ክፍያ" : "Service charge")}</span>
                        <span className="font-semibold text-darker">
                          {product.interestType === "reducing-balance" ? `${(product.annualInterestRate! * 100).toFixed(0)}%` : `${(product.serviceChargeRate! * 100).toFixed(0)}%`}
                        </span>
                      </li>
                    </ul>
                    <Button nativeButton={false} render={<Link href={`/loans#${product.id}`} />} variant="link" icon={<ArrowLongRight />} className="mt-auto">
                      {t(DICT.cta.learnMore)}
                    </Button>
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
