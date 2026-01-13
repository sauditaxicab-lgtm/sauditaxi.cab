import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Intercity Private Transfers | Long-Distance Taxi Saudi Arabia",
    description: "Comfortable private long-distance travel between any major cities including Riyadh, Dammam, and Taif. Premium vehicles for a smooth intercity journey.",
    alternates: {
        canonical: '/services/intercity-taxi',
    },
};

export default function IntercityTaxiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
