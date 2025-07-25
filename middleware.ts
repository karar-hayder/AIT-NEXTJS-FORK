/**
 * Authentication Middleware
 * 
 * This middleware protects routes that require authentication.
 * Volunteers can implement:
 * - Route protection logic
 * - Role-based access control
 * - Session validation
 * - Redirect handling
 */

import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req: Request) {
    // Add custom middleware logic here
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }: { token?: unknown }) => !!token,
    },
  }
);

// Protect all routes under /dashboard
export const config = {
  matcher: ["/dashboard/:path*"],
};