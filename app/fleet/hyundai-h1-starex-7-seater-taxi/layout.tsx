import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hyundai H1 Starex 7 Seater Taxi | Family Van Transport KSA",
    description: "Book a reliable Hyundai H1 Starex 7 seater van in Saudi Arabia. Perfect for family trips, Umrah transfers, and Jeddah to Makkah intercity travel.",
    alternates: {
        canonical: '/fleet/hyundai-h1-starex-7-seater-taxi',
    },
};

export default function HyundaiStarexLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
