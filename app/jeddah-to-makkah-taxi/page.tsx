import { ServiceHero } from "@/components/services/ServiceHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/home/CTASection";
import { FleetGrid } from "@/components/services/FleetGrid";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";
import { FAQSection } from "@/components/home/FAQSection";
import { Metadata } from 'next';
import Link from 'next/link';
import { Plane, Building2, MapPin, CheckCircle2, DollarSign, Clock, ShieldCheck, User, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import Script from 'next/script';
import { ComparisonChart } from "@/components/home/ComparisonChart"; // Reusing this is smart

export const metadata: Metadata = {
    title: 'Jeddah Airport to Makkah Taxi - Fixed Rates Available | Saudi Taxi',
    description: 'Book a private taxi from Jeddah Airport (JED) to Makkah Hotels and Haram. 24/7 Service, Reliable Fixed Rates, GMC SUVs available. Request a quote now.',
    alternates: {
        canonical: '/jeddah-to-makkah-taxi',
    },
};

const routeFAQs = [
    {
        question: "How much is a taxi from Jeddah Airport to Makkah?",
        answer: "Our fixed pricing for a private sedan (Camry/Hyundai) from Jeddah Airport to Makkah is transparent and competitive. Larger vehicles like the Hyundai Staria (7-seater) and luxury GMC Yukons are also available. Contact us for an exact quote."
    },
    {
        question: "Do your drivers stop at the Meeqat?",
        answer: "Most flights arriving in Jeddah pass the Meeqat in the air. However, if you are travelling by road from Madinah or need to stop at a specific location to change into Ihram, please inform us during booking. Our drivers know all Meeqat locations."
    },
    {
        question: "Can I wear Ihram at Jeddah Airport?",
        answer: "Yes, Jeddah Airport (KAIA) has designated facilities for pilgrims to shower and change into Ihram. Our driver will wait for you if you need extra time, but please mention this when booking."
    },
    {
        question: "How long is the journey from Jeddah to Makkah?",
        answer: "The drive typically takes 60 to 90 minutes depending on traffic and your hotel location in Makkah (Aziziyah vs Ajyad vs Clock Tower)."
    },
    {
        question: "Is the taxi fare per person or per car?",
        answer: "The price is per vehicle, not per person. A sedan fits up to 3 passengers with standard luggage. An family van fits up to 7."
    }
];

export default function JeddahToMakkahPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Jeddah Airport to Makkah Taxi"
                subtitle="Your Spiritual Journey Starts Here"
                description="The most trusted private transfer service for Umrah pilgrims. Skip the bus queues and arrive at your hotel in comfort."
                backgroundImage="/services/airport_transfer_luxury.png"
            />

            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* Route Overview */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <span className="text-luxury-gold uppercase tracking-[0.2em] font-bold text-xs mb-4 block">Most Popular Route</span>
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">
                        Seamless <span className="text-luxury-gold">Umrah Transfers</span>
                    </h2>
                    <p className="text-zinc-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
                        Arriving at <strong>King Abdulaziz International Airport (JED)</strong> can be overwhelming. <Link href="/" className="text-luxury-gold hover:underline font-bold">Saudi Taxi</Link> provides a stress-free, door-to-door service directly to your hotel in Makkah or the Holy Haram. Our drivers are experienced with pilgrim needs and the geography of the Holy City.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {/* Feature 1 */}
                        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-luxury-gold transition-all group">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-luxury-gold transition-colors">
                                <DollarSign className="text-luxury-gold group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Fixed Pricing</h3>
                            <p className="text-zinc-500 mb-6 text-sm">No meters, no haggling. Know your fare before you fly. Contact us on WhatsApp for a quick quote.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-luxury-gold transition-all group">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-luxury-gold transition-colors">
                                <Clock className="text-luxury-gold group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Flight Monitoring</h3>
                            <p className="text-zinc-500 mb-6 text-sm">We track your flight arrival. If you're delayed, we wait—at no extra cost.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-luxury-gold transition-all group">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-luxury-gold transition-colors">
                                <ShieldCheck className="text-luxury-gold group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Makkah Permits</h3>
                            <p className="text-zinc-500 mb-6 text-sm">Our vehicles have full access to Makkah's central zones and hotel drop-off points.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200 text-black">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-serif text-center mb-16">Arrival Process</h2>
                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 -z-10"></div>

                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="flex-1 md:text-right order-2 md:order-1">
                                <h4 className="font-bold text-xl">Flight Lands</h4>
                                <p className="text-zinc-500"> Proceed through customs. Our driver is already monitoring your flight status.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-black border-4 border-white shadow-lg shrink-0 order-1 md:order-2 z-10 flex items-center justify-center">
                                <Plane size={14} className="text-luxury-gold" />
                            </div>
                            <div className="flex-1 order-3 text-zinc-400 text-sm font-bold tracking-widest">00:00</div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="flex-1 md:text-right order-2 md:order-1 text-zinc-400 text-sm font-bold tracking-widest">00:45</div>
                            <div className="w-8 h-8 rounded-full bg-luxury-gold border-4 border-white shadow-lg shrink-0 order-1 md:order-2 z-10 flex items-center justify-center">
                                <User size={14} className="text-black" />
                            </div>
                            <div className="flex-1 order-3">
                                <h4 className="font-bold text-xl">Meet and Greet</h4>
                                <p className="text-zinc-500">Driver welcomes you at the arrival hall with a name board. Assistance with luggage.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="flex-1 md:text-right order-2 md:order-1">
                                <h4 className="font-bold text-xl">Depart JED Airport</h4>
                                <p className="text-zinc-500">Comfortable drive via the Makkah-Jeddah Highway. Optional stop for Ihram if needed.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-zinc-200 border-4 border-white shadow-lg shrink-0 order-1 md:order-2 z-10 flex items-center justify-center">
                                <Car size={14} className="text-zinc-500" />
                            </div>
                            <div className="flex-1 order-3 text-zinc-400 text-sm font-bold tracking-widest">01:00</div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 md:text-right order-2 md:order-1 text-zinc-400 text-sm font-bold tracking-widest">01:30</div>
                            <div className="w-8 h-8 rounded-full bg-luxury-gold border-4 border-white shadow-lg shrink-0 order-1 md:order-2 z-10 flex items-center justify-center">
                                <MapPin size={14} className="text-black" />
                            </div>
                            <div className="flex-1 order-3">
                                <h4 className="font-bold text-xl">Hotel Drop-off</h4>
                                <p className="text-zinc-500">Direct arrival at your Makkah hotel or Haram entrance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison - Why We Are Better */}
            <ComparisonChart />

            {/* UPSELL: Other Popular Routes */}
            <PopularRoutesTable title="Continue Your Journey" />

            {/* Fleet Section */}
            <section className="bg-zinc-50 py-24 border-t border-zinc-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-luxury-gold uppercase tracking-[0.2em] font-bold text-xs mb-4 block">Choose Your Comfort</span>
                        <h2 className="text-3xl font-serif text-black mb-4">Vehicles for Every Pilgrim</h2>
                        <p className="text-zinc-500">From economical sedans to spacious GMCs for large families.</p>
                    </div>
                    <FleetGrid />
                </div>
            </section>


            {/* FAQ Section */}
            <FAQSection items={routeFAQs} title="Jeddah to Makkah Journey FAQ" className="bg-white" darkContent={true} />

            <CTASection
                title={<strong>Ready for <span className="text-luxury-black">Umrah?</span></strong>}
                description="Book your ride now and focus on your prayers, not the transport."
                buttonText="Get Private Taxi Quote"
                showFeatures={true}
            />

            {/* Structured Data for this specific Route Service */}
            <Script id="route-schema-jeddah-makkah" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Jeddah Airport to Makkah Taxi Transfer",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Saudi Taxi"
                    },
                    "areaServed": {
                        "@type": "City",
                        "name": "Makkah"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Taxi Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Standard Sedan Transfer",
                                    "description": "Private taxi for up to 3 passengers from Jeddah Airport to Makkah."
                                },
                                "price": "0.00",
                                "priceCurrency": "SAR"
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Family Van (H1/Staria)",
                                    "description": "Private van for up to 7 passengers from Jeddah Airport to Makkah."
                                },
                                "price": "0.00",
                                "priceCurrency": "SAR"
                            }
                        ]
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "850"
                    }
                })
            }} />
        </main>
    );
}
