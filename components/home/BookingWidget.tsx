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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-md p-6 rounded-lg shadow-2xl border border-white/10 w-full max-w-[440px] mx-auto"
        >
            <h3 className="font-serif text-xl text-white mb-6 border-b border-white/10 pb-4 text-center tracking-wide">
                Book Your Ride
            </h3>

            <div className="space-y-4">
                {/* Date */}
                <div className="space-y-1">
                    <label className="text-xs text-luxury-gold uppercase tracking-wider font-bold ml-1 flex items-center gap-1">
                        <Calendar size={12} /> Date
                    </label>
                    <Input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-luxury-gold h-10 text-sm [color-scheme:dark]"
                    />
                </div>

                {/* Pickup */}
                <div className="space-y-1">
                    <label className="text-xs text-luxury-gold uppercase tracking-wider font-bold ml-1 flex items-center gap-1">
                        <MapPin size={12} /> From
                    </label>
                    <Input
                        placeholder="Pickup Location (e.g. Jeddah Airport)"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-luxury-gold h-10 text-sm"
                    />
                </div>

                {/* Destination */}
                <div className="space-y-1">
                    <label className="text-xs text-luxury-gold uppercase tracking-wider font-bold ml-1 flex items-center gap-1">
                        <MapPin size={12} /> To
                    </label>
                    <Input
                        placeholder="Destination (e.g. Makkah Hotel)"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-luxury-gold h-10 text-sm"
                    />
                </div>

                <div className="flex gap-4">
                    {/* Passengers */}
                    <div className="space-y-1 flex-1">
                        <label className="text-xs text-luxury-gold uppercase tracking-wider font-bold ml-1 flex items-center gap-1">
                            <Users size={12} /> Passengers
                        </label>
                        <Input
                            type="number"
                            min="1"
                            placeholder="No."
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-luxury-gold h-10 text-sm"
                        />
                    </div>

                    {/* Luggage */}
                    <div className="space-y-1 flex-1">
                        <label className="text-xs text-luxury-gold uppercase tracking-wider font-bold ml-1 flex items-center gap-1">
                            <Briefcase size={12} /> Luggage
                        </label>
                        <Input
                            type="number"
                            min="0"
                            placeholder="No."
                            value={luggage}
                            onChange={(e) => setLuggage(e.target.value)}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-luxury-gold h-10 text-sm"
                        />
                    </div>
                </div>

                <Button
                    onClick={handleWhatsAppBooking}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12 text-sm tracking-widest uppercase mt-4 shadow-lg flex items-center justify-center gap-2"
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    Book on WhatsApp
                </Button>
            </div>
        </motion.div>
    );
}
