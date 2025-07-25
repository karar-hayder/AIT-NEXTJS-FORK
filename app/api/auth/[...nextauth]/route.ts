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

import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

// Warn if required Google OAuth env vars are missing
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.warn(
    "[NextAuth] GOOGLE_CLIENT_ID and/or GOOGLE_CLIENT_SECRET are not set. Google OAuth will not work correctly.",
  );
}

export const authOptions: AuthOptions = {
  // Configure authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  // Configure session handling
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  // Configure callbacks
  callbacks: {
    async session({ session, token }) {
      // Attach the user's id and email from the JWT token to the session object
      session.user = {
        ...session.user,
        id: token.sub ?? "",
        email: token.email ?? "",
      };
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // If user is logging in for the first time, add their id and email to the token
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
  },

  // Configure pages
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/new-user",
  },

  // IMPORTANT: Set NEXTAUTH_SECRET in production for security
  // secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
