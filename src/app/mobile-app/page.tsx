import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import MobileAppPromo from "@/components/sections/mobile-app-promo";
import Cta from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Mobile App",
  description: "The Moenco SACCO mobile app — check savings, shares, dividends, apply for loans, and track repayments.",
};

export default function MobileAppPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading={{ en: "Mobile App", am: "የሞባይል መተግበሪያ" }}
        breadcrumb={[{ href: "/", label: { en: "Home", am: "መነሻ" } }, { label: { en: "Mobile App", am: "የሞባይል መተግበሪያ" } }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <MobileAppPromo gap="top" />
        <Cta gap="bottom" />
      </main>
    </React.Fragment>
  );
}
