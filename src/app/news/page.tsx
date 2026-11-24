import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import NewsAll from "@/components/sections/news-all";

export const metadata: Metadata = {
  title: "News & Announcements",
  description: "Official news and announcements from Moenco Workers Savings and Credit Cooperative.",
};

export default function NewsPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading={{ en: "News & Announcements", am: "ዜናና ማስታወቂያ" }}
        breadcrumb={[{ href: "/", label: { en: "Home", am: "መነሻ" } }, { label: { en: "News", am: "ዜና" } }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <NewsAll />
      </main>
    </React.Fragment>
  );
}
