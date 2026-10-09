import React from 'react';
import { siteConfig } from '../../config/site.config';
import { Check, Sparkles } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#d4af37]/20 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#f4efe6]">
            Artisanal <span className="italic font-serif text-[#f3e5ab]">Services</span>
          </h2>
        </div>
        <p className="text-sm text-[#a39e93] max-w-md font-sans leading-relaxed">
          Comprehensive photographic coverage tailored to intimate family gatherings, luxury destination weddings, and commercial commissions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.services.map((service, idx) => (
          <div
            key={service.id}
            className="group p-8 rounded-xl bg-[#121212] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#d4af37] tracking-widest font-semibold">
                  0{idx + 1}
                </span>
                <Sparkles className="w-4 h-4 text-[#d4af37] opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-2xl font-display font-medium text-[#f4efe6] group-hover:text-[#f3e5ab] transition-colors mb-3">
                {service.title}
              </h3>

              <p className="text-xs text-[#a39e93] font-sans font-light leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <div className="border-t border-[#d4af37]/15 pt-5 flex flex-col gap-2">
              {service.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2 text-xs text-[#f3e5ab]/80">
                  <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
