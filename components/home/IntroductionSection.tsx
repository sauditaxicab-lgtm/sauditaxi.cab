"use client";

import { CheckCircle2, MapPin, Clock, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

export function IntroductionSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#FDFCFB] text-black">
            {/* Elegant Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-gold/5 blur-3xl rounded-full -mr-20 -mt-20 z-0"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/50 rounded-tr-[10rem] z-0"></div>

            <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-8 md:space-y-0">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-stretch">

                    {/* Content Column - Left on Large Screens for better F-pattern flow */}
                    <div className="w-full lg:w-3/5 space-y-12 flex flex-col justify-center order-1 lg:order-1">
                        <div className="space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20"
                            >
                                <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse"></span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">The Spiritual Journey Standard</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="font-serif font-bold text-black leading-[1.05] tracking-tight text-3xl md:text-5xl lg:text-6xl"
                            >
                                Your Sacred Journey, <br />
                                <span className="text-luxury-gold italic">Pure and Professional.</span>
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                whileInView={{ opacity: 1, scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="w-24 h-1 bg-luxury-gold rounded-full origin-center lg:origin-left"
                            ></motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
                            >
                                <Link href="/booking">
                                    <Button className="bg-luxury-gold text-black hover:bg-black hover:text-white transition-all duration-300 h-14 px-8 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-gold/20">
                                        Check Rates Instantly
                                    </Button>
                                </Link>
                                <Link href="/services">
                                    <Button variant="outline" className="text-black border-black/20 hover:bg-black hover:text-white h-14 px-8 rounded-xl font-bold uppercase text-[10px] tracking-widest transition-all">
                                        Explore Services
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Chunked Content Blocks */}
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <div className="p-3 bg-white shadow-sm border border-black/5 rounded-2xl w-fit">
                                    <Award className="text-luxury-gold w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-serif font-bold">Best-in-Class Service</h3>
                                <p className="text-sm md:text-base font-light leading-relaxed text-black/70">
                                    While the standard <strong>white cab taxi</strong> is common, our premium service offers a higher tier of comfort between <span className="font-medium text-black">Jeddah, Makkah, and Madinah</span>.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-4"
                            >
                                <div className="p-3 bg-white shadow-sm border border-black/5 rounded-2xl w-fit">
                                    <ShieldCheck className="text-luxury-gold w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-serif font-bold">Uncompromising Safety</h3>
                                <p className="text-sm md:text-base font-light leading-relaxed text-black/70">
                                    Experience peace with professional drivers and fixed, transparent rates. No hidden costs, just spiritual tranquilty from start to finish.
                                </p>
                            </motion.div>
                        </div>

                        {/* Visual Trust Anchors (Moved from bottom to integrated blocks) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            <div className="flex items-center gap-4 p-5 bg-white border border-black/5 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                                <div className="p-2.5 bg-luxury-gold/5 rounded-xl group-hover:bg-luxury-gold/10 transition-colors">
                                    <MapPin className="text-luxury-gold w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-1">Coverage</h4>
                                    <p className="text-sm font-bold text-black">All Holy Sites</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-5 bg-white border border-black/5 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                                <div className="p-2.5 bg-luxury-gold/5 rounded-xl group-hover:bg-luxury-gold/10 transition-colors">
                                    <Clock className="text-luxury-gold w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-1">Availability</h4>
                                    <p className="text-sm font-bold text-black">24/7 Priority Hub</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Column - Right on Large Screens for better visual weight */}
                    <div className="w-full lg:w-2/5 flex flex-col justify-center order-2 lg:order-2">
                        <div className="relative group">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="relative z-20 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] bg-white p-3"
                            >
                                <div className="rounded-[2rem] overflow-hidden aspect-[4/5]">
                                    <Image
                                        src="/about/about_history_makkah.png"
                                        alt="Saudi Taxi Makkah"
                                        fill
                                        className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[3s]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
                                </div>

                                {/* Floating Status Overlay */}
                                <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 p-4 md:p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-luxury-gold shadow-lg">
                                            <Image src="/about/professional_chauffeur_portrait.png" fill className="object-cover" alt="Driver" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Licensed Captain</p>
                                            <p className="text-white font-serif font-bold text-lg">On-Call Service</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Accent Pattern */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-luxury-gold/10 rounded-full blur-2xl z-0"></div>
                            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-luxury-gold/5 rounded-full blur-3xl z-0"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
