import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Premium Services | Luxury Umrah & Airport Transfers KSA",
    description: "Providing a range of premium transport services including Airport Transfers, Umrah Journeys, Ziyarat Tours, and VIP Travel across Saudi Arabia.",
    alternates: {
        canonical: '/services',
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
