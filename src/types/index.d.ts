import { ReactNode } from "react";
import { User } from "@prisma/client";

export interface ILayoutProps {
  children: ReactNode;
}

export type UserWithoutPassword = Omit<User, "password">;
