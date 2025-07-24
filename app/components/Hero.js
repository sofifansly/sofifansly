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

            {/* Personal Introduction */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mb-4">
              <span className="font-semibold text-blue-600">Hey, I'm Diana❤️</span> - <span className="italic">Your favorite blonde👱‍♀️</span>, welcome to my private world! 💕 I hope that you will like it. I'm new to the platform but I'm willing to discover my <span className="text-pink-500 font-medium">naughty side</span>...
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{fontSize: 'var(--h1-font-size, 2.25rem)'}}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                I'm the best blonde
              </span>
              <br />
              <span className="text-gray-800">
                on OnlyFans🤭​
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mt-4">
            Let’s see where this goes and how the vibe feels. If you’re my type, I’m accepting boyfriend applications as long as you are over 5.6😂​ Dont be shy im nice and friendly lol 💕
            </p>

            {/* Online Now indicator */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full border border-green-300 shadow-sm">
                <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-bold text-green-700 text-base">ONLINE NOW</span>
              </div>
            </div>

            {/* 18+ Warning - Moved above CTA for better visibility */}
            <div className="bg-yellow-50 border-2 border-yellow-500 p-4 rounded-lg shadow-md cursor-pointer hover:bg-yellow-100 transition-all duration-300">
              <div className="flex items-center">
                <span className="text-3xl mr-3 animate-pulse">🔞</span>
                <div>
                  <p className="text-base font-bold text-yellow-800">18+ ADULTS ONLY CONTENT</p>
                  <p className="text-sm text-yellow-700 font-medium">By clicking the button below, you confirm you are 18 years or older</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AffiliateButton 
                text="JOIN MY ONLYFANS 🔓"
                variant="primary"
                size="xlarge"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-12 py-4 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              />
              
              <div className="text-center sm:text-left">
                <div className="text-sm text-gray-500 mb-1">Limited Time Offer</div>
                <div className="text-lg font-bold text-red-600">70% OFF - Expires in 24h ⏰</div>
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
                  poster="/images/blonde-onlyfans.webp"
                >
                  <source src="/images/blonde-onlyfans.mp4" type="video/mp4" />
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
                <p className="font-semibold">Lets talk</p>
                <p className="text-sm text-blue-100">im nice i swear!</p>
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
              "Thanks to my bestie Inna for helping me set up this website! 💕 
              She's amazing at this tech stuff and wanted to help me"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
