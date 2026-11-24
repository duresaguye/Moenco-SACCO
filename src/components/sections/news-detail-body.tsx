"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLongLeft } from "@/components/icons";
import { formatDate } from "@/hooks/useFormatDate";
import { useLocale } from "@/i18n/locale-context";
import type { NewsPost } from "@/data/news";

export default function NewsDetailBody({ post }: { post: NewsPost }) {
  const { t, locale } = useLocale();

  return (
    <article className="pb-7">
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <Badge pill className="text-sm font-medium py-1 px-4 text-white">{t(post.category)}</Badge>
        <span className="text-sm font-medium text-body">{formatDate(post.date)}</span>
      </div>
      <div className="max-w-full dynamic-prose">
        {post.body.map((paragraph, index) => (
          <p key={index}>{t(paragraph)}</p>
        ))}
      </div>
      <div className="pt-10">
        <Button nativeButton={false} render={<Link href="/news" />} variant="link" icon={<ArrowLongLeft />} iconPosition="left">
          {locale === "am" ? "ወደ ሁሉም ዜናዎች ተመለስ" : "Back to all news"}
        </Button>
      </div>
    </article>
  );
}
