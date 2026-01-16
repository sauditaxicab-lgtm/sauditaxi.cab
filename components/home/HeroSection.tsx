"use client";

import { BookingWidget } from "./BookingWidget";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, UserCheck, Plane } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative min-h-[90dvh] lg:min-h-[85vh] flex flex-col justify-center bg-luxury-black overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 scale-105 blur-[2px]">
                <Image
                    src="/hero_premium_bg.png"
                    alt="Luxury Taxi Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Darker Primary Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-black/65"></div>

                {/* Cinematic Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>

                {/* Side Shadows to focus center/right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>

                {/* Aggressive radial vignette to highlight the center booking area */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,transparent_20%,black_100%)] opacity-60"></div>

                {/* Bottom blend */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-luxury-black to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 py-16 md:py-24">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">

                    {/* Left Section: Heading & Content */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center lg:items-start"
                        >
                            <span className="inline-block px-4 py-1.5 bg-luxury-gold/15 backdrop-blur-sm border border-luxury-gold/30 text-luxury-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-6 shadow-lg shadow-gold/5">
                                Executive Travel Experience
                            </span>

                            <h1 className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] mb-6">
                                Saudi Taxi – <br className="hidden lg:block" />
                                <span className="text-luxury-gold">VIP Taxi</span> Service
                            </h1>

                            <p className="text-white/90 text-sm md:text-lg font-light leading-relaxed max-w-xl mb-8 md:mb-10 drop-shadow-md">
                                Direct private transfers between <strong>Jeddah, Makkah, and Madinah</strong>. Best-in-class journeys tailored for pilgrims and executive travelers.
                            </p>

                            {/* Trust Badge - Enhanced Glass Panel */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="inline-flex flex-col md:flex-row items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl"
                            >
                                <div className="flex items-center gap-1 text-luxury-gold">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className="text-sm md:text-base">★</span>
                                    ))}
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-2">
                                    <p className="text-white font-medium text-xs md:text-sm">
                                        4.9/5 Rating
                                    </p>
                                    <span className="hidden md:inline text-white/20">•</span>
                                    <p className="text-white/60 text-[10px] md:text-xs tracking-wide">
                                        10,000+ Happy Pilgrims
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Section: Widget Container */}
                    <div className="w-full lg:w-auto flex items-center justify-center lg:justify-end xl:pr-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full max-w-[360px] relative group"
                        >
                            {/* Visual Anchor: Animated Glow behind widget */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-luxury-gold/30 to-transparent opacity-30 blur-2xl group-hover:opacity-50 transition duration-1000"></div>

                            {/* Grounding Shadow */}
                            <div className="absolute -bottom-10 left-10 right-10 h-10 bg-black/40 blur-3xl opacity-60"></div>

                            <div className="relative z-30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl">
                                <BookingWidget />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Trust Icons - Streamlined */}
            <div className="mt-auto relative z-20 border-t border-white/5 bg-black/60 backdrop-blur-xl">
                <div className="container mx-auto px-4 py-4 md:py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: UserCheck, text: "Licensed Drivers" },
                            { icon: ShieldCheck, text: "Fully Insured" },
                            { icon: Plane, text: "Airport Meet & Greet" },
                            { icon: Clock, text: "On-Time Guarantee" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 + (index * 0.1) }}
                                className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors cursor-default"
                            >
                                <item.icon className="text-luxury-gold/80 w-4 h-4" />
                                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest">
                                    {item.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
