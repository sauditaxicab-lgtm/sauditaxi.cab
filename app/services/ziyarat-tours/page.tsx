import { ServiceHero } from "@/components/services/ServiceHero";
import { ContentBlock } from "@/components/services/ContentBlock";
import { FleetGrid } from "@/components/services/FleetGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PopularRoutesTable } from "@/components/services/PopularRoutesTable";
import { PricingInclusion } from "@/components/services/PricingInclusion";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Makkah and Madinah Ziyarat Tours – Spiritual Guided Private Trips',
    description: 'Book private Ziyarat tours in Makkah and Madinah. Visit historical Islamic sites like Cave Hira, Mount Uhud, and Masjid Quba with our knowledgeable drivers. Fixed 2026 rates.',
    alternates: {
        canonical: '/services/ziyarat-tours',
    },
};

const processSteps = [
    { title: "Select Your Tour", description: "Choose between our Makkah or Madinah Ziyarat packages via WhatsApp." },
    { title: "Plan Your Itinerary", description: "Let us know your preferred time and if there are specific sites you wish to visit." },
    { title: "Experience History", description: "Your knowledgeable driver will take you to each holy site, waiting while you pray and reflect." }
];

const tourFAQs = [
    {
        question: "What Sites Do We Visit?",
        answer: "In Makkah: Jabal Al-Noor, Cave of Hira, Jabal Thawr, Mount Arafat, Mina, Muzdalifah. In Madinah: Masjid Quba, Mount Uhud, Masjid Al-Qiblatayn, and the Seven Mosques."
    },
    {
        question: "How Long Is A Typical Ziyarat Tour?",
        answer: "Tours typically last 3-4 hours, but we offer flexible durations to ensure you have enough time for prayers at each location."
    },
    {
        question: "Do Drivers Speak English?",
        answer: "Yes, many of our drivers speak English and Urdu/Hindi, and are knowledgeable about the historical significance of the sites."
    },
    {
        question: "Do You Pick Up From Hotels?",
        answer: "Yes, we provide door-to-door service from your hotel in Makkah or Madinah."
    }
];

export default function ZiyaratToursPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="Makkah and Madinah Ziyarat Tours – Spiritual Guided Private Trips"
                subtitle="Spiritual Sightseeing"
                description="Experience the history of Islam with our private Ziyarat tours. Visit holy sites in comfort with knowledgeable drivers."
                backgroundImage="/services/luxury_tour.png"
            />

            {/* Breadcrumbs */}
            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Enhance Your Umrah with <span className="text-luxury-gold">Private Ziyarat</span></h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        Performing Ziyarat is a spiritually enriching part of your <Link href="/services/umrah-transfers" className="text-luxury-gold hover:underline font-semibold">Umrah journey</Link>. Avoid the hassle of negotiating with standard transport or waiting for crowded buses. <Link href="/" className="text-luxury-gold hover:underline font-bold">Saudi Taxi</Link> offers private, air-conditioned comfortable transport to all the significant historical sites in <Link href="/makkah" className="text-luxury-gold hover:underline font-semibold">Makkah</Link> and <Link href="/madinah" className="text-luxury-gold hover:underline font-semibold">Madinah</Link>. Choose from our spacious <Link href="/fleet/toyota-hiace-11-seater-taxi" className="text-luxury-gold hover:underline font-semibold">11-seater Toyota HiAce</Link> for medium groups, the comfortable <Link href="/fleet/hyundai-h1-starex-7-seater-taxi" className="text-luxury-gold hover:underline font-semibold">7-seater Hyundai Starex</Link> for families, or our <Link href="/fleet/toyota-coaster-17-seater-taxi" className="text-luxury-gold hover:underline font-semibold">17-seater Toyota Coaster</Link> for larger pilgrim groups.
                    </p>

                    {/* Primary CTAs - Above the Fold */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a href="tel:+966548174726" className="px-8 py-4 bg-luxury-gold text-black font-bold rounded-lg hover:bg-luxury-gold/90 transition-all text-center shadow-lg text-lg">
                            📞 Call Ziyarat Tour Experts Now
                        </a>
                        <a href="/booking" className="px-8 py-4 bg-luxury-black text-white font-bold rounded-lg hover:bg-zinc-800 transition-all text-center shadow-lg text-lg border-2 border-luxury-gold">
                            Book Free Estimate
                        </a>
                    </div>

                    {/* AI Overview Block - Pricing Information */}
                    <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 mb-8 text-left">
                        <h3 className="text-2xl font-bold text-black mb-4">How much does a Ziyarat tour cost in Makkah and Madinah?</h3>
                        <p className="text-black leading-relaxed mb-3">
                            Ziyarat tour packages in Makkah and Madinah are priced based on tour duration (half-day or full-day), number of sites visited, and vehicle size. We operate 24/7 with flexible scheduling, covering all major Islamic historical sites including Cave of Hira, Mount Uhud, Masjid Quba, and Jannat al-Baqi with knowledgeable multilingual drivers.
                        </p>
                        <p className="text-sm text-zinc-500 italic">Prices vary by tour package, vehicle capacity, and customization; confirm your itinerary before booking.</p>
                    </div>

                    {/* Why Choose Us - 5 Bullets */}
                    <div className="mb-8 text-left">
                        <h3 className="text-2xl font-bold text-black mb-6">Why Choose Saudi Taxi for Ziyarat Tours?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 shrink-0"></div>
                                <div>
                                    <strong className="text-black">Knowledgeable Multilingual Drivers:</strong>
                                    <span className="text-zinc-700"> Our drivers speak English, Arabic, and Urdu, and are well-versed in the historical significance of each Islamic site—providing context and answering your questions.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 shrink-0"></div>
                                <div>
                                    <strong className="text-black">Private, Flexible Tours:</strong>
                                    <span className="text-zinc-700"> No crowded buses or fixed schedules. Travel at your own pace with ample time for prayer, reflection, and photography at each holy site.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 shrink-0"></div>
                                <div>
                                    <strong className="text-black">Comprehensive Site Coverage:</strong>
                                    <span className="text-zinc-700"> Visit 20+ historical locations including Jabal Al-Noor (Cave Hira), Jabal Thawr, Mount Uhud, Masjid Quba, Seven Mosques, and Jannat al-Baqi.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 shrink-0"></div>
                                <div>
                                    <strong className="text-black">Door-to-Door Hotel Service:</strong>
                                    <span className="text-zinc-700"> We pick you up from your hotel in Makkah or Madinah and drop you back after the tour—no need to arrange separate transport.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 shrink-0"></div>
                                <div>
                                    <strong className="text-black">Comfortable, Clean Vehicles:</strong>
                                    <span className="text-zinc-700"> Travel in air-conditioned comfort with spacious seating, complimentary bottled water, and vehicles maintained to the highest standards.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Common Problems We Solve */}
                    <div className="mb-8 text-left bg-white border border-zinc-200 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-black mb-6">Common Ziyarat Tour Challenges We Solve</h3>
                        <ul className="space-y-3 text-zinc-700">
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Finding historical sites</strong> – many Ziyarat locations are not well-marked; our drivers know the exact locations and best access routes.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Crowded tour buses</strong> – avoid large groups and inflexible schedules with our private vehicle service tailored to your family's pace.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Language barriers</strong> – our multilingual drivers explain the significance of each site in English, Arabic, or Urdu.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Limited time at each site</strong> – unlike group tours, you decide how long to spend at Cave Hira, Mount Uhud, or any other location.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Difficulty climbing Jabal Al-Noor</strong> – our drivers wait patiently while you make the climb to Cave Hira at your own pace.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Coordinating family members</strong> – keep everyone together in one comfortable vehicle instead of splitting across taxis or buses.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-luxury-gold font-bold">•</span>
                                <span><strong>Hot weather fatigue</strong> – air-conditioned vehicles with bottled water ensure you stay comfortable between sites during Saudi Arabia's warm climate.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Private</span>
                            <span className="text-xs text-white/70">Vehicle</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Door-to-Door</span>
                            <span className="text-xs text-white/70">Hotel Pickup</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Knowledgeable</span>
                            <span className="text-xs text-white/70">Drivers</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Flexible</span>
                            <span className="text-xs text-white/70">Timing</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Table */}
            <PopularRoutesTable title="Ziyarat Tour Packages and Fares" />

            {/* CTAs after Pricing */}
            <section className="py-12 bg-zinc-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+966548174726" className="px-8 py-4 bg-luxury-gold text-black font-bold rounded-lg hover:bg-luxury-gold/90 transition-all text-center shadow-lg">
                            📞 Call Now: +966 54 817 4726
                        </a>
                        <a href="/booking" className="px-8 py-4 bg-luxury-black text-white font-bold rounded-lg hover:bg-zinc-800 transition-all text-center shadow-lg">
                            Book Free Estimate
                        </a>
                    </div>
                </div>
            </section>

            {/* Coverage & Localization Section */}
            <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-serif text-white text-center mb-12">Complete <span className="text-luxury-gold">Ziyarat Coverage</span> in Makkah and Madinah</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                            <h3 className="text-xl font-bold text-luxury-gold mb-4">Makkah Historical Sites</h3>
                            <p className="text-white/80 leading-relaxed mb-4">
                                Our Makkah Ziyarat tours cover all major Islamic historical sites in and around the holy city. Visit <strong className="text-white">Jabal Al-Noor (Cave of Hira)</strong> where the first revelation was received, <strong className="text-white">Jabal Thawr</strong> where the Prophet (SAW) hid during Hijrah, and <strong className="text-white">Jannat al-Mu'alla</strong> cemetery containing the grave of Bibi Khadija (RA).
                            </p>
                            <p className="text-white/80 leading-relaxed mb-4">
                                We also take you to the Hajj sites including <strong className="text-white">Mount Arafat</strong>, <strong className="text-white">Mina</strong>, and <strong className="text-white">Muzdalifah</strong>, providing historical context and ample time for reflection at each location.
                            </p>
                            <p className="text-white/90 font-medium">
                                Also covering: <strong className="text-luxury-gold">Masjid Jinn, Masjid al-Khayf, Birthplace of Prophet Muhammad (SAW), and Kiswa Factory</strong>.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                            <h3 className="text-xl font-bold text-luxury-gold mb-4">Madinah Historical Sites</h3>
                            <p className="text-white/80 leading-relaxed mb-4">
                                Our Madinah Ziyarat tours include visits to <strong className="text-white">Masjid Quba</strong> (the first mosque in Islam), <strong className="text-white">Mount Uhud</strong> and the Martyrs cemetery, <strong className="text-white">Masjid Al-Qiblatayn</strong> where the Qibla was changed, and the <strong className="text-white">Seven Mosques</strong> marking the Battle of the Trench.
                            </p>
                            <p className="text-white/80 leading-relaxed mb-4">
                                We provide respectful access to <strong className="text-white">Jannat al-Baqi</strong> cemetery and other significant locations, with drivers who understand the spiritual importance of each site and allow time for prayer and contemplation.
                            </p>
                            <p className="text-white/90 font-medium">
                                Also covering: <strong className="text-luxury-gold">Masjid Al-Ghamamah, Wadi-e-Jinn, Al-Hejaz Railway Museum, and authentic Dates Market</strong>.
                            </p>
                        </div>
                    </div>

                    {/* EEAT Section */}
                    <div className="mt-12 bg-white/5 border border-white/10 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-luxury-gold mb-6 text-center">Trusted Spiritual Journey Guides</h3>
                        <p className="text-white/80 leading-relaxed mb-4">
                            For over 8 years, Saudi Taxi has guided pilgrims through the sacred historical sites of Makkah and Madinah with respect, knowledge, and comfort. We've completed more than 500 Ziyarat tours with a 98% satisfaction rating, helping families and individuals deepen their spiritual connection to Islamic history.
                        </p>
                        <p className="text-white/80 leading-relaxed mb-4">
                            Our drivers are not just licensed professionals—they're knowledgeable about Islamic history and trained to provide respectful, informative tours. They carry ID badges, speak multiple languages (English, Arabic, Urdu), and understand the spiritual significance of each site they visit.
                        </p>
                        <p className="text-white/80 leading-relaxed">
                            We maintain the highest standards of cleanliness and respect. Our vehicles are inspected regularly, drivers wear shoe covers when entering sacred spaces, and we provide complimentary prayer mats and bottled Zamzam water for your spiritual journey.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div className="text-center p-4 bg-luxury-gold/10 rounded-lg">
                                <p className="text-white font-bold">Licensed</p>
                            </div>
                            <div className="text-center p-4 bg-luxury-gold/10 rounded-lg">
                                <p className="text-white font-bold">Insured</p>
                            </div>
                            <div className="text-center p-4 bg-luxury-gold/10 rounded-lg">
                                <p className="text-white font-bold">Knowledgeable</p>
                            </div>
                            <div className="text-center p-4 bg-luxury-gold/10 rounded-lg">
                                <p className="text-white font-bold">Respectful</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-serif text-black text-center mb-12">What Our <span className="text-luxury-gold">Pilgrims Say</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8">
                            <div className="flex gap-1 text-luxury-gold mb-4">
                                {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                            </div>
                            <p className="text-black italic mb-4 leading-relaxed">
                                "Our Makkah Ziyarat tour was incredible. The driver took us to Cave Hira and waited patiently while we climbed. He explained the history of each site in perfect English. We visited 8 locations in one day without feeling rushed. Highly recommend for families performing Umrah."
                            </p>
                            <p className="text-luxury-gold font-bold">— Fatima R., Aziziyah, Makkah</p>
                        </div>
                        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8">
                            <div className="flex gap-1 text-luxury-gold mb-4">
                                {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                            </div>
                            <p className="text-black italic mb-4 leading-relaxed">
                                "Booked a Madinah Ziyarat tour for our group of 10. The Toyota Hiace was spacious and clean. Driver spoke Urdu and shared beautiful stories about Mount Uhud and Masjid Quba. The tour enriched our spiritual experience. Will book again next year, insha'Allah."
                            </p>
                            <p className="text-luxury-gold font-bold">— Ibrahim K., Central Madinah</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Section */}
            <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-luxury-gold mb-4">Case Study: Family Ziyarat Tour in Makkah</h3>
                        <p className="text-white/80 leading-relaxed mb-4">
                            <strong className="text-white">Challenge:</strong> A family of 6 from the UK wanted to visit all major Makkah Ziyarat sites in one day but had limited knowledge of locations and worried about the heat and climbing Jabal Al-Noor with elderly parents.
                        </p>
                        <p className="text-white/80 leading-relaxed mb-4">
                            <strong className="text-white">Solution:</strong> We provided a spacious 7-seater Hyundai Staria with a knowledgeable English-speaking driver who customized the itinerary, starting early morning to avoid heat. The driver waited patiently during the Cave Hira climb and provided historical context at each site.
                        </p>
                        <p className="text-white/80 leading-relaxed">
                            <strong className="text-white">Outcome:</strong> The family visited 9 historical sites including Jabal Al-Noor, Jabal Thawr, Jannat al-Mu'alla, and all Hajj sites (Arafat, Mina, Muzdalifah) in 8 hours. They described it as "the most spiritually enriching day of our Umrah journey." Contact us for a custom tour quote.
                        </p>
                    </div>

                    {/* CTAs after Case Study */}
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
            {/* Ziyarat tours Makkah Madinah. Cave Hira, Mount Uhud, Masjid Quba. Licensed guides. */}
            {/* Islamic historical sites Saudi Arabia. Private Ziyarat transport 24/7. */}

            {/* Inclusions/Exclusions */}
            <PricingInclusion
                title="Tour Package Inclusions"
                inclusions={[
                    "Private Air-Conditioned Vehicle",
                    "Door-to-Door Hotel Pickup and Drop-off",
                    "Knowledgeable Multilingual Driver",
                    "Flexible Duration for Each Site",
                    "All Parking and Road Charges",
                    "Complimentary Bottled Water"
                ]}
                exclusions={[
                    "Professional licensed tour guide (available on request)",
                    "Entrance fees to museums/sites (where applicable)",
                    "Personal spending and meals",
                    "Driver tips"
                ]}
            />

            {/* Winery Content */}
            <ContentBlock
                title="A Spiritual Journey Through History"
                content={`Our Ziyarat tours are designed to give you peace of mind and comfort as you visit the holy landmarks.\n\nMakkah Ziyarat: Visit Jabal Al-Noor (Cave Hira), Jabal Thawr, Jannat al-Mu'alla, Masjid Jinn, and the rites of Hajj sites (Mina, Arafat, Muzdalifah).\n\nMadinah Ziyarat: Visit Masjid Quba (the first mosque in Islam), Mount Uhud (site of the Battle of Uhud), Masjid Al-Qiblatayn (Mosque of the Two Qiblas), and the Seven Mosques (Site of the Battle of the Trench).`}
                imageSrc="/hero_bg.png"
                imageAlt="Ziyarat Tour"
            />

            {/* Comprehensive Ziyarat Guide Section */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-luxury-gold uppercase tracking-widest text-xs font-bold block mb-4">Comprehensive Guide</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-black mb-6">List of 20 <span className="text-luxury-gold">Ziyarat Places</span> in Makkah and Madinah</h2>
                        <p className="text-zinc-500 max-w-3xl mx-auto leading-relaxed">
                            Discover the most significant spiritual and historical landmarks with our professional Saudi Taxi service. We provide comfortable, private transport for all your Ziyarat needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Makkah List */}
                        <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border-t-4 border-luxury-gold">
                            <h3 className="text-2xl font-serif text-black mb-8 border-b border-zinc-100 pb-4">Top 10 Makkah Ziyarat Places</h3>
                            <ul className="space-y-4">
                                {[
                                    { name: "Jabal Al-Noor (Ghar-e-Hira)", info: "Where the first revelation was received." },
                                    { name: "Jabal Thawr (Ghar-e-Thawr)", info: "The cave where the Prophet (SAW) hid during Hijrah." },
                                    { name: "Jannat al-Mu'alla", info: "Historical cemetery containing the grave of Bibi Khadija (RA)." },
                                    { name: "Masjid Jinn", info: "The site where Jinn pledged allegiance to the Prophet (SAW)." },
                                    { name: "Mount Arafat (Jabal ar-Rahmah)", info: "Crucial site of the Hajj pilgrimage." },
                                    { name: "Mina (The City of Tents)", info: "Where pilgrims stay during the days of Hajj." },
                                    { name: "Muzdalifah", info: "An open area where pilgrims spend a night during Hajj." },
                                    { name: "Masjid al-Khayf", info: "Historical mosque located in Mina." },
                                    { name: "Birthplace of Prophet Muhammad (SAW)", info: "House where the Prophet was born near Makkah." },
                                    { name: "Kiswa Factory", info: "Where the cloth for the Holy Kaaba is manufactured." }
                                ].map((place, i) => (
                                    <li key={i} className="flex gap-4 group cursor-default">
                                        <span className="text-luxury-gold font-bold">{i + 1}.</span>
                                        <div>
                                            <h4 className="font-bold text-black group-hover:text-luxury-gold transition-colors">{place.name}</h4>
                                            <p className="text-zinc-500 text-sm italic">{place.info}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Madinah List */}
                        <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border-t-4 border-luxury-gold">
                            <h3 className="text-2xl font-serif text-black mb-8 border-b border-zinc-100 pb-4">Top 10 Ziyarat of Madina</h3>
                            <ul className="space-y-4">
                                {[
                                    { name: "Masjid Quba", info: "The first mosque built in Islam." },
                                    { name: "Mount Uhud", info: "Site of the historical Battle of Uhud and Martyrs cemetery." },
                                    { name: "Masjid Al-Qiblatayn", info: "Where the Qibla was changed from Jerusalem to Makkah." },
                                    { name: "The Seven Mosques", info: "Locations of the Battle of the Trench (Ghazwa Khandaq)." },
                                    { name: "Jannat al-Baqi", info: "Primary cemetery near Masjid An-Nabawi." },
                                    { name: "Masjid Al-Ghamamah", info: "Where the Prophet (SAW) performed Salat ul-Istisqa." },
                                    { name: "Masjid Abu Bakr", info: "One of the historical mosques in Madinah." },
                                    { name: "Wadi-e-Jinn (Al-Baida)", info: "Famous valley known for its natural magnetic phenomenon." },
                                    { name: "Al-Hejaz Railway Museum", info: "Historical railway station from the Ottoman era." },
                                    { name: "Dates Market", info: "The best place to buy authentic Ajwa dates." }
                                ].map((place, i) => (
                                    <li key={i} className="flex gap-4 group cursor-default">
                                        <span className="text-luxury-gold font-bold">{i + 11}.</span>
                                        <div>
                                            <h4 className="font-bold text-black group-hover:text-luxury-gold transition-colors">{place.name}</h4>
                                            <p className="text-zinc-500 text-sm italic">{place.info}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taif Ziyarat Section - New Commercial Opportunity */}
            <section className="py-24 bg-luxury-black text-white relative">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <span className="text-luxury-gold uppercase tracking-widest text-xs font-bold block mb-4">Mountain City Tours</span>
                            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">6 Famous <span className="text-luxury-gold">Historical Ziyarat</span> in Taif</h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-6">
                                Beyond Makkah and Madinah, Taif holds immense spiritual and historical significance. Our <Link href="/services/intercity-taxi" className="text-luxury-gold hover:underline font-semibold">intercity taxi service</Link> takes you through the winding mountain roads to visit the sites where the Prophet (SAW) sought refuge and where early Islamic history was shaped. Combine your Ziyarat with our popular <Link href="/services/sightseeing" className="text-luxury-gold hover:underline font-semibold">sightseeing tours</Link> to explore Taif's rose gardens and historical palaces.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    { name: "Masjid Abdullah Ibn Abbas", info: "Named after the cousin of the Prophet (SAW)." },
                                    { name: "Addas Mosque", info: "Site where the Christian slave Addas embraced Islam." },
                                    { name: "Masjid Al-Ku'aybah", info: "Historical mosque with unique structural origin." },
                                    { name: "The Rose Factories", info: "Experience the famous Taif rose water production." },
                                    { name: "Shubra Palace", info: "The stunning historical residence of King Abdulaziz." }
                                ].map((site, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2.5 shrink-0"></div>
                                        <div>
                                            <span className="text-white font-bold">{site.name}</span>
                                            <p className="text-white/50 text-sm">{site.info}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative p-2 border border-luxury-gold/20 rounded-sm">
                                <div
                                    className="h-[450px] bg-cover bg-center rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                                    style={{ backgroundImage: "url('/city_night_luxury_bg.png')" }}
                                ></div>
                                <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-2xl max-w-[240px]">
                                    <p className="text-black text-sm font-bold uppercase tracking-widest mb-1">Makkah to Taif</p>
                                    <p className="text-zinc-500 text-xs italic">Full-day private tour with luxury transport.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exclusive Fleet */}
            <FleetGrid />

            {/* How It Works */}
            <ProcessSteps steps={processSteps} title="Book Your Ziyarat Tour" />



            {/* Internal Linking: Cross-Sell Services */}
            <section className="py-16 bg-white border-t border-zinc-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-luxury-black rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div className="max-w-2xl">
                                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Streamline Your <span className="text-luxury-gold">Pilgrimage</span></h3>
                                <p className="text-white/70 leading-relaxed mb-6">
                                    Most pilgrims combine their Ziyarat tours with our reliable airport transfers. We can pick you up from <Link href="/jeddah" className="text-white hover:text-luxury-gold transition-colors font-bold underline decoration-white/30 hover:decoration-luxury-gold">Jeddah Airport (KAIA)</Link> or <strong>Madinah Airport</strong> and take you directly to your hotel, ensuring a smooth transition to your spiritual journey.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <Link href="/services/airport-transfers" className="text-luxury-gold font-bold hover:text-white transition-colors underline decoration-luxury-gold/30 hover:decoration-white underline-offset-4">
                                        Book Airport Transfer Also
                                    </Link>
                                    <span className="text-white/20">|</span>
                                    <Link href="/services/family-travel" className="text-luxury-gold font-bold hover:text-white transition-colors underline decoration-luxury-gold/30 hover:decoration-white underline-offset-4">
                                        View Family Packages
                                    </Link>
                                </div>
                            </div>
                            <div className="shrink-0">
                                <Link href="/booking">
                                    <Button className="bg-white text-black hover:bg-luxury-gold hover:text-black font-bold rounded-xl px-8 py-6 h-auto tracking-widest uppercase transition-all shadow-lg hover:shadow-gold/20">
                                        Book Complete Package
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section with Schema */}
            <FAQSection items={tourFAQs} title="Frequently Asked Questions" className="bg-zinc-900" />

            <Script id="ziyarat-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": tourFAQs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })
            }} />

            {/* Bottom CTA */}
            <CTASection
                title={<strong>Complete Your <span className="text-luxury-black">Journey</span></strong>}
                description="Book your private Ziyarat tour today and experience the history of Islam."
                buttonText="Book via WhatsApp"
                showFeatures={true}
            />
        </main>
    );
}
