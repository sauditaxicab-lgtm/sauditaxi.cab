'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Loader2 } from 'lucide-react';
import { deletePost } from '@/actions/blog'; // Ensure this action exists
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface PostActionsProps {
    id: string;
    title: string;
}

export default function PostActions({ id, title }: PostActionsProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        const confirmed = window.confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`);
        if (!confirmed) return;

        setIsDeleting(true);
        try {
            const result = await deletePost(id);
            if (result.success) {
                toast.success("Post deleted successfully");
                router.refresh(); // Refresh the list
            } else {
                toast.error(result.error || "Failed to delete post");
            }
        } catch (error) {
            toast.error("An error occurred");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="flex justify-end gap-2">
            <Link href={`/admin/blog/edit/${id}`}>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                    <Edit className="w-4 h-4" />
                </Button>
            </Link>

            <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-red-50 text-red-500 hover:text-red-600 transition-colors"
                onClick={handleDelete}
                disabled={isDeleting}
            >
                {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
            </Button>
        </div>
    );
}
