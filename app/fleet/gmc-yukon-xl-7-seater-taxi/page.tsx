import { Metadata } from "next";
import { GMCYukonContent } from "@/components/fleet/GMCYukContent";

export const metadata: Metadata = {
    title: "GMC Yukon XL 7-Seater Taxi | VIP Umrah Transfer",
    description: "Book a GMC Yukon XL 7-seater VIP taxi for your Umrah journey. Premium, spacious, and powerful SUV for Jeddah Airport to Makkah and Madinah transfers.",
    openGraph: {
        title: "GMC Yukon XL 7-Seater VIP Taxi | Saudi Taxi Service",
        description: "The ultimate VIP transport for Umrah. GMC Yukon XL 7-seater with massive luggage capacity. Book your premium Jeddah to Makkah transfer.",
        images: ["/GMC/Gmc main.jpg"]
    }
};

export default function GMCYukonPage() {
    return <GMCYukonContent />;
}
