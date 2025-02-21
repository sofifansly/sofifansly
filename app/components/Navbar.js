'use client';

import { useState, useEffect } from 'react';
import { ONLYFANS_URL, SHOULD_OBFUSCATE_LINKS } from '../page';
import { handleObfuscatedClick } from '../utils/linkObfuscator';

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

  const menuItems = [
    { id: 'photos', label: 'Gallery' },
    { id: 'creators', label: 'About' },
    { id: 'content', label: 'Content' },
    { id: 'faq', label: 'FAQ' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-lg ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/90'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo cliquable */}
          {SHOULD_OBFUSCATE_LINKS ? (
            <button 
              onClick={(e) => handleObfuscatedClick(e, ONLYFANS_URL, SHOULD_OBFUSCATE_LINKS)}
              className="text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors cursor-pointer"
            >
              Gabby Epstein OnlyFans
            </button>
          ) : (
            <a 
              href={ONLYFANS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors"
            >
              Gabby Epstein OnlyFans
            </a>
          )}

          <div className="flex items-center gap-4">
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-blue-900 hover:text-blue-700 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            {SHOULD_OBFUSCATE_LINKS ? (
              <button
                onClick={(e) => handleObfuscatedClick(e, ONLYFANS_URL, SHOULD_OBFUSCATE_LINKS)}
                className="hidden lg:block bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                FREE Trial ➔
              </button>
            ) : (
              <a
                href={ONLYFANS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                FREE Trial ➔
              </a>
            )}

            {/* Mobile CTA Button */}
            {SHOULD_OBFUSCATE_LINKS ? (
              <button
                onClick={(e) => handleObfuscatedClick(e, ONLYFANS_URL, SHOULD_OBFUSCATE_LINKS)}
                className="lg:hidden bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                FREE Trial
              </button>
            ) : (
              <a
                href={ONLYFANS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:hidden bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                FREE Trial
              </a>
            )}

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
        <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
