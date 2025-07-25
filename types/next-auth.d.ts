/**
 * NextAuth Type Definitions
 *
 * This file contains type definitions for NextAuth.js
 * Volunteers can extend these types to include:
 * - Custom user properties
 * - Session data
 * - JWT payload
 */

import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
      role?: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email: string;
    image?: string;
    role?: string;
  }
}
