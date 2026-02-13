"use client";
import React, { useRef, useEffect } from 'react';

type Props = {
  src: string;
  poster: string;
  alt?: string;
};

export default function VideoHero({ src, poster, alt }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile/Reduced Motion check: just show poster or pause
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
      return;
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (video.duration) {
            // Scrub logic: map scroll (0 to ~1500px) to video duration
            const scrubFactor = 1500;
            const scrollY = window.scrollY;
            // Calculate target time
            const targetTime = (scrollY / scrubFactor) * video.duration;
            // Smooth clamping
            video.currentTime = Math.min(video.duration, Math.max(0, targetTime));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900 pointer-events-none">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        poster={poster}
        muted
        playsInline
        preload="auto"
        aria-label={alt}
        // Force pause initially so scroll drives it
        onLoadedMetadata={(e) => e.currentTarget.pause()}
      />
      {/* Texture overlay for professional feel and contrast */}
      <div className="absolute inset-0 bg-blue-950/30 mix-blend-multiply z-10"></div>
    </div>
  );
}
