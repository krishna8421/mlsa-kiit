import { comparePassword } from "@/lib/bcrypt";
import { prisma } from "@/server/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log({ credentials });

        if (!credentials?.email || !credentials?.password) {
          if (!credentials?.email && !credentials?.password)
            throw new Error("Email and Password is required");
          if (!credentials?.email) throw new Error("Email is required");
          if (!credentials?.password) throw new Error("Password is required");
        }

        const { email, password } = credentials;
        let user;
        try {
          user = await prisma.user.findUnique({
            where: {
              personalEmail: email,
            },
          });
        } catch (_err) {
          throw new Error("Something went wrong. Please try again.");
        }

        if (!user) {
          throw new Error("User not found. Please Register.");
        }

        const isValid = await comparePassword(password, user.password);
        if (!isValid) {
          throw new Error("Wrong credentials. Please try again.");
        }
        return user;
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.role = user.role;
  //       token.position = user.position;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     if (token && session.user) {
  //       session.user.role = token.role;
  //       session.user.position = token.position;
  //     }
  //     return session;
  //   },
  // },
  pages: {
    // signIn: "/admin/auth",
    signIn: "*",
  },
  // events: {
  //   async signIn(message) {
  //     /* on successful sign in */
  //     console.log({ signIn: message });
  //   },
  //   async signOut(message) {
  //     /* on sign out */
  //     console.log({ signOut: message });
  //   },
  //   async createUser(message) {
  //     /* user created */
  //     console.log({ createUser: message });
  //   },
  //   async updateUser(message) {
  //     /* user updated - e.g. their email was verified */
  //     console.log({ updateUser: message });
  //   },
  //   async linkAccount(message) {
  //     /* account (e.g. Twitter) linked to a user */
  //     console.log({ linkAccount: message });
  //   },
  //   async session(message) {
  //     /* session is active */
  //     console.log({ session: message });
  //   },
  // },
};
