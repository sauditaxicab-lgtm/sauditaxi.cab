"use client";

import Link from "next/link";
import Image from "next/image";
import { Youtube, MapPin, Phone, Mail, ArrowRight, Star } from "lucide-react";
import { FaSnapchat, FaQuora, FaPinterest, FaLinkedin, FaTiktok, FaGoogle, FaFacebookF, FaInstagram, FaTwitter, FaTripadvisor } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { PaymentIcons } from "./PaymentIcons";
import { Logo } from "@/components/ui/Logo";
import { BUSINESS_CONFIG } from "@/lib/constants";
import { TrustBox } from "@/components/ui/TrustBox";

export function Footer() {
    return (
        <footer className="relative bg-luxury-black pt-24 pb-32 md:pb-12 border-t border-white/5 overflow-hidden font-sans">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-luxury-black to-[#050510] z-0"></div>

            {/* Decorative Top Line with Star */}
            <div className="flex items-center justify-center gap-4 mb-16 relative z-10 px-4">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent w-full max-w-[300px] md:max-w-[400px]"></div>
                <Star className="text-luxury-gold fill-luxury-gold w-6 h-6 md:w-8 md:h-8" />
                <div className="h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent w-full max-w-[300px] md:max-w-[400px]"></div>
            </div>

            {/* Top Navigation Grid (4 columns) */}
            <div className="container mx-auto px-6 md:px-16 relative z-10 mb-20 text-center md:text-left">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-sm">

                    {/* Column 1: Our Cars */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-luxury-gold uppercase tracking-widest text-sm font-semibold mb-6">Our Cars</h4>
                        <ul className="space-y-3 text-white/70 font-light">
                            {['Toyota Camry', 'Hyundai Staria', 'Hyundai H1 Starex', 'GMC Yukon XL', 'Toyota HiAce', 'Toyota Coaster'].map(car => (
                                <li key={car}>
                                    <Link href="/fleet" className="hover:text-white transition-colors block py-1">{car}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Our Services */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-luxury-gold uppercase tracking-widest text-sm font-semibold mb-6">Our Services</h4>
                        <ul className="space-y-3 text-white/70 font-light">
                            {[
                                { name: "Umrah Transfers", href: "/services/umrah-transfers" },
                                { name: "Airport Transfers", href: "/services/airport-transfers" },
                                { name: "Jeddah to Makkah", href: "/services/jeddah-to-makkah-taxi" },
                                { name: "Makkah to Madinah", href: "/services/makkah-to-madinah-taxi" },
                                { name: "Ziyarat Tours", href: "/services/ziyarat-tours" },
                                { name: "VIP Transport", href: "/services/vip-transport" }
                            ].map(service => (
                                <li key={service.name}>
                                    <Link href={service.href} className="hover:text-white transition-colors block py-1">{service.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: About Us (Links) */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-luxury-gold uppercase tracking-widest text-sm font-semibold mb-6">About Us</h4>
                        <ul className="space-y-3 text-white/70 font-light">
                            {[
                                { name: "About Saudi Taxi", href: "/about" },
                                { name: "Our Fleet", href: "/fleet" },
                                { name: "Terms & Conditions", href: "/terms-and-conditions" },
                                { name: "Privacy Policy", href: "/privacy-policy" },
                                { name: "Blogs", href: "/blog" },
                                { name: "Contact Us", href: "/contact" },
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-white transition-colors block py-1">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-luxury-gold uppercase tracking-widest text-sm font-semibold mb-6">Contact Info</h4>
                        <ul className="space-y-4 text-white/70 font-light">
                            <li className="flex items-start gap-3 justify-center md:justify-start">
                                <Phone size={16} className="text-luxury-gold mt-1 shrink-0" />
                                <a href={`tel:${BUSINESS_CONFIG.PHONE}`} className="hover:text-white transition-colors">{BUSINESS_CONFIG.PHONE_DISPLAY}</a>
                            </li>
                            <li className="flex items-start gap-3 justify-center md:justify-start">
                                <Mail size={16} className="text-luxury-gold mt-1 shrink-0" />
                                <a href="mailto:info@sauditaxi.cab" className="hover:text-white transition-colors">info@sauditaxi.cab</a>
                            </li>
                            <li className="flex items-start gap-3 justify-center md:justify-start text-center md:text-left">
                                <MapPin size={16} className="text-luxury-gold mt-1 shrink-0" />
                                <span>Makkah Al Mukarramah,<br />Saudi Arabia</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="container mx-auto px-6 md:px-16 relative z-10 flex flex-col items-center text-center">

                {/* Brand Identity */}
                <div className="mb-4">
                    <Link href="/" className="inline-block group transform hover:scale-105 transition-transform duration-500">
                        <Logo className="items-center text-4xl md:text-5xl" />
                    </Link>
                </div>

                {/* Tagline */}
                <div className="flex items-center gap-3 md:gap-6 text-luxury-gold/80 text-sm md:text-lg font-serif tracking-widest uppercase mb-8 whitespace-nowrap">
                    <span className="h-[1px] w-8 md:w-12 bg-luxury-gold/50"></span>
                    <span>Premium</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold/50"></span>
                    <span>Umrah</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold/50"></span>
                    <span>Transport</span>
                    <span className="h-[1px] w-8 md:w-12 bg-luxury-gold/50"></span>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm md:text-base leading-7 font-light max-w-2xl mb-12">
                    We provide first-class, luxury chauffeur services for pilgrims and travelers at our best and affordable rates. Whether you are looking for Umrah transfers, intercity travel, or airport pickups, we ensure a spiritual and comfortable journey.
                </p>

                {/* Socials & Reviews Heading */}
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-8">
                    Leave a Review and Follow Us
                </h3>

                {/* Social Icons Grid */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {[
                        { Icon: FaFacebookF, label: 'Facebook', href: '#', color: 'bg-[#3b5998]' },
                        { Icon: FaInstagram, label: 'Instagram', href: '#', color: 'bg-[#E1306C]' },
                        { Icon: FaTwitter, label: 'Twitter', href: '#', color: 'bg-[#1DA1F2]' },
                        { Icon: FaTripadvisor, label: 'TripAdvisor', href: '#', color: 'bg-[#00AF87]' },
                        { Icon: SiTrustpilot, label: 'Trustpilot', href: 'https://www.trustpilot.com/review/sauditaxi.cab', color: 'bg-[#00b67a]' },
                        { Icon: FaGoogle, label: 'Google', href: 'https://g.page/r/CbVn_1c_mHFrEAE', color: 'bg-[#4285F4]' },
                        { Icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/channel/UCJFtqjUo7W899VhS2tzpujw', color: 'bg-[#FF0000]' },
                        { Icon: FaSnapchat, label: 'Snapchat', href: 'https://www.snapchat.com/add/sauditaxicab', color: 'bg-[#FFFC00] text-black' },
                        { Icon: FaTiktok, label: 'TikTok', href: 'https://www.tiktok.com/@sauditaxiservice', color: 'bg-[#000000] border border-white/20' },
                        { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/saudi-taxi/', color: 'bg-[#0077b5]' },
                        { Icon: FaPinterest, label: 'Pinterest', href: 'https://www.pinterest.com/sauditaxicab/', color: 'bg-[#E60023]' },
                        { Icon: FaQuora, label: 'Quora', href: 'https://www.quora.com/profile/Saudi-Taxi-1', color: 'bg-[#B92B27]' },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className={`w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-white text-xl md:text-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl ${social.color} ${social.label === 'Snapchat' ? 'text-black' : ''}`}
                        >
                            <social.Icon />
                        </a>
                    ))}
                </div>

                {/* Trustpilot Widget (Optional - kept for functionality) */}
                <div className="mb-12 overflow-hidden max-w-full">
                    <TrustBox />
                </div>

                {/* Quick Links (Minimal) */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-sm text-white/50 font-light">
                    <Link href="/about" className="hover:text-luxury-gold transition-colors">About Us</Link>
                    <Link href="/fleet" className="hover:text-luxury-gold transition-colors">Our Fleet</Link>
                    <Link href="/services" className="hover:text-luxury-gold transition-colors">Services</Link>
                    <Link href="/booking" className="hover:text-luxury-gold transition-colors">Book Now</Link>
                    <Link href="/contact" className="hover:text-luxury-gold transition-colors">Contact</Link>
                    <Link href="/blog" className="hover:text-luxury-gold transition-colors">Start Blog</Link>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 w-full flex flex-col items-center gap-4 text-xs text-white/30 font-light tracking-wide">
                    <p>&copy; {new Date().getFullYear()} Saudi Taxi. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer >
    );
}
