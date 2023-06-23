import { SITE_DESCRIPTION, SITE_NAME } from "@/constants";
import "@/styles/globals.css";
import { ILayoutProps } from "@/types";
import { Metadata } from "next";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
};

// export const metadata: Metadata = {
// 	title: {
// 		default: siteConfig.name,
// 		template: `%s - ${siteConfig.name}`,
// 	},
// 	description: siteConfig.description,
// 	themeColor: [
// 		{ media: "(prefers-color-scheme: light)", color: "white" },
// 		{ media: "(prefers-color-scheme: dark)", color: "black" },
// 	],
// 	icons: {
// 		icon: "/favicon.ico",
// 		shortcut: "/favicon-16x16.png",
// 		apple: "/apple-touch-icon.png",
// 	},
// };

export default function RootLayout({ children }: ILayoutProps) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
