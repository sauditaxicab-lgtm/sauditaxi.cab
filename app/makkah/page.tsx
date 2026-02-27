import { ServiceHero } from "@/components/services/ServiceHero";
import { FleetGrid } from "@/components/services/FleetGrid";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Building2, MapPin, Shield, Clock, Star, AlertCircle, CheckCircle2, Award, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: 'Makkah Taxi Service – Reliable Umrah Transfers and Holy Site Tours',
    description: 'Book a reliable Makkah Taxi for Umrah. Fixed rates for Jeddah to Makkah, Holy Mosque transfers, and Ziyarat tours. Professional drivers and quality fleet available 24/7.',
    alternates: {
        canonical: '/makkah',
    },
};

const makkahRoutes = [
    {
        from: "Jeddah Airport (JED)",
        fromIcon: <MapPin size={16} />,
        to: "Makkah (Haram Area)",
        toIcon: <Building2 size={16} />,
        price: "Ask for Price",
        time: "1 Hour",
        features: ["Meet and Greet", "Fixed Fare"]
    },
    {
        from: "Makkah City",
        fromIcon: <Building2 size={16} />,
        to: "Madinah Munawwarah",
        toIcon: <Building2 size={16} />,
        price: "Ask for Price",
        time: "4.5 Hours",
        features: ["Spiritual Focus", "Quality SUV"],
        link: "/makkah-to-madinah-taxi"
    },
    {
        from: "Makkah Hotels",
        fromIcon: <Building2 size={16} />,
        to: "Mina / Arafat / Muzdalifah",
        toIcon: <MapPin size={16} />,
        price: "Ask for Price",
        time: "Flexible",
        features: ["Ziyarat Expert", "Family Vans"]
    }
];

const makkahFAQs = [
    {
        question: "Can I book a taxi from Makkah to Jeddah Airport at any time?",
        answer: "Yes, our Makkah taxi service operates 24/7. Whether you have a late-night flight or an early morning departure from King Abdulaziz International Airport (JED), our drivers are always available. We recommend booking at least 3 hours before your flight to ensure a stress-free transfer."
    },
    {
        question: "Are your drivers familiar with all Makkah pilgrimage sites (Ziyarat)?",
        answer: "Absolutely. Our professional drivers are local experts who know the routes to Ghar Hira, Cave of Thawr, Masjid Aisha (Taneem), and the historic plains of Arafat and Mina perfectly. They can provide a peaceful and informative Ziyarat tour for your family."
    },
    {
        question: "How do I ensure my taxi arrives at my Makkah hotel on time?",
        answer: "We use advanced GPS tracking and real-time monitoring of local Makkah traffic, especially during prayer times. Your driver will be dispatched early and will contact you via WhatsApp to coordinate the exact pickup point at your hotel entrance or the assigned parking zones near the Haram."
    },
    {
        question: "Do you offer child seats for family travel in Makkah?",
        answer: "Yes, we prioritize family safety. We can provide infant, toddler, and booster seats upon request. Please mention your requirements during the booking process so we can equip the vehicle appropriately."
    }
];

export default function MakkahCityPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Makkah Taxi Service"
                subtitle="Al-Masjid al-Haram and Beyond"
                description="Experience respectful, reliable transportation in the Holiest City. From Jeddah Airport (JED) to your Makkah doorstep. Professional drivers dedicated to your spiritual journey."
                backgroundImage="/makkah/makkah_hero.png"
            />

            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* 1. ABOVE THE FOLD - INTRO SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h1 className="text-3xl md:text-5xl font-serif mb-8 text-black leading-tight">
                        Reliable <strong>Makkah Taxi</strong> for Umrah and Ziyarat Transfers
                    </h1>
                    <div className="text-zinc-600 text-lg leading-[1.8] space-y-6 text-justify md:text-center">
                        <p>
                            Navigating the sacred city of Makkah requires more than just a driver—it requires a guide who understands the sanctity and the logistical challenges of the area. <strong>Saudi Taxi</strong> provides professional transportation tailored for pilgrims and visitors. Whether you are arriving for <Link href="/services/umrah-transfers" className="text-luxury-gold hover:underline font-bold">Umrah</Link> or need a reliable transfer to <Link href="/jeddah" className="text-luxury-gold hover:underline font-bold">King Abdulaziz International Airport (JED)</Link>, our service ensures you reach your destination with peace of mind and comfort.
                        </p>
                        <p>
                            We specialize in serving the areas surrounding the <strong>Masjid Al-Haram</strong>, the <strong>Abraj Al-Bait</strong> towers, and the expanding hospitality districts of <strong>Jabal Omar</strong> and <strong>Misfalah</strong>. Our team is dedicated to providing high-quality service that allows you to focus on your prayers while we handle the heavy luggage and complex city navigation.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mt-12 pb-4">
                        <Link href="tel:+966548174726">
                            <Button className="bg-luxury-gold text-black hover:bg-black hover:text-luxury-gold font-bold px-10 py-7 text-lg rounded-full shadow-2xl transition-all hover:scale-105">
                                Call Makkah Taxi Experts
                            </Button>
                        </Link>
                        <Link href="/booking">
                            <Button variant="outline" className="border-2 border-luxury-gold text-black hover:bg-luxury-gold hover:text-black font-bold px-10 py-7 text-lg rounded-full shadow-xl">
                                Online Booking
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
                            Makkah Taxi Pricing and Availability
                        </h2>
                        <p className="text-zinc-700 text-lg leading-relaxed mb-6">
                            Makkah taxi rates are fixed and competitive. We provide 24/7 availability across all holy sites and hotels in neighborhoods like <strong>Ajyad</strong> and <strong>Aziziyah</strong>. Our service includes luggage help, fixed pricing, and professional drivers who know the Haram area intimately. Contact us for an instant quote.
                        </p>
                        <p className="text-zinc-500 text-sm italic py-4 border-t border-zinc-100">
                            *Prices are fixed at the time of booking. Availability may vary during Hajj and Ramadan peaks.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE US */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-serif mb-10 underline decoration-luxury-gold underline-offset-8">
                                Why Choose Us in Makkah?
                            </h2>
                            <ul className="grid gap-8">
                                {[
                                    { title: "Fixed Umrah Rates", desc: "The price you see is the price you pay. No surge during prayer times or peak seasons." },
                                    { title: "Haram Area Experts", desc: "Drivers who know the best drop-off points near the Holy Mosque even during road closures." },
                                    { title: "Luggage Specialist", desc: "Spacious trunks for Zamzam water and all your pilgrimage gear in SUVs and vans." },
                                    { title: "24/7 Spiritual Support", desc: "Punctual service for departures from Makkah to ensure you never miss your flight." },
                                    { title: "Quality Vehicle Fleet", desc: "Clean, air-conditioned sedans and 7-seater vans for family groups." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <CheckCircle2 className="text-luxury-gold mt-1 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-xl">{item.title}</h4>
                                            <p className="text-zinc-500">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 4. COMMON PROBLEMS SOLVED */}
                        <div>
                            <h2 className="text-4xl font-serif mb-10">Pilgrimage Travel Challenges We Solve</h2>
                            <div className="space-y-6 text-zinc-600">
                                <p>Finding a reliable taxi in Makkah during **peak Ramadan or Hajj** is one of the biggest challenges for visitors. Many local taxis do not have the capacity for large families or the heavy luggage that comes with international travel. Our fleet is specifically selected to handle these volume requirements.</p>
                                <p>We also solve the problem of **navigation confusion**. Makkah's roads frequently change due to expansion projects and prayer-time closures. Our drivers receive live updates, ensuring you take the most efficient route possible to your hotel or the Meeqat.</p>
                                <ul className="space-y-4 pt-4 border-t border-zinc-100 text-sm">
                                    <li>Automated flight tracking for JED to Makkah arrivals.</li>
                                    <li>Dedicated waiting at Meeqat points for Umrah preparation.</li>
                                    <li>Safe transport through Jabal Omar and Misfalah tunnels.</li>
                                    <li>Reliable connections to the Haramain High Speed Rail stations.</li>
                                    <li>Child-friendly safety seats for pilgrimage with toddlers.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRICING TABLE */}
            <PopularRoutesTable
                title="Fixed Makkah Route Fares"
                routes={makkahRoutes}
            />

            {/* 6. PROCESS */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif text-center mb-16">Simple 3-Step Booking</h2>
                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
                        <div>
                            <span className="w-16 h-16 rounded-full bg-black text-luxury-gold font-bold text-2xl flex items-center justify-center mx-auto mb-4">1</span>
                            <h4 className="font-bold">Book Online</h4>
                            <p className="text-zinc-500">Fast confirmation via our secure portal or WhatsApp.</p>
                        </div>
                        <div>
                            <span className="w-16 h-16 rounded-full bg-black text-luxury-gold font-bold text-2xl flex items-center justify-center mx-auto mb-4">2</span>
                            <h4 className="font-bold">Meet Driver</h4>
                            <p className="text-zinc-500">At the airport terminal or your hotel lobby at the agreed time.</p>
                        </div>
                        <div>
                            <span className="w-16 h-16 rounded-full bg-luxury-gold text-black font-bold text-2xl flex items-center justify-center mx-auto mb-4">3</span>
                            <h4 className="font-bold">Reach Haram</h4>
                            <p className="text-zinc-500">Enjoy a professional ride directly to the Holy Mosque.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. COVERAGE */}
            <section className="py-24 bg-zinc-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif mb-10 text-white leading-relaxed">Serving Every Corner of the <span className="text-luxury-gold">Sacred Territory</span></h2>
                    <p className="text-white/60 max-w-4xl mx-auto text-lg mb-12">
                        Our drivers are experts in the Markazia (Central) area around the Haram. We serve all landmark hotels including the <strong>Fairmont Makkah Clock Royal Tower</strong>, <strong>Swissôtel</strong>, and <strong>Conrad Makkah</strong>. We also provide coverage for residential districts like <strong>Al-Aziziyah</strong>, <strong>Al-Nuzhah</strong>, and the religious landmarks of <strong>Mount Arafat</strong> and the <strong>Cave of Hira</strong>.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm">Ajyad District</div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm">Misfalah Area</div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm">Shubaykah</div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm">Jabal al-Kaaba</div>
                    </div>
                </div>
            </section>

            {/* 8. EEAT */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <Award className="text-luxury-gold size-16 mx-auto mb-8" />
                    <h2 className="text-3xl font-serif mb-8">Trusted by Thousands of Pilgrims</h2>
                    <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                        Saudi Taxi has been the gold standard for Makkah transportation for over <strong>10 years</strong>. Our drivers are TGA-licensed and specifically trained for Umrah and Hajj logistical support. We maintain a high standard of vehicle hygiene and provide transparent, receipts-based billing for every transfer.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-zinc-100 px-4 py-2 rounded-full text-xs font-bold border border-zinc-200">LICENSED</span>
                        <span className="bg-zinc-100 px-4 py-2 rounded-full text-xs font-bold border border-zinc-200">INSURED</span>
                        <span className="bg-zinc-100 px-4 py-2 rounded-full text-xs font-bold border border-zinc-200">TGA CERTIFIED</span>
                    </div>
                </div>
            </section>

            {/* 9. FAQs */}
            <FAQSection items={makkahFAQs} title="Makkah Taxi FAQ" className="bg-zinc-50" darkContent={true} />

            {/* 10. TESTIMONIALS */}
            <section className="py-24 bg-zinc-900">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-serif text-white mb-12 italic">Recognized by Local Visitors</h3>
                    <div className="max-w-3xl mx-auto p-12 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-luxury-gold text-xl italic mb-6">"Seamless transfer from Jeddah to Makkah during the last 10 days of Ramadan. The driver was patient and knew the road closures well."</p>
                        <span className="text-white/60 font-bold">— Ahmed R., United Kingdom</span>
                    </div>
                </div>
            </section>

            {/* 11. CASE STUDY */}
            <section className="py-24 bg-white text-black border-t border-zinc-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="p-10 rounded-3xl bg-luxury-black text-white relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-serif text-luxury-gold mb-4">Case Study: Full Day Ziyarat Tour</h3>
                            <p className="text-white/70 leading-relaxed max-w-2xl">
                                <strong>Problem:</strong> A family of 8 needing to visit all major holy sites in Makkah within a 4-hour window before their departure.
                                <br /><strong>Solution:</strong> A Toyota HiAce van with a local guide-driver who coordinated the visit to Hira, Thawr, and Arafat efficiently.
                                <br /><strong>Outcome:</strong> Completed all sites on time with comfortable travel; contact us for current rates.
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 blur-3xl rounded-full"></div>
                    </div>
                </div>
            </section>

            <CTASection
                title={<strong>Arriving in <span className="text-luxury-black">Makkah?</span></strong>}
                description="Book your reliable Saudi Taxi in Makkah today. Professional drivers available 24/7."
                buttonText="Book via WhatsApp"
                showFeatures={true}
            />

            {/* Local Business Schema - Makkah Hub */}
            <Script id="local-business-makkah" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TaxiService",
                    "name": "Saudi Taxi - Makkah Hub",
                    "description": "Reliable airport transfers and Ziyarat tours in Makkah. Serving the Holy Prophet's Mosque area and all pilgrims.",
                    "areaServed": {
                        "@type": "City",
                        "name": "Makkah"
                    },
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Makkah",
                        "addressRegion": "Makkah Province",
                        "addressCountry": "SA"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "21.4225",
                        "longitude": "39.8262"
                    },
                    "telephone": "+966548174726"
                })
            }} />
        </main>
    );
}
