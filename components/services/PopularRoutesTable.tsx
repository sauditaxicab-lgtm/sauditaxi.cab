"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Plane, Building2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Route {
    from: string;
    fromIcon: React.ReactNode;
    to: string;
    toIcon: React.ReactNode;
    price: string;
    time: string;
    features: string[];
    link?: string; // Optional link specific to this route
}

const defaultRoutes: Route[] = [
    {
        from: "Jeddah Airport (JED)",
        fromIcon: <Plane size={16} />,
        to: "Makkah Hotels / Haram",
        toIcon: <Building2 size={16} />,
        price: "Contact for Quote",
        time: "60-90 Mins",
        features: ["Meet and Greet", "Luggage Help"],
        link: "/jeddah-to-makkah-taxi"
    },
    {
        from: "Makkah",
        fromIcon: <MapPin size={16} />,
        to: "Madinah (Any Hotel)",
        toIcon: <MapPin size={16} />,
        price: "Contact for Quote",
        time: "4.5 Hours",
        features: ["Professional Driver", "Refreshment Stops"],
        link: "/makkah-to-madinah-taxi"
    },
    {
        from: "Madinah Airport (MED)",
        fromIcon: <Plane size={16} />,
        to: "Masjid An-Nabawi Hotels",
        toIcon: <Building2 size={16} />,
        price: "Contact for Quote",
        time: "20-30 Mins",
        features: ["Punctual Service", "Luxury Fleet"]
    },
    {
        from: "Jeddah Airport (JED)",
        fromIcon: <Plane size={16} />,
        to: "Madinah City",
        toIcon: <Building2 size={16} />,
        price: "Contact for Quote",
        time: "6 Hours",
        features: ["Luxury SUV / Sedan", "Safe Travel"]
    }
];

export function PopularRoutesTable({
    title = "KSA Taxi Fares and Popular Routes",
    routes = defaultRoutes
}: {
    title?: string;
    routes?: Route[];
}) {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-luxury-gold uppercase tracking-[0.2em] font-bold text-xs mb-4 block">Transparent Pricing</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-black mb-6">{title}</h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                        Explore our fixed-rate taxi fares between major hubs. Our prices are all-inclusive with no hidden surprises, tailored for pilgrims and travelers.
                    </p>
                </div>

                <div className="overflow-x-auto bg-white rounded-2xl border border-zinc-100 shadow-2xl">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="py-6 px-8 font-serif text-lg">Pick-Up</th>
                                <th className="py-6 px-4"></th>
                                <th className="py-6 px-8 font-serif text-lg">Drop-Off</th>
                                <th className="py-6 px-6 font-serif text-lg text-center">Fares (From)</th>
                                <th className="py-6 px-6 font-serif text-lg text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {routes.map((route, i) => (
                                <tr key={i} className="hover:bg-zinc-50 transition-colors group">
                                    <td className="py-8 px-8">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-luxury-gold mb-1">
                                                {route.fromIcon}
                                                <span className="text-[10px] font-bold uppercase tracking-widest">Origin</span>
                                            </div>
                                            <span className="text-black font-bold text-lg">{route.from}</span>
                                        </div>
                                    </td>
                                    <td className="py-8 px-4 text-center">
                                        <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-luxury-gold transition-colors">
                                            <ArrowRight className="text-zinc-400 group-hover:text-black transition-colors" size={20} />
                                        </div>
                                    </td>
                                    <td className="py-8 px-8">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-luxury-gold mb-1">
                                                {route.toIcon}
                                                <span className="text-[10px] font-bold uppercase tracking-widest">Destination</span>
                                            </div>
                                            <span className="text-black font-bold text-lg">{route.to}</span>
                                        </div>
                                    </td>
                                    <td className="py-8 px-6 text-center">
                                        <div className="flex flex-col items-center">
                                            <span className="text-luxury-gold font-black text-xl">{route.price}</span>
                                            <span className="text-zinc-400 text-xs mt-1">{route.time}</span>
                                        </div>
                                    </td>
                                    <td className="py-8 px-6 text-center">
                                        <Link href={route.link || "/booking"}>
                                            <Button variant="gold" className="rounded-full px-6 h-12 shadow-lg shadow-gold/20 hover:scale-105 active:scale-95 transition-all">
                                                Book Now
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-8 text-zinc-400 text-sm italic">
                    <span className="flex items-center gap-2">
                        * Prices are available on request.
                    </span>
                    <span className="flex items-center gap-2">
                        * Free Cancellation up to 24h.
                    </span>
                    <span className="flex items-center gap-2">
                        * Meet and Greet included.
                    </span>
                </div>
            </div>
        </section>
    );
}
