import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Toyota HiAce 11 Seater Saudi Taxi | Group Minibus Transfers",
    description: "Reliable Toyota HiAce 11 seater minibus. High-roof group transport for Umrah pilgrim families, airports, and sightseeing tours across Saudi Arabia.",
    alternates: {
        canonical: '/fleet/toyota-hiace-11-seater-taxi',
    },
};

export default function ToyotaHiaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
