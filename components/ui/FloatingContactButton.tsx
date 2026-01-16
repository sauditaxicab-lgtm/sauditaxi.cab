"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { BUSINESS_CONFIG } from "@/lib/constants";
import Image from "next/image";

export function FloatingContactButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Show card after scrolling down
    useEffect(() => {
        const handleScroll = () => {
            if (hasInteracted) return;

            if (window.scrollY > 300) {
                setShowCard(true);
            } else {
                setShowCard(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasInteracted]);

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${BUSINESS_CONFIG.PHONE}`, '_blank');
    };

    return (
        <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[101] flex flex-col items-end gap-4">

            {/* WhatsApp Chat Card - Appears on Scroll */}
            <AnimatePresence>
                {(showCard || isOpen) && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="bg-zinc-50 rounded-2xl shadow-2xl border border-white/20 w-[300px] md:w-[340px] overflow-hidden origin-bottom-right font-sans"
                    >
                        {/* Card Header */}
                        <div className="bg-[#0A0A0F] p-4 flex items-center gap-4 border-b border-[#C4A975]/30 relative overflow-hidden">
                            {/* Decorative background blur */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C4A975]/10 blur-[50px] rounded-full pointer-events-none"></div>

                            <div className="relative shrink-0 z-10">
                                <div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center overflow-hidden border border-[#C4A975]/50 shadow-lg">
                                    <Image
                                        src="/logo/saudi-taxi-gold.png"
                                        alt="Saudi Taxi Logo"
                                        width={56}
                                        height={56}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                                <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-[#0A0A0F] rounded-full animate-pulse"></span>
                            </div>
                            <div className="flex flex-col z-10">
                                <h3 className="font-bold text-xl tracking-wide leading-none text-white font-serif mb-1">Saudi Taxi</h3>
                                <div className="flex items-center gap-1.5 opacity-90">
                                    <span className="text-[10px] text-[#C4A975] uppercase tracking-wider font-semibold">Online</span>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setShowCard(false);
                                    setHasInteracted(true);
                                }}
                                className="ml-auto text-white/40 hover:text-white transition-colors z-10"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Card Body */}
                        <div className="p-4 bg-[#E5DDD5]/20 relative min-h-[140px] flex flex-col justify-between">
                            {/* Chat Bubble */}
                            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm mb-4 inline-block max-w-[90%] relative border border-black/5">
                                <p className="text-zinc-800 text-[14px] leading-relaxed">
                                    Hello! 👋 <br />
                                    Need a taxi for <span className="font-medium text-[#0A0A0F]">Umrah</span> or <span className="font-medium text-[#0A0A0F]">Airport transfer</span>? Chat with us now!
                                </p>
                                <span className="text-[10px] text-zinc-400 absolute bottom-1.5 right-3">
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                                </span>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={handleWhatsAppClick}
                                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span>Start Chat on WhatsApp</span>
                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <div className="relative group">
                {!isOpen && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000"></span>
                )}

                <button
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setShowCard(!isOpen);
                        setHasInteracted(true);
                    }}
                    className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 transform hover:scale-105 border-2 border-white"
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={28} strokeWidth={2.5} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="whatsapp"
                                initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>
        </div>
    );
}
