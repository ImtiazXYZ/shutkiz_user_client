// import createMiddleware from 'next-intl/middleware';
 
// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'bn'],
 
//   // Used when no locale matches
//   defaultLocale: 'en'
// });
 
// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*).*)'] // Apply to all paths except API routes, _next, and static files
// };



import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

// Define the middleware for localization
const localizationMiddleware = createMiddleware({
  locales: ['en', 'bn'],
  defaultLocale: 'en',
});

// Custom middleware to handle both localization and authentication
export async function middleware(request) {
  const response = localizationMiddleware(request);

  // Read the access token from cookies
  const token = request.cookies.get('access_token');

  // Define protected routes where authentication is required
  const protectedRoutes = ['/en/profile','/bn/profile']; // Example protected routes

  // Check if the current route requires authentication
  if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    // If no token is present, redirect to the login page
    if (!token) {
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Proceed with the request if authenticated or route is not protected
  return response;
}

// Apply middleware only to certain paths, excluding API routes and static files
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Paths where middleware will be applied
};
