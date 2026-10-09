import React, { Suspense, lazy } from 'react';
import { siteConfig } from '../../config/site.config';
import { HeroFallback } from './HeroFallback';
import { ArrowDownRight, Sparkles } from 'lucide-react';

const Camera3D = lazy(() => import('./Camera3D'));

export const HeroSection: React.FC = () => {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-16 px-6 lg:px-12"
      aria-label="Hero Introduction"
    >
      {/* Background Cinematic Image with High Priority */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.hero.bgImage}
          alt="Cinematic background capturing an imperial wedding at golden hour"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08] scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          fetchPriority="high"
          decoding="async"
        />
        {/* Cinematic Letterbox Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-[#0a0a0a]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]/95 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
        {/* Left Column: Typographic Hierarchy */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-[1px] bg-[#d4af37]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              {siteConfig.photographer.title}
            </span>
          </div>

          {/* Headline with Italic Emphasis */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium leading-[1.08] tracking-tight text-[#f4efe6] max-w-2xl">
            {siteConfig.hero.headline}{' '}
            <span className="italic font-serif text-[#f3e5ab] underline decoration-[#d4af37]/40 decoration-1 underline-offset-8">
              {siteConfig.hero.headlineEmphasis}
            </span>
          </h1>

          {/* Secondary Headline */}
          <p className="mt-6 text-lg sm:text-xl text-[#a39e93] font-sans font-light max-w-xl leading-relaxed">
            {siteConfig.hero.secondaryHeadline}
          </p>

          {/* Location & Ethos Metadata (Unboxed) */}
          <div className="mt-6 flex items-center gap-3 text-xs tracking-wider text-[#a39e93]/80 uppercase">
            <span>{siteConfig.photographer.location}</span>
            <span aria-hidden="true" className="text-[#d4af37]">·</span>
            <span>Natural Light & Chiaroscuro</span>
            <span aria-hidden="true" className="text-[#d4af37]">·</span>
            <span>Bespoke Storytelling</span>
          </div>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={scrollToWork}
              className="group py-3.5 px-8 rounded bg-[#d4af37] hover:bg-[#e4bf4a] text-[#0a0a0a] text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-200 flex items-center gap-3 shadow-lg shadow-[#d4af37]/20 active:scale-[0.98] cursor-pointer"
            >
              <span>{siteConfig.hero.primaryCta}</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={scrollToContact}
              className="py-3.5 px-8 rounded border border-[#d4af37]/40 hover:border-[#d4af37] text-[#f4efe6] hover:text-[#d4af37] text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 bg-[#0a0a0a]/40 backdrop-blur-sm active:scale-[0.98] cursor-pointer"
            >
              {siteConfig.hero.secondaryCta}
            </button>
          </div>
        </div>

        {/* Right Column: 3D Procedural Floating Camera */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="w-full relative">
            <Suspense fallback={<HeroFallback />}>
              <Camera3D />
            </Suspense>

            {/* Subtle interactive prompt */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#a39e93]/60 pointer-events-none select-none">
              <Sparkles className="w-3 h-3 text-[#d4af37]/60" />
              <span>Interactive 3D · Move cursor to orbit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <button
          onClick={scrollToWork}
          className="text-[10px] uppercase tracking-[0.25em] text-[#a39e93] hover:text-[#d4af37] transition-colors"
          aria-label="Scroll to portfolio galleries"
        >
          Scroll Down
        </button>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#d4af37] to-transparent animate-pulse" />
      </div>
    </section>
  );
};
