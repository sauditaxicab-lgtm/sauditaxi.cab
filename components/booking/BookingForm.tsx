'use client';

import { useState, useEffect, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Calendar, Users, Briefcase, Car } from 'lucide-react';
import { toast } from 'sonner';
import { BUSINESS_CONFIG } from '@/lib/constants';
import { useSearchParams } from 'next/navigation';

function BookingFormContent() {
  const searchParams = useSearchParams();
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [luggage, setLuggage] = useState("");
  const [vehicle, setVehicle] = useState("");

  useEffect(() => {
    const vehicleParam = searchParams.get('vehicle');
    if (vehicleParam) {
      setVehicle(vehicleParam);
    }
  }, [searchParams]);

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupLocation || !destination || !date || !passengers) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const message = `*New Booking Request*%0A%0A*Vehicle:* ${vehicle || "Any"}%0A*From:* ${pickupLocation}%0A*To:* ${destination}%0A*Date:* ${date}%0A*Passengers:* ${passengers}%0A*Luggage:* ${luggage || "0"}`;

    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.PHONE}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-black/50 backdrop-blur-md p-6 md:p-8 lg:p-12 rounded-xl shadow-2xl border border-white/10 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif text-white mb-2">Book via WhatsApp</h2>
        <p className="text-white/60 text-sm">Fill in the details below to start your booking.</p>
      </div>

      <form onSubmit={handleWhatsAppBooking} className="space-y-6">
        {/* Vehicle - Auto-filled if clicked from fleet */}
        <div className="space-y-2">
          <label className="text-xs text-luxury-gold uppercase tracking-wider font-bold ml-1 flex items-center gap-2">
            <Car size={14} /> Selected Vehicle
          </label>
          <Input
            placeholder="e.g. Saudi Taxi Camry"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-luxury-gold h-12 text-sm"
          />
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="text-xs text-luxury-gold uppercase tracking-wider font-bold ml-1 flex items-center gap-2">
            <Calendar size={14} /> Date
          </label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-luxury-gold h-12 text-sm [color-scheme:dark]"
          />
        </div>

        {/* Pickup */}
        <div className="space-y-2">
          <label className="text-xs text-luxury-gold uppercase tracking-wider font-bold ml-1 flex items-center gap-2">
            <MapPin size={14} /> Pickup Location
          </label>
          <Input
            placeholder="Enter pickup location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-luxury-gold h-12 text-sm"
          />
        </div>

        {/* Destination */}
        <div className="space-y-2">
          <label className="text-xs text-luxury-gold uppercase tracking-wider font-bold ml-1 flex items-center gap-2">
            <MapPin size={14} /> Destination
          </label>
          <Input
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-luxury-gold h-12 text-sm"
          />
        </div>

        <div className="flex gap-4">
          {/* Passengers */}
          <div className="space-y-2 flex-1">
            <label className="text-xs text-luxury-gold uppercase tracking-wider font-bold ml-1 flex items-center gap-2">
              <Users size={14} /> Passengers
            </label>
            <Input
              type="number"
              min="1"
              placeholder="No."
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-luxury-gold h-12 text-sm"
            />
          </div>

          {/* Luggage */}
          <div className="space-y-2 flex-1">
            <label className="text-xs text-luxury-gold uppercase tracking-wider font-bold ml-1 flex items-center gap-2">
              <Briefcase size={14} /> Luggage
            </label>
            <Input
              type="number"
              min="0"
              placeholder="No."
              value={luggage}
              onChange={(e) => setLuggage(e.target.value)}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-luxury-gold h-12 text-sm"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-14 text-lg tracking-widest uppercase mt-6 shadow-lg flex items-center justify-center gap-3"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Book on WhatsApp
        </Button>
      </form>
    </div>
  );
}

export default function BookingForm() {
  return (
    <Suspense fallback={<div className="text-white text-center">Loading booking form...</div>}>
      <BookingFormContent />
    </Suspense>
  );
}

