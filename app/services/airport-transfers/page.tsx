"use client";

import { ServiceHero } from "@/components/services/ServiceHero";
import { ContentBlock } from "@/components/services/ContentBlock";
import { FleetGrid } from "@/components/services/FleetGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";

const processSteps = [
    { title: "Book Online", description: "Select your pickup location (Jeddah/Madinah Airport) and destination on our WhatsApp booking form." },
    { title: "Receive Confirmation", description: "Instantly receive your booking confirmation and driver details via WhatsApp." },
    { title: "Enjoy the Ride", description: "Your driver will meet you at the arrivals terminal. Sit back, relax, and perform your Umrah with peace of mind." }
];

const airportFAQs = [
    {
        question: "How Long Is The Trip From Jeddah Airport To Makah?",
        answer: "The journey typically takes 60–90 minutes depending on traffic. We recommend booking in advance to ensure a smooth transfer."
    },
    {
        question: "Where Will My Driver Meet Me?",
        answer: "Your driver will meet you at the arrivals area with a name sign, ready to assist with your luggage and guide you to your vehicle."
    },
    {
        question: "Does It Cost Extra If My Flight Is Delayed?",
        answer: "No. We track your flight in real-time and provide complimentary waiting time for international arrivals."
    },
    {
        question: "How Much Does An Airport Transfer Cost?",
        answer: "Pricing depends on your chosen vehicle. Contact us on WhatsApp for an instant, fixed price quote."
    }
];

export default function AirportTransfersPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Saudi Airport Transfers"
                subtitle="Premium & Punctual"
                description="Reliable airport transfers from Jeddah & Madinah Airports with flight tracking and professional Meet & Greet service."
                backgroundImage="/services/airport_transfer.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black"><strong>Jeddah & Madinah <span className="text-luxury-gold">Airport Taxi</span></strong></h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        Saudi Taxi offers dependable airport transfers, prioritising comfort, punctuality, and spiritual peace of mind for pilgrims. Skip the taxi queues; your licensed driver will meet you at the terminal, assist with luggage, and transfer you smoothly to your hotel in Makkah or Madinah.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Professional</span>
                            <span className="text-xs text-white/70">Licensed Drivers</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Real-time</span>
                            <span className="text-xs text-white/70">Flight Monitoring</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Luxury</span>
                            <span className="text-xs text-white/70">Modern Fleet</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">24/7</span>
                            <span className="text-xs text-white/70">Customer Support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* City Transfers Content */}
            <ContentBlock
                title="Reliable Airport Arrivals"
                content={`Travel from King Abdulaziz International Airport (JED) to Makkah in comfort. Our airport transfer service ensures a relaxed, uninterrupted journey in a well-appointed vehicle.\n\nWe offer the best airport transfers for pilgrims and business travellers alike. Choose from executive sedans, GMC Yukons, and HiAce buses to suit your group size. Book your ride today.`}
                imageSrc="/hero_bg.png"
                imageAlt="Airport Transfer"
            />

            {/* Exclusive Fleet */}
            <FleetGrid />

            {/* How It Works */}
            <ProcessSteps steps={processSteps} title="How It Works" />

            {/* FAQ Section */}
            <FAQSection items={airportFAQs} title="Frequently Asked Questions" className="bg-zinc-900" />

            {/* Bottom CTA */}
            {/* Bottom CTA */}
            <CTASection
                title={<strong>Ready to Book Your Airport Transfer?</strong>}
                description="Don’t leave your arrival to chance. Book your Saudi Taxi 24/7 airport transfer today."
                buttonText="Check Availability"
                showFeatures={false}
            />
        </main>
    );
}
