import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { galleryItems, GalleryItem } from '../config/gallery.config';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Lightbox } from '../components/gallery/Lightbox';
import { updatePageSeo } from '../lib/seo';
import { ArrowLeft, ArrowRight, Maximize2, ShieldAlert } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categoryIndex = siteConfig.categories.findIndex(
    (c) => c.slug === categorySlug || c.id === categorySlug
  );

  const currentCategory = categoryIndex !== -1 ? siteConfig.categories[categoryIndex] : null;

  useEffect(() => {
    if (currentCategory) {
      updatePageSeo({
        title: `${currentCategory.title} Photography`,
        description: currentCategory.description,
        ogImage: currentCategory.coverImage,
      });
      window.scrollTo(0, 0);
    }
  }, [currentCategory]);

  if (!currentCategory) {
    return <Navigate to="/404" replace />;
  }

  const categoryItems = galleryItems.filter(
    (item) => item.category === currentCategory.id || item.category === currentCategory.slug
  );

  // Next and previous category computation
  const prevCategory = siteConfig.categories[(categoryIndex - 1 + siteConfig.categories.length) % siteConfig.categories.length];
  const nextCategory = siteConfig.categories[(categoryIndex + 1) % siteConfig.categories.length];

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = galleryItems.findIndex((g) => g.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#f4efe6]">
      <div className="film-grain" aria-hidden="true" />
      <Header />

      <main id="main-content" className="pt-24 pb-20">
        {/* Category Hero Banner */}
        <section className="relative w-full h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden px-6 lg:px-12">
          <img
            src={currentCategory.coverImage}
            alt={currentCategory.title}
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] contrast-[1.05]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-[#0a0a0a]/70" />

          <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span>Work</span>
              <span>/</span>
              <span>{currentCategory.title}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-medium text-[#f4efe6] tracking-tight">
              {currentCategory.title}{' '}
              <span className="italic font-serif text-[#f3e5ab]">Collection</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-[#a39e93] max-w-2xl font-sans font-light leading-relaxed">
              {currentCategory.description}
            </p>
          </div>
        </section>

        {/* Sample Notice Bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-6">
          <div className="p-3 rounded-lg bg-[#121212] border border-[#d4af37]/20 flex items-center justify-between text-xs text-[#a39e93]">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#d4af37]" />
              <span>Sample imagery displayed for portfolio demonstration. Replace via <code>src/config/gallery.config.ts</code>.</span>
            </div>
            <Link to="/#contact" className="underline text-[#d4af37] hover:text-white font-medium shrink-0">
              Book this category
            </Link>
          </div>
        </div>

        {/* Dedicated Gallery Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl border border-[#d4af37]/25 bg-[#141414] aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#d4af37]/15 transition-all duration-300"
                onClick={() => handleOpenLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col gap-1">
                  <h3 className="text-xl font-display font-medium text-[#f4efe6] group-hover:text-[#f3e5ab] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#a39e93] line-clamp-1 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {categoryItems.length === 0 && (
            <div className="py-20 text-center text-[#a39e93]">
              <p className="text-lg font-display">No sample images currently slotted for this category.</p>
              <p className="text-xs mt-2">Add images to <code>src/config/gallery.config.ts</code>.</p>
            </div>
          )}
        </section>

        {/* Prev / Next Category Navigation */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 border-t border-[#d4af37]/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              to={`/work/${prevCategory.slug}`}
              className="p-6 rounded-xl bg-[#121212] border border-[#d4af37]/20 hover:border-[#d4af37] transition-all flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-black/40 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:-translate-x-1 transition-transform">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#a39e93] font-mono block">
                  Previous Category
                </span>
                <span className="text-xl font-display text-[#f4efe6] group-hover:text-[#d4af37] transition-colors">
                  {prevCategory.title}
                </span>
              </div>
            </Link>

            <Link
              to={`/work/${nextCategory.slug}`}
              className="p-6 rounded-xl bg-[#121212] border border-[#d4af37]/20 hover:border-[#d4af37] transition-all flex items-center justify-end gap-4 text-right group"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#a39e93] font-mono block">
                  Next Category
                </span>
                <span className="text-xl font-display text-[#f4efe6] group-hover:text-[#d4af37] transition-colors">
                  {nextCategory.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-black/40 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* Global Lightbox Viewer */}
      <Lightbox
        items={galleryItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      <Footer />
    </div>
  );
};
