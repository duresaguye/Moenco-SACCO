import React from "react";
import Hero from "@/components/sections/hero";
import Why from "@/components/sections/why";
import Services from "@/components/sections/services";
import ServicesFeatured from "@/components/sections/services-featured";
import CalculatorPreview from "@/components/sections/calculator-preview";
import HowItWorks from "@/components/sections/how-it-works";
import WhyCards from "@/components/sections/why-cards";
import MobileAppPromo from "@/components/sections/mobile-app-promo";
import NewsPreview from "@/components/sections/news-preview";
import FaqPreview from "@/components/sections/faq-preview";
import Cta from "@/components/sections/cta";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <main className="relative flex flex-col overflow-x-hidden">
        <Why />
        <ServicesFeatured />
        <Services />
        <CalculatorPreview />
        <HowItWorks />
        <WhyCards />
        <MobileAppPromo compact />
        <NewsPreview />
        <FaqPreview />
        <Cta />
      </main>
    </React.Fragment>
  );
}
