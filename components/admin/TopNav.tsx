'use client';

import { Bell, Search, User } from 'lucide-react';

export default function TopNav({ email }: { email: string }) {
    return (
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 md:px-8">
            {/* Left: Search (Placeholder for now) */}
            <div className="flex-1 max-w-lg hidden md:block">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search bookings or messages..."
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-luxury-gold focus:border-luxury-gold sm:text-sm transition-colors"
                    />
                </div>
            </div>

            {/* Mobile Title (visible only on mobile) */}
            <div className="md:hidden font-serif font-bold text-luxury-black">Admin Panel</div>

            {/* Right: Actions */}
            <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </button>

                <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                    <div className="text-right hidden md:block">
                        <div className="text-sm font-medium text-gray-900">Administrator</div>
                        <div className="text-xs text-gray-500">{email}</div>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-luxury-black flex items-center justify-center text-luxury-gold font-bold border-2 border-luxury-gold/20">
                        {email[0].toUpperCase()}
                    </div>
                </div>
            </div>
        </header>
    );
}
