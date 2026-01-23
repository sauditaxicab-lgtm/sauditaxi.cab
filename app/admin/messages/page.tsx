import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { MessageSquare, Mail, Clock } from 'lucide-react';
import MessageActions from '@/components/admin/MessageActions';

export const revalidate = 0;

export default async function MessagesPage() {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) redirect('/admin/login');

    const { data: messages } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold font-serif text-gray-900">Messages Inbox</h1>
                    <p className="text-gray-500">Manage inquiries from specific clients.</p>
                </div>
            </div>

            <div className="grid gap-4">
                {messages?.map((msg) => (
                    <div key={msg.id} className={`bg-white rounded-xl shadow-sm border p-6 transition-all hover:shadow-md ${msg.read ? 'border-gray-200' : 'border-l-4 border-l-luxury-gold border-y-gray-200 border-r-gray-200 bg-orange-50/10'}`}>
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Sender Info */}
                            <div className="w-full md:w-64 flex-shrink-0">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-lg">
                                        {msg.name?.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{msg.name}</h3>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <Mail className="w-3 h-3 mr-1" />
                                            {msg.email}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-400 mt-3 flex items-center">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {new Date(msg.created_at).toLocaleString()}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2 text-luxury-gold">{msg.subject}</h4>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                            </div>

                            {/* Actions */}
                            <div className="flex md:flex-col justify-end gap-2 pt-4 md:pt-0 md:pl-4 md:border-l border-gray-100">
                                <MessageActions id={msg.id} />
                            </div>
                        </div>
                    </div>
                ))}
                {messages?.length === 0 && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center text-gray-500 flex flex-col items-center">
                        <MessageSquare className="w-12 h-12 text-gray-300 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">No Messages</h3>
                        <p>Your inbox is empty.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
