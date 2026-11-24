import React, { Suspense } from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import LoanCalculatorContent from "@/components/sections/loan-calculator-content";

export const metadata: Metadata = {
  title: "Loan Calculator",
  description: "Estimate your monthly repayment for a Moenco SACCO Normal, Material, or Holiday loan.",
};

export default function LoanCalculatorPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading={{ en: "Loan Calculator", am: "የብድር ማስያ" }}
        breadcrumb={[{ href: "/", label: { en: "Home", am: "መነሻ" } }, { href: "/loans", label: { en: "Loans", am: "ብድር" } }, { label: { en: "Calculator", am: "ማስያ" } }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Suspense fallback={null}>
          <LoanCalculatorContent />
        </Suspense>
      </main>
    </React.Fragment>
  );
}
