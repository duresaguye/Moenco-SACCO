import type { Metadata } from "next";
import { Noto_Sans_Ethiopic } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Preloader } from "@/components/ui/preloader";
import { LocaleProvider } from "@/i18n/locale-context";
import "@/css/globals.css";

const notoSansEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Moenco SACCO | Moenco Workers Savings and Credit Cooperative",
    template: "%s | Moenco SACCO",
  },
  description:
    "Moenco Workers Savings and Credit Cooperative (Moenco SACCO) — a workplace savings and credit cooperative for Moenco employees in Ethiopia, offering regular savings, share ownership, and affordable loans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${notoSansEthiopic.variable}`}>
      <body suppressHydrationWarning={true} className={`font-instrument-sans min-h-full flex flex-col text-body`}>
        <LocaleProvider>
          <Preloader />
          <Navbar />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
