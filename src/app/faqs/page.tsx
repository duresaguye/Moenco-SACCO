import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import FaqsAll from "@/components/sections/faqs-all";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Moenco SACCO membership, savings, shares, and loans.",
};

export default function FaqsPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading={{ en: "Frequently Asked Questions", am: "ተደጋጋሚ ጥያቄዎች" }}
        breadcrumb={[{ href: "/", label: { en: "Home", am: "መነሻ" } }, { label: { en: "FAQ", am: "ተደጋጋሚ ጥያቄዎች" } }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <FaqsAll gap="top" />
      </main>
    </React.Fragment>
  );
}
