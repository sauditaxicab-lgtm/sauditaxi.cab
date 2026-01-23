import { createClient } from '@/utils/supabase/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Car, FileText, ArrowUpRight, ArrowRight } from 'lucide-react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export const revalidate = 0;

export default async function AdminDashboard() {
    const supabase = await createClient();

    // Check Auth
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        redirect('/admin/login');
    }

    // Fetch Stats
    const { count: bookingsCount } = await supabase.from('bookings').select('*', { count: 'exact', head: true });
    const { count: messagesCount } = await supabase.from('contact_submissions').select('*', { count: 'exact', head: true });
    const { count: postsCount } = await supabase.from('posts').select('*', { count: 'exact', head: true });

    // Fetch Recent Activity
    const { data: recentBookings } = await supabase.from('bookings').select('*').order('created_at', { ascending: false }).limit(5);

    return (
        <div className="space-y-8">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-serif font-bold text-luxury-black">Dashboard Overview</h1>
                <p className="text-gray-500 mt-1">Welcome back to your control center.</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-l-4 border-l-luxury-gold shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500 uppercase tracking-widest">Total Bookings</CardTitle>
                        <Car className="h-4 w-4 text-luxury-gold" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-gray-900">{bookingsCount || 0}</div>
                        <p className="text-xs text-green-600 mt-1 flex items-center font-medium">
                            <ArrowUpRight className="w-3 h-3 mr-1" /> Updated just now
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500 uppercase tracking-widest">Inquiries</CardTitle>
                        <MessageSquare className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-gray-900">{messagesCount || 0}</div>
                        <p className="text-xs text-gray-400 mt-1">Total messages received</p>
                    </CardContent>
                </Card>

                <Link href="/admin/blog">
                    <Card className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full group">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500 uppercase tracking-widest group-hover:text-purple-600 transition-colors">Blog Posts</CardTitle>
                            <FileText className="h-4 w-4 text-purple-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-gray-900">{postsCount || 0}</div>
                            <div className="flex items-center text-xs text-purple-600 mt-1 font-medium">
                                Manage Content <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </div>

            {/* Quick Actions / Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Bookings Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <h3 className="font-bold text-gray-900 flex items-center gap-2">
                            <Car className="w-4 h-4 text-gray-400" /> Recent Bookings
                        </h3>
                        <Link href="/admin/bookings" className="text-xs font-semibold text-luxury-gold hover:underline">View All</Link>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {recentBookings?.map((booking) => (
                            <div key={booking.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div>
                                    <div className="font-medium text-gray-900 text-sm">{booking.pickup_location} → {booking.destination}</div>
                                    <div className="text-xs text-gray-500">{new Date(booking.created_at).toLocaleDateString()} • {booking.vehicle}</div>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide
                                    ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                                        booking.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                                            'bg-yellow-100 text-yellow-700'}`}>
                                    {booking.status}
                                </span>
                            </div>
                        ))}
                        {recentBookings?.length === 0 && (
                            <div className="p-8 text-center text-gray-400 text-sm">No recent activity.</div>
                        )}
                    </div>
                </div>

                {/* Quick Shortcuts */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                        <h3 className="font-bold text-gray-900">Quick Actions</h3>
                    </div>
                    <div className="p-6 grid grid-cols-2 gap-4">
                        <Link href="/admin/blog/create" className="p-4 border border-gray-200 rounded-lg hover:border-luxury-gold hover:shadow-md transition-all flex flex-col items-center justify-center text-center gap-2 group bg-gray-50 hover:bg-white">
                            <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <FileText className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium text-gray-900">Write New Post</span>
                        </Link>

                        <Link href="/admin/messages" className="p-4 border border-gray-200 rounded-lg hover:border-luxury-gold hover:shadow-md transition-all flex flex-col items-center justify-center text-center gap-2 group bg-gray-50 hover:bg-white">
                            <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium text-gray-900">Check Inbox</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
