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
    <main className="min-h-screen relative selection:bg-luxury-gold selection:text-black">


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

      <CTASection />

      {/* AI-First SEO Schema Layer */}
      <Script id="homepage-advanced-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxiService",
          "name": "Saudi Taxi - Executive Transport & Umrah Transfers",
          "alternateName": "SaudiTaxi.cab",
          "description": "Professional 24/7 taxi service in Saudi Arabia specializing in Jeddah Airport transfers, Makkah Umrah transport, and Madinah Ziyarat tours.",
          "url": "https://sauditaxi.cab",
          "logo": "https://sauditaxi.cab/logo.png",
          "areaServed": [
            { "@type": "City", "name": "Makkah" },
            { "@type": "City", "name": "Madinah" },
            { "@type": "City", "name": "Jeddah" },
            { "@type": "City", "name": "Taif" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Transport Categories",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Jeddah Airport to Makkah Taxi"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Makkah to Madinah Private Transfer"
                }
              }
            ]
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jeddah",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
          },
          "telephone": "+966548174726",
          "priceRange": "$$$"
        })
      }} />
    </main>
  );
}
