import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import SavingsContent from "@/components/sections/savings-content";

export const metadata: Metadata = {
  title: "Savings & Shares",
  description: "Moenco SACCO savings rules for management and non-management employees, plus share ownership and dividend details.",
};

export default function SavingsPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading={{ en: "Savings & Shares", am: "ቁጠባና ድርሻ" }}
        breadcrumb={[{ href: "/", label: { en: "Home", am: "መነሻ" } }, { label: { en: "Savings & Shares", am: "ቁጠባና ድርሻ" } }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <SavingsContent />
      </main>
    </React.Fragment>
  );
}
