"use client";

import { Clock, Phone, Calendar, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS_CONFIG } from "@/lib/constants";

export function TwentyFourSeven() {
    return (
        <section className="py-24 bg-gradient-to-b from-luxury-gold via-[#D4B043] to-luxury-gold relative overflow-hidden">
            {/* Cinematic depth layers */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]"></div>
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/5 to-transparent"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-20">

                    {/* Left Section: Context & Trust */}
                    <div className="lg:w-1/2 text-luxury-black flex flex-col justify-center order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-black/5 border border-black/10 text-luxury-black text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-8">
                                Always Available
                            </span>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-[1.1]">
                                Reliable <span className="text-white drop-shadow-sm">24 Hour Taxi</span> <br className="hidden md:block" /> Across the Kingdom
                            </h2>

                            <div className="w-16 h-1 bg-black/20 rounded-full mb-8"></div>

                            <p className="text-luxury-black/80 text-lg mb-12 leading-relaxed max-w-xl font-light">
                                Whether it's a 3 AM airport pickup or a late-night transfer between Makkah and Madinah, we are your trusted <strong>24 hour taxi</strong> partner.
                            </p>

                            {/* Trust Anchors - Cardified for rhythm */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-5 p-6 bg-white/10 backdrop-blur-sm border border-black/5 rounded-2xl shadow-sm hover:bg-white/20 transition-all group">
                                    <div className="p-3 bg-luxury-black rounded-xl text-luxury-gold shadow-lg group-hover:scale-110 transition-transform">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-xs uppercase tracking-widest text-luxury-black">24/7 Availability</p>
                                        <p className="text-xs text-luxury-black/60 font-medium">Ready when you are</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 p-6 bg-white/10 backdrop-blur-sm border border-black/5 rounded-2xl shadow-sm hover:bg-white/20 transition-all group">
                                    <div className="p-3 bg-luxury-black rounded-xl text-luxury-gold shadow-lg group-hover:scale-110 transition-transform">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-xs uppercase tracking-widest text-luxury-black">Secure Booking</p>
                                        <p className="text-xs text-luxury-black/60 font-medium">Verified & Licensed</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Section: Action Terminal (Prioritized on mobile) */}
                    <div className="lg:w-5/12 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-luxury-black p-10 md:p-12 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden group h-full flex flex-col justify-center"
                        >
                            {/* Visual Anchor: Gold accent border */}
                            <div className="absolute inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent"></div>

                            {/* Subtle Status Badge */}
                            <div className="inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-[10px] text-white/70 uppercase font-bold tracking-widest">Operators Online</span>
                            </div>

                            <h3 className="text-3xl font-serif text-white mb-6 leading-snug">Need a 24 Hour Taxi?</h3>

                            <p className="text-white/60 text-base mb-10 leading-relaxed font-light">
                                Don't rely on standard apps for late-night airport transfers. Our dedicated <strong>24 hour airport taxi</strong> service guarantees a driver will be waiting.
                            </p>

                            <a
                                href={`https://wa.me/${BUSINESS_CONFIG.PHONE}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full bg-luxury-gold hover:bg-white text-black font-bold py-5 rounded-2xl transition-all duration-300 tracking-[0.15em] text-xs uppercase shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1 active:scale-[0.98]"
                            >
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="mr-3">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Initiate 24/7 Booking
                            </a>

                            {/* Grounding Light */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-luxury-gold/5 blur-[100px] rounded-full"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
