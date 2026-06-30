import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Muhammad Ali Saqib | Backend & AI Systems Builder",
  description:
    "Portfolio of Muhammad Ali Saqib, a CS undergraduate at NUST building backend-heavy AI products, RAG pipelines, APIs, and database-backed software.",
  authors: [{ name: "Muhammad Ali Saqib" }],
  creator: "Muhammad Ali Saqib",
  openGraph: {
    title: "Muhammad Ali Saqib | Backend & AI Systems Builder",
    description:
      "Backend and AI engineering portfolio focused on RAG pipelines, APIs, databases, and production AI products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
