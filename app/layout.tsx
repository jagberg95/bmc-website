
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // Import Header client component
import Footer from "./components/Footer"; // Import Footer component (new)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bar Moon Contracting",
  description: "Central Texas General Contracting and Custom Home Building",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary text-white min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer /> {/* Global footer across all pages */}
      </body>
    </html>
  );
}
