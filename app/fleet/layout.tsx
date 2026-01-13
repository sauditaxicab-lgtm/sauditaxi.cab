import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Premium Fleet | Luxury Umrah Taxi & Airport Transfers",
    description: "Explore our premium fleet of vehicles including Camry, Hyundai Staria, GMC Yukon, and luxury buses. Perfect for Umrah, Airport, and Intercity transfers.",
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
