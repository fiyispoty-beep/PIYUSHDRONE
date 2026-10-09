import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { siteConfig } from '../config/site.config';
import { updatePageSeo } from '../lib/seo';
import { AlertCircle } from 'lucide-react';

export const Privacy: React.FC = () => {
  useEffect(() => {
    updatePageSeo({
      title: 'Privacy Policy (Template)',
      description: 'Privacy Policy template for Piyush Bhendarkar Photography.',
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#f4efe6]">
      <div className="film-grain" aria-hidden="true" />
      <Header />

      <main className="max-w-4xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        {/* Template Notice */}
        <div className="mb-10 p-4 rounded-xl bg-[#141414] border border-[#d4af37]/30 flex items-start gap-3 text-xs text-[#a39e93]">
          <AlertCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#d4af37]">Template Document:</strong> This privacy policy is provided as a starter template for demonstration purposes. Before commercial deployment, the website owner should review and adapt this policy to comply with local regulations (such as India's Digital Personal Data Protection Act, GDPR, or applicable consumer laws).
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-medium text-[#f4efe6] mb-6">
          Privacy <span className="italic font-serif text-[#f3e5ab]">Policy</span>
        </h1>
        <p className="text-xs text-[#a39e93] mb-10 font-mono">Last updated: October 2026</p>

        <div className="prose prose-invert max-w-none text-sm text-[#a39e93] font-sans font-light leading-relaxed flex flex-col gap-6">
          <section>
            <h2 className="text-xl font-display font-medium text-[#f4efe6] mb-2">1. Information We Collect</h2>
            <p>
              When you submit an enquiry through this portfolio, we collect the details you provide voluntarily: your name, email address, phone number (if provided), event date, location, package selection, and message.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-medium text-[#f4efe6] mb-2">2. Use of Information</h2>
            <p>
              Your contact information is used strictly to respond to photoshoot enquiries, prepare custom commission proposals, and coordinate photographic schedules. We do not sell, rent, or distribute your personal details to third-party marketing services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-medium text-[#f4efe6] mb-2">3. Image Rights & Client Galleries</h2>
            <p>
              Photographs delivered to clients are hosted on private, password-protected online viewing galleries. Any public display of client photographs on this portfolio is subject to mutual written agreement or standard portrait releases.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-medium text-[#f4efe6] mb-2">4. Contact & Inquiries</h2>
            <p>
              For any questions regarding personal data or privacy practices, please contact Piyush Bhendarkar at{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-[#d4af37] underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#d4af37]/20">
          <Link to="/" className="text-xs uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors">
            ← Return to Homepage
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};
