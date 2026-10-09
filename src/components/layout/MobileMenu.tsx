import React, { useEffect } from 'react';
import { X, ArrowRight, Instagram, Linkedin } from 'lucide-react';
import { siteConfig } from '../../config/site.config';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useFocusTrap } from '../../hooks/useFocusTrap';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onBookClick,
}) => {
  useLockBodyScroll(isOpen);
  const containerRef = useFocusTrap(isOpen);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Packages', href: '/#packages' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 safe-top safe-bottom"
    >
      {/* Top Bar with Brand & Close */}
      <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-5">
        <a
          href="/"
          onClick={onClose}
          className="text-xl font-display font-semibold tracking-wide text-[#f4efe6]"
        >
          {siteConfig.photographer.brand}
        </a>
        <button
          onClick={onClose}
          className="p-2 text-[#d4af37] hover:text-white transition-colors rounded-lg border border-[#d4af37]/30"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="my-auto flex flex-col gap-5 py-6">
        {navLinks.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="group flex items-center justify-between text-2xl sm:text-3xl font-display font-medium text-[#f4efe6] hover:text-[#d4af37] transition-colors py-1"
          >
            <span>{item.label}</span>
            <span className="text-xs font-sans text-[#a39e93] opacity-60 group-hover:opacity-100 group-hover:text-[#d4af37] transition-all">
              0{idx + 1}
            </span>
          </a>
        ))}
      </nav>

      {/* Bottom CTA & Social Links */}
      <div className="border-t border-[#d4af37]/20 pt-6 flex flex-col gap-4">
        <button
          onClick={() => {
            onClose();
            onBookClick();
          }}
          className="w-full py-3.5 px-6 rounded-md bg-[#d4af37] hover:bg-[#e5c158] text-[#0a0a0a] font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20"
        >
          <span>Book a Photoshoot</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-between pt-2 text-xs text-[#a39e93]">
          <span>{siteConfig.photographer.location}</span>
          <div className="flex items-center gap-4 text-[#d4af37]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
