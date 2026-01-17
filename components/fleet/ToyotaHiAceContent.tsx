"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BUSINESS_CONFIG } from "@/lib/constants";
import { FAQSection } from "@/components/home/FAQSection";
import {
    Maximize2,
    ArrowLeft,
    Users,
    Briefcase,
    Shield,
    Zap,
    Star,
    ArrowRight,
    Snowflake,
    CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const hiaceGallery = [
    { src: "/hiace/hiace-main.jpeg", alt: "Toyota HiAce 11-Seater Exterior View" },
    { src: "/hiace/hiace-interior.jpeg", alt: "Toyota HiAce Interior Cabin View" }
];

export function ToyotaHiaceContent() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % hiaceGallery.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const activeImage = hiaceGallery[activeIndex % hiaceGallery.length];

    return (
        <main className="bg-white min-h-screen font-sans text-zinc-900 overflow-x-hidden">
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-32 bg-[#0A0A0B] text-white min-h-[90vh] flex items-center">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                        <div className="lg:w-1/2 z-10 text-center lg:text-left order-2 lg:order-1">
                            <span className="text-luxury-gold uppercase tracking-[0.3em] font-bold text-[10px] mb-4 block">Group Transport Specialist</span>
                            <h1 className="mb-6 leading-tight text-3xl md:text-5xl lg:text-6xl font-serif font-bold">
                                Toyota HiAce <br />
                                <span className="text-luxury-gold italic">11-Seater Taxi</span>
                            </h1>
                            <p className="text-zinc-400 text-base md:text-lg font-light mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                The ultimate people mover. Efficient, high-roof comfort for large families and pilgrim groups. Perfectly engineered for the long roads between Holy Cities.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="/booking?vehicle=Toyota-HiAce" className="w-full sm:w-auto">
                                    <Button className="w-full bg-luxury-gold text-black hover:bg-white transition-all h-14 sm:h-12 px-8 rounded-full font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-gold/20">
                                        Book This Ride
                                    </Button>
                                </Link>
                                <a href={`https://wa.me/${BUSINESS_CONFIG.PHONE}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-black transition-all h-14 sm:h-12 px-8 rounded-full font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2">
                                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        WhatsApp Inquiry
                                    </Button>
                                </a>
                            </div>
                            <div className="mt-12">
                                <Link href="/fleet" className="inline-flex items-center gap-2 text-luxury-gold/60 hover:text-luxury-gold transition-colors text-xs uppercase tracking-widest font-bold">
                                    <ArrowLeft size={14} /> Back to Fleet
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative flex flex-col items-center order-1 lg:order-2">
                            <div className="absolute inset-0 bg-luxury-gold/10 blur-[100px] rounded-full opacity-30"></div>

                            <div className="relative w-full aspect-[3/4] max-w-[600px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group shadow-2xl mb-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                        className="relative w-full h-full"
                                    >
                                        <Image
                                            src={activeImage.src}
                                            alt={activeImage.alt}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize2 className="w-4 h-4 text-luxury-gold" />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-center">
                                {hiaceGallery.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className={`relative w-16 h-12 md:w-20 md:h-16 rounded-lg overflow-hidden border-2 transition-all ${activeIndex === i ? 'border-luxury-gold scale-110' : 'border-white/10 opacity-50 hover:opacity-100'
                                            }`}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Decision Logic: Trust Cards */}
            <section className="py-16 md:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-16 text-center">Premium Features</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                        {[
                            { icon: Users, title: "Group Comfort", desc: "Individual seating for 11 passengers ensures personal space for everyone during the journey.", highlight: false },
                            { icon: Shield, title: "Safety First", desc: "Rigorous maintenance checks and professional drivers trained for group transport safety.", highlight: true },
                            { icon: Briefcase, title: "High Capacity", desc: "Designed for Umrah groups. Ample space for luggage without compromising passenger legroom.", highlight: false }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -15 }}
                                className={`p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border transition-all duration-700 relative overflow-hidden group
                                    ${item.highlight ? 'bg-luxury-black border-luxury-gold shadow-[0_40px_100px_-20px_rgba(198,163,85,0.3)] lg:scale-110 z-20 lg:-translate-y-4' : 'bg-zinc-50 border-black/5 hover:bg-white hover:shadow-2xl opacity-90 hover:opacity-100'}`}
                            >
                                {item.highlight && (
                                    <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-luxury-gold text-black text-[8px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1 md:px-4 md:py-1.5 rounded-full shadow-lg">
                                        Best for Groups
                                    </div>
                                )}
                                <div className={`size-16 md:size-20 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 md:mb-10 transition-all duration-500 shadow-xl
                                    ${item.highlight ? 'bg-luxury-gold text-black scale-110 group-hover:rotate-6' : 'bg-black text-white group-hover:bg-luxury-gold group-hover:text-black group-hover:rotate-3'}`}>
                                    <item.icon size={28} className="md:w-[36px] md:h-[36px]" />
                                </div>
                                <h3 className={`text-2xl md:text-4xl font-serif font-bold mb-4 md:mb-6 ${item.highlight ? 'text-white' : 'text-black'}`}>{item.title}</h3>
                                <p className={`text-base md:text-xl font-light leading-relaxed ${item.highlight ? 'text-white/70' : 'text-black/50'}`}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Tour Section */}
            <section className="py-20 bg-zinc-900 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Column: Content */}
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <span className="text-luxury-gold uppercase tracking-widest font-bold text-xs block mb-4">Virtual Experience</span>
                            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Experience <span className="text-luxury-gold">The Journey</span></h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                Step inside the Toyota HiAce before you book. Our video tour highlights the spacious high-roof cabin, comfortable individual seating, and ample luggage capacity that makes this the preferred choice for pilgrim groups. See the premium condition and cleanliness we maintain for every trip.
                            </p>
                            <div className="grid grid-cols-2 gap-6 text-left">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="text-luxury-gold font-bold mb-2">Spacious Interior</h4>
                                    <p className="text-white/60 text-sm">High-roof design allows easy movement.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="text-luxury-gold font-bold mb-2">Premium Comfort</h4>
                                    <p className="text-white/60 text-sm">Individual A/C vents for every row.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Video */}
                        <div className="lg:w-1/2 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[300px] aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
                                <div className="absolute inset-0 bg-luxury-gold/5 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <video
                                    controls
                                    className="w-full h-full object-cover"
                                    poster="/hiace/hiace-main.jpeg"
                                >
                                    <source src="/hiace/WhatsApp Video 2026-01-12 at 6.03.34 PM.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
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
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="#C6A355" className="text-luxury-gold" />)}
                            </div>
                            <span className="text-white/60 text-[10px] md:text-xs font-bold tracking-widest uppercase">Group Approved</span>
                        </div>
                        <h2 className="text-white mb-6">Trusted by Umrah Groups</h2>
                        <p className="text-white/40 text-sm md:text-lg uppercase tracking-widest font-black">Reliable Transport for Large Families</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
                        <div className="bg-white/[0.03] backdrop-blur-md rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl lg:col-span-1 relative">
                            <div className="absolute top-0 right-6 md:right-10 -translate-y-1/2 bg-luxury-gold text-black text-[8px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded-full">Top Choice</div>
                            <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed mb-8 md:mb-10">
                                "The Toyota HiAce was perfect for our group of 10. We had plenty of space for our luggage and the high roof made it easy to get in and out."
                            </p>
                            <div className="flex items-center gap-4 md:gap-5">
                                <div className="size-12 md:size-14 rounded-full bg-luxury-gold/20 flex items-center justify-center font-bold text-luxury-gold border border-luxury-gold/20">AH</div>
                                <div>
                                    <span className="block text-white font-bold text-base md:text-lg">Ahmed H.</span>
                                    <span className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-widest font-black">December 2025 • Group Trip</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 md:space-y-8">
                            {[
                                { name: "Yusuf K.", city: "Istanbul, Turkey", text: "Cleanest van we have used in Saudi. The AC was very cold even in the afternoon heat." },
                                { name: "Mariam A.", city: "Cairo, Egypt", text: "Driver was very patient with our large family. Highly recommend for HiAce booking." }
                            ].map((r, i) => (
                                <div key={i} className="bg-white/5 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white/5 hover:bg-white/[0.07] transition-colors relative">
                                    <div className="flex gap-1 mb-3 md:mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} fill="#C6A355" className="text-luxury-gold" />)}
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
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 md:py-32 bg-zinc-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12 md:mb-20">
                        <div className="size-16 md:size-20 bg-luxury-gold/10 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 border border-luxury-gold/10">
                            <Shield className="text-luxury-gold w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <h2 className="text-black mb-4">Common Questions</h2>
                        <p className="text-black/40 text-base md:text-lg font-light tracking-wide">Details about the Toyota HiAce experience.</p>
                    </div>

                    <FAQSection
                        title=""
                        darkContent={true}
                        className="bg-transparent"
                        items={[
                            {
                                question: "How many bags can the HiAce fit?",
                                answer: "The HiAce is designed for capacity. It can comfortably fit 10-12 large suitcases along with hand carry items."
                            },
                            {
                                question: "Is the HiAce a high-roof model?",
                                answer: "Yes, our fleet consists of High-Roof Toyota HiAce models, allowing for greater headroom and comfort."
                            },
                            {
                                question: "Can we request a baby seat?",
                                answer: "Yes, baby seats are available upon request. Please mention this when booking."
                            },
                            {
                                question: "Is the AC separate for the back rows?",
                                answer: "Yes, the HiAce features a dual air conditioning system with dedicated vents for the rear passenger rows."
                            }
                        ]}
                    />
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-luxury-gold/5 blur-[150px] pointer-events-none"></div>
                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-black rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 border-2 border-luxury-gold shadow-[0_50px_100px_-20px_rgba(198,163,85,0.4)] relative overflow-hidden group"
                    >
                        <h3 className="text-3xl md:text-7xl font-serif font-bold mb-6 md:mb-10 text-white leading-tight">Start Your <span className="text-luxury-gold italic">Group Journey</span> Now</h3>
                        <p className="text-white/40 text-[8px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] mb-8 md:mb-12">Limited HiAce Availability</p>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-stretch relative z-10">
                            <Link href="/booking" className="w-full md:w-auto">
                                <Button className="w-full bg-luxury-gold text-black hover:bg-white h-16 md:h-24 px-8 md:px-16 rounded-2xl md:rounded-3xl font-black uppercase text-sm md:text-base tracking-[0.2em] md:tracking-[0.25em] shadow-2xl transition-all hover:scale-105 active:scale-95 group/btn">
                                    Secure My HiAce
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
