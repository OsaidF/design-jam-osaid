// import User from "@/app/types/user";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { getUserByEmail } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
          const userFound = await getUserByEmail(credentials!.email);
          console.log("User Found: ", userFound);
          if (userFound.length == 0) throw new Error("This email does not exist!");
          console.log('Password: ', credentials!.password)
          const passwordMatch = await bcrypt.compare(
            credentials!.password,
            userFound[0].password
          );
          console.log(passwordMatch);
          if (!passwordMatch) throw new Error("Password is incorrect!");
          return userFound[0];
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }

      if (trigger === "update" && session?.email) {
        token.email = session.email;
      }

      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          _id: u._id,
          firstName: u.firstName,
          lastName: u.lastName,
          dateOfBirth: u.dateOfBirth,
          gender: u.gender,
          country: u.country,
          email: u.email,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          _id: token._id,
          firstName: token.firstName,
          lastName: token.lastName,
          dateOfBirth: token.dateOfBirth,
          gender: token.gender,
          country: token.country,
          email: token.email,
        },
      };
    },
  },
};
