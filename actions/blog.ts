'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function createPost(data: any) {
    const supabase = await createClient();

    // Check Auth
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        const { error } = await supabase.from('posts').insert([{
            title: data.title,
            slug: data.slug,
            excerpt: data.excerpt,
            content: data.content,
            cover_image: data.coverImage,
            published: true
        }]);

        if (error) {
            console.error('Error creating post:', error);
            return { success: false, error: error.message };
        }

        revalidatePath('/blog');
        revalidatePath('/admin/blog');
        return { success: true };
    } catch (err: any) {
        return { success: false, error: err.message };
    }
}

export async function deletePost(id: string) {
    const supabase = await createClient();

    // Check Auth
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        const { error } = await supabase.from('posts').delete().eq('id', id);
        if (error) throw error;
        revalidatePath('/blog');
        revalidatePath('/admin/blog');
        return { success: true };
    } catch (err: any) {
        return { success: false, error: err.message };
    }
}
