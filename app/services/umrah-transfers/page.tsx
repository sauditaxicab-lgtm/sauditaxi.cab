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
                title="Madinah to Makkah Taxi"
                subtitle="High-Speed Intercity Transfers"
                description="The most reliable Madinah to Makkah taxi service. Premium private transport and rentals with drivers for a seamless pilgrimage journey."
                backgroundImage="/services/umrah_makkah.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Private <span className="text-luxury-gold">Madinah to Makkah Taxi</span> 2025</h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        Performing Umrah requires reliable transport. Our <strong>Madinah to Makkah taxi</strong> service provides a fixed <strong>2025 price in SAR</strong>, ensuring no surprises. Whether you are looking for <strong>private Umrah transport</strong> or a <strong>private car rental with driver from Makkah to Madinah</strong>, we offer the best <strong>Makkah to Madinah taxi fare</strong> for families and groups.
                    </p>
                    {/* Route Guide Table */}
                    <div className="max-w-3xl mx-auto mb-12 overflow-hidden rounded-sm border border-zinc-100 shadow-xl">
                        <table className="w-full text-left">
                            <thead className="bg-luxury-black text-luxury-gold text-xs uppercase tracking-widest">
                                <tr>
                                    <th className="px-6 py-4">Popular Route</th>
                                    <th className="px-6 py-4">Distance</th>
                                    <th className="px-6 py-4">Travel Time</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-600 bg-zinc-50">
                                <tr className="border-b border-zinc-100">
                                    <td className="px-6 py-4 font-bold text-black">Madinah to Makkah</td>
                                    <td className="px-6 py-4 italic">Approx. 450 KM</td>
                                    <td className="px-6 py-4">4.5 - 5 Hours</td>
                                </tr>
                                <tr className="border-b border-zinc-100">
                                    <td className="px-6 py-4 font-bold text-black">Jeddah Airport to Makkah</td>
                                    <td className="px-6 py-4 italic">Approx. 95 KM</td>
                                    <td className="px-6 py-4">1.5 Hours</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-black">Makkah to Madinah</td>
                                    <td className="px-6 py-4 italic">Approx. 450 KM</td>
                                    <td className="px-6 py-4">4.5 - 5 Hours</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Meeqat Stop</span>
                            <span className="text-xs text-white/70">Dhul Hulaifah</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">2025 Rates</span>
                            <span className="text-xs text-white/70">Fixed SAR Price</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Car Rental</span>
                            <span className="text-xs text-white/70">With Prof. Driver</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">24/7 Service</span>
                            <span className="text-xs text-white/70">Airport & Hotels</span>
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
