import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { AppFooter } from "@/components/app-footer";
import { AppNavbar } from "@/components/app-navbar";
import { Providers } from "@/components/providers";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Start V3",
  description: "A simple yet powerful starter for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen w-screen antialiased`}
      >
        <Providers>
          <AppNavbar />
          <main className="flex-grow">{children}</main>
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
