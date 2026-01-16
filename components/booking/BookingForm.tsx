'use client';

import { useState, useEffect, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { submitBookingForm } from '@/actions/booking';
import { Input } from '@/components/ui/input';
import { MapPin, Calendar, Users, Briefcase, Car, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { BUSINESS_CONFIG } from '@/lib/constants';
import { useSearchParams } from 'next/navigation';

function BookingFormContent() {
  const searchParams = useSearchParams();
  /* Helper for Time */
  const getTimeNow = () => new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [luggage, setLuggage] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");

  useEffect(() => {
    const vehicleParam = searchParams.get('vehicle');
    if (vehicleParam) {
      setVehicle(vehicleParam);
    }
  }, [searchParams]);

  const handleWhatsAppBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupLocation || !destination || !date || !passengers || !phone) {
      toast.error("Please fill in all required fields including Phone.");
      return;
    }

    try {
      toast.success("Redirecting to WhatsApp...");

      // Fire and forget server log (or await if critical)
      await submitBookingForm({
        name: "WhatsApp User",
        email: null,
        phone,
        passengers: Number(passengers) || 1,
        vehicleType: vehicle, // camelCase
        vehicleName: vehicle, // camelCase
        vehicleModel: vehicle, // camelCase
        pickupLocation: pickupLocation, // camelCase
        destinations: [destination],
        date,
        time: getTimeNow(),
        luggage: luggage,
        serviceType: "Standard",
        flightNumber: "",
        terminalType: "",
        driverInstructions: "",
        melbourneDatetime: "",
        timezone: "",
        userTimezone: "",
        city: "Jeddah"
      });

    } catch (error) {
      console.error("Booking log error", error);
    }

    const message = `*New Booking Request*%0A%0A*Vehicle:* ${vehicle || "Any"}%0A*From:* ${pickupLocation}%0A*To:* ${destination}%0A*Date:* ${date}%0A*Passengers:* ${passengers}%0A*Luggage:* ${luggage || "0"}%0A*Phone:* ${phone}`;

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

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-xs text-luxury-gold uppercase tracking-wider font-bold ml-1 flex items-center gap-2">
            <Phone size={14} /> Phone Number
          </label>
          <Input
            type="tel"
            placeholder="e.g. +966 50 123 4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-luxury-gold h-12 text-sm"
            required
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
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
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

