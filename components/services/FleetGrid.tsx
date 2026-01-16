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
        description: "Reliable and comfortable 4-seater sedan perfect for individuals and couples.",
        passengers: "4",
        luggage: 2,
        bags: 1,
        image: "/camry/Camry main image.jpeg"
    },
    {
        name: "Hyundai Staria",
        slug: "hyundai-staria-7-seater-taxi",
        description: "Luxury 7-seater MPV with futuristic design and premium comfort for families.",
        passengers: "7",
        luggage: 5,
        bags: 3,
        image: "/staria/staria main.jpeg"
    },
    {
        name: "Hyundai H1 Starex",
        slug: "hyundai-h1-starex-7-seater-taxi",
        description: "Versatile 7-seater family van offering great value and space.",
        passengers: "7",
        luggage: 4,
        bags: 2,
        image: "/starax/Strax main.jpg"
    },
    {
        name: "GMC Yukon XL",
        slug: "gmc-yukon-xl-7-seater-taxi",
        description: "Premium 7-seater VIP SUV with massive luggage space and superior comfort.",
        passengers: "7",
        luggage: 6,
        bags: 4,
        image: "/gmc/Gmc main.jpg"
    },
    {
        name: "Toyota HiAce",
        slug: "toyota-hiace-11-seater-taxi",
        description: "Reliable 11-seater minibus for medium-sized groups and families.",
        passengers: "11",
        luggage: 8,
        bags: 5,
        image: "/hiace/Main.jpeg"
    },
    {
        name: "Toyota Coaster",
        slug: "toyota-coaster-30-seater-taxi",
        description: "Large capacity 30-seater coach for big groups and pilgrim transfers.",
        passengers: "30",
        luggage: 15,
        bags: 10,
        image: "/coaster/Coaster main.jpg"
    }
];

export function FleetGrid() {
    return (
        <section className="py-24 bg-luxury-black relative">
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-luxury-gold uppercase tracking-widest text-sm font-bold mb-3 block">
                        Our Exclusive Fleet
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        Travel in <span className="text-luxury-gold">Premium Comfort</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {defaultFleet.map((vehicle, index) => (
                        <motion.div
                            key={vehicle.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-luxury-gold/50 transition-colors flex flex-col h-full"
                        >
                            {/* Image Area - Click to Book */}
                            <a
                                href={contactHelpers.getWhatsAppUrl(`I am interested in booking the ${vehicle.name}`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative aspect-[4/3] w-full bg-zinc-100/50 overflow-hidden block cursor-pointer"
                            >
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-xl font-serif text-white">{vehicle.name}</h3>
                                </div>
                            </a>

                            {/* Details */}
                            <div className="p-6 space-y-6 flex flex-col flex-grow">
                                <p className="text-white/60 text-sm leading-relaxed min-h-[40px]">
                                    {vehicle.description}
                                </p>

                                {/* Specs */}
                                <div className="flex items-center justify-between text-white/50 text-xs border-t border-white/10 pt-4 mt-auto">
                                    <div className="flex flex-col items-center gap-1">
                                        <Users size={16} className="text-luxury-gold" />
                                        <span>{vehicle.passengers} Pax</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <Briefcase size={16} className="text-luxury-gold" />
                                        <span>{vehicle.luggage} Suitcases</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <ShoppingBag size={16} className="text-luxury-gold" />
                                        <span>{vehicle.bags} Bags</span>
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <Link href={`/fleet/${vehicle.slug}`} className="flex-1">
                                        <Button className="w-full bg-transparent border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all">
                                            View Details
                                        </Button>
                                    </Link>
                                    <a
                                        href={contactHelpers.getWhatsAppUrl(`I am interested in booking the ${vehicle.name}`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1"
                                    >
                                        <Button className="w-full bg-luxury-gold text-black hover:bg-white hover:text-black font-bold border border-luxury-gold">
                                            Book Now
                                        </Button>
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
