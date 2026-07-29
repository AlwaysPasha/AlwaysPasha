import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlwaysPasha — Building Products That Make Life Simpler",
  description:
    "Pasha is an AI builder and automation developer crafting AI-powered tools and smart automations that solve real-world problems. Also a part-time photographer.",
  keywords: [
    "AlwaysPasha",
    "Pasha",
    "AI Builder",
    "Automation Developer",
    "Web Developer",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-bg text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
