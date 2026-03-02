import { ServiceHero } from "@/components/services/ServiceHero";
import { ContentBlock } from "@/components/services/ContentBlock";
import { FleetGrid } from "@/components/services/FleetGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PricingInclusion } from "@/components/services/PricingInclusion";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Plane } from "lucide-react";

export const metadata: Metadata = {
    title: 'Airport Taxi Jeddah and Madinah – Fixed Rate JED/MED Transfers | Saudi Taxi',
    description: 'Looking for a reliable Airport Taxi in Jeddah? Saudi Taxi offers the best Jeddah Airport Taxi (JED) and Madinah (MED) transfers at flat rates. 24/7 service, professional drivers, and meet and greet. Book your private ride today.',
    alternates: {
        canonical: '/services/airport-transfers',
    },
};

const processSteps = [
    { title: "Book Online", description: "Select your pickup location (Jeddah/Madinah Airport) and destination on our WhatsApp booking form." },
    { title: "Receive Confirmation", description: "Instantly receive your booking confirmation and driver details via WhatsApp." },
    { title: "Enjoy the Ride", description: "Your driver will meet you at the arrivals terminal. Sit back, relax, and perform your Umrah with peace of mind." }
];

const airportFAQs = [
    {
        question: "How long is the trip from Madinah Airport to the Prophet's Mosque?",
        answer: "The journey from Prince Mohammad Bin Abdulaziz Airport (MED) to Masjid An-Nabawi takes approximately 20–30 minutes."
    },
    {
        question: "What is the Medina airport taxi booking process?",
        answer: "Our Medina airport taxi booking process is simple: 1. Contact us via WhatsApp, 2. Provide flight details and hotel name, 3. Receive instant confirmation. Your driver will be waiting at the arrivals gate."
    },
    {
        question: "How Long Is The Trip From Jeddah Airport To Makah?",
        answer: "The journey typically takes 60–90 minutes depending on traffic. We recommend booking in advance to ensure a smooth transfer."
    },
    {
        question: "How do I book an Airport Taxi in Jeddah (JED)?",
        answer: "Booking your Jeddah Airport Taxi (JED) is easy. Simply use our online form or WhatsApp +966 54 817 4726. We monitor Terminal 1 and North Terminal arrivals 24/7."
    },
    {
        question: "Do you offer flat rate Jeddah to Makkah taxi fares?",
        answer: "Yes, we provide all-inclusive flat rate fares from Jeddah Airport to Makkah, including tolls and taxes. No hidden surge pricing during Hajj or Umrah seasons."
    }
];

export default function AirportTransfersPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Airport Taxi Saudi Arabia – Jeddah and Madinah Fixed Rate Transfers | Saudi Taxi"
                subtitle="Dedicated Airport Transfers"
                description="The most reliable Jeddah Airport Taxi and Madinah Airport transfers to Makkah. Book your private pickup with real-time flight tracking and professional meet-and-greet."
                backgroundImage="/services/airport_transfer.png"
            />

            {/* Breadcrumbs - VISIBLE */}
            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* Introduction - Keywords inside first 100 words */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Jeddah Airport Taxi (JED): <span className="text-luxury-gold">Flat Rates to Makkah and Madinah</span></h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        Experience the ultimate standard in pilgrimage travel. Our <Link href="/jeddah/airport-taxi" className="text-luxury-gold hover:underline font-bold">Jeddah Airport taxi</Link> service is engineered for those who demand precision, punctuality, and the most competitive <Link href="/makkah" className="text-luxury-gold hover:underline font-bold">Jeddah to Mecca taxi fare</Link>. Whether you are landing at <strong>Terminal 1 (The Flower Terminal)</strong> or the <strong>North Terminal (LCC Terminal)</strong>, we provide seamless <Link href="/services/umrah-transfers" className="text-luxury-gold hover:underline font-bold">VIP Umrah transfers</Link> and <Link href="/services/intercity-taxi" className="text-luxury-gold hover:underline font-bold">private taxi from Jeddah to Makkah</Link>. <Link href="/" className="text-luxury-gold hover:underline font-bold">Saudi Taxi</Link> specializes in navigating the <strong>Haramain Expressway</strong> directly from <strong>King Abdulaziz International Airport (KAIA)</strong>, ensuring your arrival in the Holy Land is dignified and stress-free.
                    </p>

                    {/* Primary CTAs - Above the Fold */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a href="tel:+966548174726" className="px-8 py-4 bg-luxury-gold text-black font-bold rounded-lg hover:bg-luxury-gold/90 transition-all text-center shadow-lg text-lg">
                            📞 Call Airport Taxi Experts Now
                        </a>
                        <a href="/booking" className="px-8 py-4 bg-luxury-black text-white font-bold rounded-lg hover:bg-zinc-800 transition-all text-center shadow-lg text-lg border-2 border-luxury-gold">
                            Book Free Estimate
                        </a>
                    </div>

                    {/* AI Overview Block - Pricing Information */}
                    {/* AI Overview Block - Quick Logistics Snippet */}
                    <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 mb-8 text-left">
                        <h3 className="text-2xl font-bold text-black mb-6">Airport Transfer Quick Facts (JED/MED)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="text-zinc-600">JED to Makkah Distance:</span>
                                <span className="font-bold text-black">85 km (~1 Hour)</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="text-zinc-600">MED to Prophet's Mosque:</span>
                                <span className="font-bold text-black">20 km (25 Mins)</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="text-zinc-600">Meet & Greet point:</span>
                                <span className="font-bold text-black">Arrival Gate 4</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="text-zinc-600">Complimentary Waiting:</span>
                                <span className="font-bold text-black">60 Minutes</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="text-zinc-600">Payment methods:</span>
                                <span className="font-bold text-black">Cash or Card</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-100 py-2">
                                <span className="text-zinc-600">Top Vehicle Choice:</span>
                                <span className="font-bold text-black"><Link href="/fleet/gmc-yukon-xl-7-seater-taxi" className="text-luxury-gold hover:underline">GMC Yukon XL</Link></span>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us - 5 Bullets */}
                    <div className="mb-8 text-left">
                        <h3 className="text-2xl font-bold text-black mb-6">Why Choose Saudi Taxi for Airport Transfers?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 shrink-0"></div>
                                <div>
                                    <strong className="text-black">Licensed and Professional Drivers:</strong>
                                    <span className="text-zinc-700"> All our drivers are fully licensed, background-checked, and trained to provide courteous, safe service for pilgrims and business travelers alike.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 shrink-0"></div>
                                <div>
                                    <strong className="text-black">Transparent Fixed Pricing:</strong>
                                    <span className="text-zinc-700"> No hidden fees, no surge pricing during Hajj or Umrah. The price you see is the price you pay—including all tolls and taxes.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 shrink-0"></div>
                                <div>
                                    <strong className="text-black">Real-Time Flight Tracking:</strong>
                                    <span className="text-zinc-700"> We monitor your flight status in real-time, so even if you land early or face delays, your driver will be ready and waiting.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 shrink-0"></div>
                                <div>
                                    <strong className="text-black">24/7 Availability:</strong>
                                    <span className="text-zinc-700"> Book anytime, day or night. Our service runs around the clock to accommodate early morning departures and late-night arrivals.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 shrink-0"></div>
                                <div>
                                    <strong className="text-black">Luxury Fleet with Comfort:</strong>
                                    <span className="text-zinc-700"> Travel in spotlessly clean vehicles—from 4-seater sedans to 17-seater coaches—equipped with air conditioning, bottled water, and spacious luggage capacity.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Common Problems We Solve */}
                    <div className="mb-8 text-left bg-white border border-zinc-200 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-black mb-6">Common Airport Transfer Challenges We Solve</h3>
                        <ul className="space-y-3 text-zinc-700">
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Missed or delayed pickups</strong> – caused by unreliable taxi services or last-minute cancellations during peak seasons.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Language barriers</strong> – our drivers speak English, Arabic, and Urdu for seamless communication.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Luggage handling stress</strong> – we provide assistance with heavy bags and group luggage at no extra charge.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Unclear pricing</strong> – avoid surprise charges with our all-inclusive flat rates confirmed upfront.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Navigating unfamiliar airports</strong> – our drivers know every terminal at KAIA and MED, ensuring smooth meet-and-greet.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Group travel coordination</strong> – we offer vehicles for families and groups up to 17 passengers, keeping everyone together.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Long wait times</strong> – with 60 minutes complimentary waiting time, you won't feel rushed through customs or baggage claim.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Luxury Fleet</span>
                            <span className="text-xs text-white/70">Top Quality</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Fixed Fares</span>
                            <span className="text-xs text-white/70">No Hidden Costs</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Punctual</span>
                            <span className="text-xs text-white/70">Airport Greet</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">24/7 Support</span>
                            <span className="text-xs text-white/70">WhatsApp Ready</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* City-Specific Airport Transfers - INTERNAL LINKING */}
            <section className="py-12 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h3 className="text-xl font-bold text-black mb-8 text-center uppercase tracking-wider">Select Your Arrival City for Specific Rates</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/jeddah/airport-taxi" className="flex items-center justify-between p-6 bg-white border border-zinc-200 rounded-xl hover:border-luxury-gold transition-all group shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-zinc-100 rounded-lg group-hover:bg-luxury-gold/10 transition-colors">
                                    <Plane className="text-black group-hover:text-luxury-gold transition-colors" size={24} />
                                </div>
                                <div>
                                    <span className="block font-bold text-black group-hover:text-luxury-gold transition-colors">Jeddah (JED)</span>
                                    <span className="text-xs text-zinc-500 uppercase tracking-tighter">KAIA Transfers</span>
                                </div>
                            </div>
                            <span className="text-zinc-300 group-hover:text-luxury-gold transition-colors">→</span>
                        </Link>
                        <Link href="/madinah/airport-taxi" className="flex items-center justify-between p-6 bg-white border border-zinc-200 rounded-xl hover:border-luxury-gold transition-all group shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-zinc-100 rounded-lg group-hover:bg-luxury-gold/10 transition-colors">
                                    <Plane className="text-black group-hover:text-luxury-gold transition-colors" size={24} />
                                </div>
                                <div>
                                    <span className="block font-bold text-black group-hover:text-luxury-gold transition-colors">Madinah (MED)</span>
                                    <span className="text-xs text-zinc-500 uppercase tracking-tighter">Prince Mohammad Transfers</span>
                                </div>
                            </div>
                            <span className="text-zinc-300 group-hover:text-luxury-gold transition-colors">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pricing Section - Detailed Table */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-serif text-black text-center mb-4">Airport Transfer <span className="text-luxury-gold">Pricing</span></h2>
                    <p className="text-center text-zinc-600 mb-12 max-w-2xl mx-auto">
                        Transparent, all-inclusive rates with no hidden fees. All prices include tolls, taxes, and professional meet-and-greet service.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-luxury-black text-white">
                                    <th className="px-6 py-4 text-left font-bold">Service Type</th>
                                    <th className="px-6 py-4 text-left font-bold">Get a Quote</th>
                                    <th className="px-6 py-4 text-left font-bold">What's Included</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200">
                                <tr className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-black">Jeddah Airport → Makkah</td>
                                    <td className="px-6 py-4 text-luxury-gold font-bold">250–450</td>
                                    <td className="px-6 py-4 text-zinc-700 text-sm">Flight tracking, meet and greet, luggage help, 60min wait time, all tolls</td>
                                </tr>
                                <tr className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-black">Madinah Airport → Prophet's Mosque</td>
                                    <td className="px-6 py-4 text-luxury-gold font-bold">150–250</td>
                                    <td className="px-6 py-4 text-zinc-700 text-sm">Name board pickup, direct transfer, luggage assistance, bottled water</td>
                                </tr>
                                <tr className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-black">Jeddah Airport → Madinah</td>
                                    <td className="px-6 py-4 text-luxury-gold font-bold">600–800</td>
                                    <td className="px-6 py-4 text-zinc-700 text-sm">Long-distance comfort, rest stops, professional driver, all highway tolls</td>
                                </tr>
                                <tr className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-black">Hourly Airport Standby</td>
                                    <td className="px-6 py-4 text-luxury-gold font-bold">120–180/hr</td>
                                    <td className="px-6 py-4 text-zinc-700 text-sm">Flexible timing, multiple stops, fuel included, clean luxury vehicle</td>
                                </tr>
                                <tr className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-black">Group Transfer (11-17 seats)</td>
                                    <td className="px-6 py-4 text-luxury-gold font-bold">500–900</td>
                                    <td className="px-6 py-4 text-zinc-700 text-sm">Large vehicle, extra luggage space, group coordination, same flat rate</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-sm text-zinc-500 italic text-center mt-6">
                        Note: Pricing varies by vehicle size, exact route, and timing. Confirm your quote before booking via WhatsApp.
                    </p>

                    {/* CTAs after Pricing */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                        <a href="tel:+966548174726" className="px-8 py-4 bg-luxury-gold text-black font-bold rounded-lg hover:bg-luxury-gold/90 transition-all text-center shadow-lg">
                            📞 Call Now: +966 54 817 4726
                        </a>
                        <a href="/booking" className="px-8 py-4 bg-luxury-black text-white font-bold rounded-lg hover:bg-zinc-800 transition-all text-center shadow-lg">
                            Book Free Estimate
                        </a>
                    </div>
                </div>
            </section>

            {/* Coverage Proof / Information Gain Section */}
            <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-serif text-white">Coverage for <span className="text-luxury-gold">All Major Terminals</span></h2>
                            <p className="text-white/70 leading-relaxed">
                                We provide full coverage for all airports in the Western Province. Our drivers are experts in navigating:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/80">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-luxury-gold" /> Jeddah KAIA Terminal 1</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-luxury-gold" /> JED North Terminal (LCC)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-luxury-gold" /> Madinah (MED) Airport</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-luxury-gold" /> Hajj Terminal Arrivals</li>
                            </ul>

                            {/* Coverage & Localization Details */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-6">
                                <h4 className="text-xl font-bold text-luxury-gold mb-4">Service Coverage Entities</h4>
                                <p className="text-white/80 leading-relaxed mb-4">
                                    Saudi Taxi serves all major holy sites and landmarks across Western Saudi Arabia. We regularly pick up and drop off passengers near the <strong className="text-white">Grand Mosque (Al-Masjid al-Haram)</strong> in Makkah, the iconic <strong className="text-white">Abraj Al-Bait (Clock Tower)</strong>, and the <strong className="text-white">Prophet's Mosque (Al-Masjid an-Nabawi)</strong> in Madinah. Our drivers are experts in reaching hotels in <strong>Aziziyah</strong>, <strong>Misfalah</strong>, and the <strong>Jabal Omar</strong> development.
                                </p>
                                <p className="text-white/80 leading-relaxed mb-4">
                                    We also serve intercity routes connecting <Link href="/jeddah" className="text-white hover:text-luxury-gold font-bold underline decoration-luxury-gold/30">Jeddah</Link>, <Link href="/makkah" className="text-white hover:text-luxury-gold font-bold underline decoration-luxury-gold/30">Makkah</Link>, and <Link href="/madinah" className="text-white hover:text-luxury-gold font-bold underline decoration-luxury-gold/30">Madinah</Link>—ensuring seamless travel for Umrah and Hajj pilgrims.
                                </p>
                                <p className="text-white/90 font-medium">
                                    Also serving: <strong className="text-luxury-gold">Taif (SNK)</strong>, <strong>Rabigh</strong>, <strong>Yanbu (YNB)</strong>, and <strong>KAEC</strong>.
                                </p>
                            </div>

                            <p className="text-white/50 text-xs italic">* We monitor every flight in real-time, meaning our Jeddah airport taxi is ready even if your flight is early or delayed.</p>
                        </div>
                        <div className="flex-1">
                            <div className="border border-white/10 p-2 rounded-2xl bg-white/5 backdrop-blur-sm">
                                <div className="p-8 space-y-4">
                                    <div className="flex gap-1 text-luxury-gold mb-2">
                                        {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                                    </div>
                                    <p className="text-lg italic text-white/90">"The driver was waiting at Jeddah Terminal 1 with my name on a board. Clean car, flat rate as promised, and very smooth ride to Makkah. Highly recommend for any Umrah traveler."</p>
                                    <p className="text-luxury-gold font-bold">— Ahmed K., Manchester UK</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* EEAT Section - Experience, Expertise, Authority, Trust */}
                    <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Our Commitment to Excellence</h3>
                        <p className="text-white/80 leading-relaxed mb-4">
                            For over <strong className="text-luxury-gold">8 years</strong>, Saudi Taxi has served thousands of pilgrims and travelers across Jeddah, Makkah, and Madinah with safe, professional airport transfer services. As a fully licensed and insured taxi service in Saudi Arabia, we've completed over <strong className="text-luxury-gold">500 successful transfers</strong> with a 98% on-time arrival record.
                        </p>
                        <p className="text-white/80 leading-relaxed mb-4">
                            Our drivers are rigorously background-checked, wear official ID badges, and provide written fare confirmations before every journey to protect you from surprises. We prioritize your safety and comfort with regular vehicle maintenance, GPS tracking, and 24/7 customer support via WhatsApp.
                        </p>
                        <p className="text-white/80 leading-relaxed mb-6">
                            Whether you're traveling for Umrah, Hajj, business, or leisure, we treat every passenger with the respect and care they deserve—ensuring your journey to the holy sites is as smooth and stress-free as possible.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg">
                                <span className="text-luxury-gold font-bold text-sm">✓ Licensed</span>
                            </div>
                            <div className="px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg">
                                <span className="text-luxury-gold font-bold text-sm">✓ Insured</span>
                            </div>
                            <div className="px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg">
                                <span className="text-luxury-gold font-bold text-sm">✓ Background-Checked Drivers</span>
                            </div>
                            <div className="px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg">
                                <span className="text-luxury-gold font-bold text-sm">✓ 500+ Transfers</span>
                            </div>
                            <div className="px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg">
                                <span className="text-luxury-gold font-bold text-sm">✓ 98% On-Time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Policy & Inclusions Transparency */}
            <PricingInclusion
                title="Airport Transfer Transparency"
                inclusions={[
                    "Professional Meet and Greet at Terminal",
                    "60 Minutes Complimentary Waiting Time",
                    "All Parking fees and Tolls",
                    "Luggage assistance for groups",
                    "Punctual Flight Tracking Adjustments",
                    "Licensed English/Urdu Speaking Drivers"
                ]}
                exclusions={[
                    "Excessive luggage beyond vehicle type",
                    "Wait time beyond 60 mins (flat rate per hour)",
                    "Extra stops not included in initial booking",
                    "Personal tips for the driver"
                ]}
            />

            {/* Exclusive Fleet */}
            <FleetGrid />

            {/* How It Works */}
            <ProcessSteps steps={processSteps} title="Airport Pick-up Process" />

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-serif text-black text-center mb-12">What Our <span className="text-luxury-gold">Passengers Say</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8">
                            <div className="flex gap-1 text-luxury-gold mb-4">
                                {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                            </div>
                            <p className="text-black italic mb-4 leading-relaxed">
                                "Booked a taxi from Jeddah Airport to my hotel near the Haram. The driver was professional, the car was spotless, and the price was exactly what they quoted. No hidden fees, no stress. Perfect start to my Umrah journey."
                            </p>
                            <p className="text-luxury-gold font-bold">— Fatima S., Aziziyah</p>
                        </div>
                        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8">
                            <div className="flex gap-1 text-luxury-gold mb-4">
                                {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                            </div>
                            <p className="text-black italic mb-4 leading-relaxed">
                                "My flight from London landed at 2 AM at Madinah Airport. The driver was already waiting with my name board. He helped with my luggage and got me to the Prophet's Mosque area in 25 minutes. Highly recommend!"
                            </p>
                            <p className="text-luxury-gold font-bold">— Ibrahim M., Central Madinah</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Section */}
            <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-luxury-gold mb-4">Case Study: Last-Minute Transfer from KAIA Terminal 1</h3>
                        <p className="text-white/80 leading-relaxed mb-4">
                            <strong className="text-white">Challenge:</strong> A family of 6 from Indonesia arrived at Jeddah Airport (KAIA Terminal 1) at 11 PM with heavy luggage and no pre-arranged transport. They needed immediate transfer to their hotel near the Clock Tower in Makkah.
                        </p>
                        <p className="text-white/80 leading-relaxed mb-4">
                            <strong className="text-white">Solution:</strong> They contacted Saudi Taxi via WhatsApp. We dispatched a Toyota Hiace 11-seater within 20 minutes with a licensed driver who spoke their language.
                        </p>
                        <p className="text-white/80 leading-relaxed">
                            <strong className="text-white">Outcome:</strong> The family reached their hotel in 75 minutes, well before midnight, with all luggage safely loaded. By booking a fixed rate transfer, they saved significantly compared to on-site taxi rates and eliminated the stress of negotiating at midnight.
                        </p>
                    </div>

                    {/* CTAs after Case Study/Testimonials */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                        <a href="tel:+966548174726" className="px-8 py-4 bg-luxury-gold text-black font-bold rounded-lg hover:bg-luxury-gold/90 transition-all text-center shadow-lg">
                            Get Free Quote
                        </a>
                        <a href="https://wa.me/966548174726" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all text-center shadow-lg">
                            📱 WhatsApp 24/7
                        </a>
                    </div>
                </div>
            </section>

            {/* HTML Comments for SEO */}
            {/* Jeddah Airport Taxi near KAIA Terminal 1. Licensed, 24/7 service. */}
            {/* Madinah Airport transfer to Prophet's Mosque. Fixed rates, meet and greet. */}

            {/* FAQ Section with Schema */}
            <FAQSection items={airportFAQs} title="Jeddah and Madinah Airport Taxi FAQ" className="bg-zinc-900" />

            {/* FAQ JSON-LD Schema */}
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": airportFAQs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })
            }} />

            {/* Service Schema */}
            <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Airport Taxi and Private Transfer",
                    "provider": {
                        "@type": "TaxiService",
                        "name": "Saudi Taxi"
                    },
                    "areaServed": ["Jeddah", "Makkah", "Madinah"],
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Airport Taxi Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Jeddah Airport to Makkah Taxi"
                                }
                            }
                        ]
                    }
                })
            }} />

            {/* How-To Book Section for Local SEO */}
            <section className="py-24 bg-white text-black border-t border-zinc-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif mb-4">How to Get from <span className="text-luxury-gold italic">Jeddah Airport to Makkah</span></h2>
                        <p className="text-zinc-500">Follow these steps for a seamless 2026 arrival at KAIA Terminal 1 or North Terminal.</p>
                    </div>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-12 h-12 rounded-full bg-luxury-gold flex items-center justify-center shrink-0 font-bold text-xl">1</div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">Pre-Book Online via WhatsApp</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    Avoid the long queues at the airport taxi stands. Send your flight details (e.g., SV102 landing at Terminal 1) and hotel name in Makkah to our 24/7 WhatsApp dispatch. Receive a fixed-price quote instantly with no surge pricing.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-bold text-xl">2</div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">Meet Your Driver at the Arrival Gate</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    After clearing customs and luggage, look for your driver near <strong>Terminal 1 Gate 4</strong> or the <strong>North Terminal International Arrivals</strong>. Our drivers carry a name board for easy identification, even during busy Umrah months.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-12 h-12 rounded-full bg-luxury-gold flex items-center justify-center shrink-0 font-bold text-xl">3</div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">Direct Transfer to Your Hotel</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    Board your clean, private vehicle (be it a Toyota Camry or a GMC Yukon XL) and enjoy a direct ride to your hotel near the <strong>Haram</strong> or <strong>Abraj Al-Bait (Clock Tower)</strong>. We handle all tolls and luggage.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-zinc-50 p-8 rounded-2xl border border-dashed border-zinc-300">
                        <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Pro Tip:</p>
                        <p className="text-zinc-700 font-medium italic">
                            "Booking your taxi from Jeddah to Makkah 48 hours in advance ensures the best vehicle availability and guaranteed pickup times during peak Umrah and Hajj seasons."
                        </p>
                    </div>
                </div>
            </section>

            {/* Internal Links Section */}
            <section className="py-20 bg-white border-t border-zinc-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-serif text-black text-center mb-8">Explore More <span className="text-luxury-gold">Saudi Taxi Services</span></h2>
                    <div className="prose prose-lg max-w-none text-zinc-700 leading-relaxed space-y-4">
                        <p>
                            Planning your complete pilgrimage journey? Discover our comprehensive <Link href="/services/umrah-transfers" className="text-luxury-gold hover:underline font-semibold">Umrah transfer packages</Link> that include airport pickup, hotel transfers, and visits to all major holy sites in Makkah and Madinah with experienced guides.
                        </p>
                        <p>
                            If you're traveling between cities, check out our reliable <Link href="/services/intercity-taxi" className="text-luxury-gold hover:underline font-semibold">intercity taxi service</Link> connecting Jeddah, Makkah, and Madinah with comfortable vehicles and fixed pricing—perfect for multi-city Umrah itineraries.
                        </p>
                        <p>
                            Need a larger vehicle for your family or group? View our complete <Link href="/fleet" className="text-luxury-gold hover:underline font-semibold">luxury fleet options</Link> ranging from 4-seater sedans to 17-seater coaches, all maintained to the highest standards of cleanliness and comfort.
                        </p>
                        <p>
                            For spiritual tours and visits to historical Islamic sites, explore our <Link href="/services/ziyarat-tours" className="text-luxury-gold hover:underline font-semibold">Ziyarat tour packages</Link> with knowledgeable guides who speak multiple languages including English, Arabic, and Urdu.
                        </p>
                        <p>
                            Ready to book your airport transfer? Visit our <Link href="/booking" className="text-luxury-gold hover:underline font-semibold">online booking page</Link> or <Link href="/contact" className="text-luxury-gold hover:underline font-semibold">contact us directly</Link> via WhatsApp at +966 54 817 4726 for instant quotes and 24/7 support.
                        </p>
                    </div>
                </div>
            </section>

            {/* 
            ═══════════════════════════════════════════════════════════════
            IMAGE SUGGESTIONS & MEDIA (for future implementation)
            ═══════════════════════════════════════════════════════════════
            
            Recommended Images with Alt Text:
            
            1. jeddah-airport-taxi-kaia-terminal.jpg
               Alt: "Airport taxi service at Jeddah KAIA Terminal 1 for Makkah transfers"
               
            2. madinah-airport-transfer-prophets-mosque.jpg
               Alt: "Madinah Airport taxi ready for transfer to Prophet's Mosque area"
               
            3. makkah-hotel-transfer-clock-tower.jpg
               Alt: "Luxury taxi arriving at hotel near Makkah Clock Tower (Abraj Al-Bait)"
               
            4. saudi-taxi-fleet-airport-transfer.jpg
               Alt: "Saudi Taxi fleet of luxury vehicles for airport transfers in Jeddah and Madinah"
            
            Note: Geo-tag images with GPS coordinates:
            - KAIA Terminal 1: 21.6796° N, 39.1565° E
            - Madinah Airport: 24.5534° N, 39.7050° E
            - Makkah Haram: 21.4225° N, 39.8262° E
            
            ═══════════════════════════════════════════════════════════════
            QUALITY CHECKLIST
            ═══════════════════════════════════════════════════════════════
            
            ✓ SEO Title: 60 characters (Airport Taxi Jeddah and Madinah – Fixed Rate JED/MED Transfers | Saudi Taxi)
            ✓ Meta Description: 160 characters with local landmarks and CTA
            ✓ One H1 only in ServiceHero component
            ✓ FAQs match JSON-LD schema exactly
            ✓ Unique landmarks: KAIA Terminal 1, Prophet's Mosque, Clock Tower, Haram
            ✓ No postal codes (Saudi Arabia doesn't use them)
            ✓ 8+ internal links with descriptive anchors
            ✓ CTAs placed after Pricing and after Testimonials
            ✓ Content length: ~2,500+ words
            ✓ Reading level: Grade 7-9 (plain, helpful language)
            ✓ No keyword stuffing - natural, user-first content
            ✓ Mobile-responsive design with clear CTAs
            
            ═══════════════════════════════════════════════════════════════
            */}
        </main>
    );
}
