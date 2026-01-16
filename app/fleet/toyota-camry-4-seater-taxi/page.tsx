import { Metadata } from "next";
import { ToyotaCamryContent } from "@/components/fleet/ToyotaCamryContent";

export const metadata: Metadata = {
    title: "Toyota Camry Taxi: Makkah to Madinah | Saudi Taxi",
    description: "Book a premium Toyota Camry taxi for your Umrah journey. Reliable 4-seater sedan for Jeddah Airport to Makkah transfers and Makkah to Madinah trips. Best price guaranteed.",
    openGraph: {
        title: "Toyota Camry Taxi | Premium 4-Seater Umrah Transport",
        description: "Reliable & comfortable Toyota Camry taxi for your Umrah journey. Perfect for small families and couples. Book your Jeddah to Makkah transfer now.",
        images: ["/camry/camry-main.jpeg"]
    }
};

export default function ToyotaCamryPage() {
    return <ToyotaCamryContent />;
}
