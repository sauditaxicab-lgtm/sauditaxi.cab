import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import { Toaster } from "sonner";


const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
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
  icons: {
    icon: '/logo/fav.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-luxury-black text-white font-sans`}
        suppressHydrationWarning
      >
        <ConditionalLayout>{children}</ConditionalLayout>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
