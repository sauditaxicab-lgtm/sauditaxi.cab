"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

// Service Data with allocated images
// Service Data with allocated images
const services = [
    {
        id: "airport",
        title: "Jeddah Airport to Makkah Ride",
        description: "Reliable airport taxi pickup. Taxi Book Today for private transfers from Jeddah (KAIA) and Madinah (PRMA) with meet & greet.",
        image: "/services/airport_transfer_luxury.png",
        link: "/services/airport-transfers"
    },
    {
        id: "umrah",
        title: "Premium Makkah Taxi",
        description: "Book Now for comfortable spiritual journeys. Dedicated service for pilgrims needing a taxi with driver – 24/7 available.",
        image: "/services/umrah_makkah.png",
        link: "/services/umrah-transfers"
    },
    {
        id: "intercity",
        title: "Makkah Madinah Comfort Ride",
        description: "Safe intercity travel. Find a reliable taxi near you for trips between Jeddah, Makkah, Madinah, and other major cities.",
        image: "/services/intercity_jeddah_madinah.png",
        link: "/services/intercity-taxi"
    },
    {
        id: "ziyarat",
        title: "Luxury Taxi for Ziyarat Tours",
        description: "Guided private tours to holy sites. Experience premium comfort in Makkah and Madinah with knowledgeable drivers.",
        image: "/services/ziyarat_holy_sites.png",
        link: "/services/ziyarat-tours"
    },
    {
        id: "luxury",
        title: "VIP Transport – Special Offers",
        description: "Elite fleet including GMC Yukon XL and luxury sedans for VIP guests requiring maximum privacy and comfort.",
        image: "/services/vip_transport.png",
        link: "/services/vip-transport"
    },
    {
        id: "family",
        title: "Family Taxi – 10 Seater",
        description: "Spacious vehicles like Hyundai Staria and Toyota HiAce, perfect for families with large luggage and children.",
        image: "/services/family_transfer.png",
        link: "/services/family-travel"
    }
];

// Duplicate services to create a seamless loop
const duplicatedServices = [...services, ...services];

export function ServicesGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);
    const x = useMotionValue(0);

    // State to control animation
    const [isDragging, setIsDragging] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Measure content width once mounted
    useEffect(() => {
        if (containerRef.current) {
            // The container holds 2 sets of services. One loop is half the total scrollWidth.
            setContentWidth(containerRef.current.scrollWidth / 2);
        }
    }, []);

    // Animation Loop
    useAnimationFrame((time, delta) => {
        if (!isDragging && !isHovering && contentWidth > 0) {
            // Move left by 'speed' pixels per millisecond approximation (delta is tricky, using fixed step is smoother for marquees usually)
            // But delta helps with frame rate independence.
            const moveBy = (delta / 1000) * 100; // Speed: 100px per second. Adjust '100' to change speed.

            let newX = x.get() - moveBy;

            // Wrap Logic: If we've scrolled past the first set, jump back to 0 (which is visually identical)
            if (newX <= -contentWidth) {
                newX = 0;
            }
            // If dragging moved us way positive (right), wrap there too
            if (newX > 0) {
                newX = -contentWidth;
            }

            x.set(newX);
        }
    });

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <div className="text-center max-w-4xl mx-auto">
                    <span className="text-luxury-gold uppercase tracking-widest text-xs font-bold block mb-4">
                        Elite Transport Services
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-6 leading-tight">
                        Best Saudi Taxi Service
                    </h2>
                    <p className="text-black leading-relaxed text-lg max-w-2xl mx-auto">
                        Looking for a <strong>Saudi Airport Taxi</strong>? Whether you’re heading to Jeddah airport, performing Umrah, or need a <strong>family taxi in Saudi Arabia</strong>, we provide a refined 24/7 <strong>online taxi service in Saudi Arabia</strong>.
                    </p>
                </div>
            </div>

            {/* Carousel Container */}
            <div
                className="relative w-full cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <motion.div
                    ref={containerRef}
                    className="flex gap-6 w-max"
                    style={{ x }} // Bind motion value directly
                    drag="x"
                    dragMomentum={false} // Stop immediately on release so our loop takes over seamlessly
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                >
                    {duplicatedServices.map((service, index) => (
                        <Link href={service.link || "/booking"} key={`${service.id}-${index}`}>
                            <div
                                className="relative w-[300px] h-[450px] lg:w-[calc(100vw/5.2)] flex-shrink-0 rounded-md overflow-hidden group shadow-lg select-none"
                            >
                                {/* Background Image */}
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 300px, 20vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                                />

                                {/* Light Overlay - General darkening */}
                                <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                                {/* Gradient Overlay - Deeper at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

                                {/* Content Container */}
                                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full">
                                    <motion.div
                                        className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500"
                                    >
                                        <h3 className="text-2xl font-serif font-semibold text-white mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                                            <div className="overflow-hidden">
                                                <p className="text-white/80 text-sm leading-relaxed mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Decorative line */}
                                        <div className="w-12 h-[1px] bg-luxury-gold mt-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100"></div>
                                    </motion.div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>

            {/* Fade Gradients at edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        </section>
    );
}
