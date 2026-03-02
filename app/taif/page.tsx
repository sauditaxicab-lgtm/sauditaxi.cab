import { ServiceHero } from "@/components/services/ServiceHero";
import { FleetGrid } from "@/components/services/FleetGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Shield, Clock, Award, Landmark, Mountain } from "lucide-react";
import Script from 'next/script';
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
    title: 'Taif Taxi Service – Reliable Transfers and City Tours | Saudi Taxi',
    description: 'Book a reliable Taif Taxi for city tours and intercity transfers. Fixed rates for Taif to Makkah, Jeddah Airport, and local sightseeing. Professional drivers available 24/7.',
    alternates: {
        canonical: '/taif',
    },
};

const taifRoutes = [
    {
        from: "Taif City",
        fromIcon: <MapPin size={16} />,
        to: "Makkah (Haram Area)",
        toIcon: <MapPin size={16} />,
        price: "Ask for Price",
        time: "1.5 Hours",
        features: ["Intercity Transfer", "Fixed Fare"]
    },
    {
        from: "Taif Airport (TIF)",
        fromIcon: <MapPin size={16} />,
        to: "Taif City Center",
        toIcon: <Landmark size={16} />,
        price: "Ask for Price",
        time: "30 Mins",
        features: ["Meet and Greet", "Punctual"]
    }
];

export default function TaifCityPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Taif Taxi Service"
                subtitle="The Rose City & Summer Capital"
                description="Experience the cool heights of Taif with professional transportation. From cable car tours to Makkah transfers, we provide reliable local and intercity taxi services."
                backgroundImage="/services/intercity_jeddah_madinah.png"
            />

            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <span className="text-luxury-gold uppercase tracking-[0.2em] font-bold text-xs mb-4 block">Destination: Taif</span>
                    <h1 className="text-[36px] font-serif font-thin mb-8 text-black leading-[48px]">
                        Professional <strong>Taif Taxi</strong> for City Tours and Transfers
                    </h1>
                    <div className="text-[rgb(31,33,43)] text-[16px] font-normal leading-[24px] space-y-6 text-justify md:text-center">
                        <p>
                            Taif, known for its pleasant weather and stunning mountain landscapes, is a premier destination for both relaxation and spiritual journeys. <Link href="/" className="text-luxury-gold hover:underline font-bold">Saudi Taxi</Link> offers expert transportation services across Taif, ensuring you can visit the <strong>Shubra Palace</strong>, enjoy the <strong>Al Hada</strong> mountain views, or transfer seamlessly to <strong>Makkah</strong> and <strong>Jeddah</strong>.
                        </p>
                        <p>
                            Our drivers are local experts who navigate the mountain roads with safety and precision. We provide a range of vehicles perfect for families visiting the <strong>Taif Rose</strong> gardens or business travelers heading to the city center. Whether you are looking for an <strong>Umrah taxi from Taif to Makkah</strong> or a comfortable ride to <strong>King Abdulaziz International Airport (JED)</strong>, our fleet is ready for your mountain adventure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Table */}
            <PopularRoutesTable
                title="Taif Intercity Taxi Rates"
                routes={taifRoutes}
            />

            {/* Fleet Section */}
            <section className="bg-white py-24 border-t border-zinc-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-[36px] font-serif font-thin text-black mb-4 leading-[48px]">Reliable Fleet in Taif</h2>
                        <p className="text-[rgb(31,33,43)] text-[16px] font-normal leading-[24px]">Modern vehicles equipped for mountain terrain and long-distance travel.</p>
                    </div>
                    <FleetGrid />
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-24 bg-zinc-900 border-y border-white/5">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <Award className="text-luxury-gold size-16 mx-auto mb-8" />
                    <h2 className="text-[36px] font-serif font-thin text-white mb-8 leading-[48px]">Trusted Taif Transport</h2>
                    <p className="text-white/80 text-[16px] font-normal leading-[24px] mb-8">
                        With years of experience in the Makkah and Taif regions, we provide a service that prioritizes safety on mountain routes and punctuality for airport transfers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                            <Shield className="text-luxury-gold size-5" />
                            <span className="text-sm font-bold uppercase tracking-widest">Safe Drivers</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                            <Clock className="text-luxury-gold size-5" />
                            <span className="text-sm font-bold uppercase tracking-widest">Always On Time</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Local Business Schema - Taif Hub */}
            <Script id="local-business-taif" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TaxiService",
                    "@id": "https://sauditaxi.cab/taif/#localbusiness",
                    "name": "Saudi Taxi - Taif Hub",
                    "description": "Professional taxi services in Taif, providing mountain tours and intercity transfers to Makkah and Jeddah.",
                    "mainEntityOfPage": "https://sauditaxi.cab/taif",
                    "parentOrganization": {
                        "@type": "Organization",
                        "@id": "https://sauditaxi.cab/#organization"
                    },
                    "areaServed": [
                        {
                            "@type": "City",
                            "name": "Taif",
                            "@id": "http://www.wikidata.org/entity/Q168532"
                        },
                        { "@type": "LandmarkOrHistoricalService", "name": "Shubra Palace" },
                        { "@type": "LandmarkOrHistoricalService", "name": "Al Hada" },
                        { "@type": "LandmarkOrHistoricalService", "name": "Taif Airport" }
                    ],
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Taif",
                        "addressRegion": "Makkah Province",
                        "addressCountry": "SA"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "21.2703",
                        "longitude": "40.4158"
                    },
                    "telephone": "+966548174726"
                })
            }} />

            <CTASection
                title={<strong>Exploring <span className="text-luxury-black">Taif?</span></strong>}
                description="Book your reliable Saudi Taxi in Taif today. Professional drivers available 24/7."
                buttonText="Book via WhatsApp"
                showFeatures={true}
            />
        </main>
    );
}
