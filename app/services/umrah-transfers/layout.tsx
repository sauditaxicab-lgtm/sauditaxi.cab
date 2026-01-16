import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Madinah to Makkah Taxi | Private Umrah Transport 2025",
    description: "Book a premium Madinah to Makkah taxi for your Umrah journey. Fixed 2025 pricing, professional drivers, and top-rated distance & fare guide for pilgrims.",
    alternates: {
        canonical: '/services/umrah-transfers',
    },
    keywords: ["madinah to makkah taxi", "makkah to madinah taxi fare", "madinah to makkah distance", "private car rental with driver madinah", "fixed taxi fare 2025"],
};

export default function UmrahLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
