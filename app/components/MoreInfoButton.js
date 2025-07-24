'use client';

import { useState } from 'react';

const MoreInfoButton = ({ children }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="w-full">
      {/* Button container */}
      <div className="flex justify-center py-8">
        <button
          onClick={() => setShowContent(!showContent)}
          className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 flex items-center gap-2"
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
        {children}
      </div>
    </div>
  );
};

export default MoreInfoButton;
