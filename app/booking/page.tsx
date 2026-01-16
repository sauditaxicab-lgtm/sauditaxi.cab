import { Metadata } from "next";
import BookingForm from "@/components/booking/BookingForm";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Phone, Mail, ShieldCheck, Gem, Clock, Star } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
    title: "Book Saudi Taxi | Instant Umrah & Airport Transfer",
    description: "Book premium taxi in Saudi Arabia instantly. Reliable Umrah, airport & intercity transfers in Makkah, Madinah & Jeddah. 24/7 availability.",
    alternates: {
        canonical: '/booking',
    },
};


export default function BookingPage() {
    return (
        <main className="min-h-screen w-full relative flex flex-col items-center pt-32 pb-20 font-sans selection:bg-luxury-gold selection:text-black">

            {/* 1. Global Background Image */}
            <div
                className="fixed inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/booking/hero.png')",
                    backgroundAttachment: "fixed", // Optional: Parallax feel
                }}
            >
                {/* Heavy overlay to ensure form readability */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent" />
            </div>

            {/* 2. Main Content Container */}
            <div className="mt-16 relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center gap-12">

                {/* Hero Headings (Centered as per screenshot) */}
                <div className="text-center max-w-3xl space-y-6">
                    <span className="text-luxury-gold text-sm md:text-base font-bold uppercase tracking-[0.2em] animate-fade-in-up">
                        Instant Online Reservation
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight drop-shadow-lg">
                        <strong>Saudi Taxi – Book Your Journey</strong>
                    </h1>
                    <p className="text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                        Book your taxi in seconds. Fill in your journey details below and connect with us on WhatsApp for an instant confirmation.
                    </p>
                </div>

                {/* The Booking Form (Centered) */}
                <div className="w-full max-w-4xl">
                    <BookingForm />
                </div>

                {/* Footer Trust Indicators (Optional but nice to have below form) */}
                <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center w-full max-w-4xl mt-8 opacity-70 hover:opacity-100 transition-opacity">
                    <div className="flex flex-col items-center gap-2">
                        <ShieldCheck className="w-6 h-6 text-luxury-gold" />
                        <p className="text-sm text-white font-medium uppercase tracking-wide">Secure Booking</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Gem className="w-6 h-6 text-luxury-gold" />
                        <p className="text-sm text-white font-medium uppercase tracking-wide">Premium Fleet</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Clock className="w-6 h-6 text-luxury-gold" />
                        <p className="text-sm text-white font-medium uppercase tracking-wide">Punctuality Guarantee</p>
                    </div>
                </div>

                {/* Booking Information Block */}
                <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-sm p-8 md:p-12 backdrop-blur-sm">
                    <h2 className="text-2xl font-serif text-white mb-6">Why Book with Saudi Taxi?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-luxury-gold font-bold mb-2">Transparent Pricing</h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                Our rates are fixed and all-inclusive. When you book a Jeddah Airport to Makkah taxi or a Madinah transfer, the price you see or quote you receive is final. There are no hidden fees for luggage, parking, or waiting time (up to 60 mins at airport).
                            </p>
                            <h3 className="text-luxury-gold font-bold mb-2">Instant Confirmation</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                We prioritize your peace of mind. Once you submit your booking request, our team verifies availability immediately. You will receive a formal confirmation via WhatsApp or Email, ensuring your ride is guaranteed before you even land.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-luxury-gold font-bold mb-2">Flexible Payments</h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                You don't need to pay everything upfront. To secure your booking, we offer flexible payment options including partial deposits or payment upon arrival, giving you financial security and trust.
                            </p>
                            <h3 className="text-luxury-gold font-bold mb-2">Special Requests</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Travelling with elderly parents, infants, or wheelchair requirements? Use the booking form to let us know. We can arrange child seats or specific vehicle types (like our GMC Yukon) to accommodate your specific needs comfortably.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* 3. CTA Section */}
            <div className="relative z-10 w-full mt-24">
                <CTASection
                    title={
                        <>
                            Need Any  <span className="italic">Assistance?</span>
                        </>
                    }
                    description="Book your premium taxi service today and travel in total comfort and style."
                    buttonText="COMPLETE YOUR BOOKING"
                />
            </div>
        </main>
    );
}
