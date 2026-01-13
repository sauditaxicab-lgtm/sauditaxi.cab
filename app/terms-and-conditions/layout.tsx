import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions | Saudi Taxi",
    description: "Read the Terms and Conditions of Saudi Taxi. Understand the guidelines and legal agreements for using our premium transport services.",
    alternates: {
        canonical: '/terms-and-conditions',
    },
};

export default function TermsAndConditionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
