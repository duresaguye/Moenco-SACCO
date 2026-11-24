import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import CTA from "@/components/sections/cta";
import Why from "@/components/sections/why";
import Team from "@/components/sections/team";
import Values from "@/components/sections/values";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Moenco Workers Savings and Credit Cooperative — mission, vision, objectives, core values, and governance structure.",
};

export default function AboutPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading={{ en: "About Us", am: "ስለ እኛ" }}
        breadcrumb={[{ href: "/", label: { en: "Home", am: "መነሻ" } }, { label: { en: "About Us", am: "ስለ እኛ" } }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Why stats={true} />
        <Values />
        <Team />
        <CTA gap="bottom" />
      </main>
    </React.Fragment>
  );
}
