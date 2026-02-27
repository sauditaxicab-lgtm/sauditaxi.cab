import React from "react";
import { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import OurHistory from "@/components/about/OurHistory";
import Timeline from "@/components/about/Timeline";
import ServicesChecklist from "@/components/about/ServicesChecklist";
import AboutContent from "@/components/about/AboutContent";
import OurChauffeurs from "@/components/about/OurChauffeurs";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import ReadyToBook from "@/components/about/ReadyToBook";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
    title: "About Saudi Taxi | Reliable Umrah and Airport Transport",
    description: "Dedicated taxi service in Saudi Arabia. Trusted for Umrah transfers, airport pickups and intercity travel in Makkah, Madinah and Jeddah.",
    alternates: {
        canonical: '/about',
    },
};


export default function AboutPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="About Saudi Taxi – Reliable KSA Transportation"
                subtitle="Your Trusted Partner for Umrah and Airport Transfers"
                description="The most reliable private transport service in Saudi Arabia."
                backgroundImage="/about/about_hero_premium.png"

            />
            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>
            <OurHistory />
            <Timeline />
            <ServicesChecklist />
            <AboutContent />
            <OurChauffeurs />
            <WhyChooseUs />
            <ReadyToBook />
        </main>
    );
};


