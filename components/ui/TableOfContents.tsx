"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, ChevronDown } from "lucide-react";

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
    const [isExpanded, setIsExpanded] = useState(false); // Collapsed by default as requested

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
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-12">
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors group"
            >
                <div className="flex items-center gap-3">
                    <List className="w-5 h-5 text-luxury-gold" />
                    <h3 className="text-xl font-serif text-white">Table of Contents</h3>
                </div>
                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="text-white/40 group-hover:text-white transition-colors"
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isExpanded && (
                    <motion.nav 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 space-y-3 border-t border-white/5 pt-4"
                    >
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
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
}
