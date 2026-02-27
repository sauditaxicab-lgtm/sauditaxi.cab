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
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/50 rounded-tr-[10rem] z-0 shadow-inner"></div>

            <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">

                    {/* Left: Content & Narrative */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white shadow-xl shadow-black/5 border border-zinc-100"
                            >
                                <span className="flex h-3 w-3 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-gold opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-luxury-gold"></span>
                                </span>
                                <span className="text-[10px] uppercase font-black tracking-[0.25em] text-zinc-900 font-sans">Premium Umrah Transport Makkah</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="font-serif font-bold text-black leading-[1.1] tracking-tighter text-4xl md:text-6xl uppercase"
                            >
                                Professional <span className="text-luxury-gold italic">Umrah Taxi Service</span> <br />
                                and Private Transfers
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl font-light"
                            >
                                Experience seamless spiritual journeys with our specialized <strong>Umrah transport Makkah</strong> solutions. From <strong>taxi Jeddah to Makkah</strong> for airport arrivals to high-speed <strong>Makkah to Madinah taxi</strong> transfers, <Link href="/" className="text-luxury-gold font-bold decoration-luxury-gold/30 underline decoration-2 underline-offset-4 hover:decoration-luxury-gold">Saudi Taxi</Link> provides the reliability and comfort you deserve.
                            </motion.div>
                        </div>

                        {/* High-End Service Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Jeddah to Makkah", price: "From 150 SAR", desc: "Premium airport taxi services with meet & greet." },
                                { title: "Makkah to Madinah", price: "From 450 SAR", desc: "Fast, safe, and comfortable highway transfers." },
                                { title: "Ziyarat Tours", price: "Custom Rates", desc: "Guided private tours to holy sites in Makkah & Madinah." },
                                { title: "VIP Transport", price: "Executive", desc: "Luxury SUVs and Business Sedans for elite guests." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="p-6 rounded-[2rem] bg-white border border-zinc-100 shadow-xl shadow-black/[0.03] group transition-all"
                                >
                                    <div className="flex justify-between items-start mb-4 font-sans">
                                        <div className="p-3 bg-zinc-50 rounded-2xl text-luxury-gold group-hover:bg-luxury-gold group-hover:text-black transition-colors">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-luxury-gold">{item.price}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-black mb-2">{item.title}</h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed uppercase tracking-wider font-sans">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Experience */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-[12px] border-white"
                        >
                            <div className="aspect-[4/5] relative">
                                <Image
                                    src="/about/staria_fleet_white.png"
                                    alt="Professional Umrah Taxi Service and Private Transfers"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                <div className="absolute bottom-12 left-12 right-12 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="h-0.5 w-12 bg-luxury-gold"></div>
                                        <span className="text-luxury-gold text-xs font-black uppercase tracking-[0.3em] font-sans">Licensed Service</span>
                                    </div>
                                    <h3 className="text-white text-3xl font-serif italic">Your journey of faith, <br /> simplified.</h3>

                                    <Link href="/booking" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-luxury-gold transition-colors font-sans">
                                        Secure Booking <Clock className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating elements for depth */}
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-luxury-gold/10 blur-[80px] rounded-full"></div>
                        <div className="absolute top-20 -left-10 w-32 h-32 bg-blue-500/5 blur-[60px] rounded-full"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
