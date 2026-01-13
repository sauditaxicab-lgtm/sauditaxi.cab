"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const vehicles = {
    camry: {
        title: "Saudi Taxi Camry",
        models: "Toyota Camry",
        description: "The preferred choice for reliable Saudi Taxi transfers. Perfect for solo travelers or small families performing Umrah between Jeddah, Makkah, and Madinah.",
        image: "/fleet/toyota-camry.webp"
    },
    staria: {
        title: "Luxury Umrah MPV",
        models: "Hyundai Staria",
        description: "The ultimate luxury MPV for families. Experience premium comfort in our Saudi Taxi Staria during your spiritual journey in Makkah and Madinah.",
        image: "/fleet/hyundai-staria.webp"
    },
    starex: {
        title: "Premium Family Van",
        models: "Hyundai H1 Starex",
        description: "Spacious Saudi Taxi van ideal for larger families. Plenty of room for Umrah luggage and a comfortable ride to your Makkah hotel.",
        image: "/fleet/hyundai-starex.webp"
    },
    gmc: {
        title: "VIP Executive SUV",
        models: "GMC Yukon XL | Chevrolet Suburban",
        description: "Top-tier Saudi Taxi luxury for VIP guests. The most comfortable way to travel from Jeddah Airport to the Holy Cities with extra luggage capacity.",
        image: "/fleet/gmc-yukon.webp"
    },
    hiace: {
        title: "Large Group Van",
        models: "Toyota HiAce",
        description: "Reliable Saudi Taxi transport for medium groups. Perfect for Ziyarat tours in Madinah and airport transfers for large families.",
        image: "/fleet/luxury_minibus_black.png"
    },
    coaster: {
        title: "Pilgrim Minibus",
        models: "Toyota Coaster",
        description: "Specialized Saudi Taxi minibus for large pilgrim groups. Safe and comfortable group transfers across Makkah, Madinah, and Jeddah.",
        image: "/fleet/toyota-coaster.webp"
    }
};

type VehicleType = keyof typeof vehicles;

export function VehicleFleet() {
    const [activeTab, setActiveTab] = useState<VehicleType>("camry");

    const getLabel = (type: VehicleType) => {
        switch (type) {
            case "camry": return "Camry";
            case "staria": return "Staria";
            case "starex": return "Starex";
            case "gmc": return "GMC";
            case "hiace": return "HiAce";
            case "coaster": return "Coaster";
            default: return type;
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-luxury-black to-[#050510] relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-luxury-gold uppercase tracking-widest text-xs font-bold block mb-2">
                        Browse By Vehicle Type
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                        Choose the Ride That Matches Your Journey
                    </h2>
                    <p className="text-white/80 text-lg font-light mb-8 max-w-3xl mx-auto leading-relaxed">
                        Book our premium chauffeur service for airport transfers, Makkah to Madinah trips, and luxury travel across Saudi Arabia.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        {(Object.keys(vehicles) as VehicleType[]).map((type) => (
                            <button
                                key={type}
                                onClick={() => setActiveTab(type)}
                                className={`px-6 py-2 rounded-full border transition-all uppercase text-xs tracking-wider ${activeTab === type
                                    ? "bg-luxury-gold text-black border-luxury-gold font-bold"
                                    : "border-white/20 text-white/60 hover:border-luxury-gold/50 hover:text-white"
                                    }`}
                            >
                                {getLabel(type)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative max-w-5xl mx-auto min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col md:flex-row items-center gap-12"
                        >
                            <div className="md:w-3/5">
                                <motion.img
                                    src={vehicles[activeTab].image}
                                    alt={vehicles[activeTab].title}
                                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(197,160,89,0.15)] rounded-lg"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                />
                            </div>

                            <div className="md:w-2/5 text-center md:text-left">
                                <h3 className="text-3xl font-serif text-luxury-gold mb-2">{vehicles[activeTab].title}</h3>
                                <p className="text-white/50 text-sm mb-6 uppercase tracking-wide">{vehicles[activeTab].models}</p>
                                <p className="text-white/80 text-lg font-light mb-8 leading-relaxed">
                                    {vehicles[activeTab].description}
                                </p>

                                <Link href={`/booking?vehicle=${encodeURIComponent(vehicles[activeTab].title)}`}>
                                    <Button
                                        variant="gold"
                                        className="bg-gold-gradient text-black px-8 py-6 text-sm font-bold tracking-widest hover:scale-105 transition-transform"
                                    >
                                        BOOK THIS VEHICLE
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
