import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import MembershipContent from "@/components/sections/membership-content";

export const metadata: Metadata = {
  title: "Membership",
  description: "How to become a Moenco SACCO member — eligibility, fees, and the step-by-step application process.",
};

export default function MembershipPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading={{ en: "Membership", am: "አባልነት" }}
        breadcrumb={[{ href: "/", label: { en: "Home", am: "መነሻ" } }, { label: { en: "Membership", am: "አባልነት" } }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <MembershipContent />
      </main>
    </React.Fragment>
  );
}
