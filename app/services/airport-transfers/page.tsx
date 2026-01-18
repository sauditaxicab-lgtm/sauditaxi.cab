import { ServiceHero } from "@/components/services/ServiceHero";
import { ContentBlock } from "@/components/services/ContentBlock";
import { FleetGrid } from "@/components/services/FleetGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Makkah Taxi | Book Umrah Taxi to Mecca',
    description: 'Book your private taxi from Jeddah Airport (JED) to Makkah. Premium GMC & Camry transfers with meet & greet. Best Jeddah to Mecca taxi fare guaranteed.',
    alternates: {
        canonical: '/services/airport-transfers',
    },
};

const processSteps = [
    { title: "Book Online", description: "Select your pickup location (Jeddah/Madinah Airport) and destination on our WhatsApp booking form." },
    { title: "Receive Confirmation", description: "Instantly receive your booking confirmation and driver details via WhatsApp." },
    { title: "Enjoy the Ride", description: "Your driver will meet you at the arrivals terminal. Sit back, relax, and perform your Umrah with peace of mind." }
];

const airportFAQs = [
    {
        question: "How long is the trip from Madinah Airport to the Prophet's Mosque?",
        answer: "The journey from Prince Mohammad Bin Abdulaziz Airport (MED) to Masjid An-Nabawi takes approximately 20–30 minutes."
    },
    {
        question: "What is the Medina airport taxi booking process?",
        answer: "Our Medina airport taxi booking process is simple: 1. Contact us via WhatsApp, 2. Provide flight details and hotel name, 3. Receive instant confirmation. Your driver will be waiting at the arrivals gate."
    },
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
    }
];

export default function AirportTransfersPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sauditaxi.cab"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://sauditaxi.cab/services"
        }, {
            "@type": "ListItem",
            "position": 3,
            "name": "Airport Transfers",
            "item": "https://sauditaxi.cab/services/airport-transfers"
        }]
    };

    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ServiceHero
                title="Taxi from Jeddah Airport to Makkah"
                subtitle="Premium Airport Transfers"
                description="The most reliable taxi from Jeddah Airport to Mecca and Madinah. Book your private pickup with flight tracking and professional meet-and-greet."
                backgroundImage="/services/airport_transfer.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Jeddah to Makkah Taxi: <span className="text-luxury-gold">Luxury in Its Finest Form</span></h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        Experience the ultimate standard in pilgrimage travel. Our <strong>Jeddah to Makkah taxi</strong> service is designed for those who seek luxury, punctuality, and the best <strong>Jeddah to Mecca taxi fare</strong>. Whether you're arriving at JED Airport for Umrah or business, we provide a <strong>private taxi from Jeddah to Makkah</strong> that guarantees spiritual peace and physical comfort.
                    </p>



                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Luxury Fleet</span>
                            <span className="text-xs text-white/70">Finest Form</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Fixed Fares</span>
                            <span className="text-xs text-white/70">No Hidden Costs</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Punctual</span>
                            <span className="text-xs text-white/70">Airport Greet</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">24/7 Support</span>
                            <span className="text-xs text-white/70">WhatsApp Ready</span>
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
            <ProcessSteps steps={processSteps} title="Medina Airport Taxi Booking Process" />

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
