"use client";

import { Trash2, Check, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

interface BookingActionsProps {
    id: string;
    currentStatus: string;
}

export default function BookingActions({ id, currentStatus }: BookingActionsProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const router = useRouter();
    const supabase = createClient();

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this booking?')) return;

        setIsDeleting(true);
        const { error } = await supabase
            .from('bookings')
            .delete()
            .eq('id', id);

        if (error) {
            alert('Error deleting booking: ' + error.message);
        } else {
            router.refresh();
        }
        setIsDeleting(false);
    };

    const handleStatusUpdate = async (newStatus: string) => {
        setIsUpdating(true);
        const { error } = await supabase
            .from('bookings')
            .update({ status: newStatus })
            .eq('id', id);

        if (error) {
            alert('Error updating status: ' + error.message);
        } else {
            router.refresh();
        }
        setIsUpdating(false);
    };

    return (
        <div className="flex items-center justify-end gap-2">
            {/* Status Toggle Buttons */}
            {currentStatus !== 'confirmed' && (
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleStatusUpdate('confirmed')}
                    disabled={isUpdating}
                    className="text-green-600 border-green-200 hover:bg-green-50"
                    title="Mark as Confirmed"
                >
                    <Check className="w-4 h-4" />
                </Button>
            )}

            {currentStatus !== 'cancelled' && (
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleStatusUpdate('cancelled')}
                    disabled={isUpdating}
                    className="text-red-600 border-red-200 hover:bg-red-50"
                    title="Mark as Cancelled"
                >
                    <X className="w-4 h-4" />
                </Button>
            )}

            {/* Delete Button */}
            <Button
                size="sm"
                variant="outline"
                onClick={handleDelete}
                disabled={isDeleting}
                className="text-red-600 border-red-200 hover:bg-red-50"
                title="Delete Booking"
            >
                <Trash2 className="w-4 h-4" />
            </Button>
        </div>
    );
}
