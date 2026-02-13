'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ButtonDef = {
  label: string;
  href: string;
  primary?: boolean;
};

type TimelineStepProps = {
  step: number;
  title: string;
  subtitle?: string;
  shortDesc: string;
  detail?: string;
  image?: string;
  buttons?: ButtonDef[];
  active?: boolean;
  even?: boolean;
  'data-index'?: number;
};

export default function TimelineStep({
  step,
  title,
  subtitle,
  shortDesc,
  detail,
  image,
  buttons,
  active = false,
  even = false,
  'data-index': dataIndex,
}: TimelineStepProps) {
  return (
    <div
      className={`timeline-step group relative ${even ? 'md:flex-row-reverse' : ''}`}
      data-index={dataIndex}
      aria-label={`Step ${step}: ${title}`}
    >
      {/* Card container - zigzag layout */}
      <div
        className={`flex flex-col md:flex-row ${even ? 'md:flex-row-reverse' : ''} gap-0 rounded-xl overflow-hidden border transition-all duration-500 ${
          active
            ? 'border-accent shadow-xl shadow-accent/15 scale-[1.01]'
            : 'border-white/10 hover:border-accent/40'
        } bg-primary`}
      >
        {/* Image side - portrait orientation */}
        <div className="relative w-full md:w-[45%] min-h-[280px] md:min-h-[380px] overflow-hidden bg-deep-blue">
          {image ? (
            <Image
              src={image}
              alt={`Step ${step}: ${title}`}
              fill
              className={`object-cover transition-all duration-500 ${
                active ? 'scale-105 brightness-110' : 'scale-100 brightness-[0.8] group-hover:scale-105 group-hover:brightness-100'
              }`}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-deep-blue">
              <span className="text-8xl font-bold text-accent/20">{step}</span>
            </div>
          )}
          {/* Step number badge */}
          <div
            className={`absolute top-4 ${even ? 'right-4' : 'left-4'} flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg shadow-lg transition-colors duration-300 ${
              active ? 'bg-accent text-primary' : 'bg-primary/80 text-accent backdrop-blur-sm'
            }`}
          >
            {step}
          </div>
        </div>

        {/* Text side */}
        <div className="w-full md:w-[55%] p-8 md:p-10 flex flex-col justify-center">
          {subtitle && (
            <p className={`text-sm font-semibold uppercase tracking-wider mb-2 transition-colors duration-300 ${
              active ? 'text-accent' : 'text-accent/70'
            }`}>
              {subtitle}
            </p>
          )}
          <h3
            className={`text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300 ${
              active ? 'text-accent' : 'text-white group-hover:text-accent'
            }`}
          >
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed mb-3">{shortDesc}</p>
          {detail && (
            <p className="text-gray-400 leading-relaxed mb-6 border-l-2 border-accent/30 pl-4">
              {detail}
            </p>
          )}

          {/* Buttons */}
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-auto pt-4">
              {buttons.map((btn) =>
                btn.primary ? (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    className="inline-block bg-accent hover:bg-gold text-primary font-bold py-2.5 px-6 rounded-lg transition-colors duration-300 text-sm"
                  >
                    {btn.label}
                  </Link>
                ) : (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    className="inline-block border border-accent/50 hover:border-accent text-accent hover:text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300 text-sm"
                  >
                    {btn.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}