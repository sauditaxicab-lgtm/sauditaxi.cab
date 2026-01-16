"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Can I Book A Saudi Taxi For Umrah & Makkah Ziyarat Places?",
        answer: "Yes, we specialize in Umrah transfers between Jeddah, Makkah, and Madinah. We also provide full-day private tours to all major Makkah Ziyarat places including Jabal Al-Noor and Mount Arafat."
    },
    {
        question: "Do You Offer Child Seats?",
        answer: "Yes, we provide safe child seats upon request. Please mention this requirement when you book your Saudi Taxi."
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
    },
    {
        question: "How Can I Find A Saudi Taxi Cab Near Me?",
        answer: "If you need a taxi cab near you in Makkah, Madinah, or Jeddah, our online taxi service is available 24/7. We provide instant bookings and fixed-price cabs that are always near the main airports and holy sites."
    },
    {
        question: "What is the Best Taxi App in Saudi Arabia?",
        answer: "While there are many taxi apps in Saudi Arabia, Saudi Taxi offers a superior experience for pilgrims and long-distance travelers by providing fixed rates, no surge pricing, and a specialized premium fleet that apps often lack."
    },
    {
        question: "Do you provide a 24 hour taxi service in Saudi Arabia?",
        answer: "Yes, we are a fully operational 24 hour taxi service. Whether you require a luxury transfer at noon or a 24 hour airport taxi at midnight, our drivers are available around the clock to ensure your journey is never delayed."
    },
    {
        question: "How to Book a Taxi in Saudi Arabia for Umrah?",
        answer: "The easiest way for your Saudi Taxi booking is via our professional WhatsApp service or our online form. Simply provide your pickup point, flight details, and destination to receive an instant fixed-price quote."
    },
    {
        question: "Is private taxi available from Jeddah to Mecca?",
        answer: "Yes, we provide 24/7 private taxi services from Jeddah Airport (JED) directly to your hotel in Mecca. Our private hire vehicles are pre-booked to ensure a seamless arrival experience."
    },
    {
        question: "Can I book a private taxi from Madinah to Makkah?",
        answer: "Absolutely. We specialize in private taxi transfers from Madinah to Makkah. You can choose from our luxury fleet for a comfortable, non-stop journey between the holy cities."
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
    darkContent?: boolean;
}

export function FAQSection({ items, title = "Saudi Taxi FAQ", className = "bg-luxury-black", darkContent = false }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const displayFaqs = items || faqs;

    return (
        <section className={`py-24 ${className}`}>
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-luxury-gold uppercase tracking-widest text-xs font-bold block mb-4">
                        Common Questions
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-serif ${darkContent ? "text-black" : "text-white"}`}>
                        {title}
                    </h2>
                </div>

                <div className="space-y-4">
                    {displayFaqs.map((faq, index) => (
                        <div key={index} className={`border rounded-sm overflow-hidden transition-colors ${darkContent
                            ? "border-black/10 bg-black/5 hover:border-luxury-gold/50"
                            : "border-white/10 bg-white/5 hover:border-luxury-gold/30"
                            }`}>
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className={`text-base md:text-lg transition-colors pr-4 leading-snug ${openIndex === index
                                    ? "text-luxury-gold"
                                    : (darkContent ? "text-black" : "text-white")
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className="shrink-0">
                                    {openIndex === index
                                        ? <Minus className="text-luxury-gold shrink-0 w-5 h-5" />
                                        : <Plus className={`${darkContent ? "text-black/50" : "text-white/50"} shrink-0 w-5 h-5`} />
                                    }
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className={`p-6 pt-0 font-light leading-relaxed border-t mt-2 ${darkContent
                                            ? "text-black/70 border-black/5"
                                            : "text-white/70 border-white/5"
                                            }`}>
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
