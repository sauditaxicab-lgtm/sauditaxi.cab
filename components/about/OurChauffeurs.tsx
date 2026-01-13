"use client";

import React from "react";
import Link from "next/link";

const OurChauffeurs = () => {
    return (
        <section className="px-16 py-20 md:py-32 bg-white text-luxury-black overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

                    {/* Image - Left Side */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src="/about/about_professional_drivers.png"
                                alt="Professional Chauffeur Team"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Subtle Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                            {/* Badge Overlay */}
                            <div className="absolute top-8 left-8 bg-luxury-gold/90 backdrop-blur-sm px-6 py-3 rounded-lg">
                                <p className="text-luxury-black font-bold text-sm uppercase tracking-wider">Licensed Drivers</p>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-luxury-gold/10 rounded-full blur-3xl -z-10" />
                    </div>

                    {/* Text Content - Right Side */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <div className="inline-block border-b-2 border-luxury-gold pb-1 mb-2">
                            <span className="text-luxury-gold uppercase tracking-[0.2em] font-bold text-sm">Our Team</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black leading-tight">
                            Professional Drivers You Can Trust
                        </h2>

                        <div className="w-20 h-1 bg-luxury-gold" />

                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p>
                                Our professional driver team delivers reliable service 24
                                hours a day, 365 days a year. Every journey is handled with
                                care, discretion, and a strong sense of responsibility toward our pilgrims.
                            </p>

                            <p>
                                Whether it's an airport transfer, Umrah travel, or intercity
                                transport, our focus is simple: quality service and excellent
                                value. Choose from our modern luxury sedans, GMCs, and buses,
                                regularly maintained for your comfort.
                            </p>

                            <blockquote className="border-l-4 border-luxury-gold pl-6 py-2 italic text-gray-800 bg-gray-50 rounded-r-lg">
                                Above all, it's our well-trained, uniformed driver that sets us
                                apart. All drivers are carefully selected, thoroughly
                                trained in customer service and safe driving to ensure a
                                refined service every time.
                            </blockquote>
                        </div>

                        <Link
                            href="/booking"
                            className="inline-flex items-center gap-2 text-luxury-gold font-bold uppercase tracking-widest text-sm hover:text-luxury-black transition-colors duration-300 group"
                        >
                            Meet Our Team
                            <span className="w-8 h-[1px] bg-luxury-gold group-hover:w-12 group-hover:bg-luxury-black transition-all duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurChauffeurs;
