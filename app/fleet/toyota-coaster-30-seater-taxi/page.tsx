import { Metadata } from "next";
import { ToyotaCoasterContent } from "@/components/fleet/ToyotaCoasterContent";

export const metadata: Metadata = {
    title: "Toyota Coaster 30-Seater Taxi | Group Umrah Transport",
    description: "Book a Toyota Coaster 30-seater taxi for large Umrah groups. Spacious bus with ample luggage space for transfers between Jeddah, Makkah, and Madinah.",
    openGraph: {
        title: "Toyota Coaster 30-Seater Bus | Saudi Taxi Service",
        description: "The ideal choice for large group transport. Toyota Coaster 30-seater bus with premium comfort. Book your group transfer today.",
        images: ["/coaster/Coaster main.jpg"]
    }
};

export default function ToyotaCoasterPage() {
    return <ToyotaCoasterContent />;
}
