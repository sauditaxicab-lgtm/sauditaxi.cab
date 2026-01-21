import Script from 'next/script'

export default function SchemaOrg() {
    const taxiSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "additionalType": "https://schema.org/TaxiService",
        "name": "Saudi Taxi",
        "image": "https://sauditaxi.cab/og-image.png",
        "url": "https://sauditaxi.cab",
        "telephone": "+966548174726",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "حي الجامعة, MEJA3707، 3707 شارع المنيرة، 6806",
            "addressLocality": "Makkah",
            "postalCode": "24242",
            "addressCountry": "SA",
            "addressRegion": "Makkah Region"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.4083333,
            "longitude": 39.8666666
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Makkah"
            },
            {
                "@type": "City",
                "name": "Madinah"
            },
            {
                "@type": "City",
                "name": "Jeddah"
            },
            {
                "@type": "City",
                "name": "Taif"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Saudi Arabia"
            }
        ],
        "sameAs": [
            "https://sauditaxi.cab",
            "https://www.snapchat.com/add/sauditaxicab",
            "https://www.quora.com/profile/Saudi-Taxi-1",
            "https://www.pinterest.com/sauditaxicab/",
            "https://www.youtube.com/channel/UCJFtqjUo7W899VhS2tzpujw"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Taxi Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Umrah Taxi Transfers",
                        "description": "Premium taxi service between Jeddah Airport, Makkah, and Madinah for Umrah pilgrims."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Airport Transfers",
                        "description": "24/7 designated airport pickup and drop-off services for Jeddah (KAIA) and Madinah (Prince Mohammad Bin Abdulaziz) airports."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Intercity Travel",
                        "description": "Comfortable long-distance taxi travel between all major cities in Saudi Arabia including Makkah, Madinah, Jeddah, Riyadh, and Taif."
                    }
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "1200",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Ahmed Al-Farsi"
                },
                "datePublished": "2024-01-15",
                "reviewBody": "Excellent service for our Umrah trip. The driver picked us up from Jeddah airport on time and the GMC was very comfortable for my family. Highly recommended for families.",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                }
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Fatima Khan"
                },
                "datePublished": "2024-01-08",
                "reviewBody": "We booked a Staria for our Ziyarat in Madinah. The driver was very polite and knew all the historical places. The car was clean and spacious. Perfect pilgrim experience.",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                }
            }
        ]
    }

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Saudi Taxi",
        "url": "https://sauditaxi.cab",
        "logo": "https://sauditaxi.cab/logo/logo-gold.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966548174726",
            "contactType": "customer service",
            "contactOption": "TollFree",
            "areaServed": "SA",
            "availableLanguage": ["English", "Arabic", "Urdu"]
        }
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can I Book A Saudi Taxi For Umrah & Makkah Ziyarat Places?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in Umrah transfers between Jeddah, Makkah, and Madinah. We also provide full-day private tours to all major Makkah Ziyarat places including Jabal Al-Noor and Mount Arafat."
                }
            },
            {
                "@type": "Question",
                "name": "Do You Offer Child Seats?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide safe child seats upon request. Please mention this requirement when you book your Saudi Taxi."
                }
            },
            {
                "@type": "Question",
                "name": "Is The Price Final or Estimated?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The price you receive is fixed. There are no hidden charges or surge pricing, ensuring you can budget your trip effectively."
                }
            },
            {
                "@type": "Question",
                "name": "Are Your Drivers Licensed?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all our drivers are fully licensed and experienced with the routes between holy cities. They are professional and respectful."
                }
            },
            {
                "@type": "Question",
                "name": "What If My Flight Is Delayed?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We monitor flight arrivals at Jeddah and Madinah airports. Your driver will adjust the pickup time accordingly, so you don't need to worry about delays."
                }
            },
            {
                "@type": "Question",
                "name": "How Can I Find A Saudi Taxi Cab Near Me?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If you need a taxi cab near you in Makkah, Madinah, or Jeddah, our online taxi service is available 24/7. We provide instant bookings and fixed-price cabs that are always near the main airports and holy sites."
                }
            },
            {
                "@type": "Question",
                "name": "What is the Best Taxi App in Saudi Arabia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While there are many taxi apps in Saudi Arabia, Saudi Taxi offers a superior experience for pilgrims and long-distance travelers by providing fixed rates, no surge pricing, and a specialized premium fleet that apps often lack."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide a 24 hour taxi service in Saudi Arabia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we are a fully operational 24 hour taxi service. Whether you require a luxury transfer at noon or a 24 hour airport taxi at midnight, our drivers are available around the clock to ensure your journey is never delayed."
                }
            },
            {
                "@type": "Question",
                "name": "How to Book a Taxi in Saudi Arabia for Umrah?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The easiest way for your Saudi Taxi booking is via our professional WhatsApp service or our online form. Simply provide your pickup point, flight details, and destination to receive an instant fixed-price quote."
                }
            },
            {
                "@type": "Question",
                "name": "Is private taxi available from Jeddah to Mecca?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide 24/7 private taxi services from Jeddah Airport (JED) directly to your hotel in Mecca. Our private hire vehicles are pre-booked to ensure a seamless arrival experience."
                }
            },
            {
                "@type": "Question",
                "name": "Can I book a private taxi from Madinah to Makkah?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We specialize in private taxi transfers from Madinah to Makkah. You can choose from our luxury fleet for a comfortable, non-stop journey between the holy cities."
                }
            }
        ]
    }



    return (
        <>
            <Script
                id="schema-taxi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiSchema) }}
            />
            <Script
                id="schema-org"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            <Script
                id="schema-faq"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    )
}
