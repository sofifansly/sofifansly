'use client';

import { ONLYFANS_URL, SHOULD_OBFUSCATE_LINKS } from '../page';
import { handleObfuscatedClick } from '../utils/linkObfuscator';

export default function FanJourneyMap() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
        Your VIP Journey with Gabby Epstein's
        <span className="block bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text mt-2">Official OnlyFans</span>
      </h2>
      
      <p className="text-gray-600 text-center mb-12 text-lg">
        Join thousands of VIP fans who already have exclusive access. Don't miss out on the experience!
      </p>

      {/* Journey Steps */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Step 1 */}
        <div className="relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="absolute -top-4 left-6 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">1</div>
          <div className="mb-4 text-center">
            <span className="text-4xl">🎁</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Claim Your Free Access</h3>
          <p className="text-gray-600">
            Take advantage of this limited-time offer to join Gabby's exclusive community completely FREE! (Regular price: $14.99/month)
          </p>
          <div className="mt-4 bg-green-50 rounded-lg p-3">
            <p className="text-sm text-green-700 font-medium">
              ⚡ Quick & Easy: Takes less than 2 minutes
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="absolute -top-4 left-6 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">2</div>
          <div className="mb-4 text-center">
            <span className="text-4xl">🔓</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Get Instant VIP Access</h3>
          <p className="text-gray-600">
            Unlock immediate access to all exclusive content, private messages, and behind-the-scenes moments.
          </p>
          <div className="mt-4 bg-blue-50 rounded-lg p-3">
            <p className="text-sm text-blue-700 font-medium">
              🎉 Join 147 new VIP members today!
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="absolute -top-4 left-6 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">3</div>
          <div className="mb-4 text-center">
            <span className="text-4xl">✨</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Enjoy Premium Benefits</h3>
          <p className="text-gray-600">
            Experience exclusive photoshoots, personal chat access, and be part of Gabby's inner circle.
          </p>
          <div className="mt-4 bg-purple-50 rounded-lg p-3">
            <p className="text-sm text-purple-700 font-medium">
              💎 Join the top 1% of fans
            </p>
          </div>
        </div>
      </div>

      {/* What You'll Get Section */}
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-center mb-8">
          What You're Missing Right Now 👀
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Benefit Items */}
          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl">
            <span className="text-2xl">📸</span>
            <div>
              <p className="font-bold text-gray-800">Exclusive Photos</p>
              <p className="text-sm text-gray-600">Daily premium photoshoots not available anywhere else</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <span className="text-2xl">💌</span>
            <div>
              <p className="font-bold text-gray-800">Direct Messages</p>
              <p className="text-sm text-gray-600">Personal chat access with priority responses</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
            <span className="text-2xl">🎥</span>
            <div>
              <p className="font-bold text-gray-800">BTS Content</p>
              <p className="text-sm text-gray-600">Exclusive behind-the-scenes footage and daily life moments</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
            <span className="text-2xl">🌟</span>
            <div>
              <p className="font-bold text-gray-800">Custom Requests</p>
              <p className="text-sm text-gray-600">Request personalized content just for you</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <span className="text-2xl">🎁</span>
            <div>
              <p className="font-bold text-gray-800">Special Surprises</p>
              <p className="text-sm text-gray-600">Random gifts and exclusive offers for loyal fans</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl">
            <span className="text-2xl">💝</span>
            <div>
              <p className="font-bold text-gray-800">VIP Treatment</p>
              <p className="text-sm text-gray-600">Be part of an exclusive inner circle of fans</p>
            </div>
          </div>
        </div>

        {/* FOMO Banner */}
        <div className="mt-8 bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-xl text-center">
          <p className="text-xl font-bold mb-2">Don't Wait - Limited Time Offer!</p>
          <p className="text-sm opacity-90 mb-6">
            Only <span className="font-bold">50 FREE spots</span> remaining. Join <span className="font-bold">147 fans</span> who already claimed their access today!
          </p>

          {/* CTA Button */}
          {SHOULD_OBFUSCATE_LINKS ? (
            <button
              onClick={(e) => handleObfuscatedClick(e, ONLYFANS_URL, SHOULD_OBFUSCATE_LINKS)}
              className="bg-white text-red-500 text-xl font-bold px-12 py-4 rounded-full hover:shadow-lg hover:shadow-white/30 transform hover:scale-105 transition-all duration-300"
            >
              Get Your FREE Access Now ➔
            </button>
          ) : (
            <a
              href={ONLYFANS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-500 text-xl font-bold px-12 py-4 rounded-full hover:shadow-lg hover:shadow-white/30 transform hover:scale-105 transition-all duration-300"
            >
              Get Your FREE Access Now ➔
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
