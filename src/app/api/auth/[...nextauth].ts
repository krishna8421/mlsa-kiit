import NextAuth, { type NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Code Login",
      credentials: {
        code: { label: "Code", type: "text", placeholder: "Code" },
      },
      authorize: async (credentials) => {
        if (!credentials?.code) {
          return null;
        }

        const user = null;
        // const user = await prisma.user.findUnique({
        //   where: {
        //     code: credentials.code,
        //   },
        // });

        if (!user) {
          return null;
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
};

export default NextAuth(authOptions);
