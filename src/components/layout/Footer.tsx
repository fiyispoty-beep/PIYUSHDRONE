import React from 'react';
import { ArrowUp, Instagram, Linkedin, Globe } from 'lucide-react';
import { siteConfig } from '../../config/site.config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-[#d4af37]/20 pt-16 pb-12 text-[#a39e93] text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#d4af37]/15">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a
              href="/"
              className="text-2xl font-display font-medium text-[#f4efe6] hover:text-[#d4af37] transition-colors"
            >
              {siteConfig.photographer.brand}
            </a>
            <p className="text-[#a39e93] max-w-sm text-sm leading-relaxed font-sans">
              "{siteConfig.photographer.tagline}"
            </p>
            <div className="text-xs text-[#736f66] pt-1">
              Based in {siteConfig.photographer.location} · Available worldwide for select assignments.
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Explore
            </span>
            <ul className="flex flex-col gap-2.5 text-xs tracking-wider uppercase">
              <li>
                <a href="/#work" className="hover:text-[#f4efe6] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#f4efe6] transition-colors">
                  About Piyush
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#f4efe6] transition-colors">
                  Artisanal Services
                </a>
              </li>
              <li>
                <a href="/#packages" className="hover:text-[#f4efe6] transition-colors">
                  Investment & Packages
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-[#f4efe6] transition-colors">
                  Enquire & Connect
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Legal */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Direct Contact
            </span>
            <div className="flex flex-col gap-1.5 text-xs text-[#a39e93]">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-[#f4efe6] transition-colors"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                className="hover:text-[#f4efe6] transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
              <span className="text-[#736f66] pt-1">
                {siteConfig.contact.workingHours}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-3 text-[#d4af37]">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:text-white transition-colors"
                >
                  {social.name === 'Instagram' ? (
                    <Instagram className="w-4 h-4" />
                  ) : social.name === 'LinkedIn' ? (
                    <Linkedin className="w-4 h-4" />
                  ) : (
                    <Globe className="w-4 h-4" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Notice Banner */}
        <div className="my-8 py-3 px-4 rounded bg-[#121212] border border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#a39e93]">
          <span className="text-center sm:text-left">
            <strong className="text-[#d4af37]">Notice:</strong> {siteConfig.contact.demoNote}. All photographer claims and contacts are demonstration placeholders.
          </span>
          <div className="flex items-center gap-4 text-xs shrink-0">
            <a href="/privacy" className="underline hover:text-white transition-colors">
              Privacy Template
            </a>
            <a href="/terms" className="underline hover:text-white transition-colors">
              Terms Template
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-[#736f66]">
          <div>
            © {currentYear} {siteConfig.photographer.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#d4af37] transition-colors group cursor-pointer"
          >
            <span className="uppercase tracking-widest text-[11px]">Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
