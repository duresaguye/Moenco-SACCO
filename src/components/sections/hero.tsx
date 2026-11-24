"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShieldCheck, BuildingFill } from "@/components/icons";
import shapeA from "@/images/decoration/shape-a.png";
import lineA from "@/images/decoration/line-a.png";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";
import { BANKING } from "@/config/sacco-config";

type HeroProps = {
  className?: string;
  wrapperClassName?: string;
};

export default function Hero({ className, wrapperClassName }: HeroProps) {
  const { t, locale } = useLocale();

  return (
    <header className={cn("relative flex flex-col pt-(--menubar-height)", className)}>
      <div className="absolute -top-(--menubar-height) inset-x-0 bottom-0 pointer-events-none overflow-hidden -z-10 bg-linear-to-br from-darker via-dark to-primary-dark/70">
        <Image src={shapeA} width={515} height={367} alt="" className="absolute top-0 inset-s-0 w-128.75 h-91.75 opacity-15" />
        <Image src={lineA} width={348} height={373} alt="" className="absolute bottom-0 inset-e-0 w-87 h-93.25 opacity-15" />
      </div>

      <div className={cn("flex-1 flex items-center pt-24 md:pt-28 xl:pt-32 2xl:pt-36 pb-20 lg:pb-24 z-20 relative", wrapperClassName)}>
        <div className="container">
          <ScrollReveal stagger className="max-w-2xl">
            <div className="reveal-item reveal-delay-100 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white mb-6">
              <ShieldCheck className="size-4 fill-primary-light" />
              {locale === "am" ? "የሞኤንኮ ሰራተኞች ቁጠባና ብድር ህብረት ስራ ማህበር" : "A Workplace Savings & Credit Cooperative"}
            </div>

            <h1 className="reveal-item reveal-delay-150 text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.12] mb-6">
              {locale === "am" ? "አብረን እንቆጥባለን፣ በራስ መተማመን እንበደራለን" : "Save together. Borrow with confidence."}
            </h1>

            <p className="reveal-item reveal-delay-200 text-lg/relaxed text-white/80 mb-10 max-w-xl">
              {locale === "am"
                ? "ሞኤንኮ ሳኮ በደመወዝ ተቆራጭ ቁጠባ፣ የድርሻ ባለቤትነትና ተመጣጣኝ ብድር የፋይናንስ ደህንነት ይገነባል — ከደመወዝዎ 5% ያህል ይቆጥቡ፣ ከ1,000 ብር ጀምሮ ድርሻ ይያዙ፣ እስከ 1,400,000 ብር በ9% ይበደሩ።"
                : "Moenco SACCO builds financial security through payroll-deducted savings, share ownership, and affordable credit — save from 5% of your salary, hold shares from 1,000 ETB, and borrow up to 1,400,000 ETB at 9%."}
            </p>

            <ul className="reveal-item reveal-delay-250 flex flex-wrap gap-4 mb-10">
              <li>
                <Button nativeButton={false} render={<Link href="/membership" />} size="lg">
                  {t(DICT.cta.becomeMember)}
                </Button>
              </li>
              <li>
                <Button nativeButton={false} render={<Link href="/loans" />} size="lg" variant="outline">
                  {t(DICT.cta.exploreServices)}
                </Button>
              </li>
            </ul>

            <div className="reveal-item reveal-delay-300 flex items-center gap-2.5 text-sm text-white/60">
              <BuildingFill className="size-4.5 fill-white/60 shrink-0" />
              {locale === "am"
                ? `የአባላት ቁጠባና ካፒታል በ${t(BANKING.bankName)} ይያዛል።`
                : `Member savings and share capital are held with ${t(BANKING.bankName)}.`}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </header>
  );
}
