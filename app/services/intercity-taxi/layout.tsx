import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Saudi Intercity Taxi | Makkah to Madinah Coaster & Transfers",
    description: "Premium intercity taxi service in Saudi Arabia. Book a private taxi or coaster from Makkah to Madinah, Jeddah to Riyadh, and Makkah to Jeddah with fixed rates.",
    alternates: {
        canonical: '/services/intercity-taxi',
    },
    keywords: ["makkah to madinah coaster", "mecca to jeddah", "makkah and madina", "jeddah to riyadh taxi", "makkah to taif transport"],
};

export default function IntercityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
