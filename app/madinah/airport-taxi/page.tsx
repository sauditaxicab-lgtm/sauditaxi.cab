import { ServiceHero } from "@/components/services/ServiceHero";
import { FleetGrid } from "@/components/services/FleetGrid";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Plane, Building2, MapPin, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: 'Madinah Airport Taxi – Reliable Prince Mohammad (MED) Transfers',
    description: 'Book a reliable Madinah Airport Taxi at Prince Mohammad Bin Abdulaziz International Airport (MED). Fixed 2026 rates for Masjid An-Nabawi and Makkah. WhatsApp support.',
    alternates: {
        canonical: '/madinah/airport-taxi',
    },
};

const madinahRoutes = [
    {
        from: "Madinah Airport (MED)",
        fromIcon: <Plane size={16} />,
        to: "Al-Masjid an-Nabawi / Hotels",
        toIcon: <Building2 size={16} />,
        price: "Contact for Quote",
        time: "20-30 Mins",
        features: ["Meet and Greet", "Luggage Assistance"]
    },
    {
        from: "Madinah Airport (MED)",
        fromIcon: <Plane size={16} />,
        to: "Makkah (Holy Mosque)",
        toIcon: <Building2 size={16} />,
        price: "Contact for Quote",
        time: "4.5 Hours",
        features: ["Long Distance", "Expert Driver"]
    },
    {
        from: "Madinah City",
        fromIcon: <MapPin size={16} />,
        to: "Yanbu / Coast",
        toIcon: <Building2 size={16} />,
        price: "Contact for Quote",
        time: "3 Hours",
        features: ["Sea Route", "Luxury Sedan"]
    },
    {
        from: "Madinah Airport (MED)",
        fromIcon: <Plane size={16} />,
        to: "Quba / Uhud Sites",
        toIcon: <MapPin size={16} />,
        price: "Contact for Quote",
        time: "45 Mins",
        features: ["Religious Tour", "Fixed Rate"]
    }
];

const madinahFAQs = [
    {
        question: "How much does a taxi cost from Madinah Airport (MED) to Al-Masjid an-Nabawi?",
        answer: "A private taxi from Prince Mohammad Bin Abdulaziz International Airport to the Prophet's Mosque is competitively priced and includes meet and greet service and all parking fees. Contact us for the current fixed rate."
    },
    {
        question: "Can I book a taxi from Madinah Airport to Makkah?",
        answer: "Yes, we specialize in long-distance transfers between Madinah Airport and Makkah. The journey takes approximately 4.5 hours; contact us for a dedicated sedan quote."
    },
    {
        question: "How do I find my driver at Madinah Airport?",
        answer: "Your driver will be waiting at the arrivals exit with a professional nameplate. We also provide the driver's WhatsApp contact information 1 hour before your flight lands."
    },
    {
        question: "Are child seats available for Madinah transfers?",
        answer: "Yes, we can provide child car seats upon request. Please mention the number and ages of children when making your booking."
    },
    {
        question: "Is there a limit on luggage for airport pickups?",
        answer: "Our SUVs and vans can accommodate large amounts of luggage, including Zamzam water bottles. Please select the appropriate vehicle type (GMC or HiAce) for large groups."
    }
];

export default function MadinahAirportTaxiPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Madinah Airport Taxi — Prince Mohammad (MED) Transfers"
                subtitle="Spiritual Journey Standard"
                description="Fast, respectful, and dedicated airport transfers from Prince Mohammad Bin Abdulaziz International Airport (MED) to the Prophet's Mosque and Makkah."
                backgroundImage="/coaster/coaster-main.jpg"
            />

            {/* Breadcrumbs */}
            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* Above the Fold SEO Text */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h1 className="text-3xl md:text-5xl font-serif mb-6 text-black">
                        Reliable Madinah Airport Taxi — Start Your Ziyarat Comfortably
                    </h1>
                    <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                        Experience peace of mind from the moment you land in the City of the Prophet. Saudi Taxi provides dedicated Prince Mohammad Bin Abdulaziz International Airport (MED) transfers with licensed drivers who understand the needs of pilgrims and visitors.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="tel:+966548174726">
                            <Button className="bg-luxury-gold text-black hover:bg-black hover:text-luxury-gold font-bold px-8 py-6 rounded-full">
                                Call Madinah Taxi Experts Now
                            </Button>
                        </Link>
                        <Link href="/booking">
                            <Button variant="outline" className="border-luxury-gold text-black hover:bg-luxury-gold hover:text-black font-bold px-8 py-6 rounded-full">
                                Book Free Estimate
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* AI Overview Block */}
            <section className="py-12 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-luxury-gold">
                        <h2 className="text-xl font-bold text-black mb-4">How much does a taxi cost from Madinah Airport (MED)?</h2>
                        <p className="text-zinc-700 leading-relaxed mb-4">
                            Madinah Airport taxi service is priced competitively for arrivals heading to hotels near Al-Masjid an-Nabawi or Makkah. We operate 24/7 with real-time flight tracking to ensure your driver is ready when you arrive. Contact us for an instant quote via WhatsApp.
                        </p>
                        <p className="text-zinc-500 text-sm italic">
                            *Rates are fixed for standard vehicles; luxury SUVs have different pricing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-serif mb-8">Why Choose Saudi Taxi in Madinah?</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Shield className="text-luxury-gold shrink-0 mt-1" size={20} />
                                    <span><strong>Respectful Drivers:</strong> Professional drivers who honor the sanctity of the Holy City.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Star className="text-luxury-gold shrink-0 mt-1" size={20} />
                                    <span><strong>Fixed Fares:</strong> No hidden charges for airport parking or road tolls—what we quote is what you pay.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="text-luxury-gold shrink-0 mt-1" size={20} />
                                    <span><strong>Punctual Service:</strong> We monitor your flight status and arrive early for your convenience.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Star className="text-luxury-gold shrink-0 mt-1" size={20} />
                                    <span><strong>Convenient Pickups:</strong> Door-to-door service from MED to all hotels in the Markazia area.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Star className="text-luxury-gold shrink-0 mt-1" size={20} />
                                    <span><strong>Modern Fleet:</strong> Clean, air-conditioned vehicles including GMC Yukons and spacious vans.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-serif mb-8">Common Problems We Solve</h2>
                            <ul className="space-y-4 text-zinc-600">
                                <li><strong>Haggling with airport taxis</strong> — Enjoy a pre-booked, fixed-rate experience.</li>
                                <li><strong>Luggage space issues</strong> — Specialized vehicles for large groups and Zamzam water.</li>
                                <li><strong>Language barriers</strong> — Multilingual support and drivers who understand your requirements.</li>
                                <li><strong>Wait times</strong> — Dedicated meet and greet service skips the terminal taxi lines.</li>
                                <li><strong>Pilgrimage logistics</strong> — Seamless connections for your Makkah and Madinah journey.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Pricing Table */}
                    <div className="mt-16">
                        <PopularRoutesTable
                            title="Average Madinah Airport Taxi Fares"
                            routes={madinahRoutes}
                        />
                    </div>

                    {/* Fleet Grid - Service Data */}
                    <div className="mt-24">
                        <h2 className="text-3xl font-serif text-center mb-12">Fleet Available at MED Airport</h2>
                        <FleetGrid />
                    </div>

                    {/* Process */}
                    <div className="mt-24">
                        <h2 className="text-3xl font-serif text-center mb-12">How It Works</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-center px-4">
                            <div>
                                <span className="w-12 h-12 rounded-full bg-luxury-gold text-black font-bold flex items-center justify-center mx-auto mb-4 text-xl">1</span>
                                <h4 className="font-bold mb-2">Book Online</h4>
                                <p className="text-zinc-500 text-sm">Message us on WhatsApp or use our form for an instant quote.</p>
                            </div>
                            <div>
                                <span className="w-12 h-12 rounded-full bg-luxury-gold text-black font-bold flex items-center justify-center mx-auto mb-4 text-xl">2</span>
                                <h4 className="font-bold mb-2">Receive Details</h4>
                                <p className="text-zinc-500 text-sm">Get your driver's contact and vehicle info before landing.</p>
                            </div>
                            <div>
                                <span className="w-12 h-12 rounded-full bg-luxury-gold text-black font-bold flex items-center justify-center mx-auto mb-4 text-xl">3</span>
                                <h4 className="font-bold mb-2">Travel with Ease</h4>
                                <p className="text-zinc-500 text-sm">Your driver meets you at MED and takes you directly to your hotel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coverage & Localization */}
            <section className="py-24 bg-zinc-900 border-t border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif mb-8">Serving Madinah’s <span className="text-luxury-gold">Sacred Landmarks</span></h2>
                    <p className="text-white/70 max-w-3xl mx-auto leading-relaxed mb-4">
                        Our drivers are experts in the Markazia district, frequently providing transfers to <strong>Al-Masjid an-Nabawi</strong>, <strong>Masjid Quba</strong>, and the <strong>Mount Uhud</strong> area. We serve all major hotels like the <strong>Hilton</strong>, <strong>Oberoi</strong>, and <strong>Pullman</strong>.
                    </p>
                    <p className="text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 italic">
                        Beyond the Prophet's Mosque, we are the preferred choice for those traveling to <strong>Makkah</strong>, <strong>Jeddah</strong>, and <strong>Yanbu</strong> from Madinah Airport.
                    </p>
                    <div className="bg-white/5 p-4 rounded-sm inline-block italic text-white/40 text-sm border border-white/10">
                        Visit our Madinah service hub near Prince Mohammad Bin Abdulaziz International Airport; details shared upon booking.
                    </div>
                </div>
            </section>

            {/* PAA / FAQs */}
            <FAQSection items={madinahFAQs} title="Madinah Airport Taxi FAQ" className="bg-zinc-900" />

            <Script id="madinah-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": madinahFAQs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })
            }} />

            {/* EEAT Section */}
            <section className="py-24 bg-white text-black border-y border-zinc-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-serif mb-8">Trusted Madinah Transport Since 2015</h2>
                    <p className="text-zinc-600 leading-relaxed mb-6">
                        Saudi Taxi has been providing dedicated Madinah transportation for nearly a decade. Our TGA-licensed drivers are experts in religious tourism logistics, ensuring every MED airport transfer is handled with dignity and punctuality. We verify every driver and maintain our fleet to the highest hygiene and safety standards.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <span className="px-4 py-2 bg-zinc-100 rounded-full text-xs font-bold uppercase tracking-wider border border-zinc-200">Licensed</span>
                        <span className="px-4 py-2 bg-zinc-100 rounded-full text-xs font-bold uppercase tracking-wider border border-zinc-200">Insured</span>
                        <span className="px-4 py-2 bg-zinc-100 rounded-full text-xs font-bold uppercase tracking-wider border border-zinc-200">Background-Checked</span>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-16 bg-white border-t border-zinc-100">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="space-y-4">
                        <p>Planning your spiritual journey? Book our <Link href="/services/umrah-transfers" className="text-luxury-gold font-bold hover:underline">Madinah to Makkah taxi</Link> for a peaceful transfer.</p>
                        <p>Discover the holy sites with a <Link href="/services/ziyarat-tours" className="text-luxury-gold font-bold hover:underline">Madinah Ziyarat tour</Link> with local guides.</p>
                        <p>Need a large vehicle? Explore our <Link href="/services/family-travel" className="text-luxury-gold font-bold hover:underline">10-seater and 12-seater vans</Link> for group travel.</p>
                    </div>
                </div>
            </section>

            {/* Mobile Sticky CTA */}
            <div className="sticky bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md p-4 md:hidden border-t border-zinc-200 z-50">
                <Link href="tel:+966548174726">
                    <Button className="w-full bg-luxury-gold text-black font-bold h-14">Call Madinah Airport Taxi Now</Button>
                </Link>
            </div>

            <section className="py-24 bg-luxury-gold text-black text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-serif mb-8">Book Your Madinah Airport Taxi</h2>
                    <div className="flex justify-center gap-6">
                        <Link href="/booking">
                            <Button size="lg" className="bg-black text-white hover:bg-zinc-800 px-10">Book Today</Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-10">Get Free Quote</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
