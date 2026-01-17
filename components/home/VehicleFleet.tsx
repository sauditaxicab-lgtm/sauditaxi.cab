"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const vehicles = {
    camry: {
        title: "Jeddah Makkah 4 Seater Taxi",
        models: "Toyota Camry",
        description: "Affordable 4-seater taxi for Umrah transfers between Jeddah, Makkah, and Madinah. Ideal for solo travelers and couples.",
        image: "/camry/camry-main.jpeg"
    },
    staria: {
        title: "Saudi Luxury 7 Seater Taxi",
        models: "Hyundai Staria",
        description: "Premium 7-seater luxury ride. Experience top-tier comfort for family Umrah trips across Saudi Arabia.",
        image: "/staria/staria-main.jpeg"
    },
    starex: {
        title: "Makkah Madinah 7 Seater Taxi",
        models: "Hyundai H1 Starex",
        description: "Spacious 7-seater van, perfect for family transfers between Makkah and Madinah hotels with ample luggage space.",
        image: "/starax/starex-main.jpg"
    },
    gmc: {
        title: "VIP 7 Seater GMC Taxi",
        models: "GMC Yukon XL",
        description: "Executive 7-seater SUV for VIP guests. The most comfortable way to travel from Jeddah Airport to the Holy Cities.",
        image: "/gmc/gmc-main.jpg"
    },
    hiace: {
        title: "Family Taxi 11 Seater",
        models: "Toyota HiAce",
        description: "Reliable 11-seater transport for medium groups. Perfect for Ziyarat tours in Madinah and airport transfers.",
        image: "/hiace/hiace-main.jpeg"
    },
    coaster: {
        title: "Coaster 17 Seater Bus",
        models: "Toyota Coaster",
        description: "Specialized 17-seater minibus for pilgrim groups. Safe and comfortable group transfers across Makkah and Madinah.",
        image: "/coaster/coaster-main.jpg"
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
                    <h2 className="text-white mb-4">
                        Explore Our VIP Saudi Taxi Fleet
                    </h2>
                    <p className="text-white/80 text-lg font-light mb-8 max-w-3xl mx-auto leading-relaxed">
                        Book our premium Saudi Taxi services for airport transfers, Makkah to Madinah trips, and luxury travel across Saudi Arabia.
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
                            <div className="w-full md:w-3/5 relative h-[300px] md:h-[400px]">
                                <motion.div
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={vehicles[activeTab].image}
                                        alt={vehicles[activeTab].title}
                                        fill
                                        className="object-contain drop-shadow-[0_20px_50px_rgba(197,160,89,0.15)] rounded-lg"
                                        sizes="(max-width: 768px) 100vw, 640px"
                                        priority
                                    />
                                </motion.div>
                            </div>

                            <div className="md:w-2/5 text-center md:text-left">
                                <h3 className="text-luxury-gold mb-2">{vehicles[activeTab].title}</h3>
                                <p className="text-white/50 text-sm mb-6 uppercase tracking-wide">{vehicles[activeTab].models}</p>
                                <p className="text-white/80 text-lg font-light mb-8 leading-relaxed">
                                    {vehicles[activeTab].description}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <Link href={`/fleet/${activeTab === 'camry' ? 'toyota-camry-4-seater-taxi' :
                                        activeTab === 'staria' ? 'hyundai-staria-7-seater-taxi' :
                                            activeTab === 'starex' ? 'hyundai-h1-starex-7-seater-taxi' :
                                                activeTab === 'gmc' ? 'gmc-yukon-xl-7-seater-taxi' :
                                                    activeTab === 'hiace' ? 'toyota-hiace-11-seater-taxi' :
                                                        'toyota-coaster-17-seater-taxi'}`} className="flex-1 sm:flex-none">
                                        <Button
                                            variant="outline"
                                            className="w-full sm:w-auto border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black px-6 py-6 text-xs font-bold tracking-widest transition-all"
                                        >
                                            VIEW DETAILS
                                        </Button>
                                    </Link>

                                    <Link href="/booking" className="flex-1 sm:flex-none">
                                        <Button
                                            variant="gold"
                                            className="w-full sm:w-auto bg-gold-gradient text-black px-8 py-6 text-xs font-bold tracking-widest hover:scale-105 transition-transform"
                                        >
                                            BOOK NOW
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
