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
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

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
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user || !(user as any).password) return null;
        const isValid = await bcrypt.compare(
          credentials.password,
          (user as any).password,
        );
        if (!isValid) return null;
        return {
          id: String(user.id),
          email: user.email ? String(user.email) : "",
          name: user.name ? String(user.name) : "",
        };
      },
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
    signIn: "/login",
    signOut: "/logout",
    error: "/error",
    verifyRequest: "/verify-request",
    newUser: "/new-user",
  },

  // IMPORTANT: Set NEXTAUTH_SECRET in production for security
  // secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
