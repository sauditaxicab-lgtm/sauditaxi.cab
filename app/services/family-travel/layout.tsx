import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Family Travel Transport | Spacious Vans & Buses in KSA",
    description: "Spacious and comfortable transport for families and groups. Premium GMC Yukon, Hyundai Staria, and Toyota HiAce for your Saudi Arabia travels.",
    alternates: {
        canonical: '/services/family-travel',
    },
};

export default function FamilyTravelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
