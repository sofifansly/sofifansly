'use client';

import { useState, useEffect } from 'react';

const AgeConfirmationModal = ({ isOpen, onConfirm, onCancel, url }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 animate-fade-in shadow-xl">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">Sensitive Content</h3>
          
          <div className="text-center mb-6">
            <p className="text-gray-700 mb-2">You're about to visit exclusive content that's intended for mature audiences.</p>
            <p className="text-gray-700 font-semibold">Are you 18 years of age or older?</p>
          </div>
          
          <div className="flex space-x-4 w-full">
            <button 
              onClick={onCancel}
              className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
            >
              No, Go Back
            </button>
            <button 
              onClick={onConfirm}
              className="flex-1 py-2 px-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors"
            >
              Yes, Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeConfirmationModal;
