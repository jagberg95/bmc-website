// app/layout.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css'; // Ensure globals.css is imported

// Assuming your logo is available in public/images/logo/
const LOGO_PATH = '/images/logo/bmc-logo.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Heart', href: '/our-heart-our-passion' }, // Link to the new page
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false); // State for mobile view

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize(); // Set initial state
      window.addEventListener('resize', handleResize);

      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) { // Hide if scrolling down and past initial threshold
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [lastScrollY]);

  // Basic Cursor-at-top logic for header reappearance
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      // Check if mouse is near the top of the viewport
      if (e.clientY < 50) { // Threshold in pixels from the top
        setIsVisible(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out p-4 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isMobile ? 'bg-dark-blue' : ''}`} // Apply background for mobile or if desired
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <Image
              src={LOGO_PATH}
              alt="Bar Moon Contracting Logo"
              width={120}
              height={50}
              priority
              className="object-contain" // Ensure logo scales nicely
            />
          </a>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} legacyBehavior>
              <a className="text-lg font-semibold hover:text-gold-primary transition-colors duration-200">
                {link.name}
              </a>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation (Hamburger Button) */}
        {isMobile && (
          <button className="md:hidden text-light-neutral text-3xl cursor-pointer" aria-label="Open mobile menu">
            &#9776; {/* Hamburger icon */}
          </button>
        )}
      </div>
    </header>
  );
}

// RootLayout applies global styles and structure
// Assuming Geist fonts are not strictly mandatory for this structure,
// but they are part of default create-next-app setup.
// We'll ensure body classes are applied correctly.
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

// Font definitions (keeping these as they are from default setup)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bar Moon Contracting", // Updated title
  description: "Central Texas General Contracting and Custom Home Building", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Applying global styles and custom fonts */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header /> {/* Including the Header component */}
        <main> {/* Wrapping children in a main tag potentially */}
          {children}
        </main>
        {/* Footer would typically be placed here if it's a global element */}
      </body>
    </html>
  );
}
