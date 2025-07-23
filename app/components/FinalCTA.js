'use client';

import AffiliateButton from './AffiliateButton';

const FinalCTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-5xl font-bold text-white mb-8">
          Don't Miss Out on This Limited Offer!
        </h2>
        <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
          Join thousands of satisfied subscribers and get instant access to my exclusive blonde OnlyFans content. 
          Free access ends soon!
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12">
          <AffiliateButton 
            text="🔥 GET 70% OFF - LIMITED TIME"
            variant="primary"
            size="xlarge"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-12 py-6 text-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          />
          
          <div className="text-center lg:text-left">
            <div className="text-white text-lg font-semibold mb-2">⏰ Hurry! Offer expires in:</div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">23:45:12</div>
              <div className="text-blue-100 text-sm">Hours : Minutes : Seconds</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">Instant Access</h3>
            <p className="text-blue-100">Get immediate access to all premium content after subscription</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-xl font-bold text-white mb-3">Premium Quality</h3>
            <p className="text-blue-100">High-resolution photos and 4K videos exclusively for subscribers</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-3">100% Private</h3>
            <p className="text-blue-100">Secure, discreet access to exclusive blonde OnlyFans content</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">🎁 What You Get Today:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-center gap-3 text-blue-100">
              <span className="text-green-400">✅</span>
              <span>500+ Exclusive Photos</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <span className="text-green-400">✅</span>
              <span>100+ Premium Videos</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <span className="text-green-400">✅</span>
              <span>Daily Content Updates</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <span className="text-green-400">✅</span>
              <span>Personal Direct Messages</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <span className="text-green-400">✅</span>
              <span>Custom Content Requests</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <span className="text-green-400">✅</span>
              <span>Behind-the-Scenes Access</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-blue-100 text-sm">
            🔞 18+ Only | Secure Payment | Cancel Anytime | 100% Satisfaction Guaranteed
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
