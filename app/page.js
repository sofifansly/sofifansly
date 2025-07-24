'use client';

import { useState } from 'react';

import Hero from './components/Hero';
import AdditionalSEOContent from './components/AdditionalSEOContent';
import AdditionalSEOContent2 from './components/AdditionalSEOContent2';
import AdditionalSEOContent3 from './components/AdditionalSEOContent3';
import MoreInfoButton from './components/MoreInfoButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      
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

           

            </div>
          </MoreInfoButton>
        </div>
      </div>

      
    </main>
  );
};
