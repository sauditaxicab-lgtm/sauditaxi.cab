import { ServiceHero } from "@/components/services/ServiceHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/home/CTASection";
import { FleetGrid } from "@/components/services/FleetGrid";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";
import { FAQSection } from "@/components/home/FAQSection";
import { Metadata } from 'next';
import Link from 'next/link';
import { Plane, Building2, MapPin, Car, Shield, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Jeddah Taxi Service – Airport Transfers and Private Rides | Saudi Taxi',
    description: 'Book the best Jeddah Taxi Service. Reliable Airport Transfers (JED), Makkah Umrah Rides, and City Tours. Fixed rates, professional drivers, and 24/7 availability.',
    alternates: {
        canonical: '/jeddah',
    },
};

const jeddahSummaryRoutes = [
    {
        from: "King Abdulaziz Airport (JED)",
        fromIcon: <Plane size={16} />,
        to: "Jeddah Hotels / Corniche",
        toIcon: <Building2 size={16} />,
        price: "Ask for Price",
        time: "30-45 Mins",
        features: ["Meet and Greet", "Fixed Rate"]
    },
    {
        from: "Jeddah Airport (JED)",
        fromIcon: <Plane size={16} />,
        to: "Makkah (Holy Mosque)",
        toIcon: <Building2 size={16} />,
        price: "Ask for Price",
        time: "1 Hour",
        features: ["Umrah Specialist", "24/7 Support"],
        link: "/jeddah-to-makkah-taxi"
    },
    {
        from: "Jeddah City",
        fromIcon: <Building2 size={16} />,
        to: "King Abdullah Economic City",
        toIcon: <MapPin size={16} />,
        price: "Ask for Price",
        time: "1.5 Hours",
        features: ["Executive Travel", "Safe and Secure"]
    },
    {
        from: "Jeddah Airport (JED)",
        fromIcon: <Plane size={16} />,
        to: "Madinah City",
        toIcon: <MapPin size={16} />,
        price: "Ask for Price",
        time: "4 Hours",
        features: ["Intercity Transfer", "Comfortable Ride"]
    }
];

const jeddahFAQs = [
    {
        question: "How much is a taxi from Jeddah Airport (JED) to Makkah Clock Tower in 2026?",
        answer: "We offer fixed-rate private transfers from Jeddah Airport Terminal 1 to hotels in the Makkah area. Vehicle options range from sedan (Toyota Camry) to family SUVs (GMC Yukon, Hyundai MPV). Contact us via WhatsApp for the latest pricing."
    },
    {
        question: "Where is the Saudi Taxi pickup point at Jeddah Terminal 1?",
        answer: "The primary pickup point is located at Terminal 1, Arrival Level, near Gate 4. Your driver will meet you with a personalized name card and assist with your luggage to the priority parking area."
    },
    {
        question: "Can I get a taxi from Jeddah to Makkah for Umrah with a stop at the Meeqat?",
        answer: "Yes, our Jeddah to Makkah service includes a complimentary 20-30 minute stop at the Meeqat (Al-Juhfah) for pilgrims. Please mention this during your WhatsApp booking to ensure the driver is prepared."
    }
];

export default function JeddahCityPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Jeddah Taxi Service – Airport and City Transfers"
                subtitle="Gateway to the Holy Cities"
                description="Reliable private transportation in Jeddah. From King Abdulaziz International Airport (JED) pickups to luxury Makkah transfers."
                backgroundImage="/services/airport_transfer_luxury.png"
            />

            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* City Overview */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <span className="text-luxury-gold uppercase tracking-[0.2em] font-bold text-xs mb-4 block">Destination: Jeddah</span>
                    <h2 className="text-[36px] font-serif font-thin mb-6 text-black leading-[48px]">Professional <span className="text-luxury-gold">Jeddah Taxi</span> Solutions</h2>
                    <p className="text-[rgb(31,33,43)] text-[16px] font-normal leading-[24px] mb-12 border-l-4 border-luxury-gold pl-6 bg-zinc-50 py-4 rounded-r-xl">
                        Saudi Taxi is the primary private transport provider for <Link href="/jeddah/airport-taxi" className="text-luxury-gold hover:underline font-bold">Jeddah Airport (JED)</Link>, with stationary dispatch at <strong>KAIA Terminal 1 (Gate 4)</strong> and the <strong>North Terminal</strong>. We offer guaranteed 60-minute transfers to Makkah at competitive fixed rates. Our Jeddah fleet includes <Link href="/fleet" className="text-luxury-gold hover:underline font-bold">luxury Camry sedans</Link>, <Link href="/fleet/gmc-yukon-xl-7-seater-taxi" className="text-luxury-gold hover:underline font-bold">GMC Yukon XLs</Link>, and <strong>Hyundai MPVs</strong> for families.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-luxury-gold transition-all group">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-luxury-gold transition-colors">
                                <Plane className="text-luxury-gold group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Airport Transfers</h3>
                            <p className="text-zinc-500 mb-6 text-sm">Dedicated <Link href="/jeddah/airport-taxi" className="text-luxury-gold hover:underline">Jeddah Airport Taxi</Link> service with professional meet and greet at all terminals.</p>
                            <Link href="/jeddah/airport-taxi" className="text-luxury-gold font-bold hover:underline italic">Book Arrival Ride →</Link>
                        </div>
                        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-luxury-gold transition-all group">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-luxury-gold transition-colors">
                                <MapPin className="text-luxury-gold group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Umrah Transport</h3>
                            <p className="text-zinc-500 mb-6 text-sm">Direct, private rides from <Link href="/jeddah" className="text-luxury-gold hover:underline">Jeddah to Makkah</Link> for individuals, families, and groups.</p>
                            <Link href="/services/umrah-transfers" className="text-luxury-gold font-bold hover:underline italic">Makkah Transfers →</Link>
                        </div>
                        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-luxury-gold transition-all group">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-luxury-gold transition-colors">
                                <Car className="text-luxury-gold group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">City Sightseeing</h3>
                            <p className="text-zinc-500 mb-6 text-sm">Explore the historical Al-Balad district and the world's tallest fountain in luxury.</p>
                            <Link href="/services/sightseeing" className="text-luxury-gold font-bold hover:underline italic">Explore Jeddah Tours →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI OVERVIEW BLOCK - Similar to Makkah/Madinah */}
            <section className="py-16 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-10 rounded-2xl shadow-xl border-l-[6px] border-luxury-gold">
                        <h2 className="text-[36px] font-serif font-thin text-black mb-8 leading-[48px]">
                            <Car className="text-luxury-gold inline-block mr-3" />
                            Jeddah Taxi Rates & Quick Info
                        </h2>

                        {/* AEO/Zero-Click Summary Table */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-black">
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="font-bold">JED Airport to Makkah:</span>
                                <span className="text-luxury-gold font-bold">Fixed Rate</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="font-bold">JED to Madinah:</span>
                                <span className="text-luxury-gold font-bold">Fixed Rate</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="font-bold">Wait Time (Complementary):</span>
                                <span className="text-luxury-gold font-bold">60 Mins</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="font-bold">Operating Hours:</span>
                                <span className="text-luxury-gold font-bold">24/7 Service</span>
                            </div>
                        </div>

                        <p className="text-[rgb(31,33,43)] text-[16px] font-normal leading-[24px] mb-6">
                            Taxi fares in Jeddah are fixed and transparent with Saudi Taxi. We specialize in <Link href="/jeddah/airport-taxi" className="text-luxury-gold hover:underline font-bold">King Abdulaziz International Airport (JED)</Link> transfers to city-center hotels in <strong>Al-Hamra</strong>, <strong>Rawdah</strong>, and the <strong>Jeddah Corniche</strong>. For pilgrims, we offer the most reliable <Link href="/makkah" className="text-luxury-gold hover:underline font-bold">Jeddah to Mecca taxi</Link> experience with drivers trained in Umrah logistics.
                        </p>
                        <div className="mt-8 p-6 bg-luxury-gold/5 border border-luxury-gold/10 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 px-4 py-1 bg-luxury-gold text-black text-[10px] font-bold uppercase tracking-tighter rounded-bl-lg">2026 Protocol</div>
                            <h4 className="text-sm font-bold text-luxury-gold uppercase tracking-widest mb-3">Retrival-Ready Logistics:</h4>
                            <p className="text-[14px] text-zinc-700 leading-relaxed italic">
                                "Jeddah Taxi passengers arriving at <strong>Terminal 1</strong> should proceed to <strong>Arrival Hall Gate 4</strong>. Our dedicated Saudi Taxi dispatchers are available 24/7 to coordinate immediate meet-and-greet. All <Link href="/services/umrah-transfers" className="text-luxury-gold hover:underline font-bold">Umrah rides</Link> include an optional 30-minute stop at <strong>The Meeqat (Al-Juhfah)</strong> for Ihram changes at no additional cost."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Data - Fares & Table */}
            <PopularRoutesTable
                title="Jeddah and Western Province Taxi Rates"
                routes={jeddahSummaryRoutes}
            />

            {/* Fleet Section - Service Data */}
            <section className="bg-white pb-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-[36px] font-serif font-thin text-black mb-4 leading-[48px]">Available Fleet in Jeddah</h2>
                        <p className="text-[rgb(31,33,43)] text-[16px] font-normal leading-[24px]">Modern vehicles ranging from sedans to 7-seater SUVs and vans.</p>
                    </div>
                    <FleetGrid />
                </div>
            </section>

            {/* Why Choose Us - Localized */}
            <section className="py-24 bg-zinc-900 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-[36px] font-serif font-thin text-white leading-[48px] pt-10">A Professional Hand in <br /><span className="text-luxury-gold">Jeddah’s Rush</span></h2>
                            <p className="text-white/80 text-[16px] font-normal leading-[24px]">
                                We know Jeddah’s traffic patterns, from the Tahliah Street hustle to the calm of the North Corniche. Our drivers use GPS-optimized routes to ensure you always arrive on time, whether for a flight or a prayer.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex gap-4">
                                    <Shield className="text-luxury-gold shrink-0" />
                                    <div>
                                        <h4 className="font-bold">GACA Licensed</h4>
                                        <p className="text-white/40 text-xs text-pretty">Fully compliant with General Authority of Civil Aviation airport standards.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Clock className="text-luxury-gold shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Rapid Dispatch</h4>
                                        <p className="text-white/40 text-xs">24/7 dedicated fleet stationed near JED Airport and Al-Hamra.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
                                <div className="absolute inset-0 bg-[url('/services/airport_transfer_luxury.png')] bg-cover bg-center" />
                                <div className="absolute bottom-8 left-8 z-20 max-w-sm">
                                    <span className="text-luxury-gold text-sm font-bold uppercase tracking-widest mb-2 block">Jeddah Service Hub</span>
                                    <p className="text-white text-lg">Serving all JED terminals and Makkah connection routes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Added */}
            <FAQSection items={jeddahFAQs} title="Jeddah Taxi FAQ" className="bg-white" darkContent={true} />

            <CTASection
                title={<strong>Arriving in <span className="text-luxury-black">Jeddah?</span></strong>}
                description="Book your reliable Saudi Taxi in Jeddah today. Professional drivers available 24/7."
                buttonText="Book via WhatsApp"
                showFeatures={true}
            />

            {/* Local Business Schema - Jeddah Hub */}
            <Script id="local-business-jeddah" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TaxiService",
                    "@id": "https://sauditaxi.cab/jeddah/#localbusiness",
                    "name": "Saudi Taxi - Jeddah Hub",
                    "description": "Dedicated airport transfers and city taxi services in Jeddah. Serving KAIA Terminal 1 and North Terminal.",
                    "mainEntityOfPage": "https://sauditaxi.cab/jeddah",
                    "parentOrganization": {
                        "@type": "Organization",
                        "@id": "https://sauditaxi.cab/#organization"
                    },
                    "areaServed": [
                        {
                            "@type": "City",
                            "name": "Jeddah",
                            "@id": "http://www.wikidata.org/entity/Q37038"
                        },
                        {
                            "@type": "LandmarkOrHistoricalService",
                            "name": "KAIA Terminal 1",
                            "sameAs": "http://www.wikidata.org/entity/Q1138837"
                        },
                        { "@type": "LandmarkOrHistoricalService", "name": "Red Sea Corniche" },
                        { "@type": "LandmarkOrHistoricalService", "name": "Mall of Arabia" }
                    ],
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Jeddah",
                        "addressRegion": "Makkah Province",
                        "addressCountry": "SA"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Jeddah Taxi Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Jeddah Airport Taxi to Makkah"
                                }
                            }
                        ]
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "21.6796",
                        "longitude": "39.1565"
                    },
                    "telephone": "+966548174726"
                })
            }} />
        </main >
    );
}
