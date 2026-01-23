"use client";

import { Trash2, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

interface MessageActionsProps {
    id: string;
}

export default function MessageActions({ id }: MessageActionsProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isMarking, setIsMarking] = useState(false);
    const router = useRouter();
    const supabase = createClient();

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this message?')) return;

        setIsDeleting(true);
        const { error } = await supabase
            .from('contact_submissions')
            .delete()
            .eq('id', id);

        if (error) {
            alert('Error deleting message: ' + error.message);
        } else {
            router.refresh();
        }
        setIsDeleting(false);
    };

    const handleMarkAsRead = async () => {
        setIsMarking(true);
        const { error } = await supabase
            .from('contact_submissions')
            .update({ read: true })
            .eq('id', id);

        if (error) {
            alert('Error marking as read: ' + error.message);
        } else {
            router.refresh();
        }
        setIsMarking(false);
    };

    return (
        <div className="flex items-center justify-end gap-2">
            {/* Mark as Read */}
            <Button
                size="sm"
                variant="outline"
                onClick={handleMarkAsRead}
                disabled={isMarking}
                className="text-green-600 border-green-200 hover:bg-green-50"
                title="Mark as Read"
            >
                <Check className="w-4 h-4" />
            </Button>

            {/* Delete Button */}
            <Button
                size="sm"
                variant="outline"
                onClick={handleDelete}
                disabled={isDeleting}
                className="text-red-600 border-red-200 hover:bg-red-50"
                title="Delete Message"
            >
                <Trash2 className="w-4 h-4" />
            </Button>
        </div>
    );
}
