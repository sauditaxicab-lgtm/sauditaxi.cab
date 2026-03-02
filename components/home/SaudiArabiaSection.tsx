"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Shield, Star, Map, CheckCircle } from "lucide-react";

export function SaudiArabiaSection() {
    return (
        <section className="py-24 bg-[#FAFAFA] text-black relative overflow-hidden">
            {/* Soft Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(197,165,114,0.03)_0%,transparent_50%)]"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-stretch gap-16 xl:gap-24">

                    {/* Left Column: Premium Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-5/12 relative group"
                    >
                        <div className="relative h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group-hover:shadow-luxury-gold/20 transition-all duration-700">
                            <Image
                                src="/about/makkah_skyline_premium.png"
                                alt="Saudi Umrah Taxi Booking"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-[4s] ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                            {/* Overlay Badge */}
                            <div className="absolute bottom-10 left-10 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl max-w-[80%]">
                                <div className="flex items-center gap-2 mb-2 text-luxury-gold">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Authorized Transport</span>
                                </div>
                                <p className="text-white text-[16px] font-serif italic font-light">
                                    "Your reliable choice for <strong>private Umrah taxi</strong> across all major Saudi landmarks."
                                </p>
                            </div>
                        </div>

                        {/* Floating Achievement Card */}
                        <div className="absolute -top-6 -right-6 md:-right-12 p-6 bg-white rounded-3xl shadow-2xl border border-zinc-50 z-20 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-luxury-gold/10 rounded-2xl text-luxury-gold">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Security</p>
                                    <p className="text-sm font-bold text-black font-sans">100% Secure Booking</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Content & Authority */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-10">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2"
                            >
                                <span className="h-0.5 w-10 bg-luxury-gold"></span>
                                <span className="text-[10px] uppercase font-black tracking-[0.3em] text-luxury-gold font-sans">Premier KSA Mobility</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-[36px] font-thin font-serif text-black leading-[48px] uppercase"
                            >
                                Trusted <span className="text-luxury-gold italic">Saudi Umrah</span> <br />
                                Taxi Booking
                            </motion.h2>

                            <p className="text-[rgb(31,33,43)] text-[16px] font-normal leading-[24px]">
                                <strong className="text-black font-bold">Saudi Taxi</strong> is more than just a ride; we are your dedicated travel partner in the Kingdom. Whether you need a <strong>umrah taxi service</strong> for local commutes or long-distance <strong>Makkah to Madinah taxi</strong> transfers, our fleet and drivers represent the pinnacle of Saudi hospitality.
                            </p>
                        </div>

                        {/* Authority Pillars */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "Kingdom-Wide", icon: <Map className="w-5 h-5" />, desc: "Coverage spanning Jeddah, Makkah, Madinah, and Riyadh." },
                                { title: "Fixed Transparency", icon: <CheckCircle className="w-5 h-5" />, desc: "Zero hidden fees with upfront pricing for all routes." }
                            ].map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="space-y-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="text-luxury-gold">{pillar.icon}</div>
                                        <h4 className="text-lg font-bold text-black font-sans">{pillar.title}</h4>
                                    </div>
                                    <p className="text-sm text-zinc-400 leading-relaxed font-sans">{pillar.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* City Link Chips */}
                        <div className="pt-6">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 font-sans">Discover Regional Hubs</p>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { name: "Jeddah Taxi", href: "/jeddah" },
                                    { name: "Makkah Taxi", href: "/makkah" },
                                    { name: "Madinah Taxi", href: "/madinah" },
                                    { name: "Airport Service", href: "/services/airport-transfers" },
                                ].map((city) => (
                                    <Link
                                        key={city.name}
                                        href={city.href}
                                        className="px-6 py-4 bg-white border border-zinc-200 rounded-2xl text-center hover:border-luxury-gold hover:shadow-lg transition-all group font-sans"
                                    >
                                        <span className="text-luxury-gold font-bold text-sm group-hover:underline italic tracking-tight">{city.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
