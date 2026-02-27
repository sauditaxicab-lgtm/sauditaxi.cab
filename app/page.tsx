"use client"

import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { SaudiArabiaSection } from "@/components/home/SaudiArabiaSection";
import { IntroductionSection } from "@/components/home/IntroductionSection";
import { TwentyFourSeven } from "@/components/home/TwentyFourSeven";
import { FourPillars } from "@/components/home/FourPillars";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { VehicleFleet } from "@/components/home/VehicleFleet";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { InformationSection } from "@/components/home/InformationSection";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";

import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { EEATBlock } from "@/components/home/EEATBlock";
import { ComparisonChart } from "@/components/home/ComparisonChart";
import Script from "next/script";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-luxury-black text-white selection:bg-luxury-gold selection:text-black">


      <Navbar />
      <HeroSection />
      <SaudiArabiaSection />
      <IntroductionSection />
      <TwentyFourSeven />
      <EEATBlock />
      <FourPillars />
      <ServicesGrid />

      {/* Route Pricing Table - Transparency Layer */}
      <PopularRoutesTable />

      <ComparisonChart />
      <VehicleFleet />
      <ReviewsSection />

      <InformationSection />

      <FAQSection />
      <CTASection />
    </main>
  );
}
