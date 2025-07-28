'use client';

import { useState, useEffect } from 'react';
import AffiliateButton from './AffiliateButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-lg ${
      isScrolled ? 'bg-pink-100/95 shadow-lg border-b-2 border-pink-300' : 'bg-pink-100/90'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent hover:from-pink-600 hover:to-purple-500 transition-all duration-300 flex items-center"
          >
            <span className="text-pink-500 mr-2">💕</span> Sofi
          </a>

          <div className="flex items-center gap-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm text-pink-700">
                <div className="flex items-center gap-1">
                  <div className="flex items-center justify-center w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Verified Creator</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-600">🌳</span>
                  <span className="font-medium text-green-600">Powered by Linktree</span>
                </div>
                <div className="text-pink-600 font-semibold">🎀 70% OFF</div>
              </div>
              
              <AffiliateButton 
                text="Get Access"
                variant="primary"
                size="medium"
                className="bg-gradient-to-r from-pink-500 to-purple-400 hover:from-pink-600 hover:to-purple-500 text-white px-6 py-2 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 rounded-full"
              />
            </div>

            {/* Menu Burger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`block w-full h-0.5 bg-pink-500 transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}></span>
                <span className={`block w-full h-0.5 bg-pink-500 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-full h-0.5 bg-pink-500 transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-pink-100/95 backdrop-blur-lg border-t-2 border-pink-300 rounded-b-xl shadow-lg">
              <div className="flex items-center justify-center gap-2 text-sm text-pink-700 py-2">
                <div className="flex items-center gap-1">
                  <div className="flex items-center justify-center w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Verified</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-600">🌳</span>
                  <span className="font-medium text-green-600">Linktree</span>
                </div>
                <span className="text-pink-600 font-semibold">🎀 70% OFF</span>
              </div>
              
              <AffiliateButton 
                text="💕 Get 70% OFF Now"
                variant="primary"
                size="large"
                className="bg-gradient-to-r from-pink-500 to-purple-400 hover:from-pink-600 hover:to-purple-500 text-white w-full py-3 font-semibold shadow-lg transition-all duration-300 rounded-full"
              />
              
              <div className="text-center text-xs text-pink-700 pt-2 flex items-center justify-center gap-1">
                <span>🔞</span> <span className="font-medium">18+ Only | Adults Only Content</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
