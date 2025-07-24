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
import MoreInfoButton from './components/MoreInfoButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Trust & Credibility Section */}
      <TrustSection />
      
      {/* More Info Button - Shows/hides all SEO content */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-8">
        <div className="container mx-auto">
          <MoreInfoButton>
            {/* All SEO content wrapped inside the MoreInfoButton component */}
            <div className="seo-content-container">
              {/* Additional SEO Content Sections */}
              <AdditionalSEOContent />
              <AdditionalSEOContent2 />
              <AdditionalSEOContent3 />

              {/* SEO Content Section */}
              <SEOContent />

              {/* Preview Gallery */}
              <PreviewGallery />
            </div>
          </MoreInfoButton>
        </div>
      </div>

      
    </main>
  );
};
