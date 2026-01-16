"use client";

import { ServiceHero } from "@/components/services/ServiceHero";
import { ContentBlock } from "@/components/services/ContentBlock";
import { FleetGrid } from "@/components/services/FleetGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";

const processSteps = [
    { title: "Priority Booking", description: "Contact our dedicated VIP line via WhatsApp for priority service." },
    { title: "Custom Requirements", description: "Let us know your specific needs, from vehicle preference to security details." },
    { title: "Executive Service", description: "Experience the highest level of professionalism and discretion." }
];

const vipFAQs = [
    {
        question: "What Makes This Service VIP?",
        answer: "Our VIP service guarantees our newest model vehicles, our most senior and English-speaking drivers, and priority support."
    },
    {
        question: "Can You Handle Corporate Accounts?",
        answer: "Yes, we offer billing and account management for businesses and corporate clients visiting Saudi Arabia."
    },
    {
        question: "Is Privacy Guaranteed?",
        answer: "Absolutely. Discretion and privacy are paramount for our VIP clients. Our drivers are trained to respect your privacy."
    },
    {
        question: "Do You Offer Airport Meet & Assist?",
        answer: "Yes, we can arrange for VIP meet and greet services inside the airport terminal upon request."
    }
];

export default function VIPTransportPage() {
    return (
        <main className="bg-luxury-black min-h-screen text-white">
            <ServiceHero
                title="VIP and Business Transport"
                subtitle="Executive Standards"
                description="Premium transport solutions for executives, VIPs, and those who demand the best in Saudi Arabia."
                backgroundImage="/services/vip_transport.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">Excellence in <span className="text-luxury-gold">Motion</span></h2>
                    <p className="text-black text-lg leading-relaxed mb-8">
                        For business leaders, dignitaries, and discerning travellers, Saudi Taxi offers a VIP transport service that goes beyond just driving. We provide an environment of luxury, quiet, and professionalism, allowing you to work or relax while we handle the logistics of your journey in KSA.
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

            {/* Content */}
            <ContentBlock
                title="Executive Transfer Services"
                content={`Whether attending a conference in Riyadh, performing a VIP Umrah, or needing a reliable driver for a series of meetings in Jeddah, we have you covered.\n\nOur VIP fleet features immaculate GMC Yukons and premium sedans. Your driver will be immaculately presented, punctual, and knowledgeable about the best routes.\n\nServices include:\n• Airport VIP transfers\n• Corporate roadshows\n• Event transportation\n• VIP Umrah & Ziyarat`}
                imageSrc="/hero_bg.png"
                imageAlt="VIP Transport"
            />

            {/* Exclusive Fleet */}
            <FleetGrid />

            {/* How It Works */}
            <ProcessSteps steps={processSteps} title="VIP Booking Process" />

            {/* FAQ Section */}
            <FAQSection items={vipFAQs} title="Frequently Asked Questions" className="bg-zinc-900" />

            {/* Bottom CTA */}
            <CTASection
                title={<strong>Experience True <span className="text-luxury-black">Luxury</span></strong>}
                description="Book your VIP transport now."
                buttonText="Contact VIP Desk"
                showFeatures={true}
            />
        </main>
    );
}
