import Sidebar from '@/components/admin/Sidebar';
import TopNav from '@/components/admin/TopNav';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import NotificationListener from '@/components/admin/NotificationListener';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Shared Admin Auth Check
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/admin/login');
    }

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Global Listeners */}
            <NotificationListener />

            {/* Remote Sidebar Component */}
            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <TopNav email={user.email || 'Admin'} />

                <main className="flex-1 overflow-auto p-6 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
