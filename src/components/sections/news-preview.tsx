"use client";

import Link from "next/link";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLongRight } from "@/components/icons";
import { NEWS_DATA } from "@/data/news";
import { formatDate } from "@/hooks/useFormatDate";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

type NewsPreviewProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function NewsPreview({ gap = "default", className }: NewsPreviewProps) {
  const { t, locale } = useLocale();
  const posts = NEWS_DATA.slice(0, 3);

  return (
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="justify-between items-end row gy-4">
            <div className="lg:column-7">
              <ScrollReveal delay={100}>
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-3">
                  {locale === "am" ? "ዜናና ማስታወቂያ" : "Latest News & Announcements"}
                </h2>
                <p className="text-base xl:text-lg leading-relaxed text-body">
                  {locale === "am" ? "ከማህበሩ ይፋዊ ማስታወቂያዎች ይከታተሉ።" : "Stay up to date with official notices from the SACCO."}
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:column-4 lg:text-end">
              <ScrollReveal delay={150}>
                <Button nativeButton={false} render={<Link href="/news" />} variant="link" icon={<ArrowLongRight />}>
                  {t(DICT.cta.viewAllNews)}
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>
      <SectionContent>
        <div className="container">
          <div className="row g-8">
            {posts.map((post, index) => (
              <div key={post.id} className="md:column-6 xl:column-4">
                <ScrollReveal className={cn("flex flex-col bg-white border-b-4 border-primary shadow-[0_4px_20px_0_rgba(0,0,0,.08)] rounded-2xl h-full", getDelayClass(index))}>
                  <Link href={`/news/${post.id}`} className="group flex flex-col p-6 flex-1">
                    <Badge pill className="self-start mb-4 text-xs font-medium py-1 px-3 text-white">{t(post.category)}</Badge>
                    <div className="text-primary text-sm/4 font-medium mb-3">{formatDate(post.date)}</div>
                    <h4 className="text-lg md:text-xl leading-snug font-bold text-darker group-hover:text-primary transition-colors line-clamp-2 mb-3">
                      {t(post.title)}
                    </h4>
                    <p className="text-body text-sm md:text-base leading-relaxed line-clamp-2">
                      {t(post.excerpt)}
                    </p>
                    <div className="pt-6 mt-auto">
                      <Button variant="link" icon={<ArrowLongRight />}><span>{t(DICT.cta.readMore)}</span></Button>
                    </div>
                  </Link>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
