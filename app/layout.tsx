import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { themeInitScript } from "@/lib/theme-script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlwaysPasha — Pasha",
  description:
    "Pasha — working across SAP Security, AI Automation, and AWS Cloud, with a focus on secure systems, intelligent automation, and practical technology.",
  metadataBase: new URL("https://alwayspasha.com"),
  openGraph: {
    title: "AlwaysPasha — Pasha",
    description:
      "Working across SAP Security, AI Automation, and AWS Cloud, with a focus on secure systems, intelligent automation, and practical technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
