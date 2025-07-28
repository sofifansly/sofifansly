'use client';

import AffiliateButton from './AffiliateButton';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 pt-20 pb-12 px-4 relative overflow-hidden">
      {/* Cute background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,182,193,0.4),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,105,180,0.2),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300"></div>
      
      {/* Floating hearts and bows */}
      <div className="absolute top-20 left-10 text-4xl animate-bounce">❤️</div>
      <div className="absolute top-40 right-20 text-5xl animate-pulse">🎀</div>
      <div className="absolute bottom-40 left-20 text-4xl animate-bounce" style={{animationDelay: '1s'}}>💕</div>
      <div className="absolute bottom-20 right-10 text-5xl animate-pulse" style={{animationDelay: '1.5s'}}>🎀</div>
      <div className="absolute top-1/3 left-1/3 text-6xl animate-pulse opacity-20">💕</div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8 lg:w-1/2">
            {/* Cute Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              <span>💕</span>
              <span>SOFI'S SPECIAL PLACE</span>
            </div>

            {/* Fun Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight text-pink-600" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>
              <span>Hey there!</span> <span className="font-bold">It's Sofi</span>
              <br />
              <span className="text-purple-500">
                Let's have fun! 😘
              </span>
            </h1>
            
            {/* Personal Introduction */}
            <p className="text-xl md:text-2xl text-pink-800 leading-relaxed max-w-xl">
              <span className="font-semibold text-purple-500">Welcome to my cute corner</span> — This is where I open up and <span className="font-bold">let you see the side</span> no one else gets to 💗 <span className="font-bold">but keep it</span> secret 🎀
            </p>

            {/* 18+ Warning - Cute style */}
            <div className="flex items-center justify-center lg:justify-start mb-2">
              <div className="flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full border-2 border-pink-400 shadow-md">
                <span className="text-pink-600 text-sm font-medium">18+ CONTENT ONLY 🔒</span>
              </div>
            </div>
            
            {/* Mobile Only - Video */}
            <div className="lg:hidden w-full my-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-300 border-dashed">
                {/* Cute frame with hearts */}
                <div className="absolute -top-2 -left-2 text-3xl rotate-[-15deg] z-30">🎀</div>
                <div className="absolute -top-2 -right-2 text-3xl rotate-[15deg] z-30">💕</div>
                <div className="absolute -bottom-2 -left-2 text-3xl rotate-[15deg] z-30">💕</div>
                <div className="absolute -bottom-2 -right-2 text-3xl rotate-[-15deg] z-30">🎀</div>
                
                {/* Video container with fixed aspect ratio - mobile friendly */}
                <div className="w-full" style={{maxHeight: '80vh'}}>
                  <video
                    className="w-full h-auto max-h-full object-cover z-10 block"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    poster="/images/sofiafansly.webp"
                    preload="auto"
                    style={{display: 'block', margin: '0 auto'}}
                  >
                    <source src="/images/fansly.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Soft gradient overlay */}
                  <div className="relative w-full h-12 -mt-12 bg-gradient-to-t from-pink-300/60 to-transparent z-20"></div>
                </div>
                
                {/* Cute badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border-2 border-white transform rotate-3 z-30">
                  <span className="mr-1">✨</span>SO CUTE!
                </div>
                
                {/* Verified creator - cute style with green checkmark */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center z-30">
                  <div className="bg-white/80 backdrop-blur-sm text-pink-600 text-sm px-6 py-2 rounded-full flex items-center gap-2 border-2 border-pink-300 shadow-lg">
                    <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Verified Creator</span>
                  </div>
                </div>
                
                {/* Cute floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white border-2 border-pink-400 text-pink-600 px-4 py-2 rounded-full text-xs font-medium shadow-lg z-30">
                  😘 FOLLOW ME
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 relative">
              <AffiliateButton 
                text="Join Me Now! 💕"
                variant="primary"
                size="xlarge"
                className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold px-10 py-4 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white"
              />
              <div className="absolute -top-3 -right-3 flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-md border border-pink-200">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="font-medium text-green-600 text-sm">Online Now</span>
              </div>
            </div>
            
            {/* Features List */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-xl">🎀</div>
                <p className="text-pink-800 text-lg">Super cute photos & fun videos just for you!</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xl">💕</div>
                <p className="text-pink-800 text-lg">Personal chats & custom content you'll love</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xl">😘</div>
                <p className="text-pink-800 text-lg">Peek into my daily life & special moments</p>
              </div>
            </div>
          </div>

          {/* Right Column - Video (Desktop only) */}
          <div className="relative lg:w-1/2 hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-300 border-dashed">
              {/* Cute frame with hearts */}
              <div className="absolute -top-2 -left-2 text-3xl rotate-[-15deg] z-30">🎀</div>
              <div className="absolute -top-2 -right-2 text-3xl rotate-[15deg] z-30">💕</div>
              <div className="absolute -bottom-2 -left-2 text-3xl rotate-[15deg] z-30">💕</div>
              <div className="absolute -bottom-2 -right-2 text-3xl rotate-[-15deg] z-30">🎀</div>
              
              {/* Video container with fixed aspect ratio - mobile friendly */}
              <div className="w-full" style={{maxHeight: '80vh'}}>
                <video
                  className="w-full h-auto max-h-full object-cover z-10 block"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  poster="/images/sofiafansly.webp"
                  preload="auto"
                  style={{display: 'block', margin: '0 auto'}}
                >
                  <source src="/images/fansly.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Soft gradient overlay */}
                <div className="relative w-full h-12 -mt-12 bg-gradient-to-t from-pink-300/60 to-transparent z-20"></div>
              </div>
              
              {/* Cute badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border-2 border-white transform rotate-3 z-30">
                <span className="mr-1">✨</span>SO CUTE!
              </div>
              
              {/* Verified creator - cute style with green checkmark */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center z-30">
                <div className="bg-white/80 backdrop-blur-sm text-pink-600 text-sm px-6 py-2 rounded-full flex items-center gap-2 border-2 border-pink-300 shadow-lg">
                  <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Verified Creator</span>
                </div>
              </div>
              
              {/* Cute floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white border-2 border-pink-400 text-pink-600 px-4 py-2 rounded-full text-xs font-medium shadow-lg z-30">
                😘 FOLLOW ME
              </div>
            </div>
          </div>
        </div>

        {/* Features Section - Cute Style */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-4 border-pink-300 border-dashed hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-200 to-pink-100 flex items-center justify-center border-4 border-pink-300">
                <span className="text-4xl">💕</span>
              </div>
            </div>
            <p className="font-bold text-pink-600 text-center mb-3 text-lg">Cute Content</p>
            <p className="text-pink-800 text-center">Adorable photos and fun videos that will make your day brighter!</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-4 border-pink-300 border-dashed hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-200 to-pink-100 flex items-center justify-center border-4 border-pink-300">
                <span className="text-4xl">🎀</span>
              </div>
            </div>
            <p className="font-bold text-pink-600 text-center mb-3 text-lg">Special Surprises</p>
            <p className="text-pink-800 text-center">Exclusive treats and surprises just for my special fans!</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-4 border-pink-300 border-dashed hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-200 to-pink-100 flex items-center justify-center border-4 border-pink-300">
                <span className="text-4xl">😘</span>
              </div>
            </div>
            <p className="font-bold text-pink-600 text-center mb-3 text-lg">BFF Chats</p>
            <p className="text-pink-800 text-center">Let's chat like besties and get to know each other better!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
