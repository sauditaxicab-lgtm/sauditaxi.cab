import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jeddah to Makkah Taxi | Luxury Private Transfers and Best Fare",
    description: "Book the finest Jeddah to Makkah taxi service. Dedicated luxury transfers, fixed 2026 fares, and professional meet and greet at Jeddah Airport for pilgrims.",
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
