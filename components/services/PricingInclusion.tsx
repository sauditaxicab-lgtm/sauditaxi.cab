"use client";

import { Check, X, Shield, Clock, MapPin, CreditCard } from "lucide-react";
import React from "react";

interface PricingInclusionProps {
    title?: string;
    inclusions: string[];
    exclusions: string[];
}

export function PricingInclusion({
    title = "Pricing Transparency",
    inclusions = [
        "Meet and Greet at Terminal Arrivals",
        "Wait time: 60 minutes for International Flights",
        "VAT and Local Taxes",
        "Flight tracking and adjustment",
        "Professional licensed driver",
        "24/7 WhatsApp Support"
    ],
    exclusions = [
        "Extra luggage beyond vehicle capacity",
        "Wait time beyond 60 mins (hourly rate applies)",
        "Additional stops not pre-arranged",
        "Tips for the driver"
    ]
}: PricingInclusionProps) {
    return (
        <section className="py-20 bg-zinc-50">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-black mb-4">{title}</h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        We believe in full transparency. No hidden fees, no surge pricing—just reliable luxury service.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Inclusions */}
                    <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-xl shadow-zinc-200/50">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                                <Check className="text-green-600 h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-black uppercase tracking-wider">What's Included</h3>
                        </div>
                        <ul className="space-y-4">
                            {inclusions.map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-600">
                                    <Check className="text-luxury-gold shrink-0 h-5 w-5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Exclusions */}
                    <div className="bg-black text-white p-8 rounded-2xl shadow-xl shadow-black/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                <X className="text-red-400 h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Exclusions</h3>
                        </div>
                        <ul className="space-y-4">
                            {exclusions.map((item, i) => (
                                <li key={i} className="flex gap-3 text-white/70">
                                    <X className="text-luxury-gold/50 shrink-0 h-5 w-5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Additional Policy Badges */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-white rounded-xl border border-zinc-100 flex flex-col items-center text-center gap-2 group hover:border-luxury-gold transition-colors">
                        <Clock className="text-luxury-gold h-6 w-6" />
                        <span className="text-xs font-bold text-black uppercase">24h Cancellation</span>
                        <p className="text-[10px] text-zinc-400">Full refund if notified 24h prior</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-zinc-100 flex flex-col items-center text-center gap-2 group hover:border-luxury-gold transition-colors">
                        <Shield className="text-luxury-gold h-6 w-6" />
                        <span className="text-xs font-bold text-black uppercase">Secure Payments</span>
                        <p className="text-[10px] text-zinc-400">Pay via Bank or Upon Arrival</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-zinc-100 flex flex-col items-center text-center gap-2 group hover:border-luxury-gold transition-colors">
                        <MapPin className="text-luxury-gold h-6 w-6" />
                        <span className="text-xs font-bold text-black uppercase">Free Flight Tracking</span>
                        <p className="text-[10px] text-zinc-400">Wait time starts only after landing</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-zinc-100 flex flex-col items-center text-center gap-2 group hover:border-luxury-gold transition-colors">
                        <CreditCard className="text-luxury-gold h-6 w-6" />
                        <span className="text-xs font-bold text-black uppercase">No Surge Price</span>
                        <p className="text-[10px] text-zinc-400">Same rate even during Hajj/Umrah peak</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
