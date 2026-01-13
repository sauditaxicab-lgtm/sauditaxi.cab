import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Saudi Airport Transfers | Jeddah & Madinah Airport Taxi",
    description: "Reliable airport transfers from Jeddah (KAIA) and Madinah Airports. 24/7 flight tracking, professional meet & greet, and premium luxury vehicles.",
    alternates: {
        canonical: '/services/airport-transfers',
    },
};

export default function AirportTransfersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
