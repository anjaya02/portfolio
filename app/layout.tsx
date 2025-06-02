import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anjaya Induwara - Full Stack Developer Portfolio",
  description:
    "Passionate full-stack developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch!",
  keywords: [
    "developer",
    "portfolio",
    "react",
    "nextjs",
    "full-stack",
    "web development",
  ],
  authors: [{ name: "Anjaya Induwara" }],
  openGraph: {
    title: "Anjaya Induwara - Full Stack Developer Portfolio",
    description:
      "Passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
