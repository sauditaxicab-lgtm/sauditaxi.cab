"use client";

import { ServiceHero } from "@/components/services/ServiceHero";
import { ContentBlock } from "@/components/services/ContentBlock";
import { FleetGrid } from "@/components/services/FleetGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";

const processSteps = [
    { title: "Select Your Tour", description: "Choose between our Makkah or Madinah Ziyarat packages via WhatsApp." },
    { title: "Plan Your Itinerary", description: "Let us know your preferred time and if there are specific sites you wish to visit." },
    { title: "Experience History", description: "Your knowledgeable driver will take you to each holy site, waiting while you pray and reflect." }
];

const tourFAQs = [
    {
        question: "What Sites Do We Visit?",
        answer: "In Makkah: Jabal Al-Noor, Cave of Hira, Jabal Thawr, Mount Arafat, Mina, Muzdalifah. In Madinah: Masjid Quba, Mount Uhud, Masjid Al-Qiblatayn, and the Seven Mosques."
    },
    {
        question: "How Long Is A Typical Ziyarat Tour?",
        answer: "Tours typically last 3-4 hours, but we offer flexible durations to ensure you have enough time for prayers at each location."
    },
    {
        question: "Do Drivers Speak English?",
        answer: "Yes, many of our drivers speak English and Urdu/Hindi, and are knowledgeable about the historical significance of the sites."
    },
    {
        question: "Do You Pick Up From Hotels?",
        answer: "Yes, we provide door-to-door service from your hotel in Makkah or Madinah."
    }
];

export default function ZiyaratToursPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Makkah & Madinah Ziyarat Tours"
                subtitle="Spiritual Sightseeing"
                description="Experience the history of Islam with our private Ziyarat tours. Visit holy sites in comfort with knowledgeable drivers."
                backgroundImage="/services/luxury_tour.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Enhance Your Umrah with <span className="text-luxury-gold">Private Ziyarat</span></h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        Performing Ziyarat is a spiritually enriching part of your Umrah journey. Avoid the hassle of negotiating with standard transport or waiting for crowded buses. Saudi Taxi offers private, air-conditioned comfortable transport to all the significant historical sites in Makkah and Madinah.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Private</span>
                            <span className="text-xs text-white/70">Vehicle</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Door-to-Door</span>
                            <span className="text-xs text-white/70">Hotel Pickup</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Knowledgeable</span>
                            <span className="text-xs text-white/70">Drivers</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Flexible</span>
                            <span className="text-xs text-white/70">Timing</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Winery Content */}
            <ContentBlock
                title="A Spiritual Journey Through History"
                content={`Our Ziyarat tours are designed to give you peace of mind and comfort as you visit the holy landmarks.\n\nMakkah Ziyarat: Visit Jabal Al-Noor (Cave Hira), Jabal Thawr, Jannat al-Mu'alla, Masjid Jinn, and the rites of Hajj sites (Mina, Arafat, Muzdalifah).\n\nMadinah Ziyarat: Visit Masjid Quba (the first mosque in Islam), Mount Uhud (site of the Battle of Uhud), Masjid Al-Qiblatayn (Mosque of the Two Qiblas), and the Seven Mosques (Site of the Battle of the Trench).`}
                imageSrc="/hero_bg.png"
                imageAlt="Ziyarat Tour"
            />

            {/* Exclusive Fleet */}
            <FleetGrid />

            {/* How It Works */}
            <ProcessSteps steps={processSteps} title="Book Your Ziyarat Tour" />

            {/* FAQ Section */}
            <FAQSection items={tourFAQs} title="Frequently Asked Questions" className="bg-zinc-900" />

            {/* Bottom CTA */}
            <CTASection
                title={<strong>Complete Your <span className="text-luxury-black">Journey</span></strong>}
                description="Book your private Ziyarat tour today and experience the history of Islam."
                buttonText="Book Ziyarat Now"
                showFeatures={true}
            />
        </main>
    );
}
