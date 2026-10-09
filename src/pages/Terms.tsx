import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { updatePageSeo } from '../lib/seo';
import { AlertCircle } from 'lucide-react';

export const Terms: React.FC = () => {
  useEffect(() => {
    updatePageSeo({
      title: 'Terms of Service (Template)',
      description: 'Terms of Service template for Piyush Bhendarkar Photography.',
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
            <strong className="text-[#d4af37]">Template Document:</strong> This Terms of Service document is an editable template for demonstration. Real contracts with clients must be executed through written booking agreements.
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-medium text-[#f4efe6] mb-6">
          Terms of <span className="italic font-serif text-[#f3e5ab]">Commission</span>
        </h1>
        <p className="text-xs text-[#a39e93] mb-10 font-mono">Last updated: October 2026</p>

        <div className="prose prose-invert max-w-none text-sm text-[#a39e93] font-sans font-light leading-relaxed flex flex-col gap-6">
          <section>
            <h2 className="text-xl font-display font-medium text-[#f4efe6] mb-2">1. Booking & Retainer Fees</h2>
            <p>
              Dates are officially reserved only upon the execution of a bespoke written agreement and receipt of the agreed booking retainer. Preliminary enquiries through this website do not constitute a binding booking commitment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-medium text-[#f4efe6] mb-2">2. Artistic Style & Post-Production</h2>
            <p>
              Clients commission Piyush Bhendarkar with full knowledge and appreciation of the studio's cinematic, chiaroscuro, and fine-art color grading aesthetic. Post-production retouching and editing are carried out at the artist's professional discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-medium text-[#f4efe6] mb-2">3. Copyright & Usage Rights</h2>
            <p>
              The photographer retains full artistic copyright in all images created. Clients receive high-resolution digital files with personal printing and non-commercial social sharing rights as specified in their package agreement.
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
