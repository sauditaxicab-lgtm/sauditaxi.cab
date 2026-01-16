"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Phone, Mail, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Logo } from "@/components/ui/Logo";
import { BUSINESS_CONFIG, contactHelpers } from "@/lib/constants";

const fleetList = [
    { name: "Toyota Camry", href: "/fleet/toyota-camry-4-seater-taxi" },
    { name: "Hyundai Staria", href: "/fleet/hyundai-staria-7-seater-taxi" },
    { name: "Hyundai H1 Starex", href: "/fleet/hyundai-h1-starex-7-seater-taxi" },
    { name: "GMC Yukon XL", href: "/fleet/gmc-yukon-xl-7-seater-taxi" },
    { name: "Toyota HiAce", href: "/fleet/toyota-hiace-11-seater-taxi" },
    { name: "Toyota Coaster", href: "/fleet/toyota-coaster-30-seater-taxi" }
];

const servicesList = [
    { name: "Airport Transfer", href: "/services/airport-transfers" },
    { name: "Umrah Transfers", href: "/services/umrah-transfers" },
    { name: "Family Travel", href: "/services/family-travel" },
    { name: "Ziyarat Tours", href: "/services/ziyarat-tours" },
    { name: "Sightseeing Tours", href: "/services/sightseeing" },
    { name: "Intercity Transfer", href: "/services/intercity-taxi" },
    { name: "VIP Transport", href: "/services/vip-transport" },
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Fleet", href: "/fleet", dropdownItems: fleetList },
    { name: "Services", href: "/services", dropdownItems: servicesList },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Mobile Dropdown State - now tracks name of open menu
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    // Background logic: Transparency only on homepage at the top
    const shouldShowBg = !isHomePage || scrolled || mobileMenuOpen;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-[10001] transition-all duration-500 ease-in-out border-b h-20 md:h-24 flex items-center",
                shouldShowBg
                    ? "bg-luxury-black/95 backdrop-blur-md border-white/10 shadow-2xl"
                    : "bg-transparent border-transparent shadow-none"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative h-full">
                {/* Logo Area */}
                <div className="flex items-center z-[10002]">
                    <Link
                        href="/"
                        className="group transition-transform duration-300 active:scale-95"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <Logo className="scale-[0.85] md:scale-100 origin-left" />
                    </Link>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center space-x-1">
                    <nav className="flex items-center space-x-1">
                        {navLinks.map((link) => (
                            link.dropdownItems ? (
                                <div key={link.name} className="relative group px-1">
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "flex items-center px-4 py-2 text-sm uppercase tracking-widest font-medium transition-all duration-300 rounded-sm",
                                            pathname.startsWith(link.href) ? "text-luxury-gold" : "text-white/80 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        {link.name}
                                        <ChevronDown className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform duration-300 opacity-50" />
                                    </Link>

                                    {/* Desktop Dropdown Menu */}
                                    <div className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-64 bg-luxury-black/98 backdrop-blur-2xl border border-white/10 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 py-2">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-luxury-black border-t border-l border-white/10 rotate-45"></div>
                                        <div className="flex flex-col">
                                            {link.dropdownItems.map((item: { name: string; href: string }) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={cn(
                                                        "px-6 py-3 text-sm font-light transition-all border-b border-white/5 last:border-0 hover:bg-luxury-gold/10 hover:pl-8",
                                                        pathname === item.href ? "text-luxury-gold" : "text-white/70 hover:text-luxury-gold"
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 text-sm uppercase tracking-widest font-medium transition-all duration-300 rounded-sm",
                                        pathname === link.href ? "text-luxury-gold" : "text-white/80 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </nav>

                    <div className="h-6 w-[1px] bg-white/10 mx-4 hidden lg:block"></div>

                    <Link href="/booking" className="hidden lg:block">
                        <Button variant="gold" size="sm" className="bg-luxury-gold text-black hover:bg-white hover:text-luxury-black font-bold rounded-sm px-6">
                            Book Now
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white z-[10002] p-2 hover:bg-white/5 rounded-full transition-colors active:scale-95 flex items-center justify-center -mr-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {mobileMenuOpen ? (
                        <X size={26} className="text-luxury-gold" />
                    ) : (
                        <Menu size={26} />
                    )}
                </button>

                {/* Mobile Nav Overlay */}
                {mounted && createPortal(
                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-black/80 backdrop-blur-md z-[10005]"
                                    onClick={() => setMobileMenuOpen(false)}
                                />
                                <motion.div
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-luxury-black border-l border-white/10 z-[10006] flex flex-col shadow-2xl"
                                >
                                    {/* Mobile Menu Header */}
                                    <div className="h-20 flex items-center justify-between px-6 border-b border-white/5 bg-black/20">
                                        <Logo className="scale-[0.7] origin-left" />
                                        <button
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="p-2 -mr-2 text-white/50 hover:text-luxury-gold transition-colors"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>

                                    {/* Mobile Menu content */}
                                    <div className="flex-1 overflow-y-auto py-6 px-6">
                                        <nav className="flex flex-col space-y-1">
                                            {navLinks.map((link) => (
                                                link.dropdownItems ? (
                                                    <div key={link.name} className="flex flex-col py-2 border-b border-white/5">
                                                        <button
                                                            onClick={() => setOpenMobileDropdown(openMobileDropdown === link.name ? null : link.name)}
                                                            className="flex items-center justify-between text-lg font-serif text-white py-3 group"
                                                        >
                                                            <span className={pathname.startsWith(link.href) ? "text-luxury-gold" : ""}>{link.name}</span>
                                                            <ChevronDown
                                                                className={cn(
                                                                    "w-4 h-4 transition-transform duration-300",
                                                                    openMobileDropdown === link.name ? "rotate-180 text-luxury-gold" : "text-white/30"
                                                                )}
                                                            />
                                                        </button>

                                                        <AnimatePresence>
                                                            {openMobileDropdown === link.name && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, height: 0 }}
                                                                    animate={{ opacity: 1, height: "auto" }}
                                                                    exit={{ opacity: 0, height: 0 }}
                                                                    className="overflow-hidden flex flex-col ml-4 border-l border-luxury-gold/20 mt-1 mb-2"
                                                                >
                                                                    {link.dropdownItems.map((item: { name: string; href: string }) => (
                                                                        <Link
                                                                            key={item.name}
                                                                            href={item.href}
                                                                            onClick={() => setMobileMenuOpen(false)}
                                                                            className={cn(
                                                                                "py-3 pl-4 text-sm text-white/60 hover:text-luxury-gold transition-colors",
                                                                                pathname === item.href ? "text-luxury-gold font-medium" : ""
                                                                            )}
                                                                        >
                                                                            {item.name}
                                                                        </Link>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                ) : (
                                                    <Link
                                                        key={link.name}
                                                        href={link.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className={cn(
                                                            "text-lg font-serif py-4 border-b border-white/5 flex items-center justify-between group",
                                                            pathname === link.href ? "text-luxury-gold" : "text-white"
                                                        )}
                                                    >
                                                        {link.name}
                                                        <div className={cn(
                                                            "w-1.5 h-1.5 rounded-full bg-luxury-gold transition-all",
                                                            pathname === link.href ? "opacity-100 scale-100" : "opacity-0 scale-50 group-hover:opacity-50"
                                                        )}></div>
                                                    </Link>
                                                )
                                            ))}
                                        </nav>

                                        {/* Contact Info in Mobile Menu */}
                                        <div className="mt-10 space-y-6 pt-8 border-t border-white/5">
                                            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Private Concierge</p>
                                            <div className="space-y-4">
                                                <a href={contactHelpers.getPhoneUrl()} className="flex items-center gap-4 group">
                                                    <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center border border-white/10 group-active:border-luxury-gold/50 transition-colors">
                                                        <Phone size={18} className="text-luxury-gold" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] text-white/30 uppercase tracking-wider">Call Directly</span>
                                                        <span className="text-sm font-medium text-white/80">{BUSINESS_CONFIG.PHONE_DISPLAY}</span>
                                                    </div>
                                                </a>
                                                <a href={`mailto:${BUSINESS_CONFIG.EMAIL}`} className="flex items-center gap-4 group">
                                                    <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center border border-white/10 group-active:border-luxury-gold/50 transition-colors">
                                                        <Mail size={18} className="text-luxury-gold" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] text-white/30 uppercase tracking-wider">Email Inquiry</span>
                                                        <span className="text-sm font-medium text-white/80">{BUSINESS_CONFIG.EMAIL}</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile Menu Footer */}
                                    <div className="p-6 border-t border-white/5 bg-black/40">
                                        <Link href="/booking">
                                            <Button
                                                variant="gold"
                                                size="lg"
                                                className="w-full bg-luxury-gold text-black hover:bg-white hover:text-luxury-black font-bold text-base rounded-sm py-6 shadow-xl active:scale-95 transition-all"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                Book Now
                                            </Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>

            {/* Mobile Sticky Bottom Bar (When menu NOT open) */}
            {mounted && !mobileMenuOpen && createPortal(
                <div className="md:hidden fixed bottom-0 left-0 w-full p-3 bg-luxury-black/95 backdrop-blur-xl border-t border-white/10 z-[100] flex items-center gap-3 animate-in slide-in-from-bottom duration-500">
                    <Link href="/booking" className="flex-1">
                        <Button
                            variant="gold"
                            size="lg"
                            className="w-full bg-luxury-gold text-black hover:scale-[1.02] active:scale-95 transition-all font-bold text-base shadow-xl rounded-sm h-12"
                        >
                            Book Now
                        </Button>
                    </Link>
                </div>,
                document.body
            )}
        </nav>
    );
}
