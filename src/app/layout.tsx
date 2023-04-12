import { SITE_DESCRIPTION, SITE_NAME } from "@/constants";
import "@/styles/globals.css";
import { ILayoutProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }: ILayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
