import { ServiceHero } from "@/components/services/ServiceHero";
import ContactForm from "@/components/contact/ContactForm";
import ServiceAreas from "@/components/contact/ServiceAreas";
import ReadyToBook from "@/components/about/ReadyToBook";
import { LocationMap } from "@/components/home/LocationMap";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Saudi Taxi | 24/7 Umrah & Airport Support",
    description: "Contact Saudi Taxi for premium transport. Available 24/7 for airport transfers and Makkah & Madinah taxi bookings. Instant WhatsApp support.",
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return (
        <main>
            <ServiceHero
                title="Contact Us"
                subtitle="24/7 Premium Support"
                description="Our dedicated team is ready to provide a professional Saudi Taxi near you, any time of day or night."
                backgroundImage="/about/luxury_chauffeur_opening_door.png"
                backgroundClassName="scale-110"
                overlay={true}
            />
            <ContactForm />
            <LocationMap />

            <section className="bg-white py-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-serif text-black">Global Standards, <span className="text-luxury-gold">Local Expertise</span></h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        At Saudi Taxi, we pride ourselves on bridging the gap between international service standards and local Saudi hospitality. Whether you are a pilgrim performing Umrah or a business traveller in Jeddah, communication is key.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
                        <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-100">
                            <h3 className="font-bold text-black mb-3 text-xl">24/7 Availability</h3>
                            <p className="text-gray-500">
                                Our support team works around the clock. We understand that flights can be delayed and plans can change. That's why our operations center in Jeddah is manned 24 hours a day to assist with last-minute booking changes or inquiries.
                            </p>
                        </div>
                        <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-100">
                            <h3 className="font-bold text-black mb-3 text-xl">Multilingual Support</h3>
                            <p className="text-gray-500">
                                Language should never be a barrier. Our booking agents and many of our drivers speak English, Urdu, Hindi, and Arabic, ensuring clear communication for your Makkah to Madinah taxi requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceAreas />
            <ReadyToBook />
        </main>
    );
}
