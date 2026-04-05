'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LOGO_PATH = '/images/Icon/BMC_Icon_DkGold.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Our Heart', href: '/our-heart-our-passion' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

const serviceLinks = [
  { name: 'Upgrades & Renovations', href: '/services/home-renovations' },
  { name: 'Home Repairs', href: '/services/home-repairs' },
  { name: 'Outdoor Living', href: '/services/outdoor-living' },
  { name: 'Custom Homes', href: '/services/custom-homes' },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimerRef = useState<ReturnType<typeof setTimeout> | null>(null);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 50) {
        setIsVisible(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /* Services dropdown hover helpers */
  const openServices = useCallback(() => {
    if (servicesTimerRef[0]) clearTimeout(servicesTimerRef[0]);
    setServicesOpen(true);
  }, []);

  const closeServices = useCallback(() => {
    const timer = setTimeout(() => setServicesOpen(false), 150);
    servicesTimerRef[0] = timer;
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#101d43] bg-opacity-95 backdrop-blur-sm border-b border-white/10 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setServicesOpen(false); }}
    >
      <div
        className={`container mx-auto flex flex-nowrap min-w-0 items-center justify-between px-2 sm:px-4 md:px-6 transition-all duration-300 ${
          isHovered ? 'py-5' : 'py-2.5'
        }`}
      >
        {/* Logo — grows on hover, shrinks on mobile */}
        <Link href="/" className="flex items-center min-w-0 flex-shrink-0">
          <Image
            src={LOGO_PATH}
            alt="Bar Moon Contracting Logo"
            width={isHovered ? 55 : 36}
            height={isHovered ? 55 : 36}
            priority
            className="object-contain transition-all duration-300"
            style={{ width: isHovered ? 55 : 36, height: isHovered ? 55 : 36 }}
          />
          <span className="ml-2 text-sm xs:text-base sm:text-lg md:text-xl font-bold tracking-wider text-gold-primary hidden xs:inline truncate max-w-[120px] sm:max-w-none">BAR MOON CONTRACTING</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 sm:space-x-4 md:space-x-8 min-w-0 flex-shrink">
          {navLinks.map((link) =>
            link.name === 'Services' ? (
              /* Services with dropdown */
              <div
                key={link.name}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <Link
                  href={link.href}
                  className="text-white text-base sm:text-lg font-medium hover:text-[#d6ad30] transition-colors duration-200"
                >
                  Services
                  <span className={`ml-1 inline-block text-xs transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </Link>

                {/* Dropdown panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    servicesOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="bg-[#101d43] border border-white/10 rounded-lg shadow-2xl shadow-black/40 py-2 min-w-[220px]">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-5 py-2.5 text-sm text-white hover:bg-deep-blue hover:text-[#d6ad30] transition-colors duration-150"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-base sm:text-lg font-medium hover:text-[#d6ad30] transition-colors duration-200"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center justify-center text-white text-3xl rounded-full w-12 h-12 min-w-[3rem] min-h-[3rem] cursor-pointer hover:text-[#d6ad30] focus:outline-none focus:ring-2 focus:ring-[#d6ad30] transition-colors"
          aria-label="Toggle mobile menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#101d43] border-t border-[#d6ad30] px-3 xs:px-4 py-5 xs:py-6 w-full max-w-full overflow-x-hidden">
          <div className="flex flex-col space-y-5 xs:space-y-6">
            {navLinks.map((link) =>
              link.name === 'Services' ? (
                <div key={link.name} className="flex flex-col space-y-2 xs:space-y-3">
                  <Link
                    href={link.href}
                    className="text-white text-lg xs:text-xl font-medium hover:text-[#d6ad30] transition-colors duration-200 border-b border-white/10 pb-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <div className="pl-2 xs:pl-4 flex flex-col space-y-2 xs:space-y-3">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="text-gray-300 text-base xs:text-lg hover:text-[#d6ad30] transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-lg xs:text-xl font-medium hover:text-[#d6ad30] transition-colors duration-200 border-b border-white/10 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
