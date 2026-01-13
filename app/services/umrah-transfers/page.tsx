"use client";

import { ServiceHero } from "@/components/services/ServiceHero";
import { ContentBlock } from "@/components/services/ContentBlock";
import { FleetGrid } from "@/components/services/FleetGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";

const processSteps = [
    { title: "Book Your Transfer", description: "Schedule your Makkah to Madinah or Jeddah transfer via WhatsApp." },
    { title: "Select Your Vehicle", description: "Choose from our fleet of sedans, SUVs, and buses to suit your group." },
    { title: "Travel in Peace", description: "Our experienced drivers ensure a smooth, safe journey between the holy cities." }
];

const umrahFAQs = [
    {
        question: "How Long Is The Makkah to Madinah Journey?",
        answer: "The drive between Makkah and Madinah typically takes 4–5 hours. We ensure a comfortable ride with stops at clean rest areas if needed."
    },
    {
        question: "Can We Stop at Meeqat?",
        answer: "Yes, if you are travelling from Madinah to Makkah for Umrah, we can stop at Dhul Hulaifah (Masjid Shajarah) for you to assume Ihram."
    },
    {
        question: "What Vehicles Are Available?",
        answer: "We offer Toyota Camrys for small groups, GMC Yukons/Hyundai Starias for families, and HiAce/Coaster buses for larger groups."
    },
    {
        question: "Is The Price Fixed?",
        answer: "Yes, we provide a fixed price quote before you book, inclusive of petrol and tolls. No hidden charges."
    }
];

export default function UmrahTransfersPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Umrah Taxi Services"
                subtitle="Makkah - Madinah - Jeddah"
                description="Reliable and comfortable intercity transfers between the Holy Cities. Experienced drivers committed to your spiritual journey."
                backgroundImage="/services/umrah_transfer.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Private Taxis Between <span className="text-luxury-gold">Makkah & Madinah</span></h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        The journey between Makkah and Madinah is a significant part of your pilgrimage. Saudi Taxi ensures this trip is safe, comfortable, and stress-free. Whether you need a private sedan, a spacious GMC for your family, or a bus for your group, we provide 24/7 service with experienced drivers.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Meeqat Stop</span>
                            <span className="text-xs text-white/70">Upon Request</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Fixed Price</span>
                            <span className="text-xs text-white/70">No Hidden Fees</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Comfort</span>
                            <span className="text-xs text-white/70">Air Conditioned</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">24/7</span>
                            <span className="text-xs text-white/70">Availability</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <ContentBlock
                title="Comfortable Intercity Travel"
                content={`Travel between Jeddah, Makkah, and Madinah with total peace of mind.\n\nOur Umrah Transfer service is designed for pilgrims who value comfort and reliability. We understand the importance of punctuality for your prayers and rituals. All our vehicles are well-maintained, clean, and driven by professionals who respect the sanctity of your journey.\n\nWe cover all major routes:\n• Jeddah Airport to Makkah/Madinah\n• Makkah to Madinah (and vice-versa)\n• Makkah to Jeddah`}
                imageSrc="/hero_bg.png"
                imageAlt="Umrah Transfer"
            />

            {/* Exclusive Fleet */}
            <FleetGrid />

            {/* How It Works */}
            <ProcessSteps steps={processSteps} title="How It Works" />

            {/* FAQ Section */}
            <FAQSection items={umrahFAQs} title="Frequently Asked Questions" className="bg-zinc-900" />

            {/* Bottom CTA */}
            <CTASection
                title={<strong>Book Your <span className="text-luxury-black">Umrah Ride</span></strong>}
                description="Reliable transport for your sacred journey."
                buttonText="Get Quote Now"
                showFeatures={true}
            />
        </main>
    );
}
