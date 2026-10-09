import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { updatePageSeo } from '../lib/seo';
import { Camera } from 'lucide-react';

export const NotFound: React.FC = () => {
  useEffect(() => {
    updatePageSeo({
      title: 'Frame Not Found (404)',
      description: 'The requested page or gallery frame does not exist.',
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#f4efe6] flex flex-col justify-between">
      <div className="film-grain" aria-hidden="true" />
      <Header />

      <main className="max-w-2xl mx-auto px-6 text-center py-40 my-auto">
        <div className="w-16 h-16 rounded-full bg-[#161616] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mx-auto mb-6">
          <Camera className="w-8 h-8" />
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-[#d4af37] mb-2 block">
          Error 404
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-medium text-[#f4efe6] mb-4">
          Frame Out Of <span className="italic font-serif text-[#f3e5ab]">Focus</span>
        </h1>
        <p className="text-sm text-[#a39e93] font-light mb-8 max-w-md mx-auto leading-relaxed">
          The frame or collection you are looking for has been relocated or archived.
        </p>
        <Link
          to="/"
          className="inline-flex py-3 px-8 rounded bg-[#d4af37] text-black text-xs uppercase tracking-widest font-semibold hover:bg-[#e4be4b] transition-colors shadow-lg shadow-[#d4af37]/15"
        >
          Return to Selected Works
        </Link>
      </main>

      <Footer />
    </div>
  );
};
