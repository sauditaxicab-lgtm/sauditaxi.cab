import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Extensive Fleet | Luxury Umrah Taxi and Airport Transfers",
    description: "Explore our modern fleet of vehicles including Camry, Hyundai Staria, GMC Yukon, and luxury buses. Perfect for Umrah, Airport, and Intercity transfers.",
    alternates: {
        canonical: '/fleet',
    },
};

export default function FleetLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
