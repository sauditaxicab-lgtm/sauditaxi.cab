import { Metadata } from "next";
import { HyundaiStarexContent } from "@/components/fleet/HyundaiStarexContent";

export const metadata: Metadata = {
    title: "Hyundai H1 Starex 7-Seater Taxi | Family Umrah Transfer",
    description: "Book a Hyundai H1 Starex 7-seater taxi for your family Umrah trip. Reliable, spacious, and comfortable transfer from Jeddah Airport to Makkah and Madinah.",
    openGraph: {
        title: "Hyundai H1 Starex 7-Seater Family Taxi | Saudi Taxi",
        description: "The reliable choice for families. Hyundai H1 Starex 7-seater with ample luggage space. Book your family transfer today.",
        images: ["/Starax/Strax main.jpg"]
    }
};

export default function HyundaiStarexPage() {
    return <HyundaiStarexContent />;
}
