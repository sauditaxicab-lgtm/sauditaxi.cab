"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Can I Book Private Transport For Umrah?",
        answer: "Yes, we specialize in Umrah transfers between Jeddah, Makkah, and Madinah. We can arrange pickups from Jeddah Airport (KAIA) directly to your hotel in Makkah."
    },
    {
        question: "Do You Offer Child Seats?",
        answer: "Yes, we provide safe child seats upon request. Please mention this requirement when you book your ride."
    },
    {
        question: "Is The Price Final or Estimated?",
        answer: "The price you receive is fixed. There are no hidden charges or surge pricing, ensuring you can budget your trip effectively."
    },
    {
        question: "Are Your Drivers Licensed?",
        answer: "Yes, all our drivers are fully licensed and experienced with the routes between holy cities. They are professional and respectful."
    },
    {
        question: "What If My Flight Is Delayed?",
        answer: "We monitor flight arrivals at Jeddah and Madinah airports. Your driver will adjust the pickup time accordingly, so you don't need to worry about delays."
    }
];

export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items?: FAQItem[];
    title?: string;
    className?: string;
}

export function FAQSection({ items, title = "Frequently Asked Questions", className = "bg-luxury-black" }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const displayFaqs = items || faqs;

    return (
        <section className={`py-24 ${className}`}>
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-luxury-gold uppercase tracking-widest text-xs font-bold block mb-4">
                        Common Questions
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white">
                        {title}
                    </h2>
                </div>

                <div className="space-y-4">
                    {displayFaqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-sm overflow-hidden bg-white/5 hover:border-luxury-gold/30 transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className={`text-lg transition-colors ${openIndex === index ? "text-luxury-gold" : "text-white"}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? <Minus className="text-luxury-gold" /> : <Plus className="text-white/50" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-white/70 font-light leading-relaxed border-t border-white/5 mt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
