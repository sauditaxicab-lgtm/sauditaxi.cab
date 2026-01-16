import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hyundai Staria 7 Seater Taxi | Luxury MPV Saudi Arabia",
    description: "Book a luxury Hyundai Staria 7 seater taxi. Premium family MPV for Umrah transfers, Jeddah Airport pickups, and Makkah & Madinah travel.",
    alternates: {
        canonical: '/fleet/hyundai-staria-7-seater-taxi',
    },
};

export default function HyundaiStariaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
