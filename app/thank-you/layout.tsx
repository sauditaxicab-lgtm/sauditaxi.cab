import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thank You | Saudi Taxi",
    description: "Thank you for choosing Saudi Taxi. Your booking request has been received.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ThankYouLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
