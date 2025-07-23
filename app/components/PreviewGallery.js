'use client';

import AffiliateButton from './AffiliateButton';

const PreviewGallery = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
          Preview Gallery
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="aspect-square bg-white rounded-2xl shadow-xl border-2 border-blue-100 flex items-center justify-center group hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-3">🖼️</div>
                <p className="text-blue-600 font-semibold">Photo {i}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-100">
          <p className="text-gray-600 mb-6 text-lg">This is just a small preview. Unlock hundreds more exclusive photos and videos!</p>
          <AffiliateButton 
            text="🔓 SEE ALL CONTENT"
            variant="primary"
            size="xlarge"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
          />
        </div>
      </div>
    </section>
  );
};

export default PreviewGallery;
