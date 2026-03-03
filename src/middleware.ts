import { NextRequest, NextResponse } from 'next/server'
import { updateSession, decrypt } from './lib/session'

// Define which routes to protect
const protectedRoutes = ['/admin', '/admin/blog', '/admin/iletisim']
const publicRoutes = ['/giris']

export default async function middleware(req: NextRequest) {
    // Check if current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route))
    const isPublicRoute = publicRoutes.includes(path)

    // Get session
    const cookie = req.cookies.get('session')?.value
    let session = null
    if (cookie) {
        try {
            session = await decrypt(cookie)
        } catch (e) {
            session = null
        }
    }

    // Redirect to /giris if the user is not authenticated
    if (isProtectedRoute && !session?.username) {
        return NextResponse.redirect(new URL('/giris', req.nextUrl))
    }

    // Redirect to /admin if the user is authenticated and trying to access login
    if (isPublicRoute && session?.username && !req.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }

    // Next response with updated session cookie if needed
    if (session) {
        return await updateSession(req)
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
