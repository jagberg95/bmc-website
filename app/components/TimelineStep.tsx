
'use client';

import React from 'react';

type TimelineStepProps = {
  step: number;
  title: string;
  shortDesc: string;
  detail?: string;
  imageSrc?: string;
  onCTA?: () => void;
  active?: boolean;
  'data-index'?: number;
};

export default function TimelineStep({
  step,
  title,
  shortDesc,
  detail,
  imageSrc,
  onCTA,
  active = false,
  'data-index': dataIndex,
}: TimelineStepProps) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div
      className={`timeline-step p-6 rounded-lg border transition-all duration-300 ${
        active
          ? 'border-accent bg-primary shadow-lg shadow-accent/10 scale-[1.02]'
          : 'border-white/10 bg-primary/60'
      }`}
      data-index={dataIndex}
      aria-label={`Step ${step}: ${title}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-colors duration-300 ${
            active ? 'bg-accent text-primary' : 'bg-white/10 text-accent'
          }`}
        >
          {step}
        </div>
        <h3
          className={`text-xl font-bold transition-colors duration-300 ${
            active ? 'text-accent' : 'text-white'
          }`}
        >
          {title}
        </h3>
      </div>
      <p className="text-gray-300 leading-relaxed mb-3">{shortDesc}</p>
      {expanded && detail && (
        <p className="text-gray-200 leading-relaxed mb-3 border-l-2 border-accent/30 pl-4">
          {detail}
        </p>
      )}
      {imageSrc && expanded && (
        <img
          src={imageSrc}
          alt={`${title} visual`}
          className={`mt-3 w-full h-auto rounded-lg transition-all duration-300 ${
            active ? 'brightness-110 contrast-110 drop-shadow-lg' : 'brightness-90'
          }`}
        />
      )}
      <div className="flex items-center gap-3 mt-3">
        <button
          className="text-sm text-accent hover:text-gold transition-colors font-medium"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '▲ Show less' : '▼ Read more'}
        </button>
        {onCTA && (
          <button
            onClick={onCTA}
            className="text-sm bg-accent hover:bg-gold text-primary font-bold py-1.5 px-4 rounded transition-colors duration-300"
          >
            Learn More →
          </button>
        )}
      </div>
    </div>
  );
}
