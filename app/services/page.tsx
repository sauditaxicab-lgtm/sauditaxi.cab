"use client";

import { ServiceHero } from "@/components/services/ServiceHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
    {
        title: "Airport Transfers",
        description: "Reliable 24/7 private transfers from Jeddah Airport (KAIA) and Madinah Airport using our premium chauffeur fleet.",
        image: "/services/airport_transfer_luxury.png",
        link: "/services/airport-transfers"
    },
    {
        title: "Umrah Transfers",
        description: "Direct private travel between Jeddah, Makkah, and Madinah for pilgrims. Your spiritual journey with peace of mind.",
        image: "/services/umrah_makkah.png",
        link: "/services/umrah-transfers"
    },
    {
        title: "Family Travel",
        description: "Travelling with family? Our spacious GMCs and HiAce buses ensure comfort for your entire group during your Saudi visit.",
        image: "/services/family_transfer.png",
        link: "/services/family-travel"
    },
    {
        title: "Ziyarat Tours",
        description: "Visit the holy sites in Makkah and Madinah with our knowledgeable drivers in absolute premium luxury.",
        image: "/services/ziyarat_holy_sites.png",
        link: "/services/ziyarat-tours"
    },
    {
        title: "Intercity Transfer",
        description: "Comfortable private long-distance travel between any major cities in Saudi Arabia including Riyadh, Dammam, and Taif.",
        image: "/services/intercity_jeddah_madinah.png",
        link: "/services/intercity-taxi"
    },
    {
        title: "VIP Transport",
        description: "Elite GMC Yukon and luxury sedan vehicles for those seeking extra comfort, privacy and premium style.",
        image: "/services/vip_transport.png",
        link: "/services/vip-transport"
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Our Premium Transfer Services"
                subtitle="Reliable Private Transport"
                description="We provide the Saudi Taxi Standard for all your journeys. Trusted by thousands of pilgrims."
                backgroundImage="/services/airport_transfer_luxury.png"
            />

            {/* Service Grid */}
            <section className="px-16 py-24 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[400px] overflow-hidden rounded-sm border border-white/10"
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 group-hover:text-luxury-gold transition-colors">
                                    {service.title}
                                </h3>
                                <div className="h-1 w-12 bg-luxury-gold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <p className="text-white/80 line-clamp-3 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    {service.description}
                                </p>
                                <Link href={service.link}>
                                    <Button variant="outline" className="border-white/30 text-white hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transition-all opacity-0 group-hover:opacity-100 delay-200">
                                        View Service
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
