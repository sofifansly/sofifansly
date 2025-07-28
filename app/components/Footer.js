'use client';

import Link from 'next/link';
import AffiliateButton from './AffiliateButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-pink-50 via-white to-pink-100 border-t-2 border-pink-300">
      {/* Main CTA Section */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-400 py-12 rounded-t-3xl shadow-inner border-t-4 border-pink-300 border-dashed">
        <div className="container mx-auto px-4 text-center">
          <p className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <span className="text-2xl">🎀</span> Ready to Join My Exclusive World? <span className="text-2xl">💕</span>
          </p>
          <p className="text-pink-100 text-lg mb-6 max-w-2xl mx-auto">
            Don't miss out on premium content and intimate interactions. 
            Limited time 70% discount available now!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AffiliateButton 
              text="🎀 Get 70% OFF Now"
              variant="primary"
              size="xlarge"
              className="bg-white text-pink-600 hover:bg-pink-50 font-bold px-12 py-4 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full border-2 border-pink-300"
            />
            
            <div className="text-pink-100 text-sm">
              <div className="flex items-center gap-2 justify-center">
                <div className="flex items-center justify-center w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Verified Creator • 18+ Only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="col-span-1 text-center md:text-left">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent hover:from-pink-600 hover:to-purple-500 transition-all duration-300 flex items-center gap-2">
                <span className="text-pink-500">💕</span> Sofi's Private Page
              </Link>
              <p className="mt-4 text-pink-700 text-sm leading-relaxed">
                Premium exclusive content from your favorite creator. 
                Authentic interactions and behind-the-scenes moments.
              </p>
              
            
            </div>

            {/* Quick Links */}
            <div className="col-span-1 text-center">
              <p className="text-pink-600 font-semibold mb-4 flex items-center justify-center gap-1">
                <span className="text-xl">🎀</span> Quick Access
              </p>
              <div className="space-y-3">
                <AffiliateButton 
                  text="View Content"
                  variant="primary"
                  size="medium"
                  className="bg-gradient-to-r from-pink-500 to-purple-400 hover:from-pink-600 hover:to-purple-500 text-white px-6 py-2 text-sm w-full rounded-full shadow-md"
                />
                <div className="text-xs text-pink-700 flex items-center justify-center gap-1">
                  <span>🔞</span> <span className="font-medium">Adults Only Content</span>
                </div>
              </div>
            </div>

            {/* Legal & Support */}
            <div className="col-span-1 text-center md:text-right">
              <p className="text-pink-600 font-semibold mb-4 flex items-center justify-center md:justify-end gap-1">
                <span className="text-xl">💕</span> Support & Legal
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy-policy" className="text-pink-700 hover:text-purple-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal-notice" className="text-pink-700 hover:text-purple-500 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-pink-200 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-pink-500 text-sm text-center md:text-left">
                © {currentYear} Sofi Fansly. All rights reserved. • 18+ Adults Only
              </div>
              
              {/* Cute footer icons */}
              <div className="flex items-center gap-3 text-lg text-pink-400">
                <span>🎀</span><span>💕</span><span>🎀</span>
                <span className="text-pink-500">Made with</span>
                <span className="font-semibold text-pink-600">💕</span>
                <span className="bg-pink-100 px-2 py-1 rounded-full text-xs text-pink-700 border border-pink-200">by Sofi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;