import React from 'react';
import { siteConfig } from '../../config/site.config';
import { Camera, MapPin, Feather } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Portrait of Piyush Bhendarkar */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Elegant Hairline Offset Frame */}
            <div className="absolute -inset-3 rounded-2xl border border-[#d4af37]/30 transform -rotate-1 pointer-events-none" />

            <div className="relative rounded-xl overflow-hidden border border-[#d4af37]/40 shadow-2xl bg-[#141414] aspect-[4/5]">
              <img
                src={siteConfig.photographer.profileImage}
                alt={`Editorial portrait of photographer ${siteConfig.photographer.name}`}
                className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.04]"
                loading="lazy"
                decoding="async"
              />

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

              {/* Bottom floating badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/60 backdrop-blur-md border border-[#d4af37]/30 flex items-center justify-between text-xs text-[#f3e5ab]">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[#d4af37]" />
                  <span className="font-medium">{siteConfig.photographer.title}</span>
                </div>
                <div className="flex items-center gap-1 text-[#a39e93] text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Nagpur, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Prose */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Artist & Storyteller
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#f4efe6] leading-tight">
            Crafting Elegance in <br />
            <span className="italic font-serif text-[#f3e5ab]">Every Solitary Second.</span>
          </h2>

          {/* Demo notice pill */}
          <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-mono text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/25 px-2.5 py-1 rounded w-fit">
            <span>Demo bio — edit in src/config/site.config.ts</span>
          </div>

          {/* Bio Prose (strictly based on confirmed identity without fabrications) */}
          <p className="mt-6 text-base sm:text-lg text-[#a39e93] font-sans font-light leading-relaxed">
            {siteConfig.photographer.bio}
          </p>

          {/* Philosophy Statement */}
          <div className="mt-8 p-6 rounded-xl bg-[#121212] border-l-2 border-[#d4af37] border-y border-r border-[#d4af37]/20">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
              <Feather className="w-3.5 h-3.5" />
              <span>Core Philosophy</span>
            </div>
            <blockquote className="font-display text-xl sm:text-2xl italic text-[#f4efe6] font-light leading-snug">
              "{siteConfig.photographer.philosophy}"
            </blockquote>
          </div>

          {/* Signature Wordmark */}
          <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#d4af37]/20">
            <div>
              <div className="text-2xl font-serif italic text-[#d4af37] tracking-wider font-light">
                {siteConfig.photographer.name}
              </div>
              <div className="text-[11px] uppercase tracking-widest text-[#a39e93] font-sans mt-0.5">
                Principal Artist
              </div>
            </div>

            <a
              href="#contact"
              className="py-2.5 px-5 rounded border border-[#d4af37]/40 hover:border-[#d4af37] hover:text-[#d4af37] text-xs uppercase tracking-wider text-[#f4efe6] transition-colors"
            >
              Start A Dialogue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
