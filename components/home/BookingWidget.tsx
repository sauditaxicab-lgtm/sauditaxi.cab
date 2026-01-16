"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Calendar, Users, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { BUSINESS_CONFIG } from "@/lib/constants";

export function BookingWidget() {
    const [pickupLocation, setPickupLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [passengers, setPassengers] = useState("");
    const [luggage, setLuggage] = useState("");

    const handleWhatsAppBooking = () => {
        if (!pickupLocation || !destination || !date || !passengers) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const message = `*New Booking Request*%0A%0A*From:* ${pickupLocation}%0A*To:* ${destination}%0A*Date:* ${date}%0A*Passengers:* ${passengers}%0A*Luggage:* ${luggage || "0"}`;

        // WhatsApp number: from constants
        const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.PHONE}?text=${message}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/60 backdrop-blur-xl p-5 md:p-6 rounded-2xl shadow-2xl border border-white/10 w-full max-w-[360px] mx-auto relative overflow-hidden"
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent"></div>

            <p className="font-serif text-lg text-white mb-5 border-b border-white/5 pb-3 text-center tracking-wide font-medium">
                Book Your Private Taxi
            </p>

            <div className="space-y-4">
                {/* Date */}
                <div className="group space-y-1.5">
                    <label htmlFor="booking-date" className="text-[10px] text-luxury-gold/80 group-focus-within:text-luxury-gold uppercase tracking-[0.15em] font-bold ml-1 flex items-center gap-2 transition-colors">
                        <Calendar size={12} className="shrink-0" /> Travel Date
                    </label>
                    <Input
                        id="booking-date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-luxury-gold/50 focus:bg-white/[0.07] h-10 text-xs [color-scheme:dark] rounded-xl transition-all"
                    />
                </div>

                {/* Pickup & Destination Group */}
                <div className="space-y-3">
                    <div className="group space-y-1.5">
                        <label htmlFor="booking-pickup" className="text-[10px] text-luxury-gold/80 group-focus-within:text-luxury-gold uppercase tracking-[0.15em] font-bold ml-1 flex items-center gap-2 transition-colors">
                            <MapPin size={12} className="shrink-0" /> Pickup From
                        </label>
                        <Input
                            id="booking-pickup"
                            placeholder="Airport, Hotel, or City"
                            value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}
                            className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-luxury-gold/50 focus:bg-white/[0.07] h-10 text-xs rounded-xl transition-all"
                        />
                    </div>

                    <div className="group space-y-1.5">
                        <label htmlFor="booking-destination" className="text-[10px] text-luxury-gold/80 group-focus-within:text-luxury-gold uppercase tracking-[0.15em] font-bold ml-1 flex items-center gap-2 transition-colors">
                            <MapPin size={12} className="shrink-0" /> Destination
                        </label>
                        <Input
                            id="booking-destination"
                            placeholder="Where are you going?"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-luxury-gold/50 focus:bg-white/[0.07] h-10 text-xs rounded-xl transition-all"
                        />
                    </div>
                </div>

                <div className="flex gap-4">
                    {/* Passengers */}
                    <div className="group space-y-1.5 flex-1">
                        <label htmlFor="booking-passengers" className="text-[10px] text-luxury-gold/80 group-focus-within:text-luxury-gold uppercase tracking-[0.15em] font-bold ml-1 flex items-center gap-2 transition-colors line-clamp-1">
                            <Users size={12} className="shrink-0" /> Passengers
                        </label>
                        <div className="relative">
                            <Input
                                id="booking-passengers"
                                type="number"
                                min="1"
                                placeholder="1"
                                value={passengers}
                                onChange={(e) => setPassengers(e.target.value)}
                                className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-luxury-gold/50 focus:bg-white/[0.07] h-10 text-xs rounded-xl transition-all pl-3"
                            />
                        </div>
                    </div>

                    {/* Luggage */}
                    <div className="group space-y-1.5 flex-1">
                        <label htmlFor="booking-luggage" className="text-[10px] text-luxury-gold/80 group-focus-within:text-luxury-gold uppercase tracking-[0.15em] font-bold ml-1 flex items-center gap-2 transition-colors line-clamp-1">
                            <Briefcase size={12} className="shrink-0" /> Luggage
                        </label>
                        <div className="relative">
                            <Input
                                id="booking-luggage"
                                type="number"
                                min="0"
                                placeholder="0"
                                value={luggage}
                                onChange={(e) => setLuggage(e.target.value)}
                                className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-luxury-gold/50 focus:bg-white/[0.07] h-10 text-xs rounded-xl transition-all pl-3"
                            />
                        </div>
                    </div>
                </div>

                <Button
                    onClick={handleWhatsAppBooking}
                    className="w-full bg-gradient-to-r from-luxury-gold via-[#C5A028] to-luxury-gold hover:brightness-110 text-black font-bold h-11 text-xs tracking-[0.15em] uppercase mt-4 shadow-[0_4px_15px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 border-none transition-all duration-300"
                >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Confirm via WhatsApp
                </Button>
            </div>
        </motion.div>
    );
}
