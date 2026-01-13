import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Makkah & Madinah Ziyarat Tours | Holy Sites Private Taxi",
    description: "Personalized Ziyarat tours to historical and holy sites in Makkah and Madinah. Professional drivers and premium luxury vehicles for your spiritual visit.",
    alternates: {
        canonical: '/services/ziyarat-tours',
    },
};

export default function ZiyaratToursLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
