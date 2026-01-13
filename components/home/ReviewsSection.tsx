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
        text: "Excellent service for our Umrah trip. The driver picked us up from Jeddah airport on time and the GMC was very comfortable for my family. Highly recommended.",
        relative_time_description: "a week ago",
        initial: "A"
    },
    {
        id: "r2",
        author_name: "Fatima Khan",
        profile_photo_url: null,
        rating: 5,
        text: "We booked a Staria for our Ziyarat in Madinah. The driver was very polite and knew all the historical places. The car was clean and spacious.",
        relative_time_description: "2 weeks ago",
        initial: "F"
    },
    {
        id: "r3",
        author_name: "John Smith",
        profile_photo_url: null,
        rating: 5,
        text: "I had a very good journey with Saudi Taxi. Reliable airport transfer from Jeddah to Makkah. The booking process was easy and the price was transparent.",
        relative_time_description: "a week ago",
        initial: "J"
    },
    {
        id: "r4",
        author_name: "Mohammed Ali",
        profile_photo_url: null,
        rating: 5,
        text: "Very professional service. The driver waited for us even though our flight was delayed. Smooth ride to our hotel in Makkah.",
        relative_time_description: "3 weeks ago",
        initial: "M"
    },
    {
        id: "r5",
        author_name: "Sarah Williams",
        profile_photo_url: null,
        rating: 5,
        text: "Clean cars and safe driving. Used them for intercity travel from Makkah to Madinah. Will definitely book again.",
        relative_time_description: "a month ago",
        initial: "S"
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
                        id: r.id || `g-review-${idx}`
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
        <section className="py-24 bg-white relative overflow-hidden">

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header Overlay */}
                <div className="text-center mb-16 relative z-10 px-4">
                    <h2 className="text-4xl md:text-6xl font-serif text-black mb-4">
                        <strong>What our clients say</strong>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg font-light">
                        See why pilgrims and travelers trust Saudi Taxi for their journeys.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                            alt="Google"
                            width={16}
                            height={16}
                        />
                        <span>Rated 5.0/5 based on 100+ Reviews</span>
                    </div>
                </div>

                {/* Static Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {reviews.slice(0, 3).map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id || index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="border border-stone-800 bg-[#0F1014] shadow-2xl rounded-2xl p-8 flex flex-col items-center text-center h-full hover:-translate-y-2 transition-transform duration-300"
                        >
                            <ReviewStars
                                className="text-luxury-gold mb-6"
                                rating={testimonial.rating}
                            />

                            <div className="w-full text-lg md:text-xl text-white/90 font-light italic leading-relaxed mb-8 flex-grow flex items-center justify-center">
                                <blockquote cite="#">
                                    "{testimonial.text.length > 200 ? testimonial.text.substring(0, 200) + "..." : testimonial.text}"
                                </blockquote>
                            </div>

                            <div className="flex items-center gap-4 pt-6 border-t border-white/10 w-full justify-center mt-auto">
                                <Avatar className="size-12 border border-stone-700">
                                    {testimonial.profile_photo_url ? (
                                        <AvatarImage
                                            src={testimonial.profile_photo_url}
                                            alt={`Portrait of ${testimonial.author_name}`}
                                        />
                                    ) : null}
                                    <AvatarFallback className="bg-luxury-gold text-black font-bold">
                                        {testimonial.author_name
                                            .split(" ")
                                            .map((n: string) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="text-left">
                                    <span className="block text-lg font-semibold tracking-tight text-white">
                                        {testimonial.author_name}
                                    </span>
                                    <span className="block text-sm text-gray-400">
                                        {testimonial.relative_time_description}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
