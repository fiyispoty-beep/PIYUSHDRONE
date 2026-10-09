import React, { useEffect, useState } from 'react';
import { AnnouncementBar } from '../components/layout/AnnouncementBar';
import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/hero/HeroSection';
import { Marquee } from '../components/sections/Marquee';
import { CategoryCards } from '../components/sections/CategoryCards';
import { GalleryExplorer } from '../components/gallery/GalleryExplorer';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Packages } from '../components/sections/Packages';
import { Process } from '../components/sections/Process';
import { EnquiryForm } from '../components/form/EnquiryForm';
import { Footer } from '../components/layout/Footer';
import { updatePageSeo } from '../lib/seo';
import { siteConfig } from '../config/site.config';

export const Home: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('signature');

  useEffect(() => {
    updatePageSeo({
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#f4efe6]">
      {/* Film grain texture */}
      <div className="film-grain" aria-hidden="true" />

      {/* Announcement */}
      <AnnouncementBar />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content">
        <HeroSection />

        <Marquee />

        <CategoryCards />

        <GalleryExplorer />

        <About />

        <Services />

        <Packages onSelectPackage={(pkgId) => setSelectedPackage(pkgId)} />

        <Process />

        <EnquiryForm initialPackageId={selectedPackage} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
