import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

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

  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
