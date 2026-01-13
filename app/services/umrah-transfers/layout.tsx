import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Premium Umrah Transfers | Makkah & Madinah Private Taxi",
    description: "Reliable private travel between Jeddah, Makkah, and Madinah for pilgrims. High-quality trips with luxury Camry, Staria, and GMC Yukon.",
    alternates: {
        canonical: '/services/umrah-transfers',
    },
};

export default function UmrahTransfersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
