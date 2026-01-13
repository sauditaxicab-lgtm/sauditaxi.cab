"use client";

import { Button } from "@/components/ui/button";
import Link from 'next/link';

export function InformationSection() {
    return (
        <section className="py-24 px-4 md:px-16 relative overflow-hidden" style={{ backgroundColor: "#0A0A0F" }}>
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20 bg-fixed"
                style={{ backgroundImage: "url('/city_night_luxury_bg.png')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/50 to-luxury-black/0"></div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                    <span className="text-luxury-gold uppercase tracking-widest text-xs font-bold block mb-4">
                        Travel Across the Kingdom
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                        <strong>Experience Premium <br />
                            <span className="text-gold-gradient">Saudi Taxi Service</span></strong>
                    </h2>
                    <div className="space-y-6 text-white/70 font-light text-lg leading-relaxed">
                        <p>
                            Travel across Saudi Arabia in comfort and style. From the holy cities of Makkah and Madinah to Jeddah and Taif, we provide reliable transport for pilgrims and visitors.
                        </p>
                        <p>
                            Whether you're performing Umrah, visiting historical sites, or travelling for business, our fleet of premium vehicles ensures your journey is safe and relaxing.
                        </p>
                        <p>
                            With our Saudi Private Transport service, you can focus on your spiritual journey or business goals while we handle the logistics of your transport.
                        </p>
                    </div>

                    <Link href="/booking">
                        <Button variant="gold" className="mt-8 bg-luxury-gold hover:bg-white text-black px-8 py-6 rounded-sm font-bold tracking-widest">
                            BOOK YOUR TOUR NOW
                        </Button>
                    </Link>
                </div>

                <div className="w-full md:w-1/2 relative px-4 md:px-0">
                    <div className="border border-luxury-gold/30 p-2 md:p-4 rounded-sm rotate-0 md:rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-full">
                        <div
                            className="bg-cover bg-center h-[300px] md:h-[400px] w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-500 bg-no-repeat"
                            style={{ backgroundImage: "url('/hero_bg.png')" }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
