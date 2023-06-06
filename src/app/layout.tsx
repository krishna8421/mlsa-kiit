import { SITE_DESCRIPTION, SITE_NAME } from "@/constants";
import "@/styles/globals.css";
import { ILayoutProps } from "@/types";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }: ILayoutProps) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
