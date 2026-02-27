import { Metadata } from "next";

export const metadata: Metadata = {
    title: "VIP Transport and Executive Driver Service | Saudi Taxi VIP",
    description: "Elite GMC Yukon and luxury sedan vehicles for those seeking maximum comfort, privacy, and executive style in Saudi Arabia. Professional executive service.",
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
