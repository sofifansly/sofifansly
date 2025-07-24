'use client';

import Link from 'next/link';
import AffiliateButton from './AffiliateButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-blue-100 border-t-2 border-blue-200">
      {/* Main CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-3xl font-bold text-white mb-4">
            Ready to Join My Exclusive World? 💕
          </p>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Don't miss out on premium content and intimate interactions. 
            Limited time 70% discount available now!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AffiliateButton 
              text="🔥 Get 70% OFF Now"
              variant="primary"
              size="xlarge"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-12 py-4 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            />
            
            <div className="text-blue-100 text-sm">
              <div className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Online Now • 18+ Only</span>
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
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                💕 Diana Private page
              </Link>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Premium exclusive content from your favorite blonde creator. 
                Authentic interactions and behind-the-scenes moments.
              </p>
              
            
            </div>

            {/* Quick Links */}
            <div className="col-span-1 text-center">
              <p className="text-blue-700 font-semibold mb-4">Quick Access</p>
              <div className="space-y-3">
                <AffiliateButton 
                  text="View Content"
                  variant="primary"
                  size="medium"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 text-sm w-full"
                />
                <div className="text-xs text-gray-500">
                  🔞 Adults Only Content
                </div>
              </div>
            </div>

            {/* Legal & Support */}
            <div className="col-span-1 text-center md:text-right">
              <p className="text-blue-700 font-semibold mb-4">Support & Legal</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal-notice" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-200 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} Blonde OnlyFans. All rights reserved. • 18+ Adults Only
              </div>
              
              {/* Powered by Linktree */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>🌳</span>
                <span>Powered by</span>
                <span className="font-semibold text-green-600">Linktree</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">Free Plan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;