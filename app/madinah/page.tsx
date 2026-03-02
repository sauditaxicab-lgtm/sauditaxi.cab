import { ServiceHero } from "@/components/services/ServiceHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/home/CTASection";
import { FleetGrid } from "@/components/services/FleetGrid";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";
import { FAQSection } from "@/components/home/FAQSection";
import { Metadata } from 'next';
import Link from 'next/link';
import { Plane, Building2, MapPin, Car, Shield, Clock, AlertCircle, CheckCircle2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Madinah Taxi Service – Reliable Ziyarat and Airport Transfers',
    description: 'Book a reliable Madinah Taxi. Transfers from Prince Mohammad Airport (MED) to Masjid Nabawi and Makkah. Professional drivers for Ziyarat tours.',
    alternates: {
        canonical: '/madinah',
    },
};

const madinahSummaryRoutes = [
    {
        from: "Madinah Airport (MED)",
        fromIcon: <Plane size={16} />,
        to: "Al-Masjid an-Nabawi / Hotels",
        toIcon: <Building2 size={16} />,
        price: "Ask for Price",
        time: "20-30 Mins",
        features: ["Meet and Greet", "Fixed Rate"]
    },
    {
        from: "Madinah City",
        fromIcon: <Building2 size={16} />,
        to: "Makkah (Umrah Transfer)",
        toIcon: <Building2 size={16} />,
        price: "Ask for Price",
        time: "4.5 Hours",
        features: ["Spiritual Focus", "Comfort Travel"]
    },
    {
        from: "Madinah City",
        fromIcon: <MapPin size={16} />,
        to: "Quba / Uhud / Ziyarat",
        toIcon: <MapPin size={16} />,
        price: "Ask for Price",
        time: "3-4 Hours",
        features: ["Expert Guide", "Family Options"]
    }
];

const madinahFAQs = [
    {
        question: "How much is a taxi from Madinah Airport (MED) to Masjid Nabawi hotels?",
        answer: "We provide private taxi transfers from Prince Mohammad Airport to the Madinah Markazia (Central Area) at competitive fixed rates. We specialize in door-to-door service to even the most restricted pedestrian zones near the Prophet's Mosque. Contact us via WhatsApp for the latest pricing."
    },
    {
        question: "What is the price of a taxi from Madinah to Makkah in 2026?",
        answer: "We offer fixed-rate Madinah to Makkah private taxi transfers. The journey takes approximately 4.5 hours, including a stop at a gas station or restaurant for refreshments. Contact us via WhatsApp for the latest rates."
    },
    {
        question: "Can I book a 7-seater taxi for Madinah Ziyarat tours?",
        answer: "Yes, we offer GMC Yukon XL and Hyundai vans for full-day Ziyarat tours at competitive rates. This includes visits to Masjid Quba, Mount Uhud, and the Qiblatayn Mosque. Contact us for pricing."
    }
];

export default function MadinahCityPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Madinah Taxi Service – Ziyarat and Airport Transfers"
                subtitle="Al-Madinah Al-Munawwarah"
                description="Experience respectful, reliable transportation in the City of the Prophet. From Prince Mohammad Airport (MED) to Al-Masjid an-Nabawi."
                backgroundImage="/coaster/coaster-main.jpg"
            />

            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* 1. ABOVE THE FOLD - INTRO SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <span className="text-luxury-gold uppercase tracking-[0.2em] font-bold text-xs mb-4 block">Destination: Madinah</span>
                    <h1 className="text-[36px] font-serif font-thin mb-6 text-black leading-[48px]">Spiritual Transport in <span className="text-luxury-gold">The Radiant City</span></h1>
                    <div className="text-[rgb(31,33,43)] text-[16px] font-normal leading-[24px] mb-12 border-l-4 border-luxury-gold pl-6 bg-zinc-50 py-4 rounded-r-xl text-left">
                        <p>
                            Saudi Taxi offers premium <strong>Madinah Taxi</strong> services specializing in transfers from <strong>Prince Mohammad Bin Abdulaziz Airport (MED)</strong> to the <strong>Al-Masjid an-Nabawi (Prophet's Mosque)</strong> central area. We provide 24/7 private rides for <strong>Madinah Ziyarat tours</strong>, with direct access to <strong>Gate 25</strong> and <strong>Gate 7</strong> of the Haram. Our fleet includes <Link href="/fleet" className="text-luxury-gold hover:underline font-bold">7-seater SUVs</Link> and <strong>luxury sedans</strong> for seamless travel to Makkah.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 pb-4">
                        <Link href="tel:+966548174726">
                            <Button className="bg-luxury-gold text-black hover:bg-black hover:text-luxury-gold font-bold px-10 py-7 text-lg rounded-full shadow-2xl transition-all hover:scale-105">
                                Call Madinah Taxi
                            </Button>
                        </Link>
                        <Link href="/booking">
                            <Button variant="outline" className="border-2 border-luxury-gold text-black hover:bg-luxury-gold hover:text-black font-bold px-10 py-7 text-lg rounded-full shadow-xl">
                                Book Ziyarat Tour
                            </Button>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
                        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-luxury-gold transition-all group">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-luxury-gold transition-colors">
                                <Plane className="text-luxury-gold group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-black">Airport Transfers</h3>
                            <p className="text-zinc-500 mb-6 text-sm">Dedicated MED airport taxi service with professional meet and greet at the arrivals gate.</p>
                            <Link href="/madinah/airport-taxi" className="text-luxury-gold font-bold hover:underline italic">Book Madinah Airport Taxi →</Link>
                        </div>
                        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-luxury-gold transition-all group">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-luxury-gold transition-colors">
                                <MapPin className="text-luxury-gold group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-black">Ziyarat Tours</h3>
                            <p className="text-zinc-500 mb-6 text-sm">Visit Quba, Uhud, and the Seven Mosques with our knowledgeable local Madinah drivers.</p>
                            <Link href="/services/ziyarat-tours" className="text-luxury-gold font-bold hover:underline italic">Explore Ziyarat →</Link>
                        </div>
                        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-luxury-gold transition-all group">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-luxury-gold transition-colors">
                                <MapPin className="text-luxury-gold group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-black">Makkah Transfers</h3>
                            <p className="text-zinc-500 mb-6 text-sm">Direct, private travel from Madinah to Makkah in our comfortable 7-seater and luxury sedan fleet.</p>
                            <Link href="/services/umrah-transfers" className="text-luxury-gold font-bold hover:underline italic">Madinah to Makkah →</Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* 2. AI OVERVIEW BLOCK */}
            <section className="py-16 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-10 rounded-2xl shadow-xl border-l-[6px] border-luxury-gold">
                        <h2 className="text-[36px] font-serif font-thin text-black mb-8 leading-[48px]">
                            <Clock className="text-luxury-gold inline-block mr-3" />
                            Madinah Taxi Logistics & Guide
                        </h2>

                        {/* AEO/Zero-Click Summary Table */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-black">
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="font-bold">MED Airport to Haram:</span>
                                <span className="text-luxury-gold font-bold">20-30 Mins</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="font-bold">Ziyarat Duration:</span>
                                <span className="text-luxury-gold font-bold">3-4 Hours</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="font-bold">Wait Time at Airport:</span>
                                <span className="text-luxury-gold font-bold">60 Mins Free</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="font-bold">Top Destinations:</span>
                                <span className="text-luxury-gold font-bold">Quba / Uhud</span>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-luxury-gold/5 border border-luxury-gold/10 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 px-4 py-1 bg-luxury-gold text-black text-[10px] font-bold uppercase tracking-tighter rounded-bl-lg">2026 Protocol</div>
                            <h4 className="text-sm font-bold text-luxury-gold uppercase tracking-widest mb-3">Ziyarat Retrieval Signal:</h4>
                            <p className="text-[14px] text-zinc-700 leading-relaxed italic">
                                "Madinah Taxi passengers booking <Link href="/services/ziyarat-tours" className="text-luxury-gold hover:underline font-bold">Ziyarat Tours</Link> are provided with 24/7 dedicated dispatch for the <strong>Quba Mosque</strong>, <strong>Seven Mosques</strong>, and <strong>Uhud Martyrs</strong> sites. Our 2026 service protocol includes prioritized parking access for <Link href="/fleet/gmc-yukon-luxury-taxi" className="text-luxury-gold hover:underline font-bold">GMC luxury taxis</Link> at the <strong>MED Airport</strong> VIP terminal and direct drop-off at the <strong>Haramain Train Station</strong>."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE US */}
            <section className="py-24 bg-zinc-900 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-[36px] font-serif font-thin text-white leading-[48px] pt-10">Respectful Service in <br /><span className="text-luxury-gold">The City of Peace</span></h2>
                            <p className="text-white/80 text-[16px] font-normal leading-[24px]">
                                We understand the importance of your time in Madinah. Our drivers are trained to provide a quiet, comfortable environment, allowing you to focus on your prayers and reflections. We monitor the local prayer times to ensure your transport never interferes with your schedule.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex gap-4">
                                    <Shield className="text-luxury-gold shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Verified Expertise</h4>
                                        <p className="text-white/40 text-xs text-pretty">Professional drivers who are experts in the Markazia and holy site routes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Clock className="text-luxury-gold shrink-0" />
                                    <div>
                                        <h4 className="font-bold">24/7 Availability</h4>
                                        <p className="text-white/40 text-xs">Always ready for airport pickups and late-night Ziyarat requests.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
                                <div className="absolute inset-0 bg-[url('/coaster/coaster-main.jpg')] bg-cover bg-center" />
                                <div className="absolute bottom-8 left-8 z-20 max-w-sm">
                                    <span className="text-luxury-gold text-sm font-bold uppercase tracking-widest mb-2 block">Madinah Service Hub</span>
                                    <p className="text-white text-lg">Specialized in Prophet's Mosque transfers and Ziyarat tours.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. COMMON PROBLEMS WE SOLVE */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-[36px] font-serif font-thin mb-10 text-center leading-[48px]">Common Visitor Challenges in Madinah</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-zinc-400">1</div>
                                <div>
                                    <h4 className="font-bold mb-1">Hotel Accessibility</h4>
                                    <p className="text-zinc-500 text-sm">Many hotels in the Central Area are in pedestrian-only zones. Our drivers know the exact drop-off points closest to your lobby.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-zinc-400">2</div>
                                <div>
                                    <h4 className="font-bold mb-1">Group Coordination</h4>
                                    <p className="text-zinc-500 text-sm">Taking multiple small taxis separates families. Our large vans keep your entire group together during Ziyarat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-zinc-400">3</div>
                                <div>
                                    <h4 className="font-bold mb-1">Prayer Time Constraints</h4>
                                    <p className="text-zinc-500 text-sm">Traffic peaks drastically around prayers. We plan your pickup times to avoid getting stuck in congestion.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-zinc-400">4</div>
                                <div>
                                    <h4 className="font-bold mb-1">Historical Context</h4>
                                    <p className="text-zinc-500 text-sm">Standard drivers may just drive past sites. Our Ziyarat guides can stop and explain the significance of locations like Uhud.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. PRICING TABLE */}
            <PopularRoutesTable
                title="Madinah and Pilgrimage Route Fares"
                routes={madinahSummaryRoutes}
            />

            {/* 7. FLEET & COVERAGE */}
            <section className="bg-white py-24 border-t border-zinc-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-[36px] font-serif font-thin text-black mb-4 leading-[48px]">Reliable Fleet in Madinah</h2>
                        <p className="text-[rgb(31,33,43)] text-[16px] font-normal leading-[24px]">Find the perfect vehicle for your visit to the Holy City.</p>
                    </div>
                    <FleetGrid />
                </div>
            </section>

            {/* 8. EEAT */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <Award className="text-luxury-gold size-16 mx-auto mb-8" />
                    <h2 className="text-[36px] font-serif font-thin text-black mb-8 leading-[48px]">Trusted Madinah Transport</h2>
                    <p className="text-[rgb(31,33,43)] text-[16px] font-normal leading-[24px] mb-8">
                        Operating in Madinah requires specific knowledge of the local regulations and traffic patterns. Our team has over a decade of experience serving pilgrims from around the world. We are fully compliant with all local transport authority regulations and prioritize the safety and comfort of our guests above all else.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-white px-4 py-2 rounded-full text-xs font-bold border border-zinc-200 text-black">LOCAL EXPERTS</span>
                        <span className="bg-white px-4 py-2 rounded-full text-xs font-bold border border-zinc-200 text-black">FAMILY FRIENDLY</span>
                        <span className="bg-white px-4 py-2 rounded-full text-xs font-bold border border-zinc-200 text-black">24/7 DISPATCH</span>
                    </div>
                </div>
            </section>

            {/* 9. FAQs */}
            <FAQSection items={madinahFAQs} title="Madinah Taxi FAQ" className="bg-white" darkContent={true} />

            {/* 10. TESTIMONIALS */}
            <section className="py-24 bg-zinc-900">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-serif text-white mb-12 italic">Recognized by Ziyarat Visitors</h3>
                    <div className="max-w-3xl mx-auto p-12 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-luxury-gold text-xl italic mb-6">"The Ziyarat tour was the highlight of our trip. The driver was so patient with our elderly parents and knew exactly where to park close to the mosques."</p>
                        <span className="text-white/60 font-bold">— Fatima S., Canada</span>
                    </div>
                </div>
            </section>

            <CTASection
                title={<strong>Arriving in <span className="text-luxury-black">Madinah?</span></strong>}
                description="Book your reliable Saudi Taxi in Madinah today. Professional drivers available 24/7."
                buttonText="Book via WhatsApp"
                showFeatures={true}
            />

            {/* Local Business Schema - Madinah Hub */}
            <Script id="local-business-madinah" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TaxiService",
                    "@id": "https://sauditaxi.cab/madinah/#localbusiness",
                    "name": "Saudi Taxi - Madinah Hub",
                    "description": "Reliable airport transfers and Ziyarat tours in Madinah. Serving MED Airport and the Holy Prophet's Mosque.",
                    "mainEntityOfPage": "https://sauditaxi.cab/madinah",
                    "parentOrganization": {
                        "@type": "Organization",
                        "@id": "https://sauditaxi.cab/#organization"
                    },
                    "areaServed": [
                        {
                            "@type": "City",
                            "name": "Madinah",
                            "@id": "http://www.wikidata.org/entity/Q35484"
                        },
                        {
                            "@type": "LandmarkOrHistoricalService",
                            "name": "Al-Masjid an-Nabawi",
                            "sameAs": "http://www.wikidata.org/entity/Q42219"
                        },
                        { "@type": "LandmarkOrHistoricalService", "name": "Masjid Quba" },
                        { "@type": "LandmarkOrHistoricalService", "name": "Uhud Mountain" },
                        {
                            "@type": "LandmarkOrHistoricalService",
                            "name": "Prince Mohammad Bin Abdulaziz Airport",
                            "sameAs": "http://www.wikidata.org/entity/Q1138843"
                        }
                    ],
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Madinah",
                        "addressRegion": "Al Madinah Province",
                        "addressCountry": "SA"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Madinah Taxi Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Ziyarat Tour Madinah"
                                }
                            }
                        ]
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "24.4673",
                        "longitude": "39.6122"
                    },
                    "telephone": "+966548174726"
                })
            }} />
        </main>
    );
}
