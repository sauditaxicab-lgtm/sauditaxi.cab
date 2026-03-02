import { ServiceHero } from "@/components/services/ServiceHero";
import { FleetGrid } from "@/components/services/FleetGrid";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Building2, MapPin, Shield, Clock, Star, AlertCircle, CheckCircle2, Award, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: 'Makkah Taxi Service – Reliable Umrah Transfers and Holy Site Tours',
    description: 'Book a reliable Makkah Taxi for Umrah. Fixed rates for Jeddah to Makkah, Holy Mosque transfers, and Ziyarat tours. Professional drivers and quality fleet available 24/7.',
    alternates: {
        canonical: '/makkah',
    },
};

const makkahRoutes = [
    {
        from: "Jeddah Airport (JED)",
        fromIcon: <MapPin size={16} />,
        to: "Makkah (Haram Area)",
        toIcon: <Building2 size={16} />,
        price: "Ask for Price",
        time: "1 Hour",
        features: ["Meet and Greet", "Fixed Fare"]
    },
    {
        from: "Makkah City",
        fromIcon: <Building2 size={16} />,
        to: "Madinah Munawwarah",
        toIcon: <Building2 size={16} />,
        price: "Ask for Price",
        time: "4.5 Hours",
        features: ["Spiritual Focus", "Quality SUV"],
        link: "/makkah-to-madinah-taxi"
    },
    {
        from: "Makkah Hotels",
        fromIcon: <Building2 size={16} />,
        to: "Mina / Arafat / Muzdalifah",
        toIcon: <MapPin size={16} />,
        price: "Ask for Price",
        time: "Flexible",
        features: ["Ziyarat Expert", "Family Vans"]
    }
];

const makkahFAQs = [
    {
        question: "How much is a taxi from Jeddah Airport (JED) to Makkah in 2026?",
        answer: "We offer fixed-rate private taxi transfers from Jeddah Airport to Makkah. Fares vary by vehicle type — contact us via WhatsApp for the latest rates and direct hotel drop-off in the Markazia area."
    },
    {
        question: "Where can a taxi drop me off closest to the Masjid Al-Haram?",
        answer: "Due to traffic restrictions, we drop off at the nearest authorized points: Kudai Parking, Jabal Omar entrance, or the King Abdulaziz Street tunnel arrivals, typically within a 2-5 minute walk to the gates."
    },
    {
        question: "Is there a taxi from Makkah to Madinah available for 7 people?",
        answer: "Yes, our GMC Yukon XL and Hyundai H1/Staria fleets accommodate up to 7 passengers with heavy luggage. The journey takes approximately 4.5 hours via the Makkah-Madinah Highway."
    }
];

export default function MakkahCityPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Makkah Taxi Service"
                subtitle="Al-Masjid al-Haram and Beyond"
                description="Experience respectful, reliable transportation in the Holiest City. From Jeddah Airport (JED) to your Makkah doorstep. Professional drivers dedicated to your spiritual journey."
                backgroundImage="/makkah/makkah_hero.png"
            />

            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* 1. ABOVE THE FOLD - INTRO SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h1 className="text-[36px] font-serif font-thin mb-8 text-black leading-[48px]">
                        Reliable <strong>Makkah Taxi</strong> for Umrah and Ziyarat Transfers
                    </h1>
                    <div className="text-[rgb(31,33,43)] text-[16px] font-normal leading-[24px] mb-12 border-l-4 border-luxury-gold pl-6 bg-zinc-50 py-4 rounded-r-xl text-left">
                        <p>
                            Saudi Taxi provides specialized <strong>Makkah Taxi</strong> services with 24/7 coverage of the <strong>Masjid Al-Haram (Grand Mosque)</strong> central zone. We offer guaranteed pickups from <strong>Jeddah Airport (JED) Terminal 1 (Gate 4)</strong> with fixed-rate transfers. Our fleet of <Link href="/fleet" className="text-luxury-gold hover:underline font-bold">private GMC Yukons</Link> and <strong>Toyota Camrys</strong> ensures seamless transfers to the <strong>King Abdulaziz Gate</strong>, <strong>Jabal Omar</strong>, and <strong>Abraj Al-Bait</strong> hotels.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mt-12 pb-4">
                        <Link href="tel:+966548174726">
                            <Button className="bg-luxury-gold text-black hover:bg-black hover:text-luxury-gold font-bold px-10 py-7 text-lg rounded-full shadow-2xl transition-all hover:scale-105">
                                Call Makkah Taxi Experts
                            </Button>
                        </Link>
                        <Link href="/booking">
                            <Button variant="outline" className="border-2 border-luxury-gold text-black hover:bg-luxury-gold hover:text-black font-bold px-10 py-7 text-lg rounded-full shadow-xl">
                                Online Booking
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. AI OVERVIEW BLOCK */}
            <section className="py-16 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-10 rounded-2xl shadow-xl border-l-[6px] border-luxury-gold">
                        <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                            <Landmark className="text-luxury-gold" />
                            Makkah Taxi Logistics & Zero-Click Info
                        </h2>

                        {/* AEO/Zero-Click Summary Table */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-black">
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="font-bold">Haram Pick-up Zones:</span>
                                <span className="text-luxury-gold font-bold">Kudai / Aziziyah</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="font-bold">Makkah to Madinah:</span>
                                <span className="text-luxury-gold font-bold">~4.5 Hours</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="font-bold">Meeqat Stops:</span>
                                <span className="text-luxury-gold font-bold">Taneem / Ji'ranah</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="font-bold">Umrah Group Vans:</span>
                                <span className="text-luxury-gold font-bold">11-17 Seaters</span>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-luxury-gold/5 border border-luxury-gold/10 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 px-4 py-1 bg-luxury-gold text-black text-[10px] font-bold uppercase tracking-tighter rounded-bl-lg">2026 Protocol</div>
                            <h4 className="text-sm font-bold text-luxury-gold uppercase tracking-widest mb-3">Pilgrimage Retrieval Protocol:</h4>
                            <p className="text-[14px] text-zinc-700 leading-relaxed italic">
                                "For <Link href="/services/umrah-transfers" className="text-luxury-gold hover:underline font-bold">Umrah transfers</Link>, Saudi Taxi drivers facilitate passenger drop-offs at the <strong>First Ring Road</strong> and <strong>Ibrahim Al-Khalil Street</strong>, ensuring the closest possible access to the Grand Mosque. All <Link href="/makkah-to-madinah-taxi" className="text-luxury-gold hover:underline font-bold">Makkah to Madinah taxi</Link> journeys include optimized luggage stacking for up to 5 large suitcases in our GMC fleet, with complimentary <strong>Zamzam water</strong> storage handling."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE US */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-serif mb-10 underline decoration-luxury-gold underline-offset-8">
                                Why Choose Us in Makkah?
                            </h2>
                            <ul className="grid gap-8">
                                {[
                                    { title: "Fixed Umrah Rates", desc: "The price you see is the price you pay. No surge during prayer times or peak seasons." },
                                    { title: "Haram Area Experts", desc: "Drivers who know the best drop-off points near the Holy Mosque even during road closures." },
                                    { title: "Luggage Specialist", desc: "Spacious trunks for Zamzam water and all your pilgrimage gear in SUVs and vans." },
                                    { title: "24/7 Spiritual Support", desc: "Punctual service for departures from Makkah to ensure you never miss your flight." },
                                    { title: "Quality Vehicle Fleet", desc: "Clean, air-conditioned sedans and 7-seater vans for family groups." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <CheckCircle2 className="text-luxury-gold mt-1 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-xl">{item.title}</h4>
                                            <p className="text-zinc-500">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 4. COMMON PROBLEMS SOLVED */}
                        <div>
                            <h2 className="text-4xl font-serif mb-10">Pilgrimage Travel Challenges We Solve</h2>
                            <div className="space-y-6 text-zinc-600">
                                <p>Finding a reliable taxi in Makkah during **peak Ramadan or Hajj** is one of the biggest challenges for visitors. Many local taxis do not have the capacity for large families or the heavy luggage that comes with international travel. Our fleet is specifically selected to handle these volume requirements.</p>
                                <p>We also solve the problem of **navigation confusion**. Makkah's roads frequently change due to expansion projects and prayer-time closures. Our drivers receive live updates, ensuring you take the most efficient route possible to your hotel or the Meeqat.</p>
                                <ul className="space-y-4 pt-4 border-t border-zinc-100 text-sm">
                                    <li>Automated flight tracking for JED to Makkah arrivals.</li>
                                    <li>Dedicated waiting at Meeqat points for Umrah preparation.</li>
                                    <li>Safe transport through Jabal Omar and Misfalah tunnels.</li>
                                    <li>Reliable connections to the Haramain High Speed Rail stations.</li>
                                    <li>Child-friendly safety seats for pilgrimage with toddlers.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRICING TABLE */}
            <PopularRoutesTable
                title="Fixed Makkah Route Fares"
                routes={makkahRoutes}
            />

            {/* 6. PROCESS */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif text-center mb-16">Simple 3-Step Booking</h2>
                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
                        <div>
                            <span className="w-16 h-16 rounded-full bg-black text-luxury-gold font-bold text-2xl flex items-center justify-center mx-auto mb-4">1</span>
                            <h4 className="font-bold">Book Online</h4>
                            <p className="text-zinc-500">Fast confirmation via our secure portal or WhatsApp.</p>
                        </div>
                        <div>
                            <span className="w-16 h-16 rounded-full bg-black text-luxury-gold font-bold text-2xl flex items-center justify-center mx-auto mb-4">2</span>
                            <h4 className="font-bold">Meet Driver</h4>
                            <p className="text-zinc-500">At the airport terminal or your hotel lobby at the agreed time.</p>
                        </div>
                        <div>
                            <span className="w-16 h-16 rounded-full bg-luxury-gold text-black font-bold text-2xl flex items-center justify-center mx-auto mb-4">3</span>
                            <h4 className="font-bold">Reach Haram</h4>
                            <p className="text-zinc-500">Enjoy a professional ride directly to the Holy Mosque.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. COVERAGE */}
            <section className="py-24 bg-zinc-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif mb-10 text-white leading-relaxed">Serving Every Corner of the <span className="text-luxury-gold">Sacred Territory</span></h2>
                    <p className="text-white/60 max-w-4xl mx-auto text-lg mb-12">
                        Our drivers are experts in the Markazia (Central) area around the Haram. We serve all landmark hotels including the <strong>Fairmont Makkah Clock Royal Tower</strong>, <strong>Swissôtel</strong>, and <strong>Conrad Makkah</strong>. We also provide coverage for residential districts like <strong>Al-Aziziyah</strong>, <strong>Al-Nuzhah</strong>, and the religious landmarks of <strong>Mount Arafat</strong> and the <strong>Cave of Hira</strong>.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm">Ajyad District</div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm">Misfalah Area</div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm">Shubaykah</div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm">Jabal al-Kaaba</div>
                    </div>
                </div>
            </section>

            {/* 8. EEAT */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <Award className="text-luxury-gold size-16 mx-auto mb-8" />
                    <h2 className="text-3xl font-serif mb-8">Trusted by Thousands of Pilgrims</h2>
                    <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                        Saudi Taxi has been the gold standard for Makkah transportation for over <strong>10 years</strong>. Our drivers are TGA-licensed and specifically trained for Umrah and Hajj logistical support. We maintain a high standard of vehicle hygiene and provide transparent, receipts-based billing for every transfer.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-zinc-100 px-4 py-2 rounded-full text-xs font-bold border border-zinc-200">LICENSED</span>
                        <span className="bg-zinc-100 px-4 py-2 rounded-full text-xs font-bold border border-zinc-200">INSURED</span>
                        <span className="bg-zinc-100 px-4 py-2 rounded-full text-xs font-bold border border-zinc-200">TGA CERTIFIED</span>
                    </div>
                </div>
            </section>

            {/* 9. FAQs */}
            <FAQSection items={makkahFAQs} title="Makkah Taxi FAQ" className="bg-zinc-50" darkContent={true} />

            {/* 10. TESTIMONIALS */}
            <section className="py-24 bg-zinc-900">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-serif text-white mb-12 italic">Recognized by Local Visitors</h3>
                    <div className="max-w-3xl mx-auto p-12 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-luxury-gold text-xl italic mb-6">"Seamless transfer from Jeddah to Makkah during the last 10 days of Ramadan. The driver was patient and knew the road closures well."</p>
                        <span className="text-white/60 font-bold">— Ahmed R., United Kingdom</span>
                    </div>
                </div>
            </section>

            {/* 11. CASE STUDY */}
            <section className="py-24 bg-white text-black border-t border-zinc-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="p-10 rounded-3xl bg-luxury-black text-white relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-[36px] font-serif font-thin text-luxury-gold mb-4 leading-[48px]">Case Study: Full Day Ziyarat Tour</h3>
                            <p className="text-white/70 leading-relaxed max-w-2xl">
                                <strong>Problem:</strong> A family of 8 needing to visit all major holy sites in Makkah within a 4-hour window before their departure.
                                <br /><strong>Solution:</strong> A Toyota HiAce van with a local guide-driver who coordinated the visit to Hira, Thawr, and Arafat efficiently.
                                <br /><strong>Outcome:</strong> Completed all sites on time with comfortable travel; contact us for current rates.
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 blur-3xl rounded-full"></div>
                    </div>
                </div>
            </section>

            <CTASection
                title={<strong>Arriving in <span className="text-luxury-black">Makkah?</span></strong>}
                description="Book your reliable Saudi Taxi in Makkah today. Professional drivers available 24/7."
                buttonText="Book via WhatsApp"
                showFeatures={true}
            />

            {/* Local Business Schema - Makkah Hub */}
            <Script id="local-business-makkah" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TaxiService",
                    "@id": "https://sauditaxi.cab/makkah/#localbusiness",
                    "name": "Saudi Taxi - Makkah Hub",
                    "description": "Reliable airport transfers and Ziyarat tours in Makkah. Serving the Holy Prophet's Mosque area and all pilgrims.",
                    "mainEntityOfPage": "https://sauditaxi.cab/makkah",
                    "parentOrganization": {
                        "@type": "Organization",
                        "@id": "https://sauditaxi.cab/#organization"
                    },
                    "areaServed": [
                        {
                            "@type": "City",
                            "name": "Makkah",
                            "@id": "http://www.wikidata.org/entity/Q5806"
                        },
                        {
                            "@type": "LandmarkOrHistoricalService",
                            "name": "Al-Masjid al-Haram",
                            "sameAs": "http://www.wikidata.org/entity/Q42885"
                        },
                        { "@type": "LandmarkOrHistoricalService", "name": "Abraj Al-Bait" },
                        { "@type": "LandmarkOrHistoricalService", "name": "Jabal Omar" },
                        { "@type": "LandmarkOrHistoricalService", "name": "Masjid Taneem" }
                    ],
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Makkah",
                        "addressRegion": "Makkah Province",
                        "addressCountry": "SA"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Makkah Taxi Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Umrah Taxi Jeddah to Makkah"
                                }
                            }
                        ]
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "21.4225",
                        "longitude": "39.8262"
                    },
                    "telephone": "+966548174726"
                })
            }} />
        </main>
    );
}
