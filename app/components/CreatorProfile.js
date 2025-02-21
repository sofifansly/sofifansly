'use client';
import { useState, useEffect } from 'react';
import { ONLYFANS_URL, SHOULD_OBFUSCATE_LINKS, RAW_ONLYFANS_URL } from '../page';
import { handleObfuscatedClick } from '../utils/linkObfuscator';

export default function CreatorProfile() {
  const [activityData, setActivityData] = useState(Array(14).fill(5));

  useEffect(() => {
    // Générer des données aléatoires entre 3 et 10 posts
    setActivityData(Array.from({ length: 14 }, () => Math.floor(Math.random() * 7) + 3));
  }, []);

  const maxValue = Math.max(...activityData);

  return (
    <div className="lg:w-1/3">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6 transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-500 ring-offset-4">
            <img 
              src="/images/gabbyepstein1.webp"
              alt="Gabby Epstein profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">Gabby Epstein</p>
            <p className="text-blue-500">@gabbyepstein</p>
            <div className="flex items-center mt-2">
              <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
              <span className="text-sm text-green-500">Online Now</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">4M+</div>
            <div className="text-sm text-gray-600">Followers</div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">4.9</div>
            <div className="text-sm text-gray-600">Rating</div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">3.2K</div>
            <div className="text-sm text-gray-600">Posts</div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00AFF0] to-[#0055FF] text-transparent bg-clip-text">
            About Gabby Epstein
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gabby Epstein is an Australian model, influencer, and content creator who has taken social media by storm. Based in Gold Coast, she's renowned for her stunning fashion and lifestyle content. With over 2.8 million Instagram followers, she's established herself as one of Australia's most influential digital creators. Her OnlyFans page offers exclusive behind-the-scenes content and personal interactions with her dedicated fanbase.
          </p>
        </div>

        {/* Recent Activity Graph */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold text-gray-800">Recent Activity</p>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
              <span className="text-sm text-gray-600">Posts per day</span>
            </div>
          </div>
          <div className="flex items-end space-x-2 h-32">
            {activityData.map((value, index) => (
              <div
                key={index}
                className="flex-1 group relative"
                style={{ height: '100%' }}
              >
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-500"
                  style={{ height: `${(value / maxValue) * 100}%` }}
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap transition-opacity duration-200">
                    {value} posts
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>2 weeks ago</span>
            <span>Today</span>
          </div>
        </div>

        {/* Subscribe Button with Limited Time Offer */}
        <div className="relative mb-4 mt-8">
          {/* Improved Limited Time Offer Banner */}
          <div className="absolute -top-8 left-0 right-0 text-center">
            <div className="inline-block bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg animate-bounce">
              🔥 LIMITED TIME OFFER 🔥
            </div>
          </div>
          
          {/* Timer Banner */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold shadow-md">
            ⚡ Flash Sale - Today Only!
          </div>

          {SHOULD_OBFUSCATE_LINKS ? (
            <button
              onClick={(e) => handleObfuscatedClick(e, ONLYFANS_URL, SHOULD_OBFUSCATE_LINKS)}
              className="block relative overflow-hidden w-full mt-6"
            >
              <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 rounded-xl p-1 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-white rounded-lg p-6 text-center transform hover:scale-[0.99] transition-transform duration-200">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <span className="text-3xl font-bold text-green-600">Subscribe FREE</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-semibold text-gray-400 line-through">$14.99</span>
                      <span className="text-4xl font-bold text-green-500">$0</span>
                      <span className="text-lg text-gray-400">/month</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-green-700 font-medium">Instant Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ) : (
            <a
              href={RAW_ONLYFANS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden w-full mt-6"
            >
              <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 rounded-xl p-1 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-white rounded-lg p-6 text-center transform hover:scale-[0.99] transition-transform duration-200">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <span className="text-3xl font-bold text-green-600">Subscribe FREE</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-semibold text-gray-400 line-through">$14.99</span>
                      <span className="text-4xl font-bold text-green-500">$0</span>
                      <span className="text-lg text-gray-400">/month</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-green-700 font-medium">Instant Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          )}

          {/* Countdown and Urgency Elements */}
          <div className="mt-4 space-y-2">
            <div className="text-center text-red-500 font-bold animate-pulse">
              ⏰ Offer Ends In: 02:59:59
            </div>
            <div className="text-center text-sm">
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium">
                Only 50 FREE spots remaining!
              </span>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
            </div>
            <span className="text-sm text-gray-600">🔥 147 people claimed this offer today</span>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-3 mt-6">
          <div className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Exclusive daily content</span>
          </div>
          <div className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Personal chat access</span>
          </div>
          <div className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Behind-the-scenes content</span>
          </div>
          <div className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
}
