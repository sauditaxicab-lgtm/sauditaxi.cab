"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function LocationMap() {
    return (
        <section className="py-20 bg-luxury-black relative border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-10">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <span className="text-luxury-gold uppercase tracking-widest text-xs font-bold block mb-4">
                            Visit Our Office
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
                            Find Us in <span className="text-luxury-gold italic">Makkah</span>
                        </h2>
                        <p className="text-white/60 font-light">
                            We are located in the heart of Makkah. Visit us or book your ride online.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Location Details Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:col-span-1 space-y-6 backdrop-blur-sm"
                        >
                            <div>
                                <h3 className="text-xl font-serif text-white mb-2">Saudi Taxi</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    3707 Al Munirah St, Al Jamiah<br />
                                    Makkah 24242, Saudi Arabia
                                </p>
                            </div>

                            <div className="space-y-3">
                                <a
                                    href="https://maps.app.goo.gl/r6v9zZ8h8B8z8z8z8" // Using the share link or a generic map link if specific one fails
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 justify-start gap-3 h-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-luxury-gold"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                        Get Directions
                                    </Button>
                                </a>

                                <a
                                    href="https://search.google.com/local/writereview?placeid=ChIJcwjgV20Cwj0Ra_kF8YqKz_U"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Button className="w-full bg-luxury-gold hover:bg-white text-black font-bold h-12 justify-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                                        Write a Review
                                    </Button>
                                </a>
                            </div>

                            <div className="pt-6 border-t border-white/10">
                                <p className="text-luxury-gold text-xs font-bold uppercase tracking-widest mb-3">Operating Hours</p>
                                <div className="flex justify-between text-sm text-white/80">
                                    <span>Everyday</span>
                                    <span>24 Hours</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Map Embed */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.567087640364!2d39.8666666!3d21.4083333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c2026d57e00873%3A0xf5cff18af105f96b!2sSaudi%20Taxi!5e0!3m2!1sen!2ssa!4v1705593600000!5m2!1sen!2ssa"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            ></iframe>
                            {/* Overlay to ensure map matches dark theme better if invert filter isn't perfect */}
                            <div className="absolute inset-0 pointer-events-none bg-luxury-gold/5 mix-blend-overlay"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
