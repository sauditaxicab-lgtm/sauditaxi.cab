import { ServiceHero } from "@/components/services/ServiceHero";
import ContactForm from "@/components/contact/ContactForm";
import ServiceAreas from "@/components/contact/ServiceAreas";
import ReadyToBook from "@/components/about/ReadyToBook";
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
            <ServiceAreas />
            <ReadyToBook />
        </main>
    );
}
