import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Family Travel Transport | Spacious Vans and Buses in KSA",
    description: "Spacious and comfortable transport for families and groups. Modern GMC Yukon, Hyundai Staria, and Toyota HiAce for your Saudi Arabia travels.",
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
