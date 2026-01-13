import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Saudi Taxi | Leading Premium Private Transport in KSA",
    description: "Learn more about Saudi Taxi, the trusted provider of luxury Umrah and airport transfers. We are committed to comfort, safety, and quality since 2018.",
    alternates: {
        canonical: '/about',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
