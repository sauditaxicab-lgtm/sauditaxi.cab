import { ServiceHero } from "@/components/services/ServiceHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/home/CTASection";
import { FleetGrid } from "@/components/services/FleetGrid";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";
import { FAQSection } from "@/components/home/FAQSection";
import { ComparisonChart } from "@/components/home/ComparisonChart";
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Coffee, ShieldCheck, Armchair, Car } from "lucide-react";
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Makkah to Madinah Taxi - Fixed Rates Available | Saudi Taxi',
    description: 'Book a comfortable private taxi from Makkah to Madinah. 4.5-hour journey in GMC/Starias. Door-to-door service, SASCO rest stops, and reliable fixed rates.',
    alternates: {
        canonical: '/makkah-to-madinah-taxi',
    },
};

const routeFAQs = [
    {
        question: "How long is the taxi ride from Makkah to Madinah?",
        answer: "The distance is approximately 450 km. The journey typically takes 4 hours and 30 minutes by private taxi. This is faster than the bus (6+ hours) and more convenient than the train (door-to-door service)."
    },
    {
        question: "Do we stop for breaks during the journey?",
        answer: "Yes, our drivers are happy to stop at premium SASCO rest houses. These stops have clean washrooms, prayer areas, supermarkets, and restaurants (like Al Baik, McDonald's, Starbucks)."
    },
    {
        question: "Is the Haramain Train better than a taxi?",
        answer: "The train is faster (2.5 hours) but requires you to arrange transport to the station in Makkah and from the station in Madinah. A taxi is door-to-door, meaning we pick you up from your Makkah hotel lobby and drop you directly at your Madinah hotel entrance. For families with luggage, a taxi is often more convenient and cost-effective."
    },
    {
        question: "What vehicles are available for this long trip?",
        answer: "For this 4.5-hour journey, comfort is key. We recommend our Hyundai Staria (7-seater) or GMC Yukon XL for families. We also have Toyota Camrys for smaller groups (up to 3)."
    },
    {
        question: "Can we visit Badr or other Ziyarats on the way?",
        answer: "Yes, we can arrange a detour to the Battle of Badr site or Rauha. Please mention this when booking as it adds time and a small additional cost to the trip."
    }
];

export default function MakkahToMadinahPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Makkah to Madinah Taxi"
                subtitle="The Spiritual Migration"
                description="Experience a comfortable, scenic drive between the Two Holy Cities. Door-to-door service tailored for pilgrims."
                backgroundImage="/services/intercity_transfer.png"
            />

            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* Route Overview */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <span className="text-luxury-gold uppercase tracking-[0.2em] font-bold text-xs mb-4 block">Intercity Transfer</span>
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">
                        Comfortable <span className="text-luxury-gold">Hijrah Route</span> Journey
                    </h2>
                    <p className="text-zinc-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
                        Travel between Makkah and Madinah with the peace of mind you deserve. While the <strong>Haramain High Speed Railway</strong> is an option, our <strong>Private Taxi Service</strong> offers the unmatched convenience of door-to-door travel. No hauling luggage to stations, no strict schedules—just you, your family, and a comfortable ride.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-luxury-gold transition-all group">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-luxury-gold transition-colors">
                                <Armchair className="text-luxury-gold group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Premium Comfort</h3>
                            <p className="text-zinc-500 mb-6 text-sm">4.5 hours is a long drive. We use updated vehicles with excellent AC and suspension.</p>
                        </div>
                        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-luxury-gold transition-all group">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-luxury-gold transition-colors">
                                <Coffee className="text-luxury-gold group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Flexible Rest Stops</h3>
                            <p className="text-zinc-500 mb-6 text-sm">Stop at SASCO for prayer, food, or rest whenever you need. It's your private car.</p>
                        </div>
                        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-luxury-gold transition-all group">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-luxury-gold transition-colors">
                                <Car className="text-luxury-gold group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Door-to-Door</h3>
                            <p className="text-zinc-500 mb-6 text-sm">Pickup from your Makkah hotel (e.g., Swissotel) and drop-off at your Madinah hotel (e.g., Pullman ZamZam).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey Timeline - Visualizing the Process */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200 text-black">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-serif text-center mb-16">Your 4.5 Hour Journey</h2>
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 -z-10"></div>

                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="flex-1 md:text-right order-2 md:order-1">
                                <h4 className="font-bold text-xl">Makkah Hotel Pickup</h4>
                                <p className="text-zinc-500">Driver arrives at your hotel lobby. Luggage assistance provided.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-luxury-gold border-4 border-white shadow-lg shrink-0 order-1 md:order-2 z-10"></div>
                            <div className="flex-1 order-3 text-zinc-400 text-sm font-bold tracking-widest">00:00 HRS</div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="flex-1 md:text-right order-2 md:order-1 text-zinc-400 text-sm font-bold tracking-widest">02:00 HRS</div>
                            <div className="w-8 h-8 rounded-full bg-black border-4 border-white shadow-lg shrink-0 order-1 md:order-2 z-10"></div>
                            <div className="flex-1 order-3">
                                <h4 className="font-bold text-xl">SASCO Rest Stop</h4>
                                <p className="text-zinc-500">20-minute break. Prayer facilities, clean restrooms, Starbucks/Al Baik available.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="flex-1 md:text-right order-2 md:order-1">
                                <h4 className="font-bold text-xl">Scenic Desert Route</h4>
                                <p className="text-zinc-500">Enjoy the views of the Hijaz mountains and smooth expressway travel.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-zinc-200 border-4 border-white shadow-lg shrink-0 order-1 md:order-2 z-10"></div>
                            <div className="flex-1 order-3 text-zinc-400 text-sm font-bold tracking-widest">03:30 HRS</div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 md:text-right order-2 md:order-1 text-zinc-400 text-sm font-bold tracking-widest">04:30 HRS</div>
                            <div className="w-8 h-8 rounded-full bg-luxury-gold border-4 border-white shadow-lg shrink-0 order-1 md:order-2 z-10"></div>
                            <div className="flex-1 order-3">
                                <h4 className="font-bold text-xl">Madinah Arrival</h4>
                                <p className="text-zinc-500">Drop-off directly at your hotel entrance in the Markazia area.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison - Why We Are Better */}
            <ComparisonChart />

            {/* UPSELL: Other Popular Routes */}
            <PopularRoutesTable title="Other Popular Transfers" />

            {/* Fleet Section */}
            <section className="bg-white py-24 border-t border-zinc-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-luxury-gold uppercase tracking-[0.2em] font-bold text-xs mb-4 block">Fleet Options</span>
                        <h2 className="text-3xl font-serif text-black mb-4">Choose Your Ride</h2>
                    </div>
                    <FleetGrid />
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection items={routeFAQs} title="Makkah to Madinah FAQ" className="bg-zinc-50" darkContent={true} />

            <CTASection
                title={<strong>Booking for <span className="text-luxury-black">Madinah?</span></strong>}
                description="Secure your comfortable 4.5-hour ride today."
                buttonText="Get a Quote"
                showFeatures={true}
            />

            <Script id="route-schema-makkah-madinah" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Makkah to Madinah Taxi Transfer",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Saudi Taxi"
                    },
                    "areaServed": {
                        "@type": "City",
                        "name": "Madinah"
                    },
                    "description": "Private taxi transfer from Makkah hotels to Madinah hotels. Door-to-door service.",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Taxi Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Sedan Transfer",
                                    "description": "Private Camry/Sonata for up to 3 passengers."
                                },
                                "price": "0.00",
                                "priceCurrency": "SAR"
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Family Van",
                                    "description": "Hyundai Staria/H1 for up to 7 passengers."
                                },
                                "price": "0.00",
                                "priceCurrency": "SAR"
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "GMC Yukon Luxury",
                                    "description": "Luxury SUV for up to 7 passengers."
                                },
                                "price": "0.00",
                                "priceCurrency": "SAR"
                            }
                        ]
                    }
                })
            }} />
        </main>
    );
}
