"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Star } from "lucide-react";
import Image from "next/image";

export function EEATBlock() {
    return (
        <section className="py-24 bg-[#FAFAFA] border-y border-zinc-200 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual EEAT Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/staria/staria-main.jpeg"
                                alt="Saudi Taxi Professional Fleet"
                                width={600}
                                height={400}
                                className="object-cover"
                            />
                            {/* Overlay Trust Banner */}
                            <div className="absolute bottom-0 left-0 right-0 bg-luxury-gold p-6 text-black">
                                <p className="text-xl font-serif font-thin italic">"Trusted by 5,000+ pilgrims since 2015"</p>
                            </div>
                        </div>
                        {/* Decorative background circle */}
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="lg:w-1/2 space-y-8 text-black">
                        <div>
                            <span className="text-luxury-gold font-bold uppercase tracking-widest text-xs mb-4 block">Our Authority</span>
                            <h2 className="text-[36px] font-thin font-serif mb-6 leading-[48px]">Elite <span className="text-luxury-gold italic">Taxi Service</span> with Professional Drivers</h2>
                            <p className="text-[rgb(31,33,43)] text-[16px] font-normal leading-[24px]">
                                Led by industry veterans with over 15 years of experience in Saudi Arabian logistics, Saudi Taxi represents the pinnacle of reliability. We are a specialized taxi service providing professional drivers for all your travel needs, specifically for long-distance routes like <strong>Makkah to Madinah (450km)</strong>, <strong>Madinah to Taif (480km)</strong>, and <strong>Makkah to Jeddah (90km)</strong>. Every guest is treated with the highest level of hospitality and safety, aligned with Vision 2030 transport standards.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-zinc-100">
                                    <ShieldCheck className="text-luxury-gold" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Fully Licensed</h4>
                                    <p className="text-zinc-500 text-sm">GACA and TGA certified for absolute legal compliance.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-zinc-100">
                                    <Award className="text-luxury-gold" />
                                </div>
                                <div>
                                    <h4 className="font-bold">15+ Yrs Experience</h4>
                                    <p className="text-zinc-500 text-sm">Decades of navigating the Makkah and Madinah routes.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-zinc-100">
                                    <Users className="text-luxury-gold" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Pilgrim First</h4>
                                    <p className="text-zinc-500 text-sm">Specialized training for Umrah and Hajj hospitality.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-zinc-100">
                                    <Star className="text-luxury-gold" />
                                </div>
                                <div>
                                    <h4 className="font-bold">5-Star Rated</h4>
                                    <p className="text-zinc-500 text-sm">Consistently top-rated across all local reviewing platforms.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <div className="inline-flex items-center gap-4 p-4 bg-white rounded-2xl border border-zinc-200">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                                            <div className="w-full h-full bg-zinc-400" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm font-medium">Join 5,000+ travelers who trust us yearly. <span className="text-luxury-gold font-bold">Verified 2026 Fleet.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
