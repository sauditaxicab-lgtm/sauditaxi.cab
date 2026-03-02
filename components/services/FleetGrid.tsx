"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { contactHelpers } from "@/lib/constants";

interface FleetItem {
    name: string;
    slug: string;
    description: string;
    passengers: string;
    luggage: number;
    bags: number;
    image: string;
}

const defaultFleet: FleetItem[] = [
    {
        name: "Toyota Camry",
        slug: "toyota-camry-4-seater-taxi",
        description: "Reliable and comfortable 4-seater sedan. Ideal for individual pilgrims and corporate travelers.",
        passengers: "4",
        luggage: 2,
        bags: 1,
        image: "/camry/camry-main.jpeg"
    },
    {
        name: "Hyundai Staria",
        slug: "hyundai-staria-7-seater-taxi",
        description: "Luxury 7-seater MPV with futuristic cabin design. The top choice for family VIP transfers.",
        passengers: "7",
        luggage: 5,
        bags: 3,
        image: "/staria/staria-main.jpeg"
    },
    {
        name: "GMC Yukon XL",
        slug: "gmc-yukon-xl-7-seater-taxi",
        description: "Elite 7-seater SUV with massive luggage space. Experience the pinnacle of Saudi road travel.",
        passengers: "7",
        luggage: 6,
        bags: 4,
        image: "/gmc/gmc-main.jpg"
    },
    {
        name: "Hyundai H1 Starex",
        slug: "hyundai-h1-starex-7-seater-taxi",
        description: "Versatile 7-seater family van. Exceptional value for airport and Ziyarat commutes.",
        passengers: "7",
        luggage: 4,
        bags: 2,
        image: "/starax/starex-main.jpg"
    },
    {
        name: "Toyota HiAce",
        slug: "toyota-hiace-11-seater-taxi",
        description: "Professional 11-seater minibus. Perfect for large families and pilgrimage groups.",
        passengers: "11",
        luggage: 8,
        bags: 5,
        image: "/hiace/hiace-main.jpeg"
    },
    {
        name: "Toyota Coaster",
        slug: "toyota-coaster-17-seater-taxi",
        description: "High-capacity 17-seater coach for large pilgrim groups and intercity transfers.",
        passengers: "17",
        luggage: 15,
        bags: 10,
        image: "/coaster/coaster-main.jpg"
    }
];

export function FleetGrid() {
    return (
        <section className="py-24 bg-luxury-black relative">

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-luxury-gold uppercase tracking-widest text-sm font-bold mb-3 block">
                        Our Exclusive Fleet
                    </span>
                    <h2 className="text-[36px] font-thin font-serif text-white leading-[48px]">
                        Travel in <span className="text-luxury-gold">Quality Comfort</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {defaultFleet.map((vehicle, index) => (
                        <motion.div
                            key={vehicle.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-luxury-gold/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(196,169,117,0.1)]"
                        >
                            {/* Visual Header */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden">
                                <Image
                                    src={vehicle.image}
                                    alt={`Saudi Taxi Private Hire - ${vehicle.name}`}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

                                {/* Status Chip */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-black tracking-widest text-luxury-gold uppercase rounded-full">
                                        Premium Class
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 space-y-6">
                                <div>
                                    <h3 className="text-xl font-serif text-white group-hover:text-luxury-gold transition-colors duration-300">
                                        {vehicle.name}
                                    </h3>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30 mt-1">
                                        Umrah & Airport Specialist
                                    </p>
                                </div>

                                <p className="text-white/60 text-[14px] leading-[22px] font-light min-h-[44px]">
                                    {vehicle.description}
                                </p>

                                {/* Neat Spec Badges (Qatar Airways inspired horizontal bar) */}
                                <div className="flex items-center justify-between py-4 border-y border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                            <Users size={14} className="text-luxury-gold" />
                                        </div>
                                        <div className="leading-none">
                                            <p className="text-[10px] text-white/30 uppercase font-black">Capacity</p>
                                            <p className="text-xs text-white font-bold">{vehicle.passengers} Seats</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                            <Briefcase size={14} className="text-luxury-gold" />
                                        </div>
                                        <div className="leading-none text-right">
                                            <p className="text-[10px] text-white/30 uppercase font-black">Luggage</p>
                                            <p className="text-xs text-white font-bold">{vehicle.luggage} Items</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-4 pt-2">
                                    <Link href={`/fleet/${vehicle.slug}`} className="flex-1">
                                        <button className="w-full py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-luxury-gold border border-white/10 hover:border-luxury-gold/50 rounded-xl transition-all duration-300">
                                            Detail
                                        </button>
                                    </Link>
                                    <a
                                        href={contactHelpers.getWhatsAppUrl(`Salam, I would like to book a ${vehicle.name} for my transfer.`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-[1.5]"
                                    >
                                        <button className="w-full py-4 text-[10px] font-black uppercase tracking-[0.2em] bg-luxury-gold text-black rounded-xl hover:bg-white transition-all duration-300 shadow-[0_10px_20px_rgba(196,169,117,0.15)]">
                                            Book Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
