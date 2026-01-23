
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { ChevronRight, Home } from "lucide-react";
import React from "react";

export function Breadcrumbs() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    if (isHome) return null;

    const pathSegments = pathname.split("/").filter((segment) => segment !== "");

    // Generate Breadcrumb Items
    const breadcrumbItems = pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        const name = segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
        return { name, href };
    });

    // Add Home to start
    const allItems = [{ name: "Home", href: "/" }, ...breadcrumbItems];

    // Generate JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": allItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://sauditaxi.cab${item.href}`
        }))
    };

    return (
        <nav aria-label="Breadcrumb" className="py-4 container mx-auto px-4 md:px-6">
            {/* Visual Breadcrumbs */}
            <ol className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-white/50">
                {allItems.map((item, index) => {
                    const isLast = index === allItems.length - 1;
                    return (
                        <li key={item.href} className="flex items-center gap-2">
                            {!isLast ? (
                                <>
                                    <Link
                                        href={item.href}
                                        className="hover:text-luxury-gold transition-colors flex items-center gap-1"
                                    >
                                        {index === 0 ? <Home size={14} /> : item.name}
                                    </Link>
                                    <ChevronRight size={12} className="text-white/30" />
                                </>
                            ) : (
                                <span className="text-luxury-gold font-medium truncate max-w-[200px] md:max-w-none" aria-current="page">
                                    {item.name}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>

            {/* Structured Data */}
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </nav>
    );
}
