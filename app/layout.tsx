import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pasha — Security, AI & Cloud Builder",
  description:
    "Pasha builds secure systems, AI-powered automation, and modern digital experiences across SAP Security, cloud infrastructure, and business systems.",
  metadataBase: new URL("https://alwayspasha.com"),
  openGraph: {
    title: "Pasha — Security, AI & Cloud Builder",
    description:
      "Building secure systems, AI solutions & modern digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
