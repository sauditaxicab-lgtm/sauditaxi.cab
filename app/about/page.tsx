import React from "react";
import { ServiceHero } from "@/components/services/ServiceHero";
import OurHistory from "@/components/about/OurHistory";
import Timeline from "@/components/about/Timeline";
import ServicesChecklist from "@/components/about/ServicesChecklist";
import AboutContent from "@/components/about/AboutContent";
import OurChauffeurs from "@/components/about/OurChauffeurs";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import ReadyToBook from "@/components/about/ReadyToBook";

export default function AboutPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="About Us"
                subtitle="Your Trusted Partner for Umrah & Airport Transfers"
                description="KSA's Premium Taxi Services"
                backgroundImage="/about/about_hero_premium.png"

            />
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


