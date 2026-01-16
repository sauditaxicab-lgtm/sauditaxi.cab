"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pillars = [
    {
        id: "punctuality",
        title: "Punctuality Guarantee",
        subtitle: "The Best Saudi Taxi Service Experience.",
        description: "We operate on precision, not promises. Whether it's an airport pickup or an Umrah journey, our <strong>Saudi taxi service</strong> ensures you are never late. If your driver is not present, your next ride is on us."
    },
    {
        id: "vetted",
        title: "Experienced Drivers",
        subtitle: "Professionally Trained & Trusted.",
        description: "Every driver is fully licensed and experienced in navigating Saudi roads. We provide the most <strong>comfortable taxi service to Saudi Arabia</strong> for pilgrims visiting Makkah and Madinah."
    },
    {
        id: "flight",
        title: "24/7 Flight Monitoring",
        subtitle: "Your Premier Saudi Airport Taxi.",
        description: "Flights don’t always run on schedule. We do. Our team monitors your flight in real-time, making us the <strong>best Saudi airport taxi</strong> choice for international arrivals at Jeddah or Madinah."
    },
    {
        id: "reviews",
        title: "Verified Client Reviews",
        subtitle: "Trusted by Pilgrims & Families",
        description: "Our reputation is built on real journeys. From international pilgrims to local families, we are recognized as the <strong>best taxi service in Saudi Arabia</strong> for safety and reliability."
    }
];

// Rich Gold Gradient Definition
const GoldGradientDef = () => (
    <svg width="0" height="0" className="absolute">
        <defs>
            <linearGradient id="luxuryGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C6A355" /> {/* Muted Gold */}
                <stop offset="30%" stopColor="#F9E8B2" /> {/* Light Highlight */}
                <stop offset="60%" stopColor="#BF953F" /> {/* Deep Gold */}
                <stop offset="100%" stopColor="#8C6215" /> {/* Golden Brown Shadow */}
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
    </svg>
);

// High-Fidelity Custom Icons
const Icons = {
    punctuality: () => (
        <div className="relative w-16 h-16 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                {/* Stopwatch Body */}
                <path d="M50 8 C26.8 8 8 26.8 8 50 C8 73.2 26.8 92 50 92 C73.2 92 92 73.2 92 50 C92 26.8 73.2 8 50 8 Z M50 86 C30.1 86 14 69.9 14 50 C14 30.1 30.1 14 50 14 C69.9 14 86 30.1 86 50 C86 69.9 69.9 86 50 86 Z" fill="url(#luxuryGoldGradient)" />
                {/* Top Button */}
                <rect x="46" y="2" width="8" height="6" fill="url(#luxuryGoldGradient)" />
                {/* Angled Buttons */}
                <path d="M78 22 L84 16 L88 20 L82 26 Z" fill="url(#luxuryGoldGradient)" />
                {/* Clock Hands & Checkmark Hybrid */}
                <motion.g
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Checkmark integrated into clock face */}
                    <path d="M35 50 L45 60 L68 35" fill="none" stroke="url(#luxuryGoldGradient)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
                </motion.g>
                {/* Decorative Ticks */}
                <circle cx="50" cy="20" r="2" fill="url(#luxuryGoldGradient)" opacity="0.6" />
                <circle cx="50" cy="80" r="2" fill="url(#luxuryGoldGradient)" opacity="0.6" />
                <circle cx="20" cy="50" r="2" fill="url(#luxuryGoldGradient)" opacity="0.6" />
                <circle cx="80" cy="50" r="2" fill="url(#luxuryGoldGradient)" opacity="0.6" />
            </svg>
        </div>
    ),
    vetted: () => (
        <div className="relative w-16 h-16 flex items-center justify-center -mt-2">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                {/* Chauffeur Cap */}
                {/* Crown */}
                <path d="M25 25 Q 20 10 50 5 Q 80 10 75 25 Z" fill="url(#luxuryGoldGradient)" />
                {/* Visor/Base */}
                <path d="M20 30 Q 50 40 80 30 L 78 28 Q 50 38 22 28 Z" fill="url(#luxuryGoldGradient)" />

                {/* Head/Face - Clean Silhouette */}
                <path d="M35 35 Q 32 60 50 65 Q 68 60 65 35 Z" fill="url(#luxuryGoldGradient)" />

                {/* Suit Shoulders & Collar */}
                <path d="M20 70 Q 35 65 50 75 Q 65 65 80 70 L 85 95 H 15 Z" fill="url(#luxuryGoldGradient)" />

                {/* Tie & Shirt V */}
                <path d="M50 75 L 45 70 L 50 90 L 55 70 Z" fill="#F9E8B2" opacity="0.8" />
            </svg>
        </div>
    ),
    flight: () => (
        <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Standard 24x24 ViewBox for 'Library' Icons to ensure correct scaling and visibility */}
            <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-md">
                {/* Material Design 'Flight' Icon Path */}
                <path
                    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                    fill="url(#luxuryGoldGradient)"
                    transform="rotate(45, 12, 12)"
                />
            </svg>
        </div>
    ),
    reviews: () => (
        <div className="relative w-16 h-16 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                {/* User Silhouette (Left) */}
                <path d="M30 60 C15 60 10 90 10 90 H50 C50 90 45 60 30 60 Z" fill="url(#luxuryGoldGradient)" opacity="0.8" />
                <circle cx="30" cy="40" r="15" fill="url(#luxuryGoldGradient)" opacity="0.9" />

                {/* Large Review Box/Bubble (Right overlap) */}
                <path d="M45 25 H85 C87.76 25 90 27.24 90 30 V60 C90 62.76 87.76 65 85 65 H80 L70 75 V65 H45 C42.24 65 40 62.76 40 60 V30 C40 27.24 42.24 25 45 25 Z" fill="url(#luxuryGoldGradient)" />

                {/* 5 Stars inside Bubble - White cutouts or lighter gold */}
                <g fill="#fff" opacity="0.9">
                    <path d="M50 45 L52 50 L57 50 L53 54 L54 59 L50 56 L46 59 L47 54 L43 50 L48 50 Z" transform="scale(0.8) translate(10, 10)" />
                    <path d="M65 45 L67 50 L72 50 L68 54 L69 59 L65 56 L61 59 L62 54 L58 50 L63 50 Z" transform="scale(0.8) translate(10, 10)" />
                    <path d="M80 45 L82 50 L87 50 L83 54 L84 59 L80 56 L76 59 L77 54 L73 50 L78 50 Z" transform="scale(0.8) translate(10, 10)" />
                </g>

                {/* "Verified" Check badge on User */}
                <circle cx="15" cy="80" r="8" fill="#000" stroke="url(#luxuryGoldGradient)" strokeWidth="2" />
                <path d="M11 80 L14 83 L19 78" fill="none" stroke="url(#luxuryGoldGradient)" strokeWidth="2" />
            </svg>
        </div>
    )
};

export function FourPillars() {
    return (
        <section className="relative py-24 px-4 overflow-hidden bg-luxury-black">
            <GoldGradientDef />

            {/* Background Image with Aggressive Damping */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-40 grayscale-[0.5]"
                style={{ backgroundImage: "url('/city_night_luxury_bg.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-black/90 to-luxury-black"></div>
                {/* Side Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold block mb-4 border-b border-luxury-gold/20 pb-2 w-fit mx-auto"
                    >
                        The Pillar of Excellence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]"
                    >
                        Why Pilgrims Trust <br />
                        <span className="text-luxury-gold">Saudi Taxi Transport?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base uppercase tracking-wider"
                    >
                        A service built on absolute punctuality, verified safety, and spiritual accountability.
                    </motion.p>
                </div>

                {/* Grid Layout - Mobile horizontal scroll / Desktop 4 columns */}
                <div className="flex overflow-x-auto pt-8 pb-8 lg:pt-0 lg:pb-0 lg:overflow-x-visible lg:grid lg:grid-cols-4 gap-6 no-scrollbar snap-x snap-mandatory">
                    {pillars.map((pillar, index) => {
                        const IconComponent = Icons[pillar.id as keyof typeof Icons];
                        const isFeatured = index === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center relative transition-all duration-500 group rounded-3xl p-1 ${isFeatured ? 'lg:col-span-1 border-2 border-luxury-gold/30' : ''}`}
                            >
                                {isFeatured && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-luxury-gold text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest z-30 shadow-xl">
                                        Most Reliable
                                    </div>
                                )}

                                <div className={`h-full flex flex-col p-8 md:p-10 rounded-[2rem] transition-all duration-500 border border-white/5 
                                    ${isFeatured ? 'bg-gradient-to-br from-luxury-gold/10 via-white/5 to-transparent' : 'bg-white/5'} 
                                    hover:bg-white/[0.08] hover:border-luxury-gold/30 hover:-translate-y-2`}>

                                    {/* Icon Pedestal */}
                                    <div className="relative mb-8 w-20 h-20 mx-auto flex items-center justify-center">
                                        <div className="absolute inset-0 bg-luxury-gold/10 blur-xl rounded-full group-hover:bg-luxury-gold/20 transition-all"></div>
                                        <div className="relative z-10 w-full h-full flex items-center justify-center bg-black/40 rounded-2xl border border-white/10 group-hover:border-luxury-gold/30 transition-all">
                                            <IconComponent />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-serif text-white mb-3 text-center group-hover:text-luxury-gold transition-colors">
                                        {pillar.title}
                                    </h3>

                                    <div className="text-luxury-gold text-[10px] uppercase font-bold tracking-[0.15em] mb-6 text-center border-b border-white/5 pb-3">
                                        {pillar.subtitle.replace('.', '')}
                                    </div>

                                    <p className="text-white/50 text-xs md:text-sm leading-[1.7] text-center font-light flex-grow">
                                        {pillar.description.replace(/<strong>|<\/strong>/g, '')}
                                    </p>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Professional Conclusion Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 relative px-8 py-10 md:py-12 bg-white/[0.02] border border-white/5 rounded-[3rem] max-w-4xl mx-auto overflow-hidden text-center group"
                >
                    {/* Background Detail */}
                    <div className="absolute top-0 right-0 p-8 text-luxury-gold/10 italic font-serif text-8xl pointer-events-none">"</div>

                    <p className="text-white/60 font-serif italic text-lg md:text-2xl leading-relaxed relative z-10">
                        "No hidden charges. No last-minute surprises. Just refined service delivered the way it always has been, professionally, reliably, and with quiet confidence."
                    </p>

                    {/* Gold line detail */}
                    <div className="mt-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent mx-auto"></div>
                </motion.div>
            </div>
        </section>
    );
}
