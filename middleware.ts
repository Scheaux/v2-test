import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/very_fat_page', '/private_page'];

export async function middleware(request: NextRequest) {
  const hasToken = request.cookies.has('access_token');
  if (
    hasToken === false &&
    protectedRoutes.includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
