"use client";

import React from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ShareSection() {
    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
    };

    return (
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-1">
                <span className="text-white/50 text-xs uppercase tracking-widest">Share this article</span>
                <p className="text-white font-serif italic text-sm">Spread the word about premium Saudi travel</p>
            </div>
            <div className="flex gap-4">
                <Button 
                    onClick={handleCopy}
                    variant="outline" 
                    className="rounded-full border-white/20 hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transition-all flex gap-2 items-center px-6"
                >
                    <Share2 className="w-4 h-4" />
                    <span>Copy Link</span>
                </Button>
            </div>
        </div>
    );
}
