import React from 'react';
import { siteConfig } from '../../config/site.config';

export const Process: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#d4af37]/20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#d4af37]/20">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#f4efe6]">
            Our Photographic <span className="italic font-serif text-[#f3e5ab]">Process</span>
          </h2>
        </div>
        <p className="text-sm text-[#a39e93] max-w-md font-sans leading-relaxed">
          From the first shared vision to the delivery of timeless archival heirlooms, every step is orchestrated with care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {siteConfig.processSteps.map((step) => (
          <div
            key={step.number}
            className="relative p-6 rounded-xl bg-[#121212] border border-[#d4af37]/20 flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-3xl font-light text-[#d4af37] mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-display font-medium text-[#f4efe6] mb-3">
                {step.title}
              </h3>
              <p className="text-xs text-[#a39e93] font-sans font-light leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#d4af37]/15">
              <span className="text-[10px] uppercase tracking-widest text-[#d4af37]/70 font-mono">
                Step {step.number} of 04
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
