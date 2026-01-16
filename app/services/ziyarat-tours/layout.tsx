import { Metadata } from "next";

export const metadata: Metadata = {
    title: "20 Best Ziyarat Places in Makkah & Madinah | Saudi Taxi Guide",
    description: "Comprehensive guide to Makkah and Madinah Ziyarat places. Book your private taxi for a spiritual journey to historical holy sites with Saudi Taxi.",
    alternates: {
        canonical: '/services/ziyarat-tours',
    },
    keywords: ["makkah ziyarat places", "ziyarat of madina", "makkah and madina", "ziyarat places in makkah madinah", "private umrah transport"],
};

export default function ZiyaratLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
