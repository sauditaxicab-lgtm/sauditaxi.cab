"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_CONFIG } from "@/lib/constants";

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    description?: string;
    backgroundImage: string;
    onBookNow?: () => void;
    overlay?: boolean;
    backgroundClassName?: string;
}

export function ServiceHero({ title, subtitle, description, backgroundImage, onBookNow, overlay = true, backgroundClassName = "" }: ServiceHeroProps) {
    return (
        <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden">
            {/* Background Layer with Cinematic Effects */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover object-center scale-105"
                    priority
                />

                {/* Layered Overlays for Depth */}
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black z-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 via-transparent to-luxury-black/80 z-20" />

                {/* Atmospheric Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(198,163,85,0.08)_0%,transparent_70%)] z-15" />
            </div>

            <div className="container mx-auto px-6 relative z-30 pt-32 md:pt-40 pb-20">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center"
                    >
                        {/* Elegant Subtitle with Gold Accents */}
                        <div className="inline-flex items-center gap-4 mb-10">
                            <span className="w-8 h-[1px] bg-luxury-gold/50"></span>
                            <span className="text-luxury-gold uppercase tracking-[0.4em] font-bold text-[10px] md:text-sm">
                                {subtitle}
                            </span>
                            <span className="w-8 h-[1px] bg-luxury-gold/50"></span>
                        </div>

                        {/* Title with specialized styling for branding */}
                        <h1 className="text-white mb-8 leading-[48px] text-[36px] font-thin font-serif tracking-tight drop-shadow-2xl">{title.split('–').map((part, i) => (<span key={i} className="block last:text-luxury-gold last:mt-2">{part.trim()}</span>))}</h1>

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="w-24 h-[2px] bg-luxury-gold mx-auto mb-10"
                        />

                        {description && (
                            <p className="text-white/80 text-[16px] max-w-2xl mx-auto mb-12 font-normal leading-[24px] tracking-wide italic">
                                "{description}"
                            </p>
                        )}

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/booking" className="w-full sm:w-auto overflow-hidden group relative">
                                <Button
                                    variant="gold"
                                    className="w-full sm:min-w-[240px] bg-luxury-gold text-black hover:bg-white hover:text-black font-bold text-base h-16 rounded-sm shadow-[0_0_30px_rgba(198,163,85,0.2)] transition-all duration-500 overflow-hidden"
                                >
                                    <span className="relative z-10">BOOK YOUR SACRED RIDE</span>
                                </Button>
                            </Link>

                            <Link href={`https://wa.me/${BUSINESS_CONFIG.PHONE.replace('+', '')}`} className="w-full sm:w-auto">
                                <Button
                                    variant="outline"
                                    className="w-full sm:min-w-[240px] border-white/20 text-white hover:bg-white/5 hover:border-white/40 font-bold text-base h-16 rounded-sm backdrop-blur-sm transition-all duration-500"
                                >
                                    WHATSAPP CONSULTATION
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Cinematic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
            >
                <div className="flex flex-col items-center gap-3">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Discover Excellence</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold to-transparent"></div>
                </div>
            </motion.div>
        </section>
    );
}
