import { NextRequest, NextResponse } from "next/server";
// import { updateSession } from "./authLib";

export async function middleware(request: NextRequest) {
    const session = request.cookies.get('session')
    if (session && request.nextUrl.pathname === '/auth') {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    } else if (!session && (
        request.nextUrl.pathname === '/dashboard' ||
        request.nextUrl.pathname === '/users' ||
        request.nextUrl.pathname === '/users:id'
    )) {
        return NextResponse.redirect(new URL('/auth', request.url))
    }
    // return await updateSession(request);
}

export const config = {
    matcher: [
        "/auth",
        "/dashboard",
        "/users",
        "/users/:id"
    ]
}