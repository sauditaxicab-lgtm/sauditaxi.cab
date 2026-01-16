import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jeddah to Makkah Taxi | Luxury Private Transfers & Best Fare",
    description: "Book the finest Jeddah to Makkah taxi service. Premium luxury transfers, fixed 2025 fares, and professional meet & greet at Jeddah Airport for pilgrims.",
    alternates: {
        canonical: '/services/airport-transfers',
    },
    keywords: ["jeddah to makkah taxi", "jeddah to makkah taxi luxury", "best jeddah to mecca fare", "taxi from jeddah airport to mecca", "jeddah to makkah taxi fare"],
};

export default function AirportLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
