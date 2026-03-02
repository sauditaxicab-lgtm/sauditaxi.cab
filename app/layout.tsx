import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Removed
import "./globals.css";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Toaster } from "sonner";
import Script from "next/script";


// Removed Google Font instances

export const metadata: Metadata = {
  metadataBase: new URL('https://sauditaxi.cab'),
  title: "Saudi Taxi – Hajj, Umrah and Sightseeing Transportation Company in Saudi Arabia | Book Now",
  description: "Saudi Taxi is a trusted transportation company in Saudi Arabia serving Hajj and Umrah pilgrims and tourists. Book transfers between Makkah, Madinah, Jeddah, Taif, and AlUla sightseeing tours. WhatsApp +966 54 817 4726 for instant booking.",

  openGraph: {
    title: "Saudi Taxi – Hajj, Umrah and Sightseeing Transportation Company in Saudi Arabia | Book Now",
    description: "Saudi Taxi is a trusted transportation company in Saudi Arabia serving Hajj and Umrah pilgrims and tourists. Book transfers between Makkah, Madinah, Jeddah, Taif, and AlUla sightseeing tours. WhatsApp +966 54 817 4726 for instant booking.",
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
        <link rel="preconnect" href="https://www.transparenttextures.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.transparenttextures.com" />
      </head>
      <body
        className="antialiased"
      >
        <ConditionalLayout>{children}</ConditionalLayout>
        <SchemaOrg />
        <Toaster position="top-right" richColors />

        {/* Google Tags (Analytics & Ads) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17960093141"
          strategy="afterInteractive"
        />
        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4Y7CL86016');
            gtag('config', 'AW-17960093141');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v4xib3kwig");
          `}
        </Script>

        {/* Trustpilot Script */}
        <Script
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="lazyOnload"
          async
        />
      </body>
    </html>
  );
}
