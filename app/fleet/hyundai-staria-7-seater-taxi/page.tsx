import { Metadata } from "next";
import { HyundaiStariaContent } from "@/components/fleet/HyundaiStariaContent";

export const metadata: Metadata = {
    title: "Hyundai Staria 7-Seater Taxi | Luxury Family Umrah Transfer",
    description: "Book a Hyundai Staria 7-seater taxi for your Umrah family trip. Spacious, modern, and comfortable transfer from Jeddah Airport to Makkah and Madinah.",
    openGraph: {
        title: "Hyundai Staria 7-Seater | Luxury Family Taxi Saudi Arabia",
        description: "The ultimate family transport for Umrah. Hyundai Staria 7-seater with ample luggage space. Book your private Jeddah to Makkah transfer.",
        images: ["/staria/staria-main.jpeg"]
    }
};

export default function HyundaiStariaPage() {
    return <HyundaiStariaContent />;
}
