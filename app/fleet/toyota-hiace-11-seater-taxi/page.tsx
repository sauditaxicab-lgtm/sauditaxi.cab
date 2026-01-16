import { Metadata } from "next";
import { ToyotaHiaceContent } from "@/components/fleet/ToyotaHiAceContent";

export const metadata: Metadata = {
    title: "Toyota HiAce 11-Seater Taxi | Group Umrah Transfer",
    description: "Book a Toyota HiAce 11-seater taxi for your group Umrah trip. Spacious, air-conditioned, and comfortable transfer from Jeddah Airport to Makkah and Madinah.",
    openGraph: {
        title: "Toyota HiAce 11-Seater Group Taxi | Saudi Taxi",
        description: "The best choice for group travel. Toyota HiAce 11-seater with high roof and ample luggage space. Book your group transfer today.",
        images: ["/Hiace/Main.jpeg"]
    }
};

export default function ToyotaHiacePage() {
    return <ToyotaHiaceContent />;
}
