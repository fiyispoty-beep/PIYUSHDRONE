import React, { useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MarqueeProps {
  words?: string[];
  direction?: 'left' | 'right';
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  words = [
    'Weddings',
    'Portraits',
    'Pre-Wedding Stories',
    'Haute Couture',
    'Cultural Celebrations',
    'Fine-Art Landscapes',
    'Commercial Horology',
    'Timeless Memories',
  ],
  className = '',
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const repeated = [...words, ...words, ...words];

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-[#d4af37]/20 bg-[#0d0d0d] py-5 select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Photography Highlights Ribbon"
    >
      <div
        className={`flex items-center gap-10 whitespace-nowrap will-change-transform ${
          reducedMotion
            ? 'justify-around'
            : isPaused
            ? 'animate-none'
            : 'animate-[marquee_38s_linear_infinite]'
        }`}
        style={{
          animationPlayState: isPaused || reducedMotion ? 'paused' : 'running',
        }}
      >
        {repeated.map((word, idx) => (
          <div key={`${word}-${idx}`} className="flex items-center gap-10 shrink-0">
            <span className="font-display text-xl sm:text-2xl text-[#f4efe6]/90 tracking-wide font-light hover:text-[#d4af37] transition-colors">
              {word}
            </span>
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/50" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};
