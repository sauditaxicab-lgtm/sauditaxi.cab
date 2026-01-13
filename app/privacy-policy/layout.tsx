import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Saudi Taxi",
    description: "Read the Privacy Policy of Saudi Taxi. We are committed to protecting your personal information and ensuring your privacy while using our services.",
    alternates: {
        canonical: '/privacy-policy',
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
