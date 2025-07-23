'use client';

import AffiliateButton from './AffiliateButton';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20 pb-12 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.15),transparent_50%)]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Flash Sale Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg animate-pulse">
              <span>🔥</span>
              <span>70% OFF - ONLY 3 SPOTS LEFT!</span>
              <span>⏰</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Blonde OnlyFans
              </span>
              <br />
              <span className="text-gray-800">
                Premium Content
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Exclusive intimate content, personal interactions, and behind-the-scenes moments. 
              Join my private world today! 💕
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-semibold">Online Now</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span>👥</span>
                <span>250K+ Followers</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AffiliateButton 
                text="🔓 GET 70% OFF NOW"
                variant="primary"
                size="xlarge"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-12 py-4 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              />
              
              <div className="text-center sm:text-left">
                <div className="text-sm text-gray-500 mb-1">Limited Time Offer</div>
                <div className="text-lg font-bold text-red-600">Expires in 24h ⏰</div>
              </div>
            </div>

            {/* 18+ Warning */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🔞</span>
                <div>
                  <p className="text-sm font-semibold text-yellow-800">18+ Adults Only Content</p>
                  <p className="text-xs text-yellow-700">By proceeding, you confirm you are 18 years or older</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Media */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-blue-100 overflow-hidden transform hover:scale-105 transition-all duration-500">
              {/* Video */}
              <div className="aspect-[9/16] relative">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  poster="/images/1.jpeg"
                >
                  <source src="/images/1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-all duration-300">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Media caption */}
              <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center">
                <p className="font-semibold">Preview of Exclusive Content</p>
                <p className="text-sm text-blue-100">Unlock 500+ Photos & Videos</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
              🔥 HOT
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              ✨ NEW
            </div>
          </div>
        </div>

        {/* Trust message */}
        <div className="mt-16 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 max-w-2xl mx-auto">
            <p className="text-gray-600 italic">
              "Thanks to my bestie for helping me set up this website! 💕 
              She's amazing at this tech stuff and wanted to help me connect with you all better!"
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>🌳</span>
              <span>Powered by Linktree</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
