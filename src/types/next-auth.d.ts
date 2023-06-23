import { type POSITION, type ROLE } from "@prisma/client";
import { type DefaultSession } from "next-auth";
import { type DefaultUser } from "next-auth";

interface IUser extends DefaultUser {
  role: ROLE;
  position: POSITION;
}

declare module "next-auth" {
  interface User extends IUser {}

  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
