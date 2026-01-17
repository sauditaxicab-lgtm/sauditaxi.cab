import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Toyota Coaster 17 Seater Bus Saudi Taxi | Group Pilgrim Transport",
    description: "Book a Toyota Coaster 17 seater minibus for large group transfers in Saudi Arabia. Reliable, spacious, and safe transport for pilgrim groups and corporate tours.",
    alternates: {
        canonical: '/fleet/toyota-coaster-17-seater-taxi',
    },
};

export default function ToyotaCoasterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
