import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        request.cookies.set(name, value)
                    );
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    const {
        data: { user },
    } = await supabase.auth.getUser();

    // ROUTE PROTECTION LOGIC
    const path = request.nextUrl.pathname;

    // 1. Authenticated users trying to access Welcome page ('/') -> Redirect to /home
    if (user && path === "/") {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    // 2. Unauthenticated users trying to access protected routes -> Redirect to Welcome ('/')
    // Protected routes: start with /home (and others later)
    if (!user && path.startsWith("/home")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return response;
}
