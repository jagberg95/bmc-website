'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is loaded for scrubbing
    video.pause();

    const handleScroll = () => {
      if (!video || !video.duration || isNaN(video.duration)) return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      // Map first 100vh of scroll to the full video duration
      const heroHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, scrollTop / heroHeight));
      video.currentTime = progress * video.duration;

      lastScrollY.current = scrollTop;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[200vh]">
      {/* Sticky video container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/grok-blueprint-to-kitchen.mp4"
          muted
          playsInline
          preload="auto"
          poster="/images/aubrey-odom-farmhouse-unsplash.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Right-aligned overlay text */}
        <div className="absolute inset-0 flex items-center justify-end z-10 px-6 md:px-16">
          <div className="bg-primary/70 backdrop-blur-sm p-8 md:p-12 rounded-lg max-w-lg text-right shadow-2xl border border-white/10">
            <h1 className="text-3xl md:text-5xl font-bold text-accent mb-4 leading-tight">
              Texas Craftsmanship Meets Lasting Integrity
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
              We don&apos;t just build homes — we build trust. A seamless, high-end experience grounded in Central Texas expertise.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-gold text-primary font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300 text-lg"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
