"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/home/FAQSection";
import {
    Users,
    Briefcase,
    CheckCircle2,
    Shield,
    Snowflake,
    Zap,
    MapPin,
    ArrowRight,
    Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const camryGallery = [
    { src: "/camry/camry-main.jpeg", alt: "Toyota Camry Black Edition Premium Side View" },
    { src: "/camry/camry-front.jpg", alt: "Toyota Camry Modern Front Facade" },
    { src: "/camry/camry-interior-1.jpeg", alt: "Toyota Camry Luxury Interior" },
    { src: "/camry/camry-interior-2.jpeg", alt: "Toyota Camry Spacious Rear Seating" }
];

export function ToyotaCamryContent() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % camryGallery.length);
        }, 5000); // 5 seconds interval
        return () => clearInterval(interval);
    }, []);

    const activeImage = camryGallery[activeIndex];

    return (
        <main className="bg-[#FCFBFA] font-sans text-zinc-900 overflow-x-hidden">
            {/* Sales-Desk Hero - Dominance & Action */}
            <section className="relative pt-24 pb-12 lg:pt-24 lg:pb-32 bg-white border-b border-black/5 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24">

                        {/* Left Section: Aggressive Conversion (The Sales Desk) */}
                        <div className="lg:w-2/5 flex flex-col justify-center order-2 lg:order-1 relative z-20">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Premium Verified Badge */}
                                <div className="inline-flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-full shadow-2xl border border-luxury-gold/30 mb-10 transform -rotate-1">
                                    <div className="size-2 rounded-full bg-luxury-gold animate-pulse shadow-[0_0_10px_rgba(198,163,85,0.8)]"></div>
                                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-luxury-gold/90">Premium Verified Fleet</span>
                                </div>

                                <h1 className="mb-6 md:mb-8 leading-[0.95] text-black text-4xl md:text-6xl lg:text-7xl font-serif font-bold">
                                    Toyota <span className="text-luxury-gold italic">Camry</span>
                                </h1>

                                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="#C5A059" className="text-luxury-gold" />)}
                                    </div>
                                    <span className="text-xs md:text-sm font-bold text-black border-l border-black/10 pl-3 md:pl-4">4.9/5 Trip Rating</span>
                                </div>

                                <p className="text-zinc-500 text-xl font-light mb-12 leading-relaxed max-w-md">
                                    Lock in the Kingdom's most reliable sedan for your sacred journey. Precision comfort for up to 4 passengers.
                                </p>

                                {/* High-Contrast CTA - The Visual Boss */}
                                <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                                    <Link href="/booking?vehicle=Camry" className="block relative">
                                        <Button className="w-full bg-luxury-gold hover:bg-black text-black hover:text-white h-16 md:h-20 rounded-2xl font-black uppercase text-xs md:text-sm tracking-[0.25em] shadow-[0_25px_50px_-12px_rgba(198,163,85,0.4)] transition-all flex items-center justify-center gap-3 md:gap-4 group hover:-translate-y-2 active:scale-95 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
                                            Instant Booking Confirmation
                                            <ArrowRight className="group-hover:translate-x-3 transition-transform" size={18} />
                                        </Button>
                                    </Link>
                                    <a href="https://wa.me/966567086207" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="w-full border-2 border-black/5 text-black h-14 md:h-16 rounded-2xl font-bold uppercase text-[10px] md:text-[11px] tracking-widest hover:border-luxury-gold transition-all bg-stone-50/50 hover:bg-white text-black/60 hover:text-black flex items-center justify-center gap-2">
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-[#25D366]">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            Chat with Dispatcher (WhatsApp)
                                        </Button>
                                    </a>
                                </div>

                                {/* FOMO / Urgency Signal */}
                                <div className="flex items-center gap-2 mb-10 px-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => <div key={i} className="size-5 rounded-full border border-white bg-stone-200" />)}
                                    </div>
                                    <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Booked 14 times in the last 24 hours</span>
                                </div>

                                {/* Feature Decision Anchors */}
                                <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 border-t border-black/5 pt-8 md:pt-10">
                                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                        <div className="flex items-center gap-2 mb-1 md:mb-2">
                                            <Users size={14} className="text-luxury-gold" />
                                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-black/30">Seats</span>
                                        </div>
                                        <p className="text-sm md:text-lg font-bold text-black font-serif">4 Adults</p>
                                    </div>
                                    <div className="flex flex-col items-center md:items-start text-center md:text-left border-l border-r border-black/5 px-2 md:px-0 md:border-none">
                                        <div className="flex items-center gap-2 mb-1 md:mb-2">
                                            <Briefcase size={14} className="text-luxury-gold" />
                                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-black/30">Luggage</span>
                                        </div>
                                        <p className="text-sm md:text-lg font-bold text-black font-serif">2 Big</p>
                                    </div>
                                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                        <div className="flex items-center gap-2 mb-1 md:mb-2">
                                            <CheckCircle2 size={14} className="text-green-600" />
                                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-black/30">A/C</span>
                                        </div>
                                        <p className="text-sm md:text-lg font-bold text-black font-serif">Snow</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Section: Interactive Showcase (Supporting, Not Competing) */}
                        <div className="lg:w-3/5 relative order-1 lg:order-2">
                            {/* Dimmable/Subdued Showcase Container */}
                            <div className="relative group">
                                <div className="absolute -inset-10 bg-luxury-gold/5 blur-[120px] rounded-full opacity-50 z-0"></div>

                                <div className="relative aspect-[3/4] max-w-[450px] mx-auto rounded-[2.5rem] overflow-hidden border border-black/5 bg-stone-100 shadow-2xl z-10">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeIndex}
                                            initial={{ opacity: 0, scale: 1.05 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="relative w-full h-full"
                                        >
                                            <Image
                                                src={activeImage.src}
                                                alt={activeImage.alt}
                                                fill
                                                className="object-cover transition-all duration-1000 group-hover:brightness-90 brightness-[0.98]"
                                                priority
                                            />
                                            {/* Subtle Vignette to push focus left */}
                                            <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-white/10"></div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Tactile Interactive Thumbnails */}
                                <div className="mt-8 lg:absolute lg:-bottom-12 lg:mt-0 left-0 right-0 z-20 flex justify-center gap-4 px-6 md:px-0">
                                    {camryGallery.map((img, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveIndex(i)}
                                            className={`relative aspect-square w-16 md:w-24 rounded-2xl overflow-hidden border-2 transition-all duration-500 shadow-xl group/thumb
                                                ${activeIndex === i ? 'border-luxury-gold ring-8 ring-luxury-gold/10 scale-110 -translate-y-4' : 'border-white opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-2'}`}
                                        >
                                            <Image src={img.src} alt={img.alt} fill className="object-cover group-hover/thumb:scale-125 transition-transform duration-700" />
                                            {activeIndex === i && (
                                                <div className="absolute inset-0 bg-luxury-gold/10 backdrop-blur-[1px]"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Decision Logic: Trust Cards */}
            <section className="py-16 md:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                        {[
                            { icon: Zap, title: "Zero Wait Promise", desc: "Drivers tracked in real-time. We are at the arrivals gate before you exit.", highlight: false },
                            { icon: Shield, title: "Pilgrim-Safe Standard", desc: "Strict 12-point sanitization between every trip. Professional attire, GPS-tracked.", highlight: true },
                            { icon: MapPin, title: "Ziyarat Expertise", desc: "Beyond airport transfers — our drivers know the history and heart of our cities.", highlight: false }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -15 }}
                                className={`p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border transition-all duration-700 relative overflow-hidden group
                                    ${item.highlight ? 'bg-luxury-black border-luxury-gold shadow-[0_40px_100px_-20px_rgba(198,163,85,0.3)] lg:scale-110 z-20 lg:-translate-y-4' : 'bg-stone-50 border-black/5 hover:bg-white hover:shadow-2xl opacity-90 hover:opacity-100'}`}
                            >
                                {item.highlight && (
                                    <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-luxury-gold text-black text-[8px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1 md:px-4 md:py-1.5 rounded-full shadow-lg">
                                        Industry Exclusive
                                    </div>
                                )}
                                <div className={`size-16 md:size-20 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 md:mb-10 transition-all duration-500 shadow-xl
                                    ${item.highlight ? 'bg-luxury-gold text-black scale-110 group-hover:rotate-6' : 'bg-black text-white group-hover:bg-luxury-gold group-hover:text-black group-hover:rotate-3'}`}>
                                    <item.icon size={28} className="md:w-[36px] md:h-[36px]" />
                                </div>
                                <h3 className={`text-2xl md:text-4xl font-serif font-bold mb-4 md:mb-6 ${item.highlight ? 'text-white' : 'text-black'}`}>{item.title}</h3>
                                <p className={`text-base md:text-xl font-light leading-relaxed ${item.highlight ? 'text-white/70' : 'text-black/50'}`}>{item.desc}</p>
                                {item.highlight && (
                                    <div className="mt-6 pt-6 md:mt-8 md:pt-8 border-t border-white/10 flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="size-6 md:size-8 rounded-full border-2 border-luxury-black bg-luxury-gold/20 flex items-center justify-center overflow-hidden">
                                                    <span className="text-[6px] md:text-[8px] font-bold text-luxury-gold">★</span>
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-[8px] md:text-[10px] text-white/40 uppercase font-black tracking-widest font-sans">Trusted by 5k+ Families</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Multiplying Trust: Social Proof */}
            <section className="py-20 md:py-32 bg-luxury-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#C6A355_1.5px,transparent_1.5px)] [background-size:48px_48px]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-12 md:mb-20">
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 md:px-6 md:py-3 rounded-full mb-6">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="#C6A355" className="text-luxury-gold md:w-[16px] md:h-[16px]" />)}
                            </div>
                            <span className="text-white/60 text-[10px] md:text-xs font-bold tracking-widest uppercase">Verified 5.0 Rating</span>
                        </div>
                        <h2 className="text-white mb-6">Real Trust From Real Pilgrims</h2>
                        <p className="text-white/40 text-sm md:text-lg uppercase tracking-widest font-black">Joining 1,200+ Successful Transfers This Month</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
                        {/* Main Featured Review */}
                        <div className="bg-white/[0.03] backdrop-blur-md rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl lg:col-span-1 relative">
                            <div className="absolute top-0 right-6 md:right-10 -translate-y-1/2 bg-luxury-gold text-black text-[8px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded-full">Recommended</div>
                            <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed mb-8 md:mb-10">
                                "The Toyota Camry was exceptionally clean. The driver met us at Jeddah Airport hall and handled everything. Best private transfer service in the Kingdom."
                            </p>
                            <div className="flex items-center gap-4 md:gap-5">
                                <div className="size-12 md:size-14 rounded-full bg-luxury-gold/20 flex items-center justify-center font-bold text-luxury-gold border border-luxury-gold/20">AK</div>
                                <div>
                                    <span className="block text-white font-bold text-base md:text-lg">Ameen K.</span>
                                    <span className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-widest font-black">December 2025 • Verified</span>
                                </div>
                            </div>
                        </div>
                        {/* Secondary Social Signal */}
                        <div className="space-y-6 md:space-y-8">
                            {[
                                { name: "Sarah J.", city: "London, UK", text: "Brilliant airport pickup. Punctual, safe, and professional." },
                                { name: "Ahmed F.", city: "Dubai, UAE", text: "Cleanest car I've hired in Saudi. Highly recommended for families." }
                            ].map((r, i) => (
                                <div key={i} className="bg-white/5 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white/5 hover:bg-white/[0.07] transition-colors relative">
                                    <div className="flex gap-1 mb-3 md:mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} fill="#C6A355" className="text-luxury-gold md:w-[12px] md:h-[12px]" />)}
                                    </div>
                                    <p className="text-white/80 italic text-base md:text-lg mb-4 md:mb-6 leading-relaxed">"{r.text}"</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white font-bold text-xs md:text-sm">{r.name}</span>
                                        <span className="text-white/20 text-[8px] md:text-[10px] uppercase font-black">{r.city}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expansive Trust Footer */}
                    <div className="flex flex-col items-center">
                        <div className="flex gap-2 mb-6">
                            {[1, 2, 3, 4, 5].map(i => <div key={i} className={`size-1.5 rounded-full ${i === 1 ? 'bg-luxury-gold w-6' : 'bg-white/20'}`} />)}
                        </div>
                    </div>
                </div>
            </section>

            {/* Helped-Based FAQ */}
            <section className="py-20 md:py-32 bg-[#FCFBFA]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12 md:mb-20">
                        <div className="size-16 md:size-20 bg-luxury-gold/10 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 border border-luxury-gold/10 animate-pulse">
                            <CheckCircle2 className="text-luxury-gold w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <h2 className="text-black mb-4">We've Processed Your Concerns</h2>
                        <p className="text-black/40 text-base md:text-lg font-light tracking-wide">Everything you need to know before your journey begins.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
                        {[
                            { title: "No Delay Penalty", icon: Snowflake },
                            { title: "Refund Guarantee", icon: Shield },
                            { title: "24/7 Driver Support", icon: Users }
                        ].map((b, i) => (
                            <div key={i} className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-black/5 flex items-center gap-3 md:gap-4 shadow-sm text-center md:text-left justify-center md:justify-start">
                                <b.icon size={18} className="text-luxury-gold md:w-[20px] md:h-[20px]" />
                                <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest">{b.title}</span>
                            </div>
                        ))}
                    </div>

                    <FAQSection
                        title="" // Hidden to use custom header above
                        darkContent={true}
                        className="bg-transparent"
                        items={[
                            {
                                question: "What if my flight is delayed by several hours?",
                                answer: "Relax. We track your flight live. If you're delayed, we adjust. No extra charges, no stress. We are there when you land."
                            },
                            {
                                question: "How do I find my driver at a busy airport?",
                                answer: "We solve this anxiety. Your driver will be waiting in the arrivals hall with a personalized name card. We also send you their contact details and live location via WhatsApp 2 hours before arrival."
                            },
                            {
                                question: "Is this the exact car I will get?",
                                answer: "Yes. When you book a Camry, you get a premium Toyota Camry (Model 2023 or newer). We never swap sedans without your explicit consent."
                            }
                        ]}
                    />
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-luxury-gold/5 blur-[150px] animate-pulse pointer-events-none"></div>
                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-black rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 border-2 border-luxury-gold shadow-[0_50px_100px_-20px_rgba(198,163,85,0.4)] relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-700 hidden md:block">
                            <Zap size={200} className="text-luxury-gold" />
                        </div>

                        <h3 className="text-3xl md:text-7xl font-serif font-bold mb-6 md:mb-10 text-white leading-tight">Start Your <span className="text-luxury-gold italic">Sacred Journey</span> Now</h3>
                        <p className="text-white/40 text-[8px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] mb-8 md:mb-12">Limited Availability for Next 48 Hours</p>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-stretch relative z-10">
                            <Link href="/booking" className="w-full md:w-auto">
                                <Button className="w-full bg-luxury-gold text-black hover:bg-white h-16 md:h-24 px-8 md:px-16 rounded-2xl md:rounded-3xl font-black uppercase text-sm md:text-base tracking-[0.2em] md:tracking-[0.25em] shadow-2xl shadow-gold/30 transition-all hover:scale-105 active:scale-95 group/btn">
                                    Secure My Camry Now
                                    <ArrowRight className="inline-block ml-3 group-hover/btn:translate-x-2 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/fleet" className="w-full md:w-auto">
                                <Button variant="outline" className="w-full border-white/10 text-white h-16 md:h-24 px-8 md:px-12 rounded-2xl md:rounded-3xl font-bold uppercase text-[10px] md:text-[12px] tracking-widest hover:bg-white hover:text-black transition-all">
                                    Compare Others
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
