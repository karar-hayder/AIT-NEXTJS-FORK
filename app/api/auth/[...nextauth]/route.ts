/**
 * NextAuth.js API Route
 * 
 * This file handles all authentication requests.
 * Volunteers can implement:
 * - Custom authentication providers
 * - Session handling
 * - JWT configuration
 * - Callbacks for user data
 */

import NextAuth from "next-auth"
import { AuthOptions } from "next-auth"

export const authOptions: AuthOptions = {
  // Configure authentication providers
  providers: [
    // Add your authentication providers here
    // Example:
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],

  // Configure session handling
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  // Configure callbacks
  callbacks: {
    // Add your callbacks here
    // Example:
    // async session({ session, token }) {
    //   return session
    // },
    // async jwt({ token, user }) {
    //   return token
    // },
  },

  // Configure pages
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user'
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } 