import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import Contact from "@/components/sections/conact";
import Branches from "@/components/sections/branches";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Moenco SACCO — head office and branch details, phone, email, and working hours.",
};

export default function ContactPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading={{ en: "Contact Us", am: "አግኙን" }}
        breadcrumb={[{ href: "/", label: { en: "Home", am: "መነሻ" } }, { label: { en: "Contact Us", am: "አግኙን" } }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Contact gap="top" />
        <Branches />
      </main>
    </React.Fragment>
  );
}
