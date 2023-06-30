import { env } from "@/env/server.mjs";
import { JWT, decode, encode } from "next-auth/jwt";

const secret = env.NEXTAUTH_SECRET;

export const decodeJWT = async (token: string) => {
  const decoded = await decode({ token, secret });
  return decoded;
};

// maxAge @default 30 * 24 * 60 * 60 = 30 days
export const encodeJWT = async (token: JWT, maxAge: number = 30 * 24 * 30 * 60) => {
  const encoded = await encode({ token, secret, maxAge });
  return encoded;
};
