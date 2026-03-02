"use client";

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from "next/image";

export function InformationSection() {
    return (
        <section className="py-16 md:py-28 px-4 md:px-16 relative overflow-hidden bg-luxury-black">
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 grayscale-[0.3]">
                    <Image
                        src="/city_night_luxury_bg.png"
                        alt="City Night Background"
                        fill
                        className="object-cover opacity-10"
                        priority={false}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/95 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/60"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

                    {/* Content Column */}
                    <div className="w-full lg:w-3/5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] md:text-sm font-bold block mb-6 border-l-2 border-luxury-gold pl-4">
                                Travel Across the Kingdom
                            </span>

                            <h2 className="text-[36px] font-thin font-serif text-white mb-6 md:mb-10 leading-[48px]">
                                Experience <span className="text-luxury-gold italic">Premium</span> <br />
                                Taxi Service with Driver
                            </h2>

                            <div className="space-y-8 text-white/80 font-normal text-[16px] leading-[24px] max-w-2xl">
                                <p className="text-white border-l-4 border-luxury-gold pl-6 py-2 bg-white/5 rounded-r-lg">
                                    Saudi Taxi provides the fastest private transfers across the Kingdom for 2026. We specialize in <Link href="/services/umrah-transfers" className="text-luxury-gold hover:underline">Umrah transfers</Link> between <strong>Makkah and Madinah (4.5 hours)</strong>, <strong>Jeddah to Makkah (1 hour)</strong>, and <strong>Taif excursions</strong>. All services include 24/7 flight monitoring, professional meet-and-greet at KAIA Terminal 1, and dedicated pilgrim support.
                                </p>
                                <p>
                                    From the holy cities of <Link href="/makkah" className="text-white hover:text-luxury-gold transition-colors font-medium">Makkah</Link> and <Link href="/madinah" className="text-white hover:text-luxury-gold transition-colors font-medium">Madinah</Link> to Jeddah and Taif, we provide a reliable <Link href="/makkah" className="text-white/80 hover:text-luxury-gold font-medium transition-colors">taxi in Mecca</Link>, professional <Link href="/madinah" className="text-white/80 hover:text-luxury-gold font-medium transition-colors">taxi service in medina saudi arabia</Link>, and <Link href="/" className="text-white/80 hover:text-luxury-gold font-medium transition-colors">Saudi Taxi transfers near you</Link> for all passengers.
                                </p>
                                <p className="text-white/40 italic text-sm border-t border-white/5 pt-8">
                                    With our professional <Link href="/" className="hover:text-white transition-colors">Saudi Taxi service</Link>, you can focus on your spiritual journey or business goals while we handle all your transport logistics.
                                </p>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 my-10 backdrop-blur-sm">
                                    <h4 className="text-luxury-gold text-lg font-bold mb-4">Saudi Taxi Logistics (AEO Summary)</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/70">
                                        <div className="flex justify-between border-b border-white/5 pb-1">
                                            <span>Makkah to Madinah:</span>
                                            <span className="text-white font-bold">~4.5 Hours</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-1">
                                            <span>Jeddah Arrivals:</span>
                                            <span className="text-white font-bold">Terminal 1 / North</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-1">
                                            <span>Airport Meet & Greet:</span>
                                            <span className="text-white font-bold">Included</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-1">
                                            <span>Meeqat (Ihram) Stop:</span>
                                            <span className="text-white font-bold">Complimentary</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-white/30 mt-3 italic uppercase tracking-[0.2em]">
                                        *Fastest private taxi service for pilgrims and tourists in Saudi Arabia 2026.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 flex flex-col sm:flex-row gap-6">
                                <Link href="/booking">
                                    <Button variant="gold" className="bg-luxury-gold hover:bg-white text-black h-14 px-10 rounded-xl font-bold tracking-[0.1em] text-xs uppercase shadow-[0_15px_30px_-5px_rgba(212,175,55,0.3)] transition-all active:scale-[0.98]">
                                        BOOK YOUR TOUR NOW
                                    </Button>
                                </Link>
                                <div className="flex items-center gap-4 px-6 border-l border-white/10">
                                    <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">24/7 Priority Dispatch</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Column */}
                    <div className="w-full lg:w-2/5 group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border border-luxury-gold/20 rounded-[3rem] -rotate-3 transition-transform duration-1000 group-hover:rotate-0"></div>

                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-white/5 aspect-[4/5]">
                                <Image
                                    src="/about/makkah_skyline_premium.png"
                                    alt="Makkah Skyline"
                                    fill
                                    className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[4s]"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                                {/* Bottom Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                                    <p className="text-luxury-gold text-xs font-bold tracking-widest uppercase mb-1">Serving All Regions</p>
                                    <p className="text-white/70 text-[10px] font-medium leading-relaxed">Makkah • Madinah • Jeddah • Riyadh • Taif</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
