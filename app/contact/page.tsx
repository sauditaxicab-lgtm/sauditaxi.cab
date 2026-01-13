import { ServiceHero } from "@/components/services/ServiceHero";
import ContactForm from "@/components/contact/ContactForm";
import ServiceAreas from "@/components/contact/ServiceAreas";
import ReadyToBook from "@/components/about/ReadyToBook";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Saudi Taxi | 24/7 Airport & Umrah Transfers Support",
    description: "Get in touch with Saudi Taxi for premium private transport in KSA. Our team is available 24/7 for airport transfers, Makkah & Madinah Umrah taxi bookings.",
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
                description="Our dedicated team is ready to assist you with your luxury travel needs, any time of day or night."
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
