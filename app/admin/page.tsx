import { createClient } from '@/utils/supabase/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Car, Calendar, Phone, LogOut, FileText } from 'lucide-react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

/* Since this is a Server Component, we can fetch directly */
export const revalidate = 0; // Disable cache for Admin

export default async function AdminPage() {
    const supabase = await createClient();

    // Check Auth
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        redirect('/admin/login');
    }

    // Fetch Bookings
    const { data: bookings, error: bookingError } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

    // Fetch Messages
    const { data: messages, error: messageError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

    if (bookingError || messageError) {
        return <div className="p-8 text-red-500">Error loading admin data. Check console.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 p-6 md:p-12 mt-20">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold font-serif text-luxury-black">Admin Dashboard</h1>
                        <p className="text-gray-500 mt-1">Manage bookings and messages.</p>
                    </div>
                    <form action="/auth/signout" method="post">
                        <button className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-600 bg-red-50 px-4 py-2 rounded-md transition-colors" type="submit">
                            <LogOut className="w-4 h-4" /> Sign Out
                        </button>
                    </form>
                </div>

                {/* Metrics */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                            <Car className="h-4 w-4 text-muted-foreground text-luxury-gold" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{bookings?.length || 0}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
                            <MessageSquare className="h-4 w-4 text-muted-foreground text-luxury-gold" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{messages?.length || 0}</div>
                        </CardContent>
                    </Card>
                    <Link href="/admin/blog">
                        <Card className="hover:bg-gray-50 transition-colors cursor-pointer border-luxury-gold/50 h-full">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-luxury-gold">Manage Blog</CardTitle>
                                <FileText className="h-4 w-4 text-luxury-gold" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm text-muted-foreground mt-2">Write & Edit Posts →</div>
                            </CardContent>
                        </Card>
                    </Link>
                </div>

                {/* Bookings Section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Car className="w-5 h-5 text-luxury-gold" /> Recent Bookings
                    </h2>
                    <div className="rounded-md border bg-white shadow-sm overflow-hidden">
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm text-left">
                                <thead className="[&_tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted bg-gray-50">
                                        <th className="h-12 px-4 align-middle font-medium text-gray-600">Date/Time</th>
                                        <th className="h-12 px-4 align-middle font-medium text-gray-600">Customer</th>
                                        <th className="h-12 px-4 align-middle font-medium text-gray-600">Route</th>
                                        <th className="h-12 px-4 align-middle font-medium text-gray-600">Vehicle</th>
                                        <th className="h-12 px-4 align-middle font-medium text-gray-600">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                    {bookings?.map((booking) => (
                                        <tr key={booking.id} className="border-b transition-colors hover:bg-muted/50">
                                            <td className="p-4 align-middle">
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{new Date(booking.created_at).toLocaleDateString()}</span>
                                                    <span className="text-xs text-muted-foreground">{new Date(booking.created_at).toLocaleTimeString()}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2">
                                                        <Phone className="w-3 h-3 text-luxury-gold" />
                                                        <span>{booking.phone}</span>
                                                    </div>
                                                    <div className="text-xs text-muted-foreground ml-5">
                                                        {booking.passengers} Pax
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle">
                                                <div className="space-y-1 max-w-[200px]">
                                                    <div className="flex items-center gap-1 text-xs">
                                                        <span className="font-bold text-green-600">FROM:</span> {booking.pickup_location}
                                                    </div>
                                                    <div className="flex items-center gap-1 text-xs">
                                                        <span className="font-bold text-red-600">TO:</span> {booking.destination}
                                                    </div>
                                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                        <Calendar className="w-3 h-3" /> {booking.date}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle">
                                                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none text-luxury-gold border-luxury-gold/20 bg-luxury-gold/5">
                                                    {booking.vehicle || 'Standard'}
                                                </span>
                                            </td>
                                            <td className="p-4 align-middle">
                                                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-transparent bg-gray-900 text-white hover:bg-gray-900/80 uppercase">
                                                    {booking.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {(!bookings || bookings.length === 0) && (
                                        <tr>
                                            <td colSpan={5} className="p-8 text-center text-muted-foreground">No bookings found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Messages Section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-luxury-gold" /> Contact Messages
                    </h2>
                    <div className="rounded-md border bg-white shadow-sm overflow-hidden">
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm text-left">
                                <thead className="[&_tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted bg-gray-50">
                                        <th className="h-12 px-4 align-middle font-medium text-gray-600">Date</th>
                                        <th className="h-12 px-4 align-middle font-medium text-gray-600">Sender</th>
                                        <th className="h-12 px-4 align-middle font-medium text-gray-600">Subject</th>
                                        <th className="h-12 px-4 align-middle font-medium text-gray-600">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                    {messages?.map((msg) => (
                                        <tr key={msg.id} className="border-b transition-colors hover:bg-muted/50">
                                            <td className="p-4 align-middle whitespace-nowrap">
                                                {new Date(msg.created_at).toLocaleDateString()}
                                            </td>
                                            <td className="p-4 align-middle">
                                                <div className="font-medium">{msg.name}</div>
                                                <div className="text-xs text-muted-foreground">{msg.email}</div>
                                            </td>
                                            <td className="p-4 align-middle font-medium">
                                                {msg.subject}
                                            </td>
                                            <td className="p-4 align-middle max-w-[300px] truncate" title={msg.message}>
                                                {msg.message}
                                            </td>
                                        </tr>
                                    ))}
                                    {(!messages || messages.length === 0) && (
                                        <tr>
                                            <td colSpan={4} className="p-8 text-center text-muted-foreground">No messages found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
