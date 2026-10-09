import React, { useEffect, useState, useRef, useCallback } from 'react';
import { GalleryItem } from '../../config/gallery.config';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Camera } from 'lucide-react';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  useLockBodyScroll(isOpen);

  const [isZoomed, setIsZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = isOpen ? items[currentIndex] : null;

  // Preload neighbouring images
  useEffect(() => {
    if (!isOpen || currentIndex === null) return;
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    const nextIdx = (currentIndex + 1) % items.length;

    const img1 = new Image();
    img1.src = items[prevIdx].src;
    const img2 = new Image();
    img2.src = items[nextIdx].src;
  }, [isOpen, currentIndex, items]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    setIsZoomed(false);
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    setIsZoomed(false);
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    touchStartX.current = null;
  };

  if (!isOpen || !activeItem || currentIndex === null) return null;

  const counterText = `${(currentIndex + 1).toString().padStart(2, '0')} / ${items.length.toString().padStart(2, '0')}`;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${activeItem.title}`}
      className="fixed inset-0 z-50 bg-[#0a0a0a]/98 backdrop-blur-2xl flex flex-col justify-between"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Controls Bar */}
      <div className="relative z-20 flex items-center justify-between px-6 py-4 border-b border-[#d4af37]/20 bg-[#0d0d0d]/80">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-[#d4af37] tracking-widest font-semibold">
            {counterText}
          </span>
          {activeItem.isSample && (
            <span className="text-[10px] uppercase tracking-widest bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f3e5ab] px-2 py-0.5 rounded">
              Sample Photography
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 text-[#a39e93] hover:text-[#d4af37] transition-colors rounded hover:bg-white/5"
            aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 text-[#d4af37] hover:text-white transition-colors rounded hover:bg-white/5"
            aria-label="Close photo viewer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Center Image Display with Arrow Buttons */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 z-30 p-3 rounded-full bg-black/60 hover:bg-[#d4af37] text-white hover:text-black border border-[#d4af37]/30 transition-all shadow-xl"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Center Image */}
        <div
          className={`relative max-w-full max-h-[72vh] flex items-center justify-center transition-transform duration-300 ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            key={activeItem.id}
            src={activeItem.src}
            alt={activeItem.alt}
            className="max-w-full max-h-[72vh] object-contain rounded-md shadow-2xl transition-opacity duration-300"
            decoding="async"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 z-30 p-3 rounded-full bg-black/60 hover:bg-[#d4af37] text-white hover:text-black border border-[#d4af37]/30 transition-all shadow-xl"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Metadata & EXIF Information */}
      <div className="relative z-20 px-6 py-4 border-t border-[#d4af37]/20 bg-[#0d0d0d]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#a39e93]">
        <div className="flex flex-col gap-1 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="uppercase tracking-[0.2em] text-[#d4af37] font-semibold text-[11px]">
              {activeItem.category}
            </span>
            <span className="text-[#f4efe6] font-display text-base font-medium">
              {activeItem.title}
            </span>
          </div>
          <p className="text-[#a39e93] font-light font-sans text-xs">
            {activeItem.caption}
          </p>
        </div>

        {/* EXIF Data */}
        {activeItem.exif && (
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#f3e5ab]/80 border-t sm:border-t-0 sm:border-l border-[#d4af37]/20 pt-2 sm:pt-0 sm:pl-4 shrink-0">
            <Camera className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>{activeItem.exif.camera}</span>
            <span className="text-[#d4af37]">·</span>
            <span>{activeItem.exif.lens}</span>
            <span className="text-[#d4af37]">·</span>
            <span>{activeItem.exif.aperture}</span>
            <span className="text-[#d4af37]">·</span>
            <span>ISO {activeItem.exif.iso}</span>
          </div>
        )}
      </div>
    </div>
  );
};
