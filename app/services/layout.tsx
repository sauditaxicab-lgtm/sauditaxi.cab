import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Luxury Umrah and Airport Transfers KSA",
    description: "Providing a range of reliable transport services including Airport Transfers, Umrah Journeys, Ziyarat Tours, and VIP Travel across Saudi Arabia.",
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
