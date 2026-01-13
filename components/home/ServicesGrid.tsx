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
        title: "Airport Transfers",
        description: "Reliable private pickups and drop-offs at Jeddah (KAIA) and Madinah (PRMA) airports with professional meet & greet.",
        image: "/services/airport_transfer_luxury.png",
        link: "/services/airport-transfers"
    },
    {
        id: "umrah",
        title: "Umrah Transfers",
        description: "Comfortable and spiritual journeys between Makkah, Madinah, and Jeddah. Dedicated premium service for pilgrims.",
        image: "/services/umrah_makkah.png",
        link: "/services/umrah-transfers"
    },
    {
        id: "intercity",
        title: "Intercity Travel",
        description: "Safe and convenient private travel between Jeddah, Makkah, Madinah, and other major cities across the Kingdom.",
        image: "/services/intercity_jeddah_madinah.png",
        link: "/services/intercity-taxi"
    },
    {
        id: "ziyarat",
        title: "Ziyarat Tours",
        description: "Guided private tours to holy sites in Makkah and Madinah with knowledgeable drivers in premium comfort.",
        image: "/services/ziyarat_holy_sites.png",
        link: "/services/ziyarat-tours"
    },
    {
        id: "luxury",
        title: "VIP Transport",
        description: "Elite fleet including GMC Yukon XL and luxury sedans for VIP guests requiring maximum privacy and comfort.",
        image: "/services/vip_transport.png",
        link: "/services/vip-transport"
    },
    {
        id: "family",
        title: "Family Transport",
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
                        Premium Private Transfers In Saudi Arabia
                    </h2>
                    <p className="text-black leading-relaxed text-lg max-w-2xl mx-auto">
                        Looking for Executive Airport Transfers? Whether you’re heading to Jeddah airport, performing Umrah, or travelling between holy cities, we provide refined 24/7 service.
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
