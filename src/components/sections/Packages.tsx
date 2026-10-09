import React from 'react';
import { siteConfig } from '../../config/site.config';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface PackagesProps {
  onSelectPackage?: (packageId: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  const handleEnquire = (packageId: string) => {
    if (onSelectPackage) {
      onSelectPackage(packageId);
    }
    const formElement = document.getElementById('contact');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#d4af37]/20 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Investment Collections
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#f4efe6]">
            Curated <span className="italic font-serif text-[#f3e5ab]">Packages</span>
          </h2>
        </div>
        <div className="text-left md:text-right">
          <span className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/25 px-3 py-1.5 rounded-full font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Demo packages — sample pricing in INR</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {siteConfig.packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
              pkg.isPopular
                ? 'bg-[#161616] border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/15 md:-translate-y-2'
                : 'bg-[#121212] border border-[#d4af37]/20 hover:border-[#d4af37]/50'
            }`}
          >
            {pkg.isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#d4af37] text-black text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-1 rounded-full shadow-md">
                Most Requested
              </div>
            )}

            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-display font-medium text-[#f4efe6]">
                  {pkg.name}
                </h3>
                <p className="text-xs text-[#a39e93] mt-1 font-light font-sans">
                  {pkg.tagline}
                </p>
              </div>

              {/* Price display with Tabular numerals */}
              <div className="mb-8 pb-6 border-b border-[#d4af37]/20">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-display font-semibold text-[#f4efe6] tabular-nums">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-[#a39e93] uppercase font-mono tracking-wider ml-1">
                    {pkg.currency}
                  </span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#a39e93]/70 font-mono mt-1">
                  Sample estimate · Subject to customization
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="flex flex-col gap-3.5 mb-8">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#d4af37] font-semibold">
                  What's Included:
                </span>
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 text-xs text-[#f3e5ab]/90">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button to enquire and pre-select */}
            <div className="pt-6 border-t border-[#d4af37]/15">
              <button
                onClick={() => handleEnquire(pkg.id)}
                className={`w-full py-3 px-6 rounded-md text-xs uppercase tracking-widest font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  pkg.isPopular
                    ? 'bg-[#d4af37] hover:bg-[#e6c157] text-black shadow-lg shadow-[#d4af37]/20'
                    : 'bg-[#181818] hover:bg-[#d4af37] hover:text-black text-[#f4efe6] border border-[#d4af37]/30'
                }`}
              >
                <span>Enquire With This Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
