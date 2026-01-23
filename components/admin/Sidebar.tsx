'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Car, MessageSquare, FileText, Settings, LogOut } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
        router.refresh();
    };

    const navigation = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Bookings', href: '/admin/bookings', icon: Car },
        { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
        { name: 'Blog', href: '/admin/blog', icon: FileText },
    ];

    return (
        <div className="hidden md:flex flex-col w-64 bg-luxury-black text-white border-r border-white/10">
            {/* Logo Area */}
            <div className="h-16 flex items-center px-6 border-b border-white/10">
                <span className="text-xl font-serif font-bold text-luxury-gold">Saudi Taxi</span>
                <span className="ml-2 text-xs uppercase tracking-widest text-white/50 bg-white/10 px-2 py-0.5 rounded">Admin</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1">
                {navigation.map((item) => {
                    const isActive = pathname === item.href || (pathname !== '/admin' && pathname.startsWith(item.href) && item.href !== '/admin');
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors group ${isActive
                                    ? 'bg-luxury-gold text-black'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-black' : 'text-gray-400 group-hover:text-white'}`} />
                            {item.name}
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-white/10">
                <button
                    onClick={handleSignOut}
                    className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-400 rounded-lg hover:bg-red-500/10 transition-colors"
                >
                    <LogOut className="mr-3 h-5 w-5" />
                    Sign Out
                </button>
            </div>
        </div>
    );
}
