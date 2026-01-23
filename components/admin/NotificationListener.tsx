'use client';

import { useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function NotificationListener() {
    const router = useRouter();
    const supabase = createClient();

    // Sound effect URL (Simple ding)
    const playNotificationSound = () => {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.log('Audio play failed', e));
        } catch (e) {
            console.error('Sound error', e);
        }
    };

    useEffect(() => {
        // Channel for realtime updates
        const channel = supabase
            .channel('admin-dashboard')
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'bookings'
                },
                (payload) => {
                    console.log('New booking!', payload);
                    playNotificationSound();
                    toast.success('🚗 New Booking Received!', {
                        description: `From: ${payload.new.pickup_location} | To: ${payload.new.destination}`,
                        duration: 5000,
                        action: {
                            label: 'View',
                            onClick: () => router.push('/admin/bookings')
                        }
                    });
                    router.refresh();
                }
            )
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'contact_submissions'
                },
                (payload) => {
                    console.log('New message!', payload);
                    playNotificationSound();
                    toast.success('💬 New Message Received!', {
                        description: `From: ${payload.new.name} | Subject: ${payload.new.subject}`,
                        duration: 5000,
                        action: {
                            label: 'View',
                            onClick: () => router.push('/admin/messages')
                        }
                    });
                    router.refresh();
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [router, supabase]);

    return null; // Invisible component
}
