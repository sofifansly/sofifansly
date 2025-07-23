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
      isScrolled ? 'bg-white/95 shadow-lg border-b border-blue-100' : 'bg-white/90'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
          >
            💕 Blonde OnlyFans
          </a>

          <div className="flex items-center gap-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Online Now</span>
                </div>
                <div className="text-blue-600 font-semibold">🔥 70% OFF</div>
              </div>
              
              <AffiliateButton 
                text="Get Access"
                variant="primary"
                size="medium"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              />
            </div>

            {/* Menu Burger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`block w-full h-0.5 bg-blue-900 transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}></span>
                <span className={`block w-full h-0.5 bg-blue-900 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-full h-0.5 bg-blue-900 transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-white/95 backdrop-blur-lg border-t border-blue-100">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 py-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Online Now</span>
                <span className="text-blue-600 font-semibold ml-4">🔥 70% OFF</span>
              </div>
              
              <AffiliateButton 
                text="🔓 Get 70% OFF Now"
                variant="primary"
                size="large"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-full py-3 font-semibold shadow-lg transition-all duration-300"
              />
              
              <div className="text-center text-xs text-gray-500 pt-2">
                🔞 18+ Only | Adults Only Content
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
