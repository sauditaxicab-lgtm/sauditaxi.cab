import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    // Protected Admin Routes
    if (request.nextUrl.pathname.startsWith('/admin')) {
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll() {
                        return request.cookies.getAll()
                    },
                    setAll(cookiesToSet) {
                        cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                        supabaseResponse = NextResponse.next({
                            request,
                        })
                        cookiesToSet.forEach(({ name, value, options }) =>
                            supabaseResponse.cookies.set(name, value, options)
                        )
                    },
                },
            }
        )

        // IMPORTANT: Avoids writing new cookies to response if header is already sent
        // but in middleware we always want to refresh session
        const {
            data: { user },
        } = await supabase.auth.getUser()

        // Allow access to login page even if not logged in
        if (request.nextUrl.pathname === '/admin/login') {
            // If already logged in, redirect to dashboard
            if (user) {
                return NextResponse.redirect(new URL('/admin', request.url));
            }
            return supabaseResponse;
        }

        // If not logged in and trying to access other /admin routes, redirect to login
        if (!user) {
            return NextResponse.redirect(new URL('/admin/login', request.url))
        }
    }

    return supabaseResponse
}
