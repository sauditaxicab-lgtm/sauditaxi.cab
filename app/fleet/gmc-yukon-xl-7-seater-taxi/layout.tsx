import { Metadata } from "next";

export const metadata: Metadata = {
    title: "GMC Yukon XL 7 Seater VIP Taxi | Luxury SUV Transfers",
    description: "Experience VIP travel in Saudi Arabia with our GMC Yukon XL 7 seater taxi. Premium luxury SUV for airport transfers and private Makkah & Madinah bookings.",
    alternates: {
        canonical: '/fleet/gmc-yukon-xl-7-seater-taxi',
    },
};

export default function GMCYukonLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
