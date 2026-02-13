'use client';

import { useEffect, useRef } from 'react';

type ScrollVideoProps = {
  src: string;
  className?: string;
};

export default function ScrollVideo({ src, className = '' }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const targetTimeRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.pause();

    /* ── Smooth interpolation loop ──────────────────────────────
       Lerp factor 0.3 → tracks scroll tightly at normal speed
       while still filtering out single-pixel jitter. The video
       will keep up with natural scrolling and complete fully
       within the scrub zone.                                      */
    const animate = () => {
      if (!video || !video.duration || isNaN(video.duration)) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      const diff = targetTimeRef.current - currentTimeRef.current;
      // Lerp 0.3 — responsive enough to keep up, smooth enough to not stutter
      currentTimeRef.current += diff * 0.3;
      // Clamp to valid range
      currentTimeRef.current = Math.max(0, Math.min(video.duration, currentTimeRef.current));
      // Only seek when the delta is noticeable (skip sub-millisecond noise)
      if (Math.abs(video.currentTime - currentTimeRef.current) > 0.016) {
        video.currentTime = currentTimeRef.current;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const handleScroll = () => {
      if (!video || !video.duration || isNaN(video.duration)) return;

      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;

      /* ── Scrub zone ─────────────────────────────────────────
         Video starts when the container's TOP edge reaches 50% of the
         viewport (element is clearly on screen) and finishes when it
         hits 10% (near the top). This keeps the entire playback
         visible while the user scrolls through the section.             */
      const scrubStart = windowH * 0.50; // top edge at 50% down → begin
      const scrubEnd   = windowH * 0.10; // top edge at 10% down → finish
      const progress   = Math.min(1, Math.max(0,
        (scrubStart - rect.top) / (scrubStart - scrubEnd)
      ));

      targetTimeRef.current = progress * video.duration;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial frame
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden rounded-xl shadow-2xl ${className}`}>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        style={{ aspectRatio: '9 / 16', willChange: 'contents' }}
      />
      {/* Subtle overlay for blending */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 pointer-events-none" />
    </div>
  );
}
