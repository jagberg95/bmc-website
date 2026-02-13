"use client";
import Link from "next/link";
import Image from "next/image";

const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", icon: "FB" },
  { name: "Instagram", href: "#", icon: "IG" },
  { name: "LinkedIn", href: "#", icon: "LI" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/Icon/BMC_Icon_DkGold.png"
                  alt="BMC Monogram"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-wider text-gold">BAR MOON</span>
            </div>
            <p className="text-gray-300 italic mb-6 max-w-xs">
              "Crafting Texas Legacies with Heart & Grit"
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-deep-blue flex items-center justify-center border border-gold/30 hover:border-accent hover:text-accent transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="text-center md:text-left">
            <h3 className="text-gold font-bold text-lg mb-6 uppercase tracking-widest">Explore</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Our Heart", href: "/our-heart-our-passion" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info / Legal Column */}
          <div className="text-center md:text-left">
            <h3 className="text-gold font-bold text-lg mb-6 uppercase tracking-widest">Info</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-accent transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="inline-block bg-accent hover:bg-gold text-dark-blue font-bold py-2 px-6 rounded transition-colors duration-300">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Bar Moon Contracting LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
