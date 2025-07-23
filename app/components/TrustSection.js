'use client';

import AffiliateButton from './AffiliateButton';

const TrustSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose My OnlyFans? 💕
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied subscribers who love my authentic content
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Daily Updates</h3>
            <p className="text-gray-600">Fresh exclusive content uploaded every single day just for you</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Chat</h3>
            <p className="text-gray-600">Direct messages and personal interactions - I reply to everyone!</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Custom Content</h3>
            <p className="text-gray-600">Personalized photos and videos made just for your requests</p>
          </div>
        </div>

        <div className="text-center">
          <AffiliateButton 
            text="🚀 JOIN NOW - 70% OFF"
            variant="primary"
            size="xlarge"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-12 py-4 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          />
          <p className="text-sm text-gray-500 mt-4">⏰ Limited time offer - Only 3 spots remaining!</p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
