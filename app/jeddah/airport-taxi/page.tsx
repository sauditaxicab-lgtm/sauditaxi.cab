import { ServiceHero } from "@/components/services/ServiceHero";
import { FleetGrid } from "@/components/services/FleetGrid";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Plane, Building2, MapPin, Shield, Clock, Star, AlertCircle, CheckCircle2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: 'Jeddah Airport Taxi (JED) – Reliable King Abdulaziz Transfers 2026',
    description: 'Book the best Jeddah Airport Taxi service. Flat-rate transfers from King Abdulaziz (JED) to Makkah, Madinah, and Jeddah hotels. Licensed professional drivers, 24/7 flight tracking, and quality fleet.',
    alternates: {
        canonical: '/jeddah/airport-taxi',
    },
};

// Pricing Data
const jeddahRoutes = [
    {
        from: "King Abdulaziz Airport (JED) T1",
        fromIcon: <Plane size={16} />,
        to: "Makkah (Haram Area)",
        toIcon: <Building2 size={16} />,
        price: "Contact for Quote",
        time: "1 Hour",
        features: ["Umrah Specialist", "Free Meeqat Stop"]
    },
    {
        from: "Jeddah Airport (JED) North",
        fromIcon: <Plane size={16} />,
        to: "Jeddah Corniche / Al-Shati",
        toIcon: <Building2 size={16} />,
        price: "Contact for Quote",
        time: "30 Mins",
        features: ["Meet and Greet", "Fixed Rate"]
    },
    {
        from: "Jeddah Airport (JED)",
        fromIcon: <Plane size={16} />,
        to: "Madinah (Prophet's Mosque)",
        toIcon: <Building2 size={16} />,
        price: "Contact for Quote",
        time: "4.5 Hours",
        features: ["Reliable SUV", "Refreshments"]
    },
    {
        from: "KAIA Terminal 1",
        fromIcon: <Plane size={16} />,
        to: "King Abdullah Economic City (KAEC)",
        toIcon: <MapPin size={16} />,
        price: "Contact for Quote",
        time: "1.5 Hours",
        features: ["Business Class", "Wi-Fi"]
    }
];

const jeddahFAQs = [
    {
        question: "How do I find my Jeddah airport taxi driver at Terminal 1?",
        answer: "Our drivers wait at Arrival Gate 4 of Terminal 1 with a digital name board. For the North Terminal, the meeting point is Lane 2. You will receive the driver's WhatsApp live location 15 minutes before landing."
    },
    {
        question: "What is the fixed price for a taxi from Jeddah Airport (JED) to Makkah?",
        answer: "We offer fixed-rate private transfers from King Abdulaziz Airport to Makkah. The fare includes all tolls, fuel, and a 60-minute wait window for immigration. Contact us via WhatsApp for the latest rates."
    },
    {
        question: "Does the Jeddah airport taxi include a free Meeqat stop?",
        answer: "Yes, all our airport transfers to Makkah include a complimentary stop at the Meeqat (Dhul Hulaifah) for pilgrims intending to perform Umrah. Please notify the driver upon pickup."
    }
];

export default function JeddahAirportTaxiPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Jeddah Airport Taxi — King Abdulaziz (JED) Transfers"
                subtitle="The Gold Standard in Saudi Transport"
                description="Experience the most reliable King Abdulaziz International Airport (JED) transfers. From Terminal 1 Gate 4 to the heart of the Holy Cities, we provide fixed-rate, professional taxi services with driver 24/7."
                backgroundImage="/services/airport_transfer_luxury.png"
            />

            {/* Breadcrumbs for SEO and Navigation */}
            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* 1. ABOVE THE FOLD - INTRO SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h1 className="text-3xl md:text-5xl font-serif mb-8 text-black leading-tight">
                        Trusted <strong>Jeddah Airport Taxi</strong> Service for Umrah and Business (JED)
                    </h1>
                    <div className="text-[rgb(31,33,43)] text-[16px] font-normal leading-[24px] mb-12 border-l-4 border-luxury-gold pl-6 bg-zinc-50 py-4 rounded-r-xl text-left">
                        <p>
                            Saudi Taxi provides premium <strong>Jeddah Airport Taxi (JED)</strong> services with fixed-rate transfers to Makkah and Jeddah city hotels. We operate 24/7 at <strong>Terminal 1 (Gate 4)</strong> and the <strong>North Terminal</strong>, offering real-time flight tracking, 60 minutes of free waiting time, and <strong>GMC Yukon</strong> or <strong>Toyota Camry</strong> fleets for group and individual travel. Our licensed drivers ensure a 15-minute average response time for all <Link href="/services/airport-transfers" className="text-luxury-gold hover:underline font-bold">airport pickups</Link>.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mt-12 pb-4">
                        <Link href="tel:+966548174726">
                            <Button className="bg-luxury-gold text-black hover:bg-black hover:text-luxury-gold font-bold px-10 py-7 text-lg rounded-full shadow-2xl transition-all hover:scale-105">
                                Call Jeddah Taxi Experts Now
                            </Button>
                        </Link>
                        <Link href="/booking">
                            <Button variant="outline" className="border-2 border-luxury-gold text-black hover:bg-luxury-gold hover:text-black font-bold px-10 py-7 text-lg rounded-full shadow-xl">
                                Book Free Quote Online
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. AI OVERVIEW BLOCK */}
            <section className="py-16 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-10 rounded-2xl shadow-xl border-l-[6px] border-luxury-gold">
                        <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                            <AlertCircle className="text-luxury-gold" />
                            How much does a Jeddah Airport Taxi cost?
                        </h2>
                        <div className="mt-8 p-6 bg-luxury-gold/5 border border-luxury-gold/10 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 px-4 py-1 bg-luxury-gold text-black text-[10px] font-bold uppercase tracking-tighter rounded-bl-lg">2026 Protocol</div>
                            <h4 className="text-sm font-bold text-luxury-gold uppercase tracking-widest mb-3">JED Arrival Protocol Signal:</h4>
                            <p className="text-[14px] text-zinc-700 leading-relaxed italic">
                                "Jeddah Airport taxi passengers arriving at <strong>Terminal 1</strong> are met by pre-assigned drivers at <strong>Arrival Gate 4</strong> or the <strong>Haramain Train Station</strong> lobby. Our 2026 retrieval protocol ensures that all <Link href="/fleet/toyota-camry-4-seater-taxi" className="text-luxury-gold hover:underline font-bold">Toyota Camry</Link> and <Link href="/fleet/hyundai-staria-luxury-van" className="text-luxury-gold hover:underline font-bold">Staria Van</Link> bookings include automated manifest synchronization with <strong>KAI Airport (JED)</strong> arrival boards for zero-wait coordination."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TERMINAL GUIDE - HIGH VALUE CONTENT */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-luxury-gold uppercase tracking-[0.2em] font-bold text-xs mb-4 block">Navigation Expert</span>
                        <h2 className="text-3xl md:text-5xl font-serif mb-6">King Abdulaziz Airport <span className="text-luxury-gold">Terminal Guide</span></h2>
                        <p className="text-zinc-600 max-w-2xl mx-auto">
                            Jeddah Airport (JED) is huge. Knowing your terminal is key to a smooth pickup. We serve all terminals 24/7.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Terminal 1 */}
                        <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100 hover:border-luxury-gold transition-all relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-luxury-gold text-black text-xs font-bold px-4 py-2 rounded-bl-xl">MOST COMMON</div>
                            <h3 className="text-2xl font-bold mb-2">Terminal 1 (New)</h3>
                            <p className="text-zinc-500 text-sm mb-6">Serves Saudia, Flynas, Emirates, Qatar Airways, and most international carriers.</p>

                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-black text-luxury-gold flex items-center justify-center shrink-0 font-bold">A</div>
                                    <div>
                                        <h4 className="font-bold text-sm">Where to meet</h4>
                                        <p className="text-zinc-600 text-sm">After clearing customs and the aquarium area, exit through <strong>Gate 2 or Gate 3</strong>. Our drivers park in the authorized zone.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 flex items-center justify-center shrink-0 font-bold">B</div>
                                    <div>
                                        <h4 className="font-bold text-sm">Amenities</h4>
                                        <p className="text-zinc-600 text-sm">STC/Mobily SIM shops, Al-Baik, Currency Exchange (Rates are better in the city).</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* North Terminal */}
                        <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100 hover:border-luxury-gold transition-all group">
                            <h3 className="text-2xl font-bold mb-2">North Terminal</h3>
                            <p className="text-zinc-500 text-sm mb-6">Serves some budget airlines and specific international charters.</p>

                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-black text-luxury-gold flex items-center justify-center shrink-0 font-bold">A</div>
                                    <div>
                                        <h4 className="font-bold text-sm">Where to meet</h4>
                                        <p className="text-zinc-600 text-sm">The pickup area is smaller. Exit the main arrivals door and wait at <strong>Lane 2</strong>. Your driver will text you upon landing.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 flex items-center justify-center shrink-0 font-bold">B</div>
                                    <div>
                                        <h4 className="font-bold text-sm">Amenities</h4>
                                        <p className="text-zinc-600 text-sm">Limited food options. Recommended to book your transfer ahead to avoid long taxi queues.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-red-50 border border-red-100 rounded-xl flex gap-4 items-start">
                        <AlertCircle className="text-red-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-red-900">Avoid "Tout" Scams</h4>
                            <p className="text-red-700 text-sm">
                                Inside the arrivals hall, random individuals may approach you offering "cheap taxi." They are illegal, uninsured, and often charge double upon arrival. <strong>Only ride with your pre-booked Saudi Taxi driver</strong> or an official metered cab.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICE DETAILS: Why choose us */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-serif mb-10 decoration-luxury-gold decoration-2 underline-offset-8 underline">
                                The Saudi Taxi Advantage
                            </h2>
                            <ul className="grid gap-8">
                                {[
                                    { title: "Flat Rates, No Surge", desc: "Our quotes are pre-confirmed. Traffic jams at king abdullah road or weather changes in Jeddah won't change your fare." },
                                    { title: "Live Flight Monitoring", desc: "Real-time tracking of JED arrivals ensures flexible pickup for early or delayed flights at no extra cost." },
                                    { title: "Meet-and-Greet Service", desc: "Your choice of curbside pickup at Terminal 1 Gate 4 or inside-terminal greeting with luggage assistance." },
                                    { title: "Licensed and Insured", desc: "Professional, GACA-compliant drivers operating clean, late-model vehicles through established safety protocols." },
                                    { title: "24/7/365 Coverage", desc: "Early morning Fajr prayers or late-night arrivals are handled with 24-hour dedicated dispatch and support." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-5 group">
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-luxury-gold flex items-center justify-center text-black font-bold shadow-lg group-hover:bg-black group-hover:text-luxury-gold transition-colors">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                                            <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 4. COMMON PROBLEMS */}
                        <div>
                            <h2 className="text-4xl font-serif mb-10">Common Airport Taxi Problems We Solve</h2>
                            <div className="space-y-6 text-zinc-600 leading-relaxed">
                                <p>
                                    Landing at King Abdulaziz International Airport often presents a unique set of challenges that can derail your travel plans. Most travelers face the **language barrier** with local taxi drivers who may not be familiar with international requirements or specific hotel locations in Makkah. Our multilingual drivers eliminate this hurdle, ensuring clear communication from the start.
                                </p>
                                <p>
                                    Another frequent issue is **hidden extra costs**. Standard Jeddah airport taxis might charge extra for airport parking fees, luggage, or road tolls. At Saudi Taxi, our flat-rate quote includes every single fee—no hidden surprises.
                                </p>
                                <ul className="space-y-4 pt-4 border-t border-zinc-100">
                                    {[
                                        "Last-minute terminal changes — we adjust pickups automatically between T1 and North.",
                                        "Haramain Train delays — we provide a backup ride if you miss your scheduled train connection.",
                                        "Heavy Luggage — we use SUVs like the GMC Yukon XL to safely handle 5+ large bags and Zamzam.",
                                        "Child Seats — We provide infant, toddler, and booster seats on request (must pre-book).",
                                        "Corporate schedules — We offer account billing and group coordination for business summits.",
                                        "Meeqat Coordination — Dedicated stops at Dhul Hulaifah for Umrah pilgrims."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRICING TABLES */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Jeddah Airport Taxi <span className="text-luxury-gold">Fares 2026</span></h2>
                        <p className="text-zinc-600 italic">
                            Transparent prices for all Western Province routes. Pricing depends on vehicle class, time of day, and exact address; ensure your quote is confirmed before pickup.
                        </p>
                    </div>
                    <PopularRoutesTable
                        title="Fixed JED Airport Transfer Rates"
                        routes={jeddahRoutes}
                    />
                    <div className="mt-12 text-center text-zinc-400 text-sm max-w-2xl mx-auto">
                        <p>Note: Our rates for Jeddah to Makkah and Madinah transfers are inclusive of all tolls and fuel. For multi-stop journeys or hourly charters (ideal for sightseeing Al-Balad), please contact our VIP desk for a custom itinerary.</p>
                    </div>
                </div>
            </section>

            {/* 6. PROCESS */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif text-center mb-16">Our 3-Step Seamless Process</h2>
                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
                        <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                            <span className="w-16 h-16 rounded-full bg-black text-luxury-gold font-serif text-3xl flex items-center justify-center mx-auto mb-6">1</span>
                            <h4 className="font-bold text-2xl mb-4">Book</h4>
                            <p className="text-zinc-500">Reserve your ride online or via WhatsApp for instant digital confirmation. No deposit required.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                            <span className="w-16 h-16 rounded-full bg-black text-luxury-gold font-serif text-3xl flex items-center justify-center mx-auto mb-6">2</span>
                            <h4 className="font-bold text-2xl mb-4">Track</h4>
                            <p className="text-zinc-500">We monitor your flight status and Jeddah traffic, texting you your driver's exact location upon arrival.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow text-white bg-luxury-black">
                            <span className="w-16 h-16 rounded-full bg-luxury-gold text-black font-serif text-3xl flex items-center justify-center mx-auto mb-6">3</span>
                            <h4 className="font-bold text-2xl mb-4">Ride</h4>
                            <p className="text-white/60">Relax in a clean, air-conditioned sedan or SUV. Your driver handles the bags and the local navigation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. COVERAGE */}
            <section className="py-24 bg-zinc-900 border-t border-white/5">
                <div className="container mx-auto px-4 flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-serif mb-10 text-center">Serving All of <span className="text-luxury-gold">Greater Jeddah</span></h2>
                    <div className="max-w-4xl text-center space-y-6 text-white/70 leading-relaxed text-lg">
                        <p>
                            Our <strong>Jeddah Airport Taxi</strong> coverage extends beyond the terminal. We provide door-to-door service to every major neighborhood including the prestigious <strong>Al-Shati</strong>, the coastal <strong>Al-Hamra</strong>, the business district of <strong>Al-Rawdah</strong>, and the educational hubs in <strong>Ash Shati</strong> and <strong>Al Khalidiyyah</strong>. Whether you are staying at the Ritz-Carlton, the Hilton, or a private residence in <strong>Obhur</strong>, our drivers arrive at your doorstep on time.
                        </p>
                        <p>
                            Expect predictable travel times via major arteries like the <strong>Al-Madinah Highway</strong>, <strong>King Abdulaziz Road</strong>, and <strong>Tahliah Street</strong>. We are the preferred choice for visitors exploring the <strong>Corniche</strong>, the historic <strong>Al-Balad</strong>, and the commercial giants like <strong>Mall of Arabia</strong> and <strong>Red Sea Mall</strong>.
                        </p>
                    </div>
                    <div className="mt-12 bg-white/5 p-4 rounded-lg border border-white/10 italic text-white/40 text-sm">
                        Pro-tip: Visit our Jeddah service hub near King Abdulaziz International Airport; entry details and maps are provided instantly upon booking confirmation.
                    </div>
                </div>
            </section>

            {/* 8. EEAT */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="flex flex-col items-center text-center">
                        <Award className="text-luxury-gold size-16 mb-8" />
                        <h2 className="text-3xl font-serif mb-8">A Decade of Professional Excellence</h2>
                        <p className="text-zinc-600 leading-relaxed mb-8 text-lg">
                            Saudi Taxi has proudly served Makkah and Jeddah travelers for over <strong>10+ years</strong>. Our company holds full commercial insurance and TGA licensing, ensuring that every ride meets the Kingdom's highest safety standards. We verify every driver's identity and background, maintain a strict schedule of vehicle deep-cleaning, and provide written confirmations for every booking to ensure 100% transparency. Our average response time at JED Airport Terminal 1 is under <strong>15 minutes</strong>.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="px-6 py-2 bg-zinc-100 rounded-full text-xs font-black uppercase tracking-widest border border-zinc-200">GACA Compliant</span>
                            <span className="px-6 py-2 bg-zinc-100 rounded-full text-xs font-black uppercase tracking-widest border border-zinc-200">TGA Licensed</span>
                            <span className="px-6 py-2 bg-zinc-100 rounded-full text-xs font-black uppercase tracking-widest border border-zinc-200">Fully Insured</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FAQs */}
            <FAQSection items={jeddahFAQs} title="Jeddah Airport Taxi FAQ – What You Need to Know" className="bg-zinc-50" darkContent={true} />

            {/* 10. TESTIMONIALS */}
            <section className="py-24 bg-zinc-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-4xl font-serif text-white mb-12 italic">Recognized by Local Travelers</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="p-8 bg-white/5 rounded-xl border border-white/10">
                            <p className="text-luxury-gold italic mb-4">"On-time pickup from Terminal 1 and a very smooth ride to our hotel in Al-Hamra. The flat rate saved us from the local app surges."</p>
                            <span className="text-white font-bold opacity-60">— Omar, Al-Shati Hub</span>
                        </div>
                        <div className="p-8 bg-white/5 rounded-xl border border-white/10">
                            <p className="text-luxury-gold italic mb-4">"Our late-night arrival was stressful until we saw our driver with a name board. Seamless transfer to Makkah. Highly recommend for Umrah groups."</p>
                            <span className="text-white font-bold opacity-60">— Sarah, International Pilgrim</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. CASE STUDY */}
            <section className="py-24 bg-white text-black border-t border-zinc-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="p-10 rounded-3xl bg-luxury-black text-white relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-serif text-luxury-gold mb-4">Case Study: Large Family Umrah Pickup</h3>
                            <p className="text-white/70 leading-relaxed max-w-2xl">
                                <strong>Problem:</strong> A family of 6 arriving at 2:00 AM during Ramadan with 8 bags and a child seat requirement.
                                <br /><strong>Solution:</strong> A pre-booked GMC Yukon XL with a prepared car seat and meet-and-greet service.
                                <br /><strong>Outcome:</strong> 25-minute exit-to-vehicle time; total travel time to Makkah: 65 minutes.
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 blur-3xl rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* 12. INTERNAL LINKS */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl font-serif mb-8 text-black">Plan Your Full Journey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <Link href="/services/umrah-transfers" className="p-6 bg-white rounded-xl shadow-sm border border-zinc-100 hover:border-luxury-gold transition-colors block">
                            <h5 className="font-bold mb-2">Umrah Transfers</h5>
                            <p className="text-xs text-zinc-500">Explore dedicated Jeddah to Makkah taxi routes.</p>
                        </Link>
                        <Link href="/services/vip-transport" className="p-6 bg-white rounded-xl shadow-sm border border-zinc-100 hover:border-luxury-gold transition-colors block">
                            <h5 className="font-bold mb-2">Business Transport</h5>
                            <p className="text-xs text-zinc-500">GMC Yukon and executive sedans for business leaders.</p>
                        </Link>
                        <Link href="/services/ziyarat-tours" className="p-6 bg-white rounded-xl shadow-sm border border-zinc-100 hover:border-luxury-gold transition-colors block">
                            <h5 className="font-bold mb-2">Makkah and Madinah Tours</h5>
                            <p className="text-xs text-zinc-500">Discover holy sites with local expert guides.</p>
                        </Link>
                        <Link href="/fleet" className="p-6 bg-white rounded-xl shadow-sm border border-zinc-100 hover:border-luxury-gold transition-colors block">
                            <h5 className="font-bold mb-2">View the Full Fleet</h5>
                            <p className="text-xs text-zinc-500">Choose between economy sedans and quality high-roof vans.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 13. CTAS & MOBILE STICKY */}
            <section className="py-24 bg-luxury-gold text-black text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 opacity-40"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">Book Your <strong>Jeddah Airport Taxi</strong> Today</h2>
                    <p className="text-xl mb-12 opacity-80 max-w-2xl mx-auto">Reliable, licensed, and fixed-rate airport transfers across the Kingdom.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/booking">
                            <Button size="lg" className="bg-black text-white hover:bg-zinc-800 px-12 py-8 text-xl rounded-full shadow-2xl">Book Now</Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-12 py-8 text-xl rounded-full">Get Free Estimate</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mobile Sticky CTA */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-4 md:hidden border-t border-zinc-200 z-[100] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex gap-4">
                    <Link href="tel:+966548174726" className="flex-1">
                        <Button className="w-full bg-luxury-gold text-black font-black h-14 rounded-xl shadow-lg shadow-luxury-gold/20">Call Airport Taxi Now</Button>
                    </Link>
                </div>
            </div>

            {/* Local Taxi Service Schema */}
            <Script id="jeddah-taxi-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TaxiService",
                    "name": "Saudi Taxi - Jeddah Airport Hub",
                    "description": "Professional airport taxi service in Jeddah, providing flat-rate transfers from KAIA to Makkah and city hotels.",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Saudi Taxi Services",
                        "image": "https://sauditaxi.cab/logo.png",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Jeddah",
                            "addressRegion": "Western Province",
                            "addressCountry": "SA",
                            "postalCode": "21442"
                        }
                    },
                    "areaServed": {
                        "@type": "AdministrativeArea",
                        "name": "Jeddah"
                    },
                    "serviceType": "Airport Transfer",
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "SAR",
                        "price": "0.00" // Indicating quote based pricing
                    }
                })
            }} />
        </main>
    );
}
