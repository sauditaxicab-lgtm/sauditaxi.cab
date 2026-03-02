import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { Shield, Clock, Car, Users, Phone, MessageCircle, CheckCircle2, Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Book Luxury Taxi in Makkah, Madinah, Jeddah & Taif – WhatsApp Booking | Saudi Taxi',
    description: 'Book a luxury private taxi in Makkah, Madinah, Jeddah & Taif instantly via WhatsApp. Airport transfers, VIP cars, family vans, 24/7 service. Fixed transparent prices.',
    alternates: {
        canonical: '/lp',
    },
    robots: {
        index: false,
        follow: false,
    },
};

const WHATSAPP_NUMBER = '966548174726';
const WHATSAPP_DISPLAY = '+966 54 817 4726';
const WA_URL = (msg: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
const DEFAULT_MSG = 'Hello, I want to book a taxi.';

const services = [
    {
        title: 'Jeddah Airport → Makkah',
        desc: 'Direct pickup from JED Airport Terminal 1 to your hotel in Makkah – fixed price, no surprises.',
        msg: 'Hi, I need a taxi from Jeddah Airport to Makkah.',
        icon: '✈️',
    },
    {
        title: 'Makkah → Madinah',
        desc: 'Private intercity transfer on the Makkah–Madinah Highway. Comfortable, safe, and on time.',
        msg: 'Hi, I need a taxi from Makkah to Madinah.',
        icon: '🕋',
    },
    {
        title: 'Madinah → Makkah',
        desc: 'Direct private transfer from your Madinah hotel to the Makkah Haram central area.',
        msg: 'Hi, I need a taxi from Madinah to Makkah.',
        icon: '🕌',
    },
    {
        title: 'VIP GMC & Camry',
        desc: 'Executive sedans and luxury SUVs for dignitaries, business travelers, and families.',
        msg: 'Hi, I want to book a VIP taxi (GMC/Camry).',
        icon: '🏆',
    },
    {
        title: '7 & 10 Seater Vans',
        desc: 'Hyundai Staria, Starex & HiAce – perfect for family groups with heavy luggage.',
        msg: 'Hi, I need a 7-seater or 10-seater van.',
        icon: '👨‍👩‍👧‍👦',
    },
    {
        title: 'Coaster – Large Groups',
        desc: 'Toyota Coaster 17-seater for Hajj groups, tour delegations, and corporate events.',
        msg: 'Hi, I want to book a Toyota Coaster for a large group.',
        icon: '🚌',
    },
];

const fleet = [
    { name: 'Toyota Camry', tag: 'Executive Sedan', seats: '4', img: '/fleet/toyota-camry.webp' },
    { name: 'GMC Yukon XL', tag: 'Luxury VIP SUV', seats: '7', img: '/fleet/gmc-yukon.webp' },
    { name: 'Hyundai Staria', tag: 'Family 7-Seater', seats: '7', img: '/fleet/hyundai-staria.webp' },
    { name: 'Toyota HiAce', tag: 'Group Travel', seats: '10', img: '/fleet/hyundai-starex.webp' },
    { name: 'Toyota Coaster', tag: 'Large Groups', seats: '17', img: '/fleet/toyota-coaster.webp' },
];

const trust = [
    { icon: <Shield className="size-5" />, text: 'Professional Licensed Drivers' },
    { icon: <Car className="size-5" />, text: 'Clean & Sanitized Vehicles' },
    { icon: <CheckCircle2 className="size-5" />, text: 'Fixed Transparent Prices' },
    { icon: <Clock className="size-5" />, text: '24/7 Availability' },
    { icon: <MessageCircle className="size-5" />, text: 'Instant WhatsApp Response' },
];



function WhatsAppButton({ msg = DEFAULT_MSG, size = 'lg', className = '' }: { msg?: string; size?: 'sm' | 'lg' | 'xl'; className?: string }) {
    const sizeClasses = {
        xl: 'h-[72px] px-12 text-lg gap-4 rounded-2xl',
        lg: 'h-16 px-10 text-base gap-3 rounded-2xl',
        sm: 'h-12 px-6 text-sm gap-2 rounded-xl',
    }[size];
    return (
        <a
            href={WA_URL(msg)}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center font-bold text-white bg-[#25D366] hover:bg-[#1fba59] transition-all duration-300 shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] active:scale-[0.97] ${sizeClasses} ${className}`}
        >
            <svg viewBox="0 0 24 24" className={size === 'xl' ? 'size-7' : size === 'lg' ? 'size-6' : 'size-5'} fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book on WhatsApp
        </a>
    );
}

export default function LandingPage() {
    return (
        <main className="bg-[#0A0A0F] min-h-screen text-white overflow-x-hidden">

            {/* ═══════════════════════════════════════════ */}
            {/* HERO SECTION */}
            {/* ═══════════════════════════════════════════ */}
            <section className="relative min-h-[100svh] flex items-center justify-center px-4 py-16">
                {/* BG */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/about/makkah_skyline_premium.png"
                        alt="Makkah Skyline"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/60 via-[#0A0A0F]/80 to-[#0A0A0F]" />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#C4A975]/10 border border-[#C4A975]/30 rounded-full px-5 py-2 mb-6">
                        <div className="size-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[#C4A975] text-xs font-bold uppercase tracking-widest">Available Now — 24/7</span>
                    </div>

                    {/* Discount Badge */}
                    <div className="inline-block bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-2 ml-3 animate-bounce">
                        🎉 10% OFF for New Customers
                    </div>
                    <p className="text-white/30 text-[10px] mb-4">Mention this offer on WhatsApp. Valid for first-time bookings only.</p>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        Book Your Taxi in <span className="text-[#C4A975]">Makkah</span> & <span className="text-[#C4A975]">Madinah</span> in 2 Minutes
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl mb-3 font-medium">
                        Airport Transfers • VIP Cars • Family Vans • 24/7 WhatsApp Booking
                    </p>
                    <p className="text-white/40 text-sm mb-2">
                        Serving <strong className="text-white/70">Makkah</strong> • <strong className="text-white/70">Madinah</strong> • <strong className="text-white/70">Jeddah</strong> • <strong className="text-white/70">Taif</strong>
                    </p>

                    {/* Phone */}
                    <a href={`tel:${WHATSAPP_NUMBER}`} className="inline-flex items-center gap-2 text-white/80 hover:text-[#C4A975] transition-colors mb-6 text-lg">
                        <Phone className="size-5" />
                        <span className="font-bold">{WHATSAPP_DISPLAY}</span>
                    </a>

                    {/* CTA */}
                    <div className="flex flex-col items-center gap-3">
                        <WhatsAppButton size="xl" />
                        {/* Trust Lines */}
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-white/60 mt-2">
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="size-4 text-green-500" />
                                Instant Price on WhatsApp
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="size-4 text-green-500" />
                                Reply Within 2 Minutes
                            </span>
                        </div>
                    </div>

                    {/* Fleet Preview Strip */}
                    <div className="mt-12 grid grid-cols-5 gap-2 md:gap-4 max-w-xl mx-auto">
                        {fleet.map((v) => (
                            <div key={v.name} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group">
                                <Image
                                    src={v.img}
                                    alt={v.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="20vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <span className="absolute bottom-1 left-1 right-1 text-[9px] md:text-[10px] font-bold text-center text-white/90 truncate">
                                    {v.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════ */}
            {/* SERVICES */}
            {/* ═══════════════════════════════════════════ */}
            <section className="py-16 md:py-24 px-4 bg-[#0f0f15]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#C4A975] text-xs font-bold uppercase tracking-widest block mb-3">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                            Where Do You Need to Go?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((s) => (
                            <div key={s.title} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#C4A975]/30 transition-all duration-300 group flex flex-col">
                                <div className="text-3xl mb-3">{s.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '24px' }}>{s.title}</h3>
                                <p className="text-white/50 text-sm mb-5 flex-grow" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.desc}</p>
                                <WhatsAppButton msg={s.msg} size="sm" className="w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════ */}
            {/* FLEET */}
            {/* ═══════════════════════════════════════════ */}
            <section className="py-16 md:py-24 px-4 bg-[#0A0A0F]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#C4A975] text-xs font-bold uppercase tracking-widest block mb-3">Our Fleet</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                            Choose Your Vehicle
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {fleet.map((v) => (
                            <a
                                key={v.name}
                                href={WA_URL(`Hi, I want to book a ${v.name}.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-[#C4A975]/40 transition-all duration-300 group block"
                            >
                                <div className="relative aspect-[4/3]">
                                    <Image
                                        src={v.img}
                                        alt={`${v.name} Saudi Taxi`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 50vw, 20vw"
                                    />
                                </div>
                                <div className="p-3 text-center">
                                    <h3 className="text-white font-bold text-sm" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '14px' }}>{v.name}</h3>
                                    <p className="text-[#C4A975] text-xs font-medium">{v.tag}</p>
                                    <div className="flex items-center justify-center gap-1 mt-1 text-white/40 text-[11px]">
                                        <Users className="size-3" />
                                        <span>{v.seats} Seats</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════ */}
            {/* TRUST SECTION */}
            {/* ═══════════════════════════════════════════ */}
            <section className="py-16 md:py-20 px-4 bg-[#0f0f15] border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[#C4A975] text-xs font-bold uppercase tracking-widest block mb-3">Why Choose Us</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        Rated 4.9/5 by Umrah & Hajj Travelers
                    </h2>
                    <p className="text-white/40 text-sm mb-10">500+ Successful Transfers Across Saudi Arabia</p>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                        {trust.map((t) => (
                            <div key={t.text} className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4">
                                <div className="text-[#C4A975]">{t.icon}</div>
                                <span className="text-white/80 text-sm font-medium">{t.text}</span>
                            </div>
                        ))}
                    </div>


                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="size-5 text-[#C4A975] fill-[#C4A975]" />
                        ))}
                        <span className="text-white/50 text-sm ml-2">4.9/5 Average Rating</span>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════ */}
            {/* FINAL CTA */}
            {/* ═══════════════════════════════════════════ */}
            <section className="py-20 md:py-28 px-4 bg-[#0A0A0F] relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#C4A975]/5 to-transparent" />
                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        Ready to <span className="text-[#C4A975]">Travel?</span>
                    </h2>
                    <p className="text-white/50 text-lg mb-8">
                        Tap below & get instant price on WhatsApp
                    </p>
                    <WhatsAppButton size="xl" className="mx-auto" />

                    {/* Trust line */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4 text-sm text-white/50">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="size-4 text-green-500" />
                            No Hidden Charges
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="size-4 text-green-500" />
                            Instant Confirmation
                        </span>
                    </div>

                    {/* Phone fallback */}
                    <div className="mt-8 flex flex-col items-center gap-2">
                        <span className="text-white/30 text-xs uppercase tracking-widest">Or Call Directly</span>
                        <a href={`tel:${WHATSAPP_NUMBER}`} className="text-[#C4A975] text-xl font-bold hover:text-white transition-colors">
                            {WHATSAPP_DISPLAY}
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════ */}
            {/* MINIMAL FOOTER — Contact Only */}
            {/* ═══════════════════════════════════════════ */}
            <footer className="py-6 px-4 border-t border-white/5 bg-[#0A0A0F]">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
                    <span className="text-white/20 text-xs">© {new Date().getFullYear()} Saudi Taxi</span>
                    <a href={`tel:${WHATSAPP_NUMBER}`} className="text-white/30 hover:text-[#C4A975] text-xs transition-colors">
                        {WHATSAPP_DISPLAY}
                    </a>
                </div>
            </footer>

            {/* ═══════════════════════════════════════════ */}
            {/* STICKY FLOATING WHATSAPP BUTTON */}
            {/* ═══════════════════════════════════════════ */}
            <a
                href={WA_URL(DEFAULT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book on WhatsApp"
                className="fixed bottom-6 right-6 z-50 size-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 animate-[pulse_2s_ease-in-out_infinite]"
            >
                <svg viewBox="0 0 24 24" className="size-8" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>

            {/* Landing Page Schema */}
            <Script id="lp-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TaxiService",
                    "name": "Saudi Taxi",
                    "description": "Luxury private taxi service in Makkah, Madinah, Jeddah, and Taif. Airport transfers, VIP cars, family vans. Book instantly via WhatsApp.",
                    "url": "https://sauditaxi.cab/lp",
                    "telephone": "+966548174726",
                    "areaServed": [
                        { "@type": "City", "name": "Makkah" },
                        { "@type": "City", "name": "Madinah" },
                        { "@type": "City", "name": "Jeddah" },
                        { "@type": "City", "name": "Taif" }
                    ],
                    "potentialAction": {
                        "@type": "ReserveAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20want%20to%20book%20a%20taxi.`,
                            "actionPlatform": "https://schema.org/DesktopWebPlatform"
                        }
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "500",
                        "bestRating": "5"
                    }
                })
            }} />
        </main>
    );
}
