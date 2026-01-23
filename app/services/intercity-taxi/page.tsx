"use client";

import Link from "next/link";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ContentBlock } from "@/components/services/ContentBlock";
import { FleetGrid } from "@/components/services/FleetGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";

const processSteps = [
    { title: "Choose Destination", description: "Let us know your destination city anywhere in Saudi Arabia." },
    { title: "Confirm Details", description: "Get a fixed price quote instantly via WhatsApp." },
    { title: "Travel Comfortably", description: "Enjoy a safe, long-distance ride in our premium vehicles." }
];

const intercityFAQs = [
    {
        question: "Which Cities Do You Cover?",
        answer: "We cover travel between all major cities including Jeddah, Makkah, Madinah, Riyadh, Taif, Yanbu, Dammam, and Al Khobar."
    },
    {
        question: "Is It Cheaper Than Flying?",
        answer: "For groups and families, our intercity transfer service is often more cost-effective than buying multiple flight tickets, with the added convenience of door-to-door service."
    },
    {
        question: "Can We Stop For Breaks?",
        answer: "Yes, you have full control over the journey. Feel free to ask your driver to stop for food, prayer, or rest whenever needed."
    },
    {
        question: "Are The Vehicles Suitable For Long Trips?",
        answer: "Absolutely. Our fleet is maintained for long-distance travel, ensuring air-conditioning, comfortable seating, and reliability."
    }
];

export default function IntercityTaxiPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Intercity Taxi Service"
                subtitle="Kingdom-Wide Travel"
                description="Secure and comfortable long-distance transfers between Jeddah, Makkah, Madinah, and all major cities across Saudi Arabia."
                backgroundImage="/services/intercity_jeddah_madinah.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Private Transfers from <span className="text-luxury-gold">Mecca to Jeddah</span> and Beyond</h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        Need a reliable Mecca to Jeddah transfer? Or looking for comfortable Makkah to Madinah transport for your large group? Saudi Taxi offers a premium intercity transport booking service that covers every corner of the Kingdom. Avoid the hassle of public transport and enjoy the scenic drive between Makkah and Madina in the comfort of our modern fleet including the luxury <Link href="/fleet/gmc-yukon-xl-7-seater-taxi" className="text-luxury-gold hover:underline font-semibold">GMC Yukon XL</Link>, spacious <Link href="/fleet/hyundai-staria-7-seater-taxi" className="text-luxury-gold hover:underline font-semibold">Hyundai Staria</Link>, <Link href="/fleet/toyota-hiace-11-seater-taxi" className="text-luxury-gold hover:underline font-semibold">11-seater HiAce</Link>, or <Link href="/fleet/toyota-coaster-17-seater-taxi" className="text-luxury-gold hover:underline font-semibold">17-seater Coaster</Link>. Need executive travel? Check our <Link href="/services/vip-transport" className="text-luxury-gold hover:underline font-semibold">VIP transport service</Link>.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Kingdom</span>
                            <span className="text-xs text-white/70">Wide Coverage</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Door-to-Door</span>
                            <span className="text-xs text-white/70">Convenience</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Comfort</span>
                            <span className="text-xs text-white/70">Long Distance</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Flexible</span>
                            <span className="text-xs text-white/70">Schedule</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <ContentBlock
                title="Your Private Long-Distance Transfer"
                content={`Experience the convenience of private road travel with our comprehensive intercity taxi service.\n\nPopular Routes:\n• Jeddah to Riyadh\n• Jeddah to Taif (perfect for Ziyarat tours)\n• Jeddah to Yanbu\n• Makkah/Madinah to anywhere in KSA\n\nOur drivers are experienced in long-haul driving, ensuring your safety and comfort throughout the journey. We use modern vehicles equipped with effective air conditioning to handle the Saudi climate. Combine intercity travel with our specialized Ziyarat and sightseeing services.`}
                imageSrc="/hero_bg.png"
                imageAlt="Intercity Travel"
            />

            {/* Exclusive Fleet */}
            <FleetGrid />

            {/* How It Works */}
            <ProcessSteps steps={processSteps} title="Start Your Journey" />

            {/* FAQ Section */}
            <FAQSection items={intercityFAQs} title="Frequently Asked Questions" className="bg-zinc-900" />

            {/* Bottom CTA */}
            <CTASection
                title={<strong>Ready for the <span className="text-luxury-black">Long Drive?</span></strong>}
                description="Book your comfortable intercity ride today."
                buttonText="Get Quote"
                showFeatures={true}
            />
        </main>
    );
}
