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
                            <span className="inline-block px-4 py-2 bg-luxury-gold text-black text-[10px] md:text-xs font-black uppercase tracking-[0.3em] rounded-sm mb-8 shadow-2xl shadow-gold/20 transform -rotate-1">
                                Premium KSA Transport
                            </span>

                            <h1 className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] mb-6 text-[36px] uppercase font-serif tracking-tight leading-[48px] font-thin">
                                <span className="text-luxury-gold italic block text-[24px] tracking-[0.2em] font-sans mb-3 lowercase">Experience the best</span>
                                SAUDI <br />
                                <span className="underline decoration-luxury-gold/40 underline-offset-[12px]">UMRAH TAXI SERVICE</span>
                            </h1>

                            <div className="h-1.5 w-32 bg-luxury-gold mb-8 rounded-full"></div>

                            <p className="text-white/80 text-[16px] font-normal leading-[24px] max-w-2xl mb-10 drop-shadow-md text-center lg:text-left">
                                Book your <strong>private Umrah taxi</strong> with ease. We specialize in <strong>airport taxi Jeddah to Makkah</strong>, reliable <strong>Makkah to Madinah taxi</strong> transfers, <strong>Taif taxi</strong> services, and <strong>umrah transport Makkah</strong> tours.
                                <span className="block mt-4 text-luxury-gold font-bold uppercase tracking-widest text-sm">✓ Fixed 2026 Rates ✓ Professional Drivers</span>
                            </p>

                            {/* Trust Badge - Enhanced Premium Look */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="group relative flex flex-col md:flex-row items-center gap-6 p-1 rounded-3xl bg-gradient-to-r from-luxury-gold/40 via-white/10 to-transparent backdrop-blur-xl border border-white/10 shadow-3xl"
                            >
                                <div className="bg-black/40 px-6 py-4 rounded-2xl flex flex-col items-center justify-center border border-white/5">
                                    <div className="flex items-center gap-1 text-luxury-gold mb-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span key={star} className="text-sm md:text-lg">★</span>
                                        ))}
                                    </div>
                                    <p className="text-white font-black text-lg">4.9/5</p>
                                </div>
                                <div className="pr-8 py-2 text-center md:text-left">
                                    <p className="text-white font-bold text-sm md:text-base mb-0.5 tracking-tight">
                                        Trusted by 15,000+ Travelers
                                    </p>
                                    <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
                                        Verified Saudi Umrah Taxi Booking
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

                            <div className="relative z-30 shadow-[0_40px_80px_rgba(0,0,0,0.6)] rounded-3xl overflow-hidden glass-panel">
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
                            { icon: Plane, text: "Airport Meet and Greet" },
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
