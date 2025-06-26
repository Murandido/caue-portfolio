import acceptLanguage from 'accept-language'
import { NextRequest, NextResponse } from 'next/server'
import { schema } from 'next-roots'

export function middleware(request: NextRequest) {
  // skip all requests to /_next/* paths
  if (request.nextUrl.pathname.startsWith('/_next') || /\.\w+$/.test(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // if there's a valid language in the url, dont do anything
  const fullPath = request.nextUrl.pathname;
  const urlParts = fullPath.split('/');
  if (schema.locales.includes(urlParts[1])) {
    return NextResponse.next();
  }
  
  // Get user language from acceptLanguage
  acceptLanguage.languages(schema.locales)
  const userLanguage = acceptLanguage.get(
    request.headers.get('accept-language')
  );

  const routeHref = `/${userLanguage}/${fullPath}`;

  // Redirect the user to the correct locale
  return NextResponse.redirect(
    new URL(routeHref, request.nextUrl.origin)
  );

}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
