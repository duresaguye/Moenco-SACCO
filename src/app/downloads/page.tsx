import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import DownloadsContent from "@/components/sections/downloads-content";

export const metadata: Metadata = {
  title: "Downloads & Resources",
  description: "Moenco SACCO bylaws, Annual General Assembly reports, and membership and loan application forms.",
};

export default function DownloadsPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading={{ en: "Downloads & Resources", am: "ዶክመንቶችና ሰነዶች" }}
        breadcrumb={[{ href: "/", label: { en: "Home", am: "መነሻ" } }, { label: { en: "Downloads", am: "ዶክመንቶች" } }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <DownloadsContent />
      </main>
    </React.Fragment>
  );
}
