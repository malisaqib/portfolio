import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile, siteDescription } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Muhammad Ali Saqib \u2014 Backend & AI Systems";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Muhammad Ali Saqib",
    "Backend Development",
    "AI Engineering",
    "RAG pipelines",
    "FastAPI",
    "PostgreSQL",
    "Supabase",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    siteName: profile.name,
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
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
