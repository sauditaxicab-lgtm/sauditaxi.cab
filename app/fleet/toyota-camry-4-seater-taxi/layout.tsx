import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Toyota Camry 4 Seater Taxi | Saudi Taxi Reliable Transfers",
    description: "Reliable Toyota Camry 4 seater taxi for Jeddah Airport, Makkah, and Madinah. Modern private transport service with professional drivers.",
    alternates: {
        canonical: '/fleet/toyota-camry-4-seater-taxi',
    },
};

export default function ToyotaCamryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
