import React, { useState } from 'react';
import { galleryItems, GalleryItem } from '../../config/gallery.config';
import { siteConfig } from '../../config/site.config';
import { Lightbox } from './Lightbox';
import { Maximize2, Sparkles } from 'lucide-react';

export const GalleryExplorer: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    ...siteConfig.categories.map((c) => ({ id: c.id, label: c.title })),
  ];

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedFilter);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = galleryItems.findIndex((g) => g.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Archive
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#f4efe6]">
            Visual <span className="italic font-serif text-[#f3e5ab]">Chronicles</span>
          </h2>
        </div>

        {/* Counter of active photographs */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-widest bg-[#141414] px-3.5 py-1.5 rounded-full border border-[#d4af37]/25 w-fit">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SHOWING {filteredItems.length} OF {galleryItems.length} FRAMES</span>
        </div>
      </div>

      {/* Filter Tabs / Segmented Controls (Clean functional buttons per design skill) */}
      <div
        role="tablist"
        aria-label="Filter portfolio photographs by category"
        className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none"
      >
        {filterTabs.map((tab) => {
          const isActive = selectedFilter === tab.id;
          const count = tab.id === 'all'
            ? galleryItems.length
            : galleryItems.filter((i) => i.category === tab.id).length;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 text-xs tracking-wider uppercase font-medium rounded-full transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2 border ${
                isActive
                  ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-md shadow-[#d4af37]/20 font-semibold'
                  : 'bg-[#121212] text-[#a39e93] border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:text-white'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black/20 text-black' : 'bg-white/5 text-[#a39e93]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Editorial Masonry / Varied Aspect Ratio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[340px]">
        {filteredItems.map((item, idx) => {
          // Dynamic editorial span variation for bento-like visual rhythm
          const isSpanLarge = idx % 5 === 0;

          return (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl border border-[#d4af37]/20 bg-[#141414] cursor-pointer transition-all duration-300 hover:border-[#d4af37]/60 hover:shadow-2xl hover:shadow-[#d4af37]/15 ${
                isSpanLarge ? 'md:col-span-2 auto-rows-[420px]' : 'col-span-1'
              }`}
              onClick={() => handleOpenLightbox(item)}
            >
              {/* Image with smooth hover scale */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.82] group-hover:brightness-100"
              />

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top metadata tags */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs z-10">
                <span className="uppercase tracking-[0.2em] text-[10px] text-[#f3e5ab] font-sans font-medium bg-black/50 backdrop-blur-md px-2.5 py-1 rounded border border-[#d4af37]/30">
                  {item.category}
                </span>

                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col gap-1 transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-xl sm:text-2xl font-display font-medium text-[#f4efe6] group-hover:text-[#f3e5ab] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#a39e93] line-clamp-1 font-sans font-light">
                  {item.caption}
                </p>

                {item.exif && (
                  <div className="flex items-center gap-2 pt-2 text-[10px] font-mono text-[#a39e93]/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{item.exif.camera}</span>
                    <span>·</span>
                    <span>{item.exif.focalLength}</span>
                    <span>·</span>
                    <span>{item.exif.aperture}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Global Lightbox Viewer */}
      <Lightbox
        items={galleryItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
