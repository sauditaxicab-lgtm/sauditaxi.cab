
import Link from "next/link";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ContentBlock } from "@/components/services/ContentBlock";
import { FleetGrid } from "@/components/services/FleetGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";
import { PricingInclusion } from "@/components/services/PricingInclusion";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Sightseeing Tours | Makkah, Madinah and Jeddah City Tours – Saudi Taxi',
    description: 'Explore the best of Saudi Arabia with our private sightseeing tours. Discover Jeddah Al-Balad, Makkah historical sites, and Madinah landmarks in luxury vehicles with fixed 2026 rates.',
    alternates: {
        canonical: '/services/sightseeing',
    },
};

const processSteps = [
    { title: "Choose Your Destination", description: "Select from our curated sightseeing packages for Makkah, Madinah, or Jeddah." },
    { title: "Custom Itinerary", description: "Tell us what interests you—history, shopping, or nature—and we'll plan the perfect route." },
    { title: "Luxury Travel", description: "Relax in our quality vehicles with a personal driver guiding you to every spot." }
];

const tourFAQs = [
    {
        question: "Can I customize the sightseeing tour itinerary?",
        answer: "Absolutely! All our private tours are fully customizable. You can choose specific landmarks, museums, or local markets (Souqs) you wish to visit, and our drivers will accommodate your schedule."
    },
    {
        question: "Do you offer specialized tours in Jeddah?",
        answer: "Yes, we offer comprehensive Jeddah city tours covering Al-Balad (Historical District), the Red Sea Corniche, King Fahd's Fountain, and the modern North Corniche area."
    },
    {
        question: "Do your drivers provide historical information during the tour?",
        answer: "Our drivers are locals who are very knowledgeable about the areas. While they are not licensed historical guides, they can provide excellent local insights. Formal guides can be arranged upon request."
    },
    {
        question: "What is the typical duration for a city sightseeing tour?",
        answer: "We offer half-day (4-5 hours) and full-day (8-10 hours) city tours. We can also arrange multi-day itineraries if you're exploring multiple cities like Jeddah and Taif."
    }
];

export default function SightseeingPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Saudi Sightseeing and City Tours – Private Luxury Transport"
                subtitle="Explore Beyond the Pilgrimage"
                description="Discover the rich culture, modern marvels, and historical heritage of Makkah, Madinah, and Jeddah with our exclusive city tours."
                backgroundImage="/city_night_luxury_bg.png"
            />

            {/* Breadcrumbs */}
            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Experience the <span className="text-luxury-gold">Beauty of Saudi Arabia</span></h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        Your journey doesn't have to end at the Holy Mosques. Saudi Arabia offers a wealth of historical, cultural, and modern attractions. From the ancient coral houses of <strong>Jeddah's Al-Balad</strong> to the vibrant markets of <strong>Madinah</strong>, our <strong>private sightseeing tours</strong> allow you to explore the Kingdom in comfort and style. Travel in our spacious <strong>GMC Yukon XL</strong>, <strong>Hyundai Staria</strong>, or specialized group transport.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Custom</span>
                            <span className="text-xs text-white/70">Itineraries</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Luxury</span>
                            <span className="text-xs text-white/70">Comfort</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Local</span>
                            <span className="text-xs text-white/70">Insight</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Flexible</span>
                            <span className="text-xs text-white/70">Stops</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Table */}
            <PopularRoutesTable title="Sightseeing Tour Rates" />

            {/* Jeddah Highlights */}
            <ContentBlock
                title="Jeddah: Bridging Heritage and Modernity"
                content={`Explore the Bride of the Red Sea with our dedicated transport service. Our Jeddah City Tour covers the essential landmarks:\n\n**Al-Balad (Historical District):** Walk through the UNESCO World Heritage site featuring ancient coral stone buildings with intricate wooden Roshan balconies.\n\n**Jeddah Corniche:** Enjoy a relaxing drive along the beautiful Red Sea waterfront, dotted with sculptures and parks.\n\n**King Fahd's Fountain:** Witness the tallest fountain in the world, a spectacular 312-meter water jet visible from across the city.\n\n**Red Sea Mall:** Experience world-class shopping and dining in one of the region's premier destinations.`}
                imageSrc="/hero_bg.png"
                imageAlt="Jeddah Sightseeing"
            />

            {/* Inclusions Section */}
            <PricingInclusion
                title="Tour Package Inclusions"
                inclusions={[
                    "Private Vehicle with Professional Driver",
                    "Fuel, Parking, and Road Tolls",
                    "Customizable Landmark Itinerary",
                    "Complimentary Chilled Water",
                    "Punctual Hotel Pickup and Drop-off",
                    "Fluent English/Urdu Speaking Drivers"
                ]}
                exclusions={[
                    "Museum and Site Entrance Fees",
                    "Personal Meals and Snacks",
                    "Specialized Professional Tour Guides",
                    "Overnight Stays/Accommodation"
                ]}
            />

            {/* Comprehensive Spots List */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-luxury-gold uppercase tracking-widest text-xs font-bold block mb-4">Destinations</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-black mb-6">Top <span className="text-luxury-gold">Tourist Spots</span></h2>
                        <p className="text-zinc-500 max-w-3xl mx-auto leading-relaxed">
                            Curated lists of must-visit locations across the holy cities and the coastal gem of Jeddah.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Makkah */}
                        <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-luxury-gold">
                            <h3 className="text-2xl font-serif text-black mb-6 border-b border-zinc-100 pb-4">Makkah</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: "Clock Tower Museum", info: "Astronomy museum with panoramic views." },
                                    { name: "Makkah Mall", info: "Premier shopping destination." },
                                    { name: "Ain Zubaida", info: "Historical water canal system." },
                                    { name: "Exhibition of the Two Holy Mosques", info: "Architecture museum." },
                                    { name: "Mount Arafat", info: "Scenic and spiritual views." }
                                ].map((place, i) => (
                                    <li key={i} className="group">
                                        <h4 className="font-bold text-black text-sm group-hover:text-luxury-gold transition-colors">{place.name}</h4>
                                        <p className="text-zinc-500 text-xs italic">{place.info}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Madinah */}
                        <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-luxury-gold">
                            <h3 className="text-2xl font-serif text-black mb-6 border-b border-zinc-100 pb-4">Madinah</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: "Dar Al Madinah Museum", info: "History and culture of the city." },
                                    { name: "Uhud Archers' Mound", info: "Historical site with viewing points." },
                                    { name: "Dates Market", info: "Famous central market for local produce." },
                                    { name: "Hejaz Railway Museum", info: "Ottoman era transport history." },
                                    { name: "Mount Al-Ruma", info: "Scenic views near Uhud." }
                                ].map((place, i) => (
                                    <li key={i} className="group">
                                        <h4 className="font-bold text-black text-sm group-hover:text-luxury-gold transition-colors">{place.name}</h4>
                                        <p className="text-zinc-500 text-xs italic">{place.info}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Jeddah */}
                        <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-luxury-gold">
                            <h3 className="text-2xl font-serif text-black mb-6 border-b border-zinc-100 pb-4">Jeddah</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: "Al-Balad", info: "Historical district and Souqs." },
                                    { name: "Jeddah Corniche", info: "30km coastal resort area." },
                                    { name: "King Fahd Fountain", info: "Iconic landmark." },
                                    { name: "Fakieh Aquarium", info: "Marine life exhibits." },
                                    { name: "Floating Mosque", info: "Masjid Al-Rahma on the sea." }
                                ].map((place, i) => (
                                    <li key={i} className="group">
                                        <h4 className="font-bold text-black text-sm group-hover:text-luxury-gold transition-colors">{place.name}</h4>
                                        <p className="text-zinc-500 text-xs italic">{place.info}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exclusive Fleet */}
            <FleetGrid />

            {/* FAQ Section with Schema */}
            <FAQSection items={tourFAQs} title="Frequently Asked Questions" className="bg-zinc-900" />

            <Script id="sightseeing-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": tourFAQs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })
            }} />

            {/* How It Works */}
            <ProcessSteps steps={processSteps} title="Start Your City Tour" />

            {/* Bottom CTA */}
            <CTASection
                title={<strong>Ready to <span className="text-luxury-black">Explore?</span></strong>}
                description="Book your private sightseeing tour today. Custom itineraries available for Makkah, Madinah, and Jeddah."
                buttonText="Book via WhatsApp"
                showFeatures={true}
            />
        </main>
    );
}
