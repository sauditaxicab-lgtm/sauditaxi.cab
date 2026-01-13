import { Metadata } from "next";

export const metadata: Metadata = {
    title: "VIP Transport & Executive Chauffeur | Saudi Taxi Premium",
    description: "Elite GMC Yukon and luxury sedan vehicles for those seeking maximum comfort, privacy, and premium style in Saudi Arabia. Professional executive service.",
    alternates: {
        canonical: '/services/vip-transport',
    },
};

export default function VipTransportLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
