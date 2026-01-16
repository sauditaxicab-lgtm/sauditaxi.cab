import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const supabase = await createClient();

    await supabase.auth.signOut();

    const url = new URL(request.url)
    return NextResponse.redirect(new URL('/admin/login', url.origin), {
        status: 302,
    })
}
