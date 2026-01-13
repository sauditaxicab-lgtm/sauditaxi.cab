"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
    return (
        <div className={cn("flex flex-col items-start select-none", className)}>
            {/* Logo Text */}
            {showText && (
                <div className="flex flex-col items-start leading-none py-1">
                    <span className="font-serif font-bold text-xl md:text-2xl tracking-[0.1em] text-gold-gradient uppercase whitespace-nowrap">
                        Saudi Taxi
                    </span>
                    <span className="text-[8px] md:text-[10px] font-sans font-semibold tracking-[0.3em] text-white/40 uppercase mt-1 whitespace-nowrap">
                        Premium Transport
                    </span>
                </div>
            )}
        </div>
    );
}
