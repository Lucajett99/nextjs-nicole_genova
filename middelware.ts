import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Forza HTTPS
    if (
        !request.nextUrl.pathname.includes('.') && // Evita file statici
        !request.nextUrl.pathname.startsWith('/_next') && // Evita file di sistema Next.js
        request.headers.get('x-forwarded-proto') !== 'https'
    ) {
        return NextResponse.redirect(
            `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
            301
        )
    }
    return NextResponse.next()
}