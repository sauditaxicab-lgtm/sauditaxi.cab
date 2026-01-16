"use client";

import * as React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReviewStars } from "@/components/ui/animated-cards-stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock Data
const MOCK_REVIEWS = [
    {
        id: "r1",
        author_name: "Ahmed Al-Farsi",
        profile_photo_url: null,
        rating: 5,
        text: "Excellent service for our Umrah trip. The driver picked us up from Jeddah airport on time and the GMC was very comfortable for my family. Highly recommended for families.",
        relative_time_description: "a week ago",
        country_code: "AE",
        location: "Dubai, UAE"
    },
    {
        id: "r2",
        author_name: "Fatima Khan",
        profile_photo_url: null,
        rating: 5,
        text: "We booked a Staria for our Ziyarat in Madinah. The driver was very polite and knew all the historical places. The car was clean and spacious. Perfect pilgrim experience.",
        relative_time_description: "2 weeks ago",
        country_code: "GB",
        location: "London, UK"
    },
    {
        id: "r3",
        author_name: "John Smith",
        profile_photo_url: null,
        rating: 5,
        text: "Reliable airport transfer from Jeddah to Makkah. The booking process was easy and the price was transparent. No hidden fees which is great.",
        relative_time_description: "a week ago",
        country_code: "US",
        location: "New York, USA"
    },
    {
        id: "r4",
        author_name: "Mohammed Ali",
        profile_photo_url: null,
        rating: 5,
        text: "Very professional service. The driver waited for us even though our flight was delayed. Smooth ride to our hotel in Makkah.",
        relative_time_description: "3 weeks ago",
        country_code: "MY",
        location: "Kuala Lumpur, Malaysia"
    }
];

export function ReviewsSection() {
    const [reviews, setReviews] = useState<any[]>(MOCK_REVIEWS);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch('/api/reviews');
                const data = await res.json();
                if (data.result && data.result.reviews && data.result.reviews.length > 0) {
                    const mapped = data.result.reviews.map((r: any, idx: number) => ({
                        ...r,
                        id: r.id || `g-review-${idx}`,
                        location: r.location || "Verified Pilgrim"
                    }));
                    setReviews(mapped);
                }
            } catch (error) {
                console.error("Failed to load live reviews.", error);
            }
        };
        fetchReviews();
    }, []);

    return (
        <section className="py-24 bg-[#FCFBFA] relative overflow-hidden">
            {/* Subtle Texture/Warmth Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C6A355 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl text-center md:text-left">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold block mb-4"
                        >
                            Pilgrim Testimonials
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-serif text-black leading-[1.1]"
                        >
                            Trusted by <span className="text-luxury-gold italic">Thousands</span> <br />
                            of Sacred Travelers.
                        </motion.h2>
                    </div>

                    {/* Enhanced Google Rating Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-white border border-black/5 p-6 rounded-[2rem] shadow-xl flex items-center gap-6"
                    >
                        <div className="p-3 bg-stone-50 rounded-2xl">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                                alt="Google"
                                width={32}
                                height={32}
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-[#F4B400] fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="font-bold text-black text-lg leading-none">5.0 / 5.0</p>
                            <p className="text-black/40 text-xs font-medium uppercase tracking-widest mt-1">1,200+ Google Reviews</p>
                        </div>
                    </motion.div>
                </div>

                {/* Reviews Display - Scrolling Container on Mobile */}
                <div className="flex overflow-x-auto pb-12 lg:pb-0 lg:grid lg:grid-cols-3 gap-8 no-scrollbar snap-x snap-mandatory items-stretch">
                    {reviews.slice(0, 3).map((testimonial, index) => {
                        const isFeatured = index === 1; // Middle card featured
                        return (
                            <motion.div
                                key={testimonial.id || index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center p-[2px] rounded-[2.5rem] transition-all duration-500 
                                    ${isFeatured ? 'bg-gradient-to-br from-luxury-gold/40 to-transparent lg:scale-105 lg:-translate-y-4 z-20 shadow-2xl shadow-gold/10' : 'bg-transparent shadow-lg'}`}
                            >
                                <div className={`h-full flex flex-col p-10 rounded-[2.4rem] bg-white border border-black/5 relative overflow-hidden transition-colors group ${!isFeatured && 'hover:bg-stone-50'}`}>

                                    {/* Star Rating Strip */}
                                    <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-luxury-gold/5 rounded-full mb-8 border border-luxury-gold/10">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-3.5 h-3.5 text-luxury-gold fill-current drop-shadow-[0_2px_4px_rgba(198,163,85,0.4)]" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Quote Text */}
                                    <div className="relative mb-10">
                                        <p className="text-xl md:text-2xl font-serif italic text-black/80 leading-relaxed font-light line-clamp-4">
                                            "{testimonial.text}"
                                        </p>
                                    </div>

                                    {/* Author Profile */}
                                    <div className="flex items-center gap-4 mt-auto pt-8 border-t border-black/5">
                                        <div className="relative">
                                            <Avatar className="size-14 border-2 border-luxury-gold/20">
                                                <AvatarFallback className="bg-stone-100 text-black font-bold text-sm">
                                                    {testimonial.author_name.split(" ").map((n: string) => n[0]).join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                                                <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="block text-lg font-bold text-black group-hover:text-luxury-gold transition-colors">
                                                {testimonial.author_name}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-black uppercase tracking-[0.1em] text-black/40">
                                                    {testimonial.location || "Verified Chauffeur"}
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-black/20"></span>
                                                <span className="text-[10px] font-medium text-black/30">
                                                    {testimonial.relative_time_description}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Trust Action */}
                <div className="mt-20 text-center">
                    <p className="text-black/40 text-sm font-medium uppercase tracking-[0.2em] mb-6">Experience the difference yourself</p>
                    <button className="bg-black text-white px-12 py-5 rounded-2xl font-bold uppercase text-[11px] tracking-widest hover:bg-luxury-gold hover:text-black transition-all shadow-xl shadow-black/5 active:scale-95">
                        Read All 1,200+ Reviews
                    </button>
                </div>
            </div>
        </section>
    );
}
