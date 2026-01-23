import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { Car, Calendar, Phone, Search } from 'lucide-react';
import BookingActions from '@/components/admin/BookingActions';

export const revalidate = 0;

export default async function BookingsPage() {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) redirect('/admin/login');

    const { data: bookings } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold font-serif text-gray-900">Bookings Management</h1>
                    <p className="text-gray-500">View and manage all taxi reservations.</p>
                </div>
                {/* Search - Client Side implementation would go here, simplified layout for now */}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                            <tr>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Journey Details</th>
                                <th className="px-6 py-4">Vehicle</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {bookings?.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide
                                            ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                                booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                                                    'bg-yellow-100 text-yellow-800'}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 font-medium text-gray-900">
                                                <Phone className="w-3 h-3 text-luxury-gold" />
                                                {booking.phone}
                                            </div>
                                            <span className="text-xs text-gray-500 mt-1">{booking.passengers} Passengers</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center text-gray-900">
                                                <span className="w-16 text-xs font-semibold text-gray-400 uppercase">From</span>
                                                <span>{booking.pickup_location}</span>
                                            </div>
                                            <div className="flex items-center text-gray-900">
                                                <span className="w-16 text-xs font-semibold text-gray-400 uppercase">To</span>
                                                <span>{booking.destination}</span>
                                            </div>
                                            <div className="flex items-center text-gray-500 text-xs mt-1 pt-1 border-t border-gray-100">
                                                <Calendar className="w-3 h-3 mr-1.5" />
                                                {booking.date}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-semibold">
                                            <Car className="w-3 h-3 mr-1.5" />
                                            {booking.vehicle || 'Standard'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <BookingActions id={booking.id} currentStatus={booking.status} />
                                    </td>
                                </tr>
                            ))}
                            {bookings?.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                        No bookings found yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
