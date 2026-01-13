"use client";

import { ServiceHero } from "@/components/services/ServiceHero";
import { ContentBlock } from "@/components/services/ContentBlock";
import { FleetGrid } from "@/components/services/FleetGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";

const processSteps = [
    { title: "Book in Seconds", description: "Let us know your family size and luggage requirements via WhatsApp." },
    { title: "Meet Your Driver", description: "Receive your driver's details and coordinate a convenient pickup point." },
    { title: "Sit Back & Relax", description: "Enjoy a spacious, air-conditioned ride with ample room for your family and luggage." }
];

const familyFAQs = [
    {
        question: "Do You Provide Child Seats?",
        answer: "Yes. We can provide age-appropriate car seats upon request. Please mention this when booking."
    },
    {
        question: "How Much Luggage Can We Bring?",
        answer: "Our family vehicles, like the GMC Yukon and Hyundai Staria, offer ample space for multiple large suitcases and strollers."
    },
    {
        question: "Is It Safe For Families?",
        answer: "Yes, safety is our top priority. Our drivers are licensed professionals, and our vehicles are maintained to the highest safety standards."
    },
    {
        question: "Can You Wait If Our Flight Is Delayed?",
        answer: "Absolutely. We track all flights in real-time and provide complimentary waiting time for airport family transfers."
    }
];

export default function FamilyTravelPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Family Umrah Transfers"
                subtitle="Comfortable & Spacious"
                description="Spacious vehicles for the whole family. From GMC Yukons to HiAce buses, we ensure a comfortable journey for pilgrims of all ages."
                backgroundImage="/services/family_travel.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Comfortable Travel for <span className="text-luxury-gold">The Whole Family</span></h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        Performing Umrah with family requires reliable transport that can accommodate everyone and their luggage comfortably. Saudi Taxi provides spacious GMCs and Staria vans, ensuring your journey between Jeddah, Makkah, and Madinah is stress-free and pleasant for children and elders alike.
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

            {/* Safety Content */}
            <ContentBlock
                title="Your Family's Comfort is Our Priority"
                content={`At Saudi Taxi, we understand that family travel requires extra care and space.\n\n• Spacious Vehicles: Our fleet includes GMC Yukon XLs and Hyundai Starias, perfect for families of up to 7 passengers with luggage.\n• Child Friendly: We can provide child seats upon request to ensure the safety of your little ones.\n• Door-to-Door Service: We pick you up from your hotel or airport terminal and drop you off exactly where you need to be, minimizing walking for elders and children.`}
                imageSrc="/hero_bg.png"
                imageAlt="Safe Family Travel"
            />

            {/* Exclusive Fleet */}
            <FleetGrid />

            {/* How It Works */}
            <ProcessSteps steps={processSteps} title="Simple Booking Process" />

            {/* FAQ Section */}
            <FAQSection items={familyFAQs} title="Frequently Asked Questions" className="bg-zinc-900" />

            {/* Bottom CTA */}
            <CTASection
                title={<strong>Ready for a Smooth <span className="text-luxury-black">Journey?</span></strong>}
                description="Book your spacious family taxi today."
                buttonText="Book Now"
                showFeatures={true}
            />
        </main>
    );
}
