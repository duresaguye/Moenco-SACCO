import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Preloader } from "@/components/ui/preloader";
import { LocaleProvider } from "@/i18n/locale-context";
import "@/css/globals.css";
// Self-hosted via @fontsource instead of next/font/google: the Google Fonts
// CSS fetch at build time was unreliable (failed both locally and on
// Vercel), so the Ethiopic weights are bundled as local static assets.
import "@fontsource/noto-sans-ethiopic/ethiopic-400.css";
import "@fontsource/noto-sans-ethiopic/ethiopic-500.css";
import "@fontsource/noto-sans-ethiopic/ethiopic-600.css";
import "@fontsource/noto-sans-ethiopic/ethiopic-700.css";

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
    <html lang="en" className="h-full antialiased">
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
