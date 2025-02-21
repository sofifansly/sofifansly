'use client';
import { ONLYFANS_URL, SHOULD_OBFUSCATE_LINKS } from '../page';
import { handleObfuscatedClick } from '../utils/linkObfuscator';

export default function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Limited Time Banner */}
            <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 animate-bounce">
              🔥 LIMITED TIME OFFER - FREE ACCESS TODAY! 🔥
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Join Gabby Epstein's
              <span className="block bg-gradient-to-r from-pink-400 to-red-400 text-transparent bg-clip-text mt-2">
                Official OnlyFans
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text mt-2">
                VIP Community
              </span>
            </h1>

            <p className="text-blue-100 text-lg lg:text-xl mb-8 leading-relaxed">
              Get instant access to premium content, behind-the-scenes moments, and personal interactions with Australia's top model and influencer.
            </p>

            {/* Price Display */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 inline-block">
              <div className="flex items-center gap-4">
                <div className="text-white">
                  <div className="text-sm uppercase">Regular Price</div>
                  <div className="text-2xl line-through opacity-75">$14.99/month</div>
                </div>
                <div className="text-4xl text-white">→</div>
                <div>
                  <div className="text-sm uppercase text-blue-300">Today's Offer</div>
                  <div className="text-4xl font-bold text-green-400">FREE</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            {SHOULD_OBFUSCATE_LINKS ? (
              <button
                onClick={(e) => handleObfuscatedClick(e, ONLYFANS_URL, SHOULD_OBFUSCATE_LINKS)}
                className="bg-gradient-to-r from-green-400 to-green-600 text-white text-xl font-bold px-12 py-4 rounded-full hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
              >
                Claim Your Free Access Now ➔
              </button>
            ) : (
              <a
                href={ONLYFANS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-400 to-green-600 text-white text-xl font-bold px-12 py-4 rounded-full hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
              >
                Claim Your Free Access Now ➔
              </a>
            )}

            {/* Urgency Counter */}
            <div className="mt-8 text-blue-200">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="animate-pulse">⏰</span>
                <span>Offer ends soon! Only <span className="font-bold text-white">50 spots</span> remaining</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-[3/4] w-full max-w-lg mx-auto">
              <img
                src="/images/gabbyepstein1.webp"
                alt="Gabby Epstein Preview"
                className="rounded-2xl shadow-2xl object-cover w-full h-full"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent rounded-2xl"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-lg rounded-xl p-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">4M+</div>
                    <div className="text-sm text-blue-200">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">4.9</div>
                    <div className="text-sm text-blue-200">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">3.2K</div>
                    <div className="text-sm text-blue-200">Posts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-2 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                </div>
                <span className="text-sm font-medium text-gray-600">147 people claimed this offer today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
