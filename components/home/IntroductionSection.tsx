"use client";

import { CheckCircle2, MapPin, Clock, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export function IntroductionSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-white text-black">
            {/* Elegant Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-gold/5 blur-3xl rounded-full -mr-20 -mt-20 z-0"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gray-50 rounded-tr-[10rem] z-0"></div>

            <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center capitalize">
                    {/* Image Column - Left on Large Screens */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="relative">
                            {/* Main Image Frame */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative z-20 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group"
                            >
                                <img
                                    src="/about/intro_premium.png"
                                    alt="Premium Private Transport Saudi Arabia"
                                    className="w-full h-auto object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out min-h-[450px]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </motion.div>

                            {/* Decorative Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute -bottom-8 -right-8 z-30 bg-black text-white p-6 md:p-8 rounded-xl shadow-2xl max-w-[240px] hidden md:block"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center">
                                        <Award className="text-black w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider leading-tight">Certified <br />excellence</span>
                                </div>
                                <p className="text-sm font-light text-white/70">Trusted by over 10,000+ travelers across the Kingdom.</p>
                            </motion.div>

                            {/* Back Accent Shape */}
                            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-luxury-gold/20 rounded-2xl z-10 hidden lg:block"></div>
                        </div>
                    </div>

                    {/* Content Column - Right on Large Screens */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-10">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20"
                            >
                                <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse"></span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Premium Private Transfers</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black leading-[1.15] tracking-tight"
                            >
                                Better Travel for <br />
                                <span className="text-luxury-gold italic">Saudi Journeys.</span>
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="w-20 h-1.5 bg-luxury-gold rounded-full"
                            ></motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6 text-base md:text-lg font-light leading-relaxed text-black/80"
                        >
                            <p>
                                Travel in comfort and rely on our premium private transport services. We specialize in trips between the three pillars of the Kingdom: <span className="font-semibold text-black">Jeddah</span>, <span className="font-semibold text-black">Makkah</span>, and <span className="font-semibold text-black">Madinah</span>.
                            </p>
                            <p className="text-sm md:text-base italic bg-gray-50 border-l-4 border-luxury-gold p-6 rounded-r-xl shadow-sm">
                                "Our mission is to provide more than just a ride. We offer peace of mind, punctuality, and a first-class service for every pilgrim and traveler visiting the holy cities."
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-2 gap-6 pt-2"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-luxury-gold/10 transition-colors">
                                    <MapPin className="text-luxury-gold w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wide">Holy Sites</h4>
                                    <p className="text-xs text-black/60">Makkah & Madinah</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-luxury-gold/10 transition-colors">
                                    <Clock className="text-luxury-gold w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wide">24/7 Availability</h4>
                                    <p className="text-xs text-black/60">Around the clock</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="pt-6"
                        >
                            <Link href="/booking">
                                <Button className="bg-black text-white hover:bg-luxury-gold hover:text-black transition-all duration-300 h-14 px-10 rounded-full font-bold uppercase text-xs tracking-widest shadow-xl">
                                    Book Your Journey
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
