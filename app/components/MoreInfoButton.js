'use client';

import { useState } from 'react';

const MoreInfoButton = ({ children }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="w-full">
      {/* Button container - hidden visually but still functional */}
      <div className="hidden">
        <button
          onClick={() => setShowContent(!showContent)}
          className="more-info-button bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 flex items-center gap-2"
        >
          {showContent ? (
            <>
              <span>Hide Additional Information</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </>
          ) : (
            <>
              <span>More Information</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Content container - Always in DOM but conditionally visible */}
      <div 
        className={`transition-all duration-500 ${
          showContent 
            ? 'opacity-100 max-h-[10000px]' 
            : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        {/* Close button at the top */}
        {showContent && (
          <div className="sticky top-0 z-50 flex justify-center p-4 bg-white bg-opacity-90 shadow-sm">
            <button
              onClick={() => setShowContent(false)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-pink-600 bg-white rounded-full hover:bg-pink-50 transition-colors duration-200 border border-pink-200"
            >
              <span>Close Legal Information</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default MoreInfoButton;
