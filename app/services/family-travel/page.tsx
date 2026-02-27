import { ServiceHero } from "@/components/services/ServiceHero";
import { ContentBlock } from "@/components/services/ContentBlock";
import { FleetGrid } from "@/components/services/FleetGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PricingInclusion } from "@/components/services/PricingInclusion";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Family Umrah Transfers – Convenient Large Group Taxi Saudi Arabia',
    description: 'Book a spacious family taxi for Umrah transfers in Saudi Arabia. We provide GMC Yukon XL, Hyundai Staria, and HiAce buses for comfortable group travel between Jeddah, Makkah, and Madinah.',
    alternates: {
        canonical: '/services/family-travel',
    },
};

const processSteps = [
    { title: "Book in Seconds", description: "Let us know your family size and luggage requirements via WhatsApp." },
    { title: "Meet Your Driver", description: "Receive your driver's details and coordinate a convenient pickup point." },
    { title: "Sit Back and Relax", description: "Enjoy a spacious, air-conditioned ride with ample room for your family and luggage." }
];

const familyFAQs = [
    {
        question: "Do you provide child seats for family transfers?",
        answer: "Yes, we can provide age-appropriate car seats upon request. Please mention the number and ages of children when booking your family taxi."
    },
    {
        question: "How much luggage can your family vehicles accommodate?",
        answer: "Our specialized family vehicles, like the GMC Yukon XL and Hyundai Staria, offer significantly more space than standard sedans, accommodating 5–7 large suitcases plus strollers."
    },
    {
        question: "Are your drivers experienced with large groups and families?",
        answer: "Yes, our drivers are highly professional and experienced in handling the specific needs of families and large groups, ensuring a patient and helpful service."
    },
    {
        question: "Can we book a large bus for an extended family Umrah trip?",
        answer: "Absolutely. For larger groups, we offer 11-seater HiAce vans and 25-seater Coasters, making us the ideal choice for group Umrah transport."
    }
];

export default function FamilyTravelPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Family Umrah Transfers – Convenient Large Group Taxi Saudi Arabia"
                subtitle="Comfortable and Spacious"
                description="Spacious vehicles for the whole family. From GMC Yukons to HiAce buses, we ensure a comfortable journey for pilgrims of all ages."
                backgroundImage="/services/family_travel.png"
            />

            {/* Breadcrumbs */}
            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Comfortable Travel for <span className="text-luxury-gold">The Whole Family</span></h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        Performing Umrah with family requires reliable transport that can accommodate everyone and their luggage comfortably. Saudi Taxi provides spacious <strong>GMC Yukon XL</strong> and <strong>Hyundai Staria vans</strong>, ensuring your journey between <strong>Jeddah, Makkah, and Madinah</strong> is stress-free and pleasant for children and elders alike. Our <strong>large group taxi service</strong> is designed to keep your family together throughout the sacred trip.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Safety First</span>
                            <span className="text-xs text-white/70">Trusted Drivers</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Spacious</span>
                            <span className="text-xs text-white/70">Ample Legroom</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Luggage</span>
                            <span className="text-xs text-white/70">Large Capacity</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Reliable</span>
                            <span className="text-xs text-white/70">5-Star Rated</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing/Routes Table */}
            <PopularRoutesTable title="Family and Group Transfer Rates" />

            {/* Safety Content */}
            <ContentBlock
                title="Your Family's Comfort is Our Priority"
                content={`At Saudi Taxi, we understand that family travel requires extra care and space.\n\n• Spacious Vehicles: Our fleet includes GMC Yukon XLs and Hyundai Starias, perfect for families of up to 7 passengers with luggage.\n• Child Friendly: We can provide child seats upon request to ensure the safety of your little ones.\n• Door-to-Door Service: We pick you up from your hotel or airport terminal and drop you off exactly where you need to be, minimizing walking for elders and children.\n• Professional Drivers: Our staff is trained to assist with luggage and provide a courteous experience for the whole family.`}
                imageSrc="/hero_bg.png"
                imageAlt="Safe Family Travel"
            />

            {/* Policies & Inclusions */}
            <PricingInclusion
                title="Family Service Transparency"
                inclusions={[
                    "Professional Meet and Greet at Arrivals",
                    "Child Safety Seats (on request)",
                    "Unlimited Luggage Space (within vehicle limit)",
                    "Direct Hotel-to-Hotel Transfers",
                    "English and Urdu Speaking Drivers",
                    "All Parking and Toll Fees"
                ]}
                exclusions={[
                    "Extra stops not in route",
                    "Extended waiting time (over 60 mins)",
                    "Driver tips",
                    "Individual food/refreshments"
                ]}
            />

            {/* Exclusive Fleet */}
            <FleetGrid />

            {/* How It Works */}
            <ProcessSteps steps={processSteps} title="Simple Booking Process" />

            {/* FAQ Section with Schema */}
            <FAQSection items={familyFAQs} title="Family Travel FAQ" className="bg-zinc-900" />

            <Script id="family-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": familyFAQs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })
            }} />

            {/* Bottom CTA */}
            <CTASection
                title={<strong>Ready for a Smooth <span className="text-luxury-black">Journey?</span></strong>}
                description="Book your spacious family taxi today and enjoy a reliable KSA travel experience."
                buttonText="Book via WhatsApp"
                showFeatures={true}
            />
        </main>
    );
}
