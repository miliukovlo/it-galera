import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const session = request.cookies.get('session');
    const role = request.cookies.get('role');

    if (session && request.nextUrl.pathname === '/auth') {
        if (role?.value === "teacher") {
            return NextResponse.redirect(new URL('/schedule', request.url));
        } else if (role?.value === "admin") {
            return NextResponse.redirect(new URL('/users', request.url));
        }
    } else if (!session && (
        request.nextUrl.pathname === '/dashboard' || 
        request.nextUrl.pathname === '/users' || 
        request.nextUrl.pathname === '/users:id' || 
        request.nextUrl.pathname === '/create' || 
        request.nextUrl.pathname === '/schedule'
    )) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }
    
    if (role?.value === "teacher" && request.nextUrl.pathname === "/create") {
        return NextResponse.redirect(new URL('/schedule', request.url)); 
    } else if (
        role?.value === "admin" && 
        (request.nextUrl.pathname === "/dashboard" || request.nextUrl.pathname === "/schedule")
    ) {
        return NextResponse.redirect(new URL('/users', request.url));
    }
}

export const config = {
    matcher: [
        "/auth",
        "/dashboard",
        "/users",
        "/users/:id",
        "/create",
        "/schedule"
    ]
}
