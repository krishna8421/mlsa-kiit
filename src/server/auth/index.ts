import { getServerSession as getServerSessionNextAuth } from "next-auth";
import { authOptions } from "./authOptions";

export const getServerSession = () => {
  return getServerSessionNextAuth(authOptions);
};
