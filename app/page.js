'use client';

import { useState } from 'react';

import Hero from './components/Hero';
import EmptySpacer from './components/EmptySpacer';
import TrustSection from './components/TrustSection';
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

     

      {/* SEO Content Section */}
      <SEOContent />

      {/* Preview Gallery */}
      <PreviewGallery />

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
};
