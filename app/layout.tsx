// app/layout.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false; // Basic check for mobile

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) { // Hide if scrolling down and past initial threshold
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Add logic for cursor at top to reappear header (more complex, often involves mousemove listener)
  // For simplicity, we'll rely on scroll up for now.

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
              width={120} // Adjust size as needed
              height={50} // Adjust size as needed
              priority
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

        {/* Mobile Navigation (Hamburger or basic links if no hamburger lib) */}
        {isMobile && (
          <button className="text-light-neutral text-3xl" /* Hamburger icon */>
            {/* Placeholder for hamburger icon. Actual implementation requires more complex state management or a library. */}
            ☰
          </button>
        )}
      </div>
    </header>
  );
}

// Appears in RootLayout to apply global styles and provide layout context
export default function RootLayout({
  children,
}: Readonly<{
  children: React.React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply Tailwind via globals.css */}
      <body className={`bg-dark-blue text-light-neutral antialiased`}>
        <Header /> {/* Include the Header component here */}
        {children}
        {/* Footer would typically go here or within children components */}
      </body>
    </html>
  );
}
