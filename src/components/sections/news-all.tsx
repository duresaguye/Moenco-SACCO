"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ArrowLongLeft, ArrowLongRight } from "@/components/icons";
import { NEWS_DATA } from "@/data/news";
import { formatDate } from "@/hooks/useFormatDate";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, getDelayClass, DELAY_50 } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";

const POSTS_PER_PAGE = 6;

type NewsAllProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function NewsAll({ gap = "default", className }: NewsAllProps) {
  const { t, locale } = useLocale();
  const [currentPage, setCurrentPage] = useState(1);

  const featuredPost = NEWS_DATA.find((item) => item.featured) || NEWS_DATA[0];
  const otherPosts = NEWS_DATA.filter((item) => item.id !== featuredPost.id);

  const totalPages = Math.max(1, Math.ceil(otherPosts.length / POSTS_PER_PAGE));
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = otherPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    document.getElementById("news-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const formatPageNum = (num: number) => String(num).padStart(2, "0");

  return (
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="column-12">
              <ScrollReveal delay={100} className="2xl:px-8">
                <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                  {locale === "am" ? "ዜናና ማስታወቂያ" : "News & Announcements"}
                </h2>
                <p className="text-base xl:text-lg leading-relaxed text-body">
                  {locale === "am"
                    ? "ከማህበሩ ጠቅላላ ጉባኤ፣ ትርፍ ድርሻ፣ የብድር መስኮቶችና ሌሎች ይፋዊ ማስታወቂያዎች።"
                    : "Official updates from the SACCO — Annual General Assembly notices, dividend declarations, loan application windows, and more."}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>

      <SectionContent>
        <div className="container">
          {featuredPost && (
            <div className="pb-10">
              <ScrollReveal delay={100}>
                <Link href={`/news/${featuredPost.id}`} className="group block bg-white border border-lightest border-b-6 border-b-primary rounded-2xl p-8 lg:p-10 shadow-[0_4px_20px_0] shadow-black/8 transition-all duration-300">
                  <Badge pill className="mb-5 text-sm font-medium py-1 px-4 text-white">{t(featuredPost.category)}</Badge>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-semibold text-darker group-hover:text-primary transition-colors mb-4 max-w-3xl">
                    {t(featuredPost.title)}
                  </h3>
                  <p className="text-body text-sm md:text-base/relaxed line-clamp-3 mb-6 max-w-2xl">
                    {t(featuredPost.excerpt)}
                  </p>
                  <div className="text-sm font-medium text-body">{formatDate(featuredPost.date)}</div>
                </Link>
              </ScrollReveal>
            </div>
          )}

          <div id="news-grid" className="row g-8">
            {currentPosts.map((post, index) => (
              <div key={post.id} className="md:column-6 xl:column-4">
                <ScrollReveal className={cn("flex flex-col bg-white border-b-4 border-primary shadow-[0_4px_20px_0_rgba(0,0,0,.08)] rounded-2xl h-full", getDelayClass(index, DELAY_50, [2, -1]))}>
                  <Link href={`/news/${post.id}`} className="group flex flex-col p-6 flex-1">
                    <Badge pill className="self-start mb-4 text-xs font-medium py-1 px-3 text-white">{t(post.category)}</Badge>
                    <div className="text-primary text-sm/4 font-medium mb-3">{formatDate(post.date)}</div>
                    <h4 className="text-lg md:text-xl leading-snug font-bold text-darker group-hover:text-primary transition-colors line-clamp-2 mb-3">
                      {t(post.title)}
                    </h4>
                    <p className="text-body text-sm md:text-base leading-relaxed line-clamp-2 mb-6">
                      {t(post.excerpt)}
                    </p>
                    <div className="mt-auto">
                      <Button variant="link" icon={<ArrowLongRight />}><span>{t(DICT.cta.readMore)}</span></Button>
                    </div>
                  </Link>
                </ScrollReveal>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <ScrollReveal delay={150} className="mt-16 flex items-center justify-center gap-3">
              <button type="button" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="flex items-center gap-1.5 text-xs font-semibold text-body hover:text-darker transition-colors px-3 py-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed" aria-label="Previous page">
                <ArrowLongLeft className="size-4" />
                <span>{locale === "am" ? "ቀዳሚ" : "Previous"}</span>
              </button>
              <span className="text-xs font-medium text-body px-2">{formatPageNum(currentPage)} / {formatPageNum(totalPages)}</span>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button key={pageNum} type="button" onClick={() => handlePageChange(pageNum)} className={cn("size-9 rounded-full text-xs font-bold flex items-center justify-center transition-all cursor-pointer", currentPage === pageNum ? "bg-darker text-white shadow-xs scale-105" : "bg-white border border-lighter text-body hover:bg-gray-100 hover:text-darker")}>
                  {formatPageNum(pageNum)}
                </button>
              ))}
              <button type="button" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="flex items-center gap-1.5 text-xs font-semibold text-body hover:text-darker transition-colors px-3 py-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed" aria-label="Next page">
                <span>{locale === "am" ? "ቀጣይ" : "Next"}</span>
                <ArrowLongRight className="size-4" />
              </button>
            </ScrollReveal>
          )}
        </div>
      </SectionContent>
    </Section>
  );
}
