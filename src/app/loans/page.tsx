import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import LoansContent from "@/components/sections/loans-content";

export const metadata: Metadata = {
  title: "Loan Products",
  description: "Moenco SACCO loan products — Normal, Material, and Holiday loans — with amounts, terms, interest, and eligibility.",
};

export default function LoansPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading={{ en: "Loan Products", am: "የብድር አገልግሎቶች" }}
        breadcrumb={[{ href: "/", label: { en: "Home", am: "መነሻ" } }, { label: { en: "Loans", am: "ብድር" } }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <LoansContent />
      </main>
    </React.Fragment>
  );
}
