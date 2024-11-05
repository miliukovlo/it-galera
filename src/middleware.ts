import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const session = request.cookies.get('session');
    const role = request.cookies.get('role');

    if (session && request.nextUrl.pathname === '/auth') {
        const redirectUrl = role?.value === "teacher" ? '/schedule' : '/users';
        return NextResponse.redirect(new URL(redirectUrl, request.url));
    }

    if (!session && (
        request.nextUrl.pathname === '/dashboard' || 
        request.nextUrl.pathname === '/users' || 
        request.nextUrl.pathname === '/users/:id' || 
        request.nextUrl.pathname === '/create' || 
        request.nextUrl.pathname === '/schedule' ||
        request.nextUrl.pathname === "/group/:id"
    )) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }

    if (role?.value === "teacher" && request.nextUrl.pathname === "/create") {
        return NextResponse.redirect(new URL('/schedule', request.url)); 
    }
    if (role?.value === "admin" && (
        request.nextUrl.pathname === "/dashboard" || 
        request.nextUrl.pathname === "/schedule"
    )) {
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
        "/schedule",
        "/group/:id"
    ]
}
