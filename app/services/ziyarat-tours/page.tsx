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

            {/* Comprehensive Ziyarat Guide Section */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-luxury-gold uppercase tracking-widest text-xs font-bold block mb-4">Comprehensive Guide</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-black mb-6">List of 20 <span className="text-luxury-gold">Ziyarat Places</span> in Makkah & Madinah</h2>
                        <p className="text-zinc-500 max-w-3xl mx-auto leading-relaxed">
                            Discover the most significant spiritual and historical landmarks with our professional Saudi Taxi service. We provide comfortable, private transport for all your Ziyarat needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Makkah List */}
                        <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border-t-4 border-luxury-gold">
                            <h3 className="text-2xl font-serif text-black mb-8 border-b border-zinc-100 pb-4">Top 10 Makkah Ziyarat Places</h3>
                            <ul className="space-y-4">
                                {[
                                    { name: "Jabal Al-Noor (Ghar-e-Hira)", info: "Where the first revelation was received." },
                                    { name: "Jabal Thawr (Ghar-e-Thawr)", info: "The cave where the Prophet (SAW) hid during Hijrah." },
                                    { name: "Jannat al-Mu'alla", info: "Historical cemetery containing the grave of Bibi Khadija (RA)." },
                                    { name: "Masjid Jinn", info: "The site where Jinn pledged allegiance to the Prophet (SAW)." },
                                    { name: "Mount Arafat (Jabal ar-Rahmah)", info: "Crucial site of the Hajj pilgrimage." },
                                    { name: "Mina (The City of Tents)", info: "Where pilgrims stay during the days of Hajj." },
                                    { name: "Muzdalifah", info: "An open area where pilgrims spend a night during Hajj." },
                                    { name: "Masjid al-Khayf", info: "Historical mosque located in Mina." },
                                    { name: "Birthplace of Prophet Muhammad (SAW)", info: "House where the Prophet was born near Makkah." },
                                    { name: "Kiswa Factory", info: "Where the cloth for the Holy Kaaba is manufactured." }
                                ].map((place, i) => (
                                    <li key={i} className="flex gap-4 group cursor-default">
                                        <span className="text-luxury-gold font-bold">{i + 1}.</span>
                                        <div>
                                            <h4 className="font-bold text-black group-hover:text-luxury-gold transition-colors">{place.name}</h4>
                                            <p className="text-zinc-500 text-sm italic">{place.info}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Madinah List */}
                        <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border-t-4 border-luxury-gold">
                            <h3 className="text-2xl font-serif text-black mb-8 border-b border-zinc-100 pb-4">Top 10 Ziyarat of Madina</h3>
                            <ul className="space-y-4">
                                {[
                                    { name: "Masjid Quba", info: "The first mosque built in Islam." },
                                    { name: "Mount Uhud", info: "Site of the historical Battle of Uhud and Martyrs cemetery." },
                                    { name: "Masjid Al-Qiblatayn", info: "Where the Qibla was changed from Jerusalem to Makkah." },
                                    { name: "The Seven Mosques", info: "Locations of the Battle of the Trench (Ghazwa Khandaq)." },
                                    { name: "Jannat al-Baqi", info: "Primary cemetery near Masjid An-Nabawi." },
                                    { name: "Masjid Al-Ghamamah", info: "Where the Prophet (SAW) performed Salat ul-Istisqa." },
                                    { name: "Masjid Abu Bakr", info: "One of the historical mosques in Madinah." },
                                    { name: "Wadi-e-Jinn (Al-Baida)", info: "Famous valley known for its natural magnetic phenomenon." },
                                    { name: "Al-Hejaz Railway Museum", info: "Historical railway station from the Ottoman era." },
                                    { name: "Dates Market", info: "The best place to buy authentic Ajwa dates." }
                                ].map((place, i) => (
                                    <li key={i} className="flex gap-4 group cursor-default">
                                        <span className="text-luxury-gold font-bold">{i + 11}.</span>
                                        <div>
                                            <h4 className="font-bold text-black group-hover:text-luxury-gold transition-colors">{place.name}</h4>
                                            <p className="text-zinc-500 text-sm italic">{place.info}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taif Ziyarat Section - New Commercial Opportunity */}
            <section className="py-24 bg-luxury-black text-white relative">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <span className="text-luxury-gold uppercase tracking-widest text-xs font-bold block mb-4">Mountain City Tours</span>
                            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">6 Famous <span className="text-luxury-gold">Historical Ziyarat</span> in Taif</h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-6">
                                Beyond Makkah and Madinah, Taif holds immense spiritual and historical significance. Our <strong>Taif Makkah transport</strong> service takes you through the winding mountain roads to visit the sites where the Prophet (SAW) sought refuge and where early Islamic history was shaped.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    { name: "Masjid Abdullah Ibn Abbas", info: "Named after the cousin of the Prophet (SAW)." },
                                    { name: "Addas Mosque", info: "Site where the Christian slave Addas embraced Islam." },
                                    { name: "Masjid Al-Ku'aybah", info: "Historical mosque with unique structural origin." },
                                    { name: "The Rose Factories", info: "Experience the famous Taif rose water production." },
                                    { name: "Shubra Palace", info: "The stunning historical residence of King Abdulaziz." }
                                ].map((site, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2.5 shrink-0"></div>
                                        <div>
                                            <span className="text-white font-bold">{site.name}</span>
                                            <p className="text-white/50 text-sm">{site.info}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative p-2 border border-luxury-gold/20 rounded-sm">
                                <div
                                    className="h-[450px] bg-cover bg-center rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                                    style={{ backgroundImage: "url('/city_night_luxury_bg.png')" }}
                                ></div>
                                <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-2xl max-w-[240px]">
                                    <p className="text-black text-sm font-bold uppercase tracking-widest mb-1">Makkah to Taif</p>
                                    <p className="text-zinc-500 text-xs italic">Full-day private tour with luxury transport.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
