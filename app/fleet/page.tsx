import { ServiceHero } from "@/components/services/ServiceHero";
import { FleetGrid } from "@/components/services/FleetGrid";
import { FAQSection } from "@/components/home/FAQSection";
import { Button } from "@/components/ui/button";
import { Check, Star, Shield, Car } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Saudi Arabia Taxi Fares and Fleet | Reliable Umrah and Airport Transport',
    description: 'Explore our extensive fleet of taxis in Saudi Arabia. Transparent fares for Toyota Camry, Hyundai Staria, GMC Yukon XL, and more. 24/7 airport and Umrah transfers.',
    alternates: {
        canonical: '/fleet',
    },
};

export default function FleetPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Saudi Arabia Taxi Fares and Fleet"
                subtitle="Reliable Saudi Private Taxi and Umrah Transfers"
                description="The most transparent Saudi Arabia taxi fares for your pilgrimage. Book a reliable Saudi private taxi near you in Jeddah, Makkah, or Madinah with 24/7 online booking."
                backgroundImage="/fleet/fleet_hero_premium.png"
            />
            {/* Breadcrumbs */}
            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* The Gold Standard */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-16 flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <span className="text-luxury-gold uppercase tracking-widest font-bold text-sm">The Gold Standard</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-black"><strong>The Saudi Taxi Quality Standard</strong></h2>
                        <p className="text-zinc-600 text-lg leading-relaxed">
                            Our modern fleet is designed for a comfortable and safe travel for pilgrims and travelers. From executive sedans for couples to spacious GMCs and buses for families and groups, each vehicle is selected to suit Umrah transfers, intercity travel, and Ziyarat tours.
                        </p>
                        <p className="text-zinc-600 text-lg leading-relaxed">
                            Every car is well-maintained, air-conditioned, and operated by experienced professional drivers who prioritise your safety and prayer times. Wherever you’re headed in The Kingdom, enjoy a smooth, dependable ride.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 border border-luxury-gold/30">
                                    <Car className="text-luxury-gold" />
                                </div>
                                <div>
                                    <h4 className="text-black font-bold mb-1">Immaculate Presentation</h4>
                                    <p className="text-zinc-500 text-sm">Every vehicle is clean, comfortable, and rigorously inspected.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 border border-luxury-gold/30">
                                    <Shield className="text-luxury-gold" />
                                </div>
                                <div>
                                    <h4 className="text-black font-bold mb-1">Professional Drivers</h4>
                                    <p className="text-zinc-500 text-sm">Fully licensed, experienced, and knowledgeable about Holy sites.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 border border-luxury-gold/30">
                                    <Star className="text-luxury-gold" />
                                </div>
                                <div>
                                    <h4 className="text-black font-bold mb-1">Comfort Amenities</h4>
                                    <p className="text-zinc-500 text-sm">High-quality A/C, spacious seating, and luggage assistance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[600px] relative rounded-sm overflow-hidden group shadow-2xl">
                        <Image
                            src="/fleet/saudi_taxi_premium_gold_standard.png"
                            alt="Experience Excellence"
                            fill
                            className="object-cover group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 z-10" />
                        <div className="absolute bottom-10 left-10 right-10 z-20">
                            <h3 className="text-3xl font-serif text-white mb-2">Quality and Comfort</h3>
                            <p className="text-white/80">Travel with the peace of mind that comes from a trusted safety record.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Saudi Arabia Taxi Fares Section */}


            {/* Fleet Grid - Using the Reusable Component (Data matches provided text) */}
            <div id="fleet-grid">
                <FleetGrid />
            </div>

            {/* Fleet Capacity Guide - New Content Section */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-luxury-gold uppercase tracking-widest font-bold text-xs block mb-4">Capacity Guide</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-black mb-6">Vehicle Capacity and <span className="text-luxury-gold">Luggage Guide</span></h2>
                        <p className="text-zinc-600 max-w-2xl mx-auto">
                            Choosing the right vehicle ensures a comfortable journey. Use our guide below to find the perfect match for your group and luggage requirements.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-luxury-gold">
                                    <th className="py-4 px-6 text-left font-serif text-lg">Vehicle Type</th>
                                    <th className="py-4 px-6 text-center font-serif text-lg">Passengers</th>
                                    <th className="py-4 px-6 text-center font-serif text-lg">Large Suitcases</th>
                                    <th className="py-4 px-6 text-center font-serif text-lg">Hand Bags</th>
                                    <th className="py-4 px-6 text-right font-serif text-lg">Best Use</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100">
                                <tr>
                                    <td className="py-6 px-6 font-bold">Toyota Camry</td>
                                    <td className="py-6 px-6 text-center">4 Pax</td>
                                    <td className="py-6 px-6 text-center">2</td>
                                    <td className="py-6 px-6 text-center">1</td>
                                    <td className="py-6 px-6 text-right text-zinc-500">Individuals / Couples</td>
                                </tr>
                                <tr>
                                    <td className="py-6 px-6 font-bold">Hyundai Staria / Starex</td>
                                    <td className="py-6 px-6 text-center">7 Pax</td>
                                    <td className="py-6 px-6 text-center">4-5</td>
                                    <td className="py-6 px-6 text-center">3</td>
                                    <td className="py-6 px-6 text-right text-zinc-500">Small Families / Umrah</td>
                                </tr>
                                <tr>
                                    <td className="py-6 px-6 font-bold">GMC Yukon XL</td>
                                    <td className="py-6 px-6 text-center">7 Pax</td>
                                    <td className="py-6 px-6 text-center">6</td>
                                    <td className="py-6 px-6 text-center">4</td>
                                    <td className="py-6 px-6 text-right text-zinc-500">VIP / Executive Travel</td>
                                </tr>
                                <tr>
                                    <td className="py-6 px-6 font-bold">Toyota HiAce</td>
                                    <td className="py-6 px-6 text-center">11 Pax</td>
                                    <td className="py-6 px-6 text-center">8</td>
                                    <td className="py-6 px-6 text-center">5</td>
                                    <td className="py-6 px-6 text-right text-zinc-500">Medium Groups / Ziyarat</td>
                                </tr>
                                <tr>
                                    <td className="py-6 px-6 font-bold">Toyota Coaster</td>
                                    <td className="py-6 px-6 text-center">17 Pax</td>
                                    <td className="py-6 px-6 text-center">15</td>
                                    <td className="py-6 px-6 text-center">10</td>
                                    <td className="py-6 px-6 text-right text-zinc-500">Large Pilgrim Groups</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Safety & Excellence Section */}
            <section className="py-12 md:py-24 bg-zinc-900 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Our Commitment to <br /><span className="text-luxury-gold">Safety and Excellence</span></h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-8">
                                At Saudi Taxi, we believe that the quality of our vehicles is a direct reflection of our commitment to your spiritual journey. Every car in our fleet undergoes rigorous safety checks and regular maintenance to ensure absolute reliability.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "24/7 Roadside Assistance and Vehicle Tracking",
                                    "Daily Sanitation and deep cleaning for every ride",
                                    "Fully Insured vehicles with modern safety features",
                                    "Strict maintenance schedule following manufacturer specs",
                                    "Professional drivers with extensive local knowledge"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80">
                                        <div className="w-2 h-2 rounded-full bg-luxury-gold shrink-0"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="h-64 relative rounded-sm overflow-hidden">
                                <Image src="/fleet/fleet_hero_premium.png" alt="Safety First" fill className="object-cover" />
                            </div>
                            <div className="h-64 relative rounded-sm overflow-hidden mt-8">
                                <Image src="/fleet/fleet_gold_standard.png" alt="Excellence" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet FAQ Section */}
            <FAQSection
                title="Saudi Taxi Fleet FAQ"
                className="bg-white"
                darkContent={true}
                items={[
                    { question: "How can I book a Saudi Taxi near me?", answer: "You can book a reliable Saudi Taxi near you instantly through our website or WhatsApp. We provide 24/7 coverage across Jeddah, Makkah, and Madinah." },
                    { question: "Are all Saudi Taxi vehicles air-conditioned?", answer: "Yes, every vehicle in our modern fleet is equipped with high-performance air conditioning for your comfort." }
                ]}
            />

            {/* Bottom CTA */}
            <section className="py-24 relative bg-luxury-gold overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif text-luxury-black mb-6"><strong>Ready to Experience <span className="text-white">Saudi Taxi Comfort?</span></strong></h2>
                    <p className="text-luxury-black/80 text-xl mb-8">Book your reliable Saudi Taxi today.</p>
                    <div className="flex justify-center gap-6">
                        <Link href="/booking">
                            <Button size="lg" className="bg-luxury-black text-luxury-gold hover:bg-luxury-black/90 font-bold px-10 py-6 text-lg rounded-sm shadow-xl">Book Now</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
