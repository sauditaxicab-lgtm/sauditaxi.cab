"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    title?: string;
}

export function FAQAccordion({ items, title = "Frequently Asked Questions" }: FAQAccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="my-12 py-10 border-y border-white/10">
            <h2 className="text-3xl font-serif text-white mb-8">{title}</h2>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div 
                        key={index}
                        className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left group"
                        >
                            <span className="text-lg font-medium text-white/90 group-hover:text-luxury-gold transition-colors">
                                {item.question}
                            </span>
                            <motion.div
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="text-luxury-gold"
                            >
                                <ChevronDown className="w-5 h-5" />
                            </motion.div>
                        </button>
                        
                        <AnimatePresence initial={false}>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-6 text-white/60 leading-relaxed border-t border-white/5 pt-4">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
