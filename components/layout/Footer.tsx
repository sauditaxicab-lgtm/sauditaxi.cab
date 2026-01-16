"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { PaymentIcons } from "./PaymentIcons";
import { Logo } from "@/components/ui/Logo";
import { BUSINESS_CONFIG } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="relative bg-luxury-black pt-24 pb-32 md:pb-12 border-t border-white/5 overflow-hidden font-sans">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-luxury-black to-[#050510] z-0"></div>

            {/* Decorative Top Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>

            <div className="container mx-auto px-6 md:px-16 relative z-10 text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
                    {/* Column 1: Brand Identity */}
                    <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href="/" className="inline-block group">
                            <Logo className="items-center md:items-start" />
                        </Link>
                        <p className="text-white/60 text-sm leading-7 font-light max-w-sm">
                            Setting the benchmark in Umrah and intercity transport. Saudi Taxi offers premium services across the Kingdom, ensuring every journey is spiritual, private, and comfortable.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-luxury-gold hover:text-black hover:scale-105 transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-serif text-white mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 lg:left-0 left-1/2 -translate-x-1/2 lg:translate-x-0 w-8 h-[2px] bg-luxury-gold"></span>
                        </h3>
                        <ul className="space-y-4 text-sm text-white/70 font-light w-full">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Our Fleet", href: "/fleet" },
                                { name: "Services", href: "/services" },
                                { name: "Get a Quote", href: "/booking" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-luxury-gold transition-colors flex items-center justify-center md:justify-start gap-2 group"
                                    >
                                        <ArrowRight size={14} className="text-luxury-gold opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 hidden md:block" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Premium Services */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-serif text-white mb-8 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 lg:left-0 left-1/2 -translate-x-1/2 lg:translate-x-0 w-8 h-[2px] bg-luxury-gold"></span>
                        </h3>
                        <ul className="space-y-4 text-sm text-white/70 font-light w-full">
                            {[
                                { name: "Airport Transfer", href: "/services/airport-transfers" },
                                { name: "Umrah Transfers", href: "/services/umrah-transfers" },
                                { name: "Family Travel", href: "/services/family-travel" },
                                { name: "Ziyarat Tours", href: "/services/ziyarat-tours" },
                                { name: "Intercity Transfer", href: "/services/intercity-taxi" },
                                { name: "VIP Transport", href: "/services/vip-transport" }
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="hover:text-luxury-gold transition-colors flex items-center justify-center md:justify-start gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-luxury-gold transition-colors hidden md:block"></span>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Concierge & Contact */}
                    <div className="flex flex-col items-center md:items-start h-full">
                        <h3 className="text-xl font-serif text-white mb-8 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 lg:left-0 left-1/2 -translate-x-1/2 lg:translate-x-0 w-8 h-[2px] bg-luxury-gold"></span>
                        </h3>
                        <ul className="space-y-6 text-sm text-white/70 font-light w-full">
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-luxury-gold/50 transition-colors shrink-0">
                                    <MapPin className="text-luxury-gold" size={16} />
                                </div>
                                <span className="leading-relaxed">Makkah, Saudi Arabia</span>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-center gap-4 group">
                                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-luxury-gold/50 transition-colors shrink-0">
                                    <Phone className="text-luxury-gold" size={16} />
                                </div>
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="text-[10px] text-white/40 uppercase tracking-wide mb-1">24/7 Support</span>
                                    <a href={`tel:${BUSINESS_CONFIG.PHONE}`} className="text-white hover:text-luxury-gold transition-colors text-lg font-medium">{BUSINESS_CONFIG.PHONE_DISPLAY}</a>
                                </div>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-center gap-4 group">
                                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-luxury-gold/50 transition-colors shrink-0">
                                    <Mail className="text-luxury-gold" size={16} />
                                </div>
                                <a href="mailto:info@sauditaxi.cab" className="hover:text-luxury-gold transition-colors">info@sauditaxi.cab</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 font-light tracking-wide pb-10 md:pb-0">
                    <p>&copy; {new Date().getFullYear()} Saudi Taxi. All rights reserved.</p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
