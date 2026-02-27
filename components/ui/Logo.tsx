"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    variant?: "default" | "light" | "gold";
}

export function Logo({ className, variant = "default" }: LogoProps) {
    return (
        <div className={cn("relative w-[500px] aspect-[4/1]", className)}>
            <Image
                src="/logo/saudi-taxi-gold.png"
                alt="Saudi Taxi Logo"
                fill
                className="object-contain object-left"
                priority
            />
        </div>
    );
}
