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

export const metadata: Metadata = {
    title: 'VIP Business and Executive Transport – Luxury GMC Yukon and Sedan Service',
    description: 'Elite VIP transport in Saudi Arabia. Book reliable GMC Yukons and luxury executive sedans for business meetings, diplomatic travel, and VIP Umrah transfers. 24/7 dedicated VIP support.',
    alternates: {
        canonical: '/services/vip-transport',
    },
};

const processSteps = [
    { title: "Priority Booking", description: "Contact our dedicated VIP line via WhatsApp for priority service." },
    { title: "Custom Requirements", description: "Let us know your specific needs, from vehicle preference to security details." },
    { title: "Executive Service", description: "Experience the highest level of professionalism and discretion." }
];

const vipFAQs = [
    {
        question: "What makes your VIP transport service unique?",
        answer: "Our VIP service guarantees the latest model luxury vehicles (GMC Yukon Denali, Mercedes-Benz, etc.), our most senior multilingual drivers, and a dedicated account manager for custom requests."
    },
    {
        question: "Can you handle corporate and diplomatic accounts?",
        answer: "Yes, we specialize in corporate roadshows and diplomatic transfers, providing billing management and high-level discretion for visiting dignitaries and executives."
    },
    {
        question: "Is driver discretion guaranteed for VIP clients?",
        answer: "Absolutely. Privacy is our core value. Our VIP drivers undergo specialized training in discretion and professionalism to ensure a secure and private environment."
    },
    {
        question: "Do you offer VIP meet and greet inside the airport terminal?",
        answer: "Yes, we offer dedicated meet-and-assist services at JED and MED airports, guiding you through immigration and customs directly to your waiting luxury vehicle."
    }
];

export default function VIPTransportPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="VIP Business and Executive Transport – Luxury GMC Yukon and Sedan Service"
                subtitle="Executive Standards"
                description="Dedicated transport solutions for executives, VIPs, and those who demand the best in Saudi Arabia."
                backgroundImage="/services/vip_transport.png"
            />

            {/* Breadcrumbs */}
            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Excellence in <span className="text-luxury-gold">Motion</span></h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        For business leaders, dignitaries, and discerning travellers, Saudi Taxi offers a <strong>VIP transport service</strong> that goes beyond just driving. We provide an environment of luxury, quiet, and professionalism, allowing you to work or relax while we handle the logistics of your journey in KSA. Whether you require a <strong>luxury GMC Yukon Denali</strong> or an <strong>executive sedan</strong>, our fleet is ready to serve your highest expectations.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Top Tier</span>
                            <span className="text-xs text-white/70">Vehicles</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Senior</span>
                            <span className="text-xs text-white/70">Drivers</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Privacy</span>
                            <span className="text-xs text-white/70">Guaranteed</span>
                        </div>
                        <div className="p-4 bg-luxury-black border border-luxury-gold/20 rounded-sm shadow-lg">
                            <span className="block text-luxury-gold font-bold mb-1">Priority</span>
                            <span className="text-xs text-white/70">Support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Table */}
            <PopularRoutesTable title="VIP and Executive Transfer Fares" />

            {/* Content Context Block */}
            <ContentBlock
                title="Executive Transfer Services"
                content={`Whether attending a conference in Riyadh, performing a VIP Umrah, or needing a reliable driver for a series of meetings in Jeddah, we have you covered.\n\nOur VIP fleet features immaculate GMC Yukons and executive sedans. Your driver will be immaculately presented, punctual, and knowledgeable about the best routes.\n\nOur Services include:\n• Airport VIP arrivals with terminal assistance\n• Corporate roadshows across major business hubs\n• Event transportation for high-profile summits\n• VIP Umrah and Spiritual Ziyarat with dedicated care`}
                imageSrc="/hero_bg.png"
                imageAlt="VIP Transport"
            />

            {/* Policies & Inclusions */}
            <PricingInclusion
                title="VIP Service Excellence"
                inclusions={[
                    "Latest Model Executive Vehicles",
                    "Senior English-Speaking Professional Drivers",
                    "In-Vehicle Wi-Fi and Productivity Tools",
                    "Complimentary Refreshments",
                    "Flexible 24/7 Priority Scheduling",
                    "Flight Tracking and Adjustments"
                ]}
                exclusions={[
                    "Personal concierge shopping",
                    "Long-term daily standby time (over 4 hours)",
                    "Cross-border travel permits",
                    "Individual meal expenses"
                ]}
            />

            {/* Exclusive Fleet */}
            <FleetGrid />

            {/* How It Works */}
            <ProcessSteps steps={processSteps} title="VIP Booking Process" />

            {/* FAQ Section with Schema */}
            <FAQSection items={vipFAQs} title="VIP Transport FAQ" className="bg-zinc-900" />

            <Script id="vip-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": vipFAQs.map(faq => ({
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
                title={<strong>Experience True <span className="text-luxury-black">Luxury</span></strong>}
                description="Book your dedicated VIP transport now and ensure a seamless travel experience in Saudi Arabia."
                buttonText="Contact VIP Desk"
                showFeatures={true}
            />
        </main>
    );
}
