

import Link from "next/link";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ContentBlock } from "@/components/services/ContentBlock";
import { FleetGrid } from "@/components/services/FleetGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";

const processSteps = [
    { title: "Choose Your Desitnation", description: "Select from our curated sightseeing packages for Makkah, Madinah, or Jeddah." },
    { title: "Custom Itinerary", description: "Tell us what interests you—history, shopping, or nature—and we'll plan the perfect route." },
    { title: "Luxury Travel", description: "Relax in our premium vehicles with a personal driver guiding you to every spot." }
];

const tourFAQs = [
    {
        question: "Can I customize the sightseeing tour?",
        answer: "Absolutely! Our tours are fully customizable. You can choose specific landmarks, museums, or markets you wish to visit."
    },
    {
        question: "Do you offer tours in Jeddah?",
        answer: "Yes, we offer specialized sightseeing tours in Jeddah, covering Al-Balad, the Corniche, King Fahd's Fountain, and more."
    },
    {
        question: "Is the driver also a guide?",
        answer: "Our drivers are knowledgeable about the local areas and can provide basic information, but for a detailed historical guide, we can make arrangements upon request."
    },
    {
        question: "How long are the tours?",
        answer: "Half-day tours are usually 4-5 hours, while full-day tours can last 8-10 hours depending on your itinerary."
    }
];

export const metadata = {
    title: "Sightseeing Tours | Makkah, Madinah and Jeddah City Tours",
    description: "Book private sightseeing tours in Saudi Arabia. Explore historical sites in Makkah, Madinah, and Jeddah with our premium taxi service and knowledgeable drivers.",
    alternates: {
        canonical: '/services/sightseeing',
    },
};

export default function SightseeingPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Saudi Sightseeing and City Tours"
                subtitle="Explore Beyond the Pilgrimage"
                description="Discover the rich culture, modern marvels, and historical heritage of Makkah, Madinah, and Jeddah with our premium city tours."
                backgroundImage="/city_night_luxury_bg.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Experience the <span className="text-luxury-gold">Beauty of Saudi Arabia</span></h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        Your journey doesn't have to end at the Holy Mosques. Saudi Arabia offers a wealth of historical, cultural, and modern attractions. From the ancient coral houses of Jeddah's Al-Balad to the majestic mountains of Taif and the vibrant markets of Madinah, our private sightseeing tours allow you to explore the Kingdom in comfort and style. Combine city tours with our spiritual <Link href="/services/ziyarat-tours" className="text-luxury-gold hover:underline font-semibold">Ziyarat tours</Link> for a complete experience. Travel in our spacious <Link href="/fleet/toyota-hiace-11-seater-taxi" className="text-luxury-gold hover:underline font-semibold">11-seater Toyota HiAce</Link>, luxury <Link href="/fleet/hyundai-staria-7-seater-taxi" className="text-luxury-gold hover:underline font-semibold">Hyundai Staria</Link>, or <Link href="/fleet/toyota-coaster-17-seater-taxi" className="text-luxury-gold hover:underline font-semibold">17-seater group transport</Link>.
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

            {/* Jeddah Highlights */}
            <ContentBlock
                title="Jeddah: Bridging Heritage and Modernity"
                content={`Explore the Bride of the Red Sea with our premium VIP transport service. Our Jeddah City Tour covers the essential landmarks:\n\n**Al-Balad (Historical District):** Walk through the UNESCO World Heritage site featuring ancient coral stone buildings with intricate wooden Roshan balconies.\n\n**Jeddah Corniche:** Enjoy a relaxing drive along the beautiful Red Sea waterfront, dotted with sculptures and parks.\n\n**King Fahd's Fountain:** Witness the tallest fountain in the world, a spectacular 312-meter water jet visible from across the city.\n\n**Red Sea Mall:** Experience world-class shopping and dining in one of the region's premier destinations.`}
                imageSrc="/hero_bg.png"
                imageAlt="Jeddah Sightseeing"
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
                                    { name: "Al-Balad", info: "Historical district & Souqs." },
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

            {/* Bottom CTA */}
            <CTASection
                title={<strong>Ready to <span className="text-luxury-black">Explore?</span></strong>}
                description="Book your private sightseeing tour today. Custom itineraries available for Makkah, Madinah, and Jeddah."
                buttonText="Book Sightseeing Tour"
                showFeatures={true}
            />

            {/* FAQ Section */}
            <FAQSection items={tourFAQs} title="Frequently Asked Questions" className="bg-zinc-900" />

        </main>
    );
}
