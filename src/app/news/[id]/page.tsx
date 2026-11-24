import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import { Section, SectionContent } from "@/components/layout/section";
import { NEWS_DATA } from "@/data/news";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import NewsDetailBody from "@/components/sections/news-detail-body";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return NEWS_DATA.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = NEWS_DATA.find((item) => item.id === id) || NEWS_DATA[0];
  return {
    title: post.title.en,
    description: post.excerpt.en,
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = NEWS_DATA.find((item) => item.id === id) || NEWS_DATA[0];

  return (
    <React.Fragment>
      <PageHeader
        heading={post.title}
        smallerHeading
        breadcrumb={[
          { href: "/", label: { en: "Home", am: "መነሻ" } },
          { href: "/news", label: { en: "News", am: "ዜና" } },
        ]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Section gap="top">
          <SectionContent>
            <div className="container">
              <div className="row justify-center">
                <div className="2xl:column-8 xl:column-9">
                  <ScrollReveal delay={100}>
                    <NewsDetailBody post={post} />
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </SectionContent>
        </Section>
      </main>
    </React.Fragment>
  );
}
