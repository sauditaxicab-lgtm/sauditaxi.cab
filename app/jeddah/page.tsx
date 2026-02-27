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
        question: "How much is a taxi from Jeddah Airport to the Corniche?",
        answer: "A private taxi from Jeddah Airport (KAIA) to the Corniche or city center hotels is priced competitively based on the vehicle type. We offer fixed-rate transfers to avoid meter anxiety. Contact us for the current rates."
    },
    {
        question: "Can I book a Jeddah taxi for Makkah Umrah transfer?",
        answer: "Yes, we specialize in Jeddah to Makkah transfers. Our drivers can pick you up from your hotel or the airport and take you directly to your hotel in Makkah or the Haram. The trip takes about 60-90 minutes."
    },
    {
        question: "Do you provide taxi service to King Abdullah Economic City (KAEC)?",
        answer: "Absolutely. We offer comfortable long-distance rides from Jeddah to KAEC, complete with professional drivers who know the best routes."
    },
    {
        question: "Is your Jeddah taxi service available 24/7?",
        answer: "Yes, our operations run 24 hours a day, 7 days a week. Whether you have a late-night flight arrival or an early morning departure, our team is ready to serve you."
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
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Professional <span className="text-luxury-gold">Jeddah Taxi</span> Solutions</h2>
                    <p className="text-zinc-600 text-lg leading-relaxed mb-12">
                        As the main entry point for millions of pilgrims and business travelers, Jeddah demands a higher standard of transport. <Link href="/" className="text-luxury-gold hover:underline font-bold">Saudi Taxi</Link> provides licensed, professional drivers for every journey. Whether you're landing at <strong>KAIA Terminal 1</strong>, staying near <strong>Mall of Arabia</strong>, or exploring the <Link href="/services/sightseeing" className="text-luxury-gold hover:underline font-bold">Red Sea Corniche</Link>, our extensive fleet is always nearby.
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
                        <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                            <AlertCircle className="text-luxury-gold" />
                            Jeddah Taxi Rates and Info
                        </h2>
                        <p className="text-zinc-700 text-lg leading-relaxed mb-6">
                            Taxi fares in Jeddah are transparent with us. We provide clearly defined fixed rates for airport transfers to the city center and trips to Makkah, so you never have to worry about meters or traffic delays. Contact us on WhatsApp for an instant customized quote.
                        </p>
                        <p className="text-zinc-500 text-sm italic py-4 border-t border-zinc-100">
                            *Pre-booking is highly recommended for airport pickups to ensure seamless meet and greet.
                        </p>
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
                        <h2 className="text-3xl font-serif text-black mb-4">Available Fleet in Jeddah</h2>
                        <p className="text-zinc-500">Modern vehicles ranging from sedans to 7-seater SUVs and vans.</p>
                    </div>
                    <FleetGrid />
                </div>
            </section>

            {/* Why Choose Us - Localized */}
            <section className="py-24 bg-zinc-900 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-serif pt-10">A Professional Hand in <br /><span className="text-luxury-gold">Jeddah’s Rush</span></h2>
                            <p className="text-white/60 text-lg leading-relaxed">
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
                    "name": "Saudi Taxi - Jeddah Hub",
                    "description": "Dedicated airport transfers and city taxi services in Jeddah. Serving KAIA Terminal 1 and North Terminal.",
                    "areaServed": {
                        "@type": "City",
                        "name": "Jeddah"
                    },
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Jeddah",
                        "addressRegion": "Makkah Province",
                        "addressCountry": "SA"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "21.6796",
                        "longitude": "39.1565"
                    },
                    "telephone": "+966548174726"
                })
            }} />
        </main>
    );
}
