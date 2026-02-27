"use client";

import { Check, X } from "lucide-react";

export function ComparisonChart() {
    const comparisons = [
        { feature: "Fixed Rates (No Surge)", us: true, others: false },
        { feature: "Professional Meet and Greet", us: true, others: false },
        { feature: "Hajj/Umrah Luggage Space", us: true, others: false },
        { feature: "24/7 Priority WhatsApp Support", us: true, others: false },
        { feature: "No Waiting in Long Queues", us: true, others: false },
        { feature: "Clean, Luxury MPVs (Yukon/Staria)", us: true, others: false },
    ];

    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif mb-4">The Benefit of <span className="text-luxury-gold italic">Private Booking</span></h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">Why travelers choose Saudi Taxi over standard street cabs or unregulated apps for their spiritual journeys.</p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-xl">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-900 text-white">
                                <th className="p-6 text-lg font-serif">Feature</th>
                                <th className="p-6 text-center text-luxury-gold font-bold">Saudi Taxi</th>
                                <th className="p-6 text-center text-zinc-400">Regular Apps / Cabs</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200">
                            {comparisons.map((row, idx) => (
                                <tr key={idx} className="hover:bg-zinc-50 transition-colors">
                                    <td className="p-6 font-medium text-zinc-800">{row.feature}</td>
                                    <td className="p-6 text-center">
                                        <div className="flex justify-center">
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                                <Check className="text-green-600 w-5 h-5" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6 text-center">
                                        <div className="flex justify-center">
                                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                                <X className="text-red-600 w-5 h-5" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-zinc-400 text-sm italic italic">
                        *Comparison based on standard service levels for Jeddah to Makkah transfers in 2026.
                    </p>
                </div>
            </div>
        </section>
    );
}
