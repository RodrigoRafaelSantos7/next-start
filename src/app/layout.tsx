import type { Viewport } from "next";

import { AppNavbar } from "@/components/app-navbar";
import Providers from "@/components/providers";
import config from "@/config";
import { getSEOTags } from "@/lib/seo";

import "./globals.css";

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSEOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body className="h-screen w-screen">
        <Providers>
          <AppNavbar />
          <main className="flex-grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
