'use client';

import Link from 'next/link';
import React, { useState, useRef, useEffect, useCallback } from 'react';

/* ────────────────────────────── Data ────────────────────────────── */

const SERVICES = [
  {
    slug: 'custom-homes',
    title: 'Custom Homes',
    tagline: 'Your Dream, Built from the Ground Up',
    description:
      'Design and build your dream home from the ground up with Central Texas integrity.',
    expandedContent:
      'From initial concept through final walkthrough, we handle every phase of custom home construction. Our five-generation legacy means deep understanding of Central Texas soil, climate, and building codes—resulting in homes that are as durable as they are beautiful.',
    highlights: [
      'Full design-build service',
      'Central Texas climate expertise',
      'Premium materials & finishes',
      'Transparent budgeting',
    ],
    link: '/services/custom-homes',
    icon: '🏗️',
  },
  {
    slug: 'home-renovations',
    title: 'Upgrades & Renovations',
    tagline: 'Transform Your Space, Elevate Your Life',
    description:
      'Modernize your living space with expert renovations, from kitchens to full floor plans.',
    expandedContent:
      "Whether it\u2019s a kitchen remodel, bathroom upgrade, new flooring, or a complete interior transformation\u2014we bring clear planning, quality materials, and workmanship built to last. Every renovation is handled with a builder\u2019s eye for structure, flow, and long-term value.",
    highlights: [
      'Kitchens & Bathrooms',
      'Flooring installations',
      'Layout modifications',
      'Whole-house refreshes',
    ],
    link: '/services/home-renovations',
    icon: '🔨',
  },
  {
    slug: 'outdoor-living',
    title: 'Outdoor Living',
    tagline: 'Your Backyard, Built Right',
    description:
      'Decks, patios, and landscapes designed to create your perfect outdoor oasis.',
    expandedContent:
      "We design and build outdoor spaces made for Texas living\u2014accounting for clay soils, intense heat, drainage, and durability. From custom decks and patios to full landscape design and installation, we create spaces you\u2019ll actually use and enjoy year-round.",
    highlights: [
      'Deck builds & refinishing',
      'Landscape design & install',
      'Patios & hardscapes',
      'Drainage solutions',
    ],
    link: '/services/outdoor-living',
    icon: '🌿',
  },
  {
    slug: 'home-repairs',
    title: 'Home Repairs',
    tagline: 'Done Right, the First Time',
    description:
      'Honest, high-quality repairs for electrical, plumbing, drywall, and more.',
    expandedContent:
      'Not every issue needs a renovation—but every repair deserves to be done correctly. We fix problems at the source, not just patch them over. From storm damage and rot to trim, fixtures, and flooring—we handle it with the same standards we bring to custom builds.',
    highlights: [
      'Electrical & plumbing',
      'Drywall & trim',
      'Storm & water damage',
      'Doors, windows & more',
    ],
    link: '/services/home-repairs',
    icon: '🔧',
  },
];

/* ────────────────────────────── Hook: detect touch device ─────── */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isMobile;
}

/* ────────────────────────────── Component ────────────────────────── */

export default function HomePageServices() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMobile = useIsMobile();

  /* Clear any pending close when entering a tile or the panel */
  const cancelClose = useCallback(() => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  }, []);

  /* Delay closing so the cursor can travel from tile → panel */
  const scheduleClose = useCallback(() => {
    leaveTimerRef.current = setTimeout(() => setActiveSlug(null), 120);
  }, []);

  const handleTileClick = useCallback((slug: string) => {
    if (isMobile) {
      setActiveSlug((prev) => (prev === slug ? null : slug));
    }
  }, [isMobile]);

  const activeIdx = SERVICES.findIndex((s) => s.slug === activeSlug);
  const activeService = activeIdx >= 0 ? SERVICES[activeIdx] : null;

  return (
    <section className="pt-20 pb-16 lg:pb-72 px-4 md:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-accent mb-4 uppercase tracking-widest">
          Our Services
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-sm md:text-base">
          From custom builds to quick repairs, we bring Texas craftsmanship to
          every project.{' '}
          <span className="hidden lg:inline">Hover over a service to learn more.</span>
          <span className="lg:hidden">Tap a service to learn more.</span>
        </p>

        {/* ── Tile grid ─────────────────────────────────────────── */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {SERVICES.map((service) => {
              const isActive = activeSlug === service.slug;
              return (
                <div key={service.slug} className="relative">
                  <div
                    className="relative"
                    onMouseEnter={!isMobile ? () => { cancelClose(); setActiveSlug(service.slug); } : undefined}
                    onMouseLeave={!isMobile ? scheduleClose : undefined}
                    onClick={() => handleTileClick(service.slug)}
                  >
                    <div
                      className={`
                        relative z-10 h-full flex flex-col items-center text-center
                        p-5 md:p-6 rounded-xl cursor-pointer
                        border transition-all duration-300 ease-out
                        ${isActive
                          ? 'bg-deep-blue border-accent shadow-2xl shadow-accent/25 lg:scale-[1.03] z-20'
                          : 'bg-deep-blue/60 border-white/10 hover:border-accent/40 hover:shadow-lg'}
                      `}
                    >
                      <h3
                        className={`font-bold text-base md:text-lg mb-2 transition-colors duration-200 ${
                          isActive ? 'text-accent' : 'text-white'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      {/* Mobile chevron indicator */}
                      <span className={`lg:hidden mt-3 text-accent text-xs transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}>▾</span>
                    </div>
                  </div>

                  {/* Mobile inline detail panel (inside the tile flow) */}
                  {isMobile && isActive && activeService && (
                    <div className="mt-3 bg-deep-blue border border-accent rounded-xl p-5 shadow-xl shadow-accent/10 animate-in">
                      <p className="text-accent font-bold text-base mb-1">{activeService.title}</p>
                      <p className="text-accent/70 font-semibold text-xs mb-3 uppercase tracking-wider">{activeService.tagline}</p>
                      <p className="text-gray-200 leading-relaxed text-sm mb-4">{activeService.expandedContent}</p>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-5">
                        {activeService.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={activeService.link}
                        className="inline-block bg-accent hover:bg-gold text-primary font-bold text-sm uppercase tracking-wider py-2.5 px-5 rounded-lg transition-colors duration-200"
                      >
                        View Full Details &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop detail panel (absolutely positioned below grid) */}
          {!isMobile && (
            <DetailPanel
              ref={panelRef}
              service={activeService}
              activeIdx={activeIdx}
              onEnter={cancelClose}
              onLeave={scheduleClose}
            />
          )}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── Detail Panel Sub-component (Desktop) ───── */

type DetailPanelProps = {
  service: (typeof SERVICES)[number] | null;
  activeIdx: number;
  onEnter: () => void;
  onLeave: () => void;
};

const DetailPanel = React.forwardRef<HTMLDivElement, DetailPanelProps>(
  function DetailPanel({ service, activeIdx, onEnter, onLeave }, ref) {
    const innerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (innerRef.current && service) {
        setHeight(innerRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }, [service]);

    const isOpen = !!service;

    return (
      <div
        ref={ref}
        className="absolute left-0 right-0 z-30"
        style={{ top: 'calc(100% + 8px)' }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{
            maxHeight: isOpen ? height + 40 : 0,
            opacity: isOpen ? 1 : 0,
            transition: 'max-height 0.35s ease, opacity 0.25s ease',
          }}
        >
          <div
            ref={innerRef}
            className="bg-deep-blue border border-t-0 border-accent rounded-b-xl p-6 md:p-8 shadow-2xl shadow-accent/20"
          >
            {service && (
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="flex-1">
                  <p className="text-accent font-bold text-lg mb-1">
                    {service.title}
                  </p>
                  <p className="text-accent/70 font-semibold text-sm mb-3 uppercase tracking-wider">
                    {service.tagline}
                  </p>
                  <p className="text-gray-200 leading-relaxed text-sm">
                    {service.expandedContent}
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mb-5">
                    {service.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="inline-block self-start bg-accent hover:bg-gold text-primary font-bold text-sm uppercase tracking-wider py-2.5 px-5 rounded-lg transition-colors duration-200"
                  >
                    View Full Details &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);