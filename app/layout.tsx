import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Toaster } from "sonner";


const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: 'swap', // Prevents render-blocking
  preload: true, // Preload for faster loading
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap', // Prevents render-blocking
  preload: true, // Preload for faster loading
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sauditaxi.cab'),
  title: "Saudi Taxi | Premium Umrah & Airport Transport",
  description: "Premium Saudi taxi service for Umrah & airport transfers. Book reliable transport in Makkah, Madinah & Jeddah. Available 24/7 with luxury fleet.",

  openGraph: {
    title: "Saudi Taxi | Premium Umrah & Airport Private Transfers",
    description: "High-quality private transport in Saudi Arabia. Luxury Camry, Staria, GMC, and Coaster for Umrah, Airport, and Intercity transfers.",
    url: 'https://sauditaxi.cab',
    siteName: 'Saudi Taxi',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: './',
  },
  icons: {
    icon: '/logo/fav.ico',
  },
  verification: {
    other: {
      'p:domain_verify': '535eb0c4e3fdbd622a90ede84e0e6a7d',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resource Hints - Establish connections early to reduce critical chain */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.transparenttextures.com" crossOrigin="anonymous" />

        {/* DNS Prefetch as fallback for older browsers */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.transparenttextures.com" />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-luxury-black text-white font-sans`}
        suppressHydrationWarning
      >
        <ConditionalLayout>{children}</ConditionalLayout>
        <SchemaOrg />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
