// import { type POSITION, type ROLE } from "@prisma/client";
import { type DefaultSession } from "next-auth";
import { type DefaultUser } from "next-auth";

interface IUser extends DefaultUser {
  // role: ROLE;
  // position: POSITION;
  personalEmail: string;
}

declare module "next-auth" {
  interface User extends IUser {}

  // eslint-disable-next-line no-unused-vars
  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  // eslint-disable-next-line no-unused-vars
  interface JWT extends IUser {}
}
