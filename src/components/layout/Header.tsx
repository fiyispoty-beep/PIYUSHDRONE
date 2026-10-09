import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { siteConfig } from '../../config/site.config';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const { scrollDirection, isScrolledPastHero } = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
          scrollDirection === 'down' && isScrolledPastHero
            ? '-translate-y-full'
            : 'translate-y-0'
        } ${
          isScrolledPastHero
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#d4af37]/20 shadow-lg shadow-black/40'
            : 'bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-transparent'
        }`}
        style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single Text Element Brand Wordmark */}
          <a
            href="/"
            className="text-xl sm:text-2xl font-display font-medium tracking-wide text-[#f4efe6] hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0"
          >
            {siteConfig.photographer.name}
          </a>

          {/* Zone 2: 4–5 Concise Single-Line Text Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-xs tracking-[0.18em] uppercase text-[#a39e93]"
          >
            <a
              href="/#work"
              className="hover:text-[#f4efe6] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8 hover:decoration-[#d4af37]/50"
            >
              Work
            </a>
            <a
              href="/#about"
              className="hover:text-[#f4efe6] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8 hover:decoration-[#d4af37]/50"
            >
              About
            </a>
            <a
              href="/#services"
              className="hover:text-[#f4efe6] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8 hover:decoration-[#d4af37]/50"
            >
              Services
            </a>
            <a
              href="/#packages"
              className="hover:text-[#f4efe6] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8 hover:decoration-[#d4af37]/50"
            >
              Packages
            </a>
            <a
              href="/#contact"
              className="hover:text-[#f4efe6] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8 hover:decoration-[#d4af37]/50"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollToContact}
              className="hidden sm:inline-flex items-center justify-center py-2.5 px-5 rounded bg-[#d4af37] hover:bg-[#e2bc49] text-[#0a0a0a] text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-md shadow-[#d4af37]/15 whitespace-nowrap shrink-0 active:scale-[0.98]"
            >
              Book a Photoshoot
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-[#f4efe6] hover:text-[#d4af37] transition-colors rounded-lg border border-[#d4af37]/25"
              aria-label="Open mobile navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onBookClick={scrollToContact}
      />
    </>
  );
};
