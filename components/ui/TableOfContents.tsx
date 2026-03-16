"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    links: TocItem[];
}

export function TableOfContents({ links }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0% 0% -80% 0%" }
        );

        links.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [links]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveId(id);
        }
    };

    if (links.length === 0) return null;

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                <List className="w-5 h-5 text-luxury-gold" />
                <h3 className="text-xl font-serif text-white">Table of Contents</h3>
            </div>
            <nav className="space-y-3">
                {links.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={(e) => handleClick(e, link.id)}
                        className={`block text-sm transition-all hover:text-luxury-gold ${
                            link.level === 3 ? "ml-6" : ""
                        } ${
                            activeId === link.id
                                ? "text-luxury-gold font-medium border-l-2 border-luxury-gold pl-3 -ml-[2px]"
                                : "text-white/50 border-l border-white/10 pl-3 -ml-[1px]"
                        }`}
                    >
                        {link.text}
                    </a>
                ))}
            </nav>
        </div>
    );
}
