"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    "On-time service, every time",
    "Luxury taxi services across Saudi Arabia",
    "Meet-and-greet at Jeddah & Madinah Airports",
    "Umrah & Hajj transfers",
    "Ziyarat tours in Makkah & Madinah",
    "Intercity transfers to all major cities",
    "VIP transport for special occasions",
];

const ServicesChecklist = () => {
    return (
        <section className="px-16 py-20 md:py-32 bg-white text-luxury-black overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Title and Checklist */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-luxury-black leading-tight">
                            You Deserve The Finest Transport Solution In KSA
                        </h2>
                        <p className="text-lg text-gray-600 mb-10">
                            Give yourself the best that you deserve. Choose premium Taxi
                            Services in Saudi Arabia for:
                        </p>

                        <ul className="space-y-4 mb-10">
                            {services.map((service, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold-dark">
                                        <Check size={14} strokeWidth={3} />
                                    </span>
                                    <span className="text-lg text-gray-800 font-medium">{service}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/booking"
                            className="inline-block bg-luxury-black text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300"
                        >
                            Enquire Now
                        </Link>
                    </motion.div>

                    {/* Right Column: Additional Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100 shadow-lg"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4 text-luxury-black">Our Commitment</h3>
                            <p className="text-gray-600 italic mb-4">
                                Focusing on your spiritual journey, we ensure every pilgrim arrives with peace of mind.
                            </p>
                            <div className="w-16 h-1 bg-luxury-gold/30 rounded-full" />
                        </div>

                        <h3 className="text-2xl font-serif font-bold text-luxury-black mb-4">
                            Quality is our promise.
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            What truly matters is finding Saudi Arabia's trusted transport service, Saudi Taxi.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            With licensed drivers, we service all of The Kingdom with a premium fleet ranging from comfort sedans to spacious GMCs and buses for group travel.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesChecklist;
