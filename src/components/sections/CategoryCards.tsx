import React, { useRef } from 'react';
import { siteConfig } from '../../config/site.config';
import { ArrowUpRight } from 'lucide-react';

interface TiltCardProps {
  category: typeof siteConfig.categories[0];
  index: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ category, index }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const formattedNum = (index + 1).toString().padStart(2, '0');

  return (
    <a
      ref={cardRef}
      href={`/work/${category.slug}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col justify-end overflow-hidden rounded-xl border border-[#d4af37]/20 bg-[#121212] aspect-[4/5] transition-all duration-300 ease-out shadow-lg hover:shadow-2xl hover:shadow-[#d4af37]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
    >
      {/* Background Image with Zoom */}
      <img
        src={category.coverImage}
        alt={`Cover photograph for ${category.title} portfolio`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.72] group-hover:brightness-[0.88]"
        loading="lazy"
        decoding="async"
      />

      {/* Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent pointer-events-none" />

      {/* Top Numbering and Direct Action */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-[#f3e5ab] z-10">
        <span className="font-mono tracking-widest font-semibold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded border border-[#d4af37]/30">
          {formattedNum}
        </span>
        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 p-6 flex flex-col gap-1.5">
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] font-sans font-medium">
          {category.subtitle}
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#f4efe6] group-hover:text-white transition-colors">
          {category.title}
        </h3>
        <p className="text-xs text-[#a39e93] line-clamp-2 mt-1 leading-relaxed font-sans font-light">
          {category.description}
        </p>
      </div>
    </a>
  );
};

export const CategoryCards: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#d4af37]/20 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Curated Portfolios
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#f4efe6]">
            Featured <span className="italic font-serif text-[#f3e5ab]">Categories</span>
          </h2>
        </div>
        <p className="text-sm text-[#a39e93] max-w-md font-sans leading-relaxed">
          Explore signature collections spanning royal weddings, soulful chiaroscuro portraits, haute couture, and poetic fine-art landscapes.
        </p>
      </div>

      {/* 01–07 Numbered Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {siteConfig.categories.map((cat, idx) => (
          <TiltCard key={cat.id} category={cat} index={idx} />
        ))}
      </div>
    </section>
  );
};
