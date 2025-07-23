'use client';

import { useState } from 'react';

import Hero from './components/Hero';
import EmptySpacer from './components/EmptySpacer';
import TrustSection from './components/TrustSection';
import AdditionalSEOContent from './components/AdditionalSEOContent';
import AdditionalSEOContent2 from './components/AdditionalSEOContent2';
import AdditionalSEOContent3 from './components/AdditionalSEOContent3';
import SEOContent from './components/SEOContent';
import PreviewGallery from './components/PreviewGallery';
import FinalCTA from './components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

       {/* Trust & Credibility Section */}
       <TrustSection />
       
      {/* Empty spacer to hide content below - User sees only hero */}
      <EmptySpacer />

      {/* Additional SEO Content Sections - Added below EmptySpacer as requested */}
      <AdditionalSEOContent />
      <AdditionalSEOContent2 />
      <AdditionalSEOContent3 />

      {/* SEO Content Section */}
      <SEOContent />

      {/* Preview Gallery */}
      <PreviewGallery />

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
};
