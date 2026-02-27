import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Madinah to Makkah Taxi | Private Umrah Transport 2026",
    description: "Book a reliable Madinah to Makkah taxi for your Umrah journey. Fixed 2026 pricing, professional drivers, and top-rated distance and fare guide for pilgrims.",
    alternates: {
        canonical: '/services/umrah-transfers',
    },
    keywords: ["madinah to makkah taxi", "makkah to madinah taxi fare", "madinah to makkah distance", "private car rental with driver madinah", "fixed taxi fare 2026"],
};

export default function UmrahLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
