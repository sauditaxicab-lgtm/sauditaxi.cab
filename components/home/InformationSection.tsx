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

                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-white mb-6 md:mb-10 leading-[1.1]">
                                Experience <span className="text-luxury-gold italic">Luxury</span> <br />
                                Chauffeur Service
                            </h2>

                            <div className="space-y-8 text-white/60 font-light text-lg leading-[1.8] max-w-2xl">
                                <p>
                                    Travel across Saudi Arabia in comfort and style. From the holy cities of Makkah and Madinah to Jeddah and Taif, we provide a reliable <strong className="text-white/80 font-medium">taxi in Mecca</strong>, professional <strong className="text-white/80 font-medium">taxi service in medina saudi arabia</strong>, and <strong className="text-white/80 font-medium">Saudi Taxi transfers near you</strong> for all passengers.
                                </p>
                                <p>
                                    Whether you're performing Umrah, visiting historical sites, or travelling for business, our <strong className="text-luxury-gold/80 font-medium">Umrah taxi service</strong> and premium fleet ensure your journey is safe and relaxing. We offer the best Mecca to Jeddah taxi fare for every traveler.
                                </p>
                                <p className="text-white/40 italic text-base border-t border-white/5 pt-8">
                                    With our professional Saudi Taxi service, you can focus on your spiritual journey or business goals while we handle all your transport logistics.
                                </p>
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
                                    alt="Makkah Premium Skyline"
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
