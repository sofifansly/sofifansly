'use client';

import { useState } from 'react';
import { JERKMATE_URL, JERKMATE_CONFIG } from '../../config/monetization';
import { handleObfuscatedClick } from '../../utils/linkObfuscator';

const Postitial = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Gestion du clic sur le bouton de redirection
  const handleRedirectClick = (e) => {
    handleObfuscatedClick(
      e, 
      JERKMATE_URL, 
      JERKMATE_CONFIG.SHOULD_OBFUSCATE_LINKS
    );
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center animate-fadeIn monetization-backdrop">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 overflow-hidden monetization-hover-elevate">
        {/* En-tête du Postitial */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 relative monetization-gradient">
          <p className="text-white text-xl font-bold">{JERKMATE_CONFIG.POSTITIAL_TITLE}</p>
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 text-white hover:text-gray-200"
          >
            ✕
          </button>
        </div>
        
        {/* Corps du Postitial */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <img 
              src={JERKMATE_CONFIG.MODEL_AVATAR} 
              alt="Model" 
              className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-pink-500 monetization-float"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">Live Models</p>
              <p className="text-pink-600">{JERKMATE_CONFIG.POSTITIAL_MESSAGE}</p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
            >
              {JERKMATE_CONFIG.CLOSE_BUTTON}
            </button>
            <button 
              onClick={handleRedirectClick}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded hover:from-pink-600 hover:to-purple-700 transition shadow-md monetization-glow"
            >
              {JERKMATE_CONFIG.POSTITIAL_BUTTON}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postitial;
