'use client';

import { useState, useEffect } from 'react';
import CreatorProfile from './components/CreatorProfile';
import HeroBanner from './components/HeroBanner';
import FanJourneyMap from './components/FanJourneyMap';
import { encodeUrl, handleObfuscatedClick } from './utils/linkObfuscator';

// Configuration
export const SHOULD_OBFUSCATE_LINKS = true;
export const RAW_ONLYFANS_URL = 'https://gabbyepstein.asldating1.com/361210/9293/35281?aff_sub=c152&source=GoogleAds&aff_sub5=SF_006OG0000059Jjh';

// Export l'URL obfusquée si nécessaire
export const ONLYFANS_URL = typeof window === 'undefined' 
  ? RAW_ONLYFANS_URL 
  : encodeUrl(RAW_ONLYFANS_URL, SHOULD_OBFUSCATE_LINKS);

export default function Home() {
  const [blurredImageIndex, setBlurredImageIndex] = useState(0);
  const [revealedImage, setRevealedImage] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    '/images/gabbyepstein1.webp',
    '/images/gabbyepstein2.webp',
    '/images/gabbyepstein3.webp',
    '/images/gabbyepstein4.webp',
  ];

  useEffect(() => {
    setBlurredImageIndex(Math.floor(Math.random() * images.length));
  }, []);

  const handleImageClick = (index) => {
    if (index === blurredImageIndex && !revealedImage) {
      setRevealedImage(true);
      setSelectedImageIndex(index); // Ouvrir l'image en modal après l'avoir déverrouillée
    } else {
      setSelectedImageIndex(index);
    }
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Main Content */}
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Profile Info */}
            <CreatorProfile />


            {/* Right Column - Gallery */}
            <div id="gallery" className="lg:w-2/3">
              <h2 id="photos" className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00AFF0] to-[#0055FF] text-transparent bg-clip-text">
                Gabby Epstein's Exclusive Gallery | Premium Content Available on OnlyFans
              </h2>
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-2">
                  Explore Gabby Epstein's stunning public gallery <span className="text-[#00AFF0] font-medium">@gabbyepstein</span>. 
                  Ready to unlock exclusive content? Join her VIP fanbase on OnlyFans for premium photos and videos.
                </p>
                <p className="text-sm text-red-600 italic">
                  Note: This gallery features public content only. For exclusive premium content, please visit the OnlyFans page.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {images.map((image, i) => (
                  <div 
                    key={i} 
                    className="aspect-square bg-gray-200 rounded-xl overflow-hidden group relative cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    onClick={() => handleImageClick(i)}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${i + 1}`}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        i === blurredImageIndex && !revealedImage ? 'blur-xl' : ''
                      } ${selectedImageIndex === null ? 'group-hover:scale-110' : ''}`}
                    />
                    {i === blurredImageIndex && !revealedImage ? (
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-6">
                        <span className="text-4xl mb-3">🔒</span>
                        <p className="text-xl font-bold mb-2">Locked</p>
                        <p className="text-base">Click to view</p>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <span className="text-white font-medium">View full image</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Public Photos Section */}
        <section className="bg-gradient-to-r from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                These preview photos are just a taste of what Gabby shares with her private community. Ready to see more? Unlock her full collection of exclusive content now.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <p className="text-base text-blue-800 font-medium flex items-center gap-2">
                  <span className="animate-pulse">🔥</span>
                  <span>
                    <span className="font-bold">FREE Access Today Only:</span> Join Gabby's VIP OnlyFans (Regular: $14.99/month)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
         {/* Fan Journey Experience Section */}
         <section className="py-8 md:py-12 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-[#00AFF0]/10 to-[#0055FF]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-[#00AFF0]/5 to-[#0055FF]/10 rounded-full blur-3xl"></div>
              
              <div className="container mx-auto px-4 relative z-10">
                <FanJourneyMap />
              </div>
            </section>

        {/* About Section */}
        <section id="creators" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#00AFF0] to-[#0055FF] text-transparent bg-clip-text">
              Inside Gabby Epstein's OnlyFans – What Makes It Special?
            </h2>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When you join Gabby Epstein's OnlyFans, you're getting more than just content – you're accessing an exclusive experience crafted by one of Australia's most sought-after models. Every post, every interaction, and every moment is designed to make you feel special.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-[#0055FF] font-bold text-lg mb-4">Premium OnlyFans Content</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Daily exclusive updates</li>
                  <li>• Intimate photoshoots</li>
                  <li>• Premium quality content</li>
                  <li>• Fresh content daily</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-[#0055FF] font-bold text-lg mb-4">Direct Access to Gabby</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Personal messages</li>
                  <li>• Custom requests</li>
                  <li>• Real conversations</li>
                  <li>• Priority responses</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-[#0055FF] font-bold text-lg mb-4">VIP Experience</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Behind-the-scenes</li>
                  <li>• Exclusive perks</li>
                  <li>• Special surprises</li>
                  <li>• Early access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section id="content" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Gabby Epstein OnlyFans Content – Everything You Get
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your VIP subscription to Gabby Epstein's OnlyFans unlocks a world of exclusive content updated daily. Here's what you'll get immediate access to:
              </p>
              <ul className="list-none text-gray-700 mb-8 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-pink-500 text-xl">♥️</span>
                  <span>Exclusive daily posts featuring Gabby's premium photoshoots</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pink-500 text-xl">♥️</span>
                  <span>Personal chat access with priority responses from Gabby</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pink-500 text-xl">♥️</span>
                  <span>Intimate behind-the-scenes content from photo shoots</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pink-500 text-xl">♥️</span>
                  <span>Special requests and customized content options</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pink-500 text-xl">♥️</span>
                  <span>Exclusive lifestyle and personal moments</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Official Content Section */}
        <section id="leaked" className="py-12">
          <div className="container mx-auto px-4">
            <p className="text-3xl font-bold mb-8 text-center">
              Gabby Epstein OnlyFans: Official vs Leaked Content
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="mb-8">
                  <p className="text-xl font-bold mb-4 text-blue-800">Why Choose Official Content?</p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    While leaked content exists online, accessing Gabby's content through her official OnlyFans is not just about quality - it's about legality and respect:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-3">
                    <li>Get 100% authentic, high-quality content directly from Gabby</li>
                    <li>Access exclusive content that never gets leaked</li>
                    <li>Enjoy daily updates and real-time interactions</li>
                    <li>Support Gabby's work ethically and legally</li>
                    <li>Avoid legal issues related to unauthorized content distribution</li>
                    <li>Respect creator's rights and intellectual property</li>
                    <li>Contribute to sustainable content creation</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="text-xl font-bold mb-4 text-blue-800">Legal & Ethical Considerations</p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-blue-800 font-medium mb-3">Why Leaked Content is Problematic:</p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Violates intellectual property rights</li>
                      <li>• May result in legal consequences for distributors and viewers</li>
                      <li>• Undermines creator's ability to produce content</li>
                      <li>• Often involves privacy violations</li>
                      <li>• Reduces content quality and frequency</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-blue-800 font-medium mb-3">Supporting Content Creators:</p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Enables continuous high-quality content production</li>
                      <li>• Maintains fair compensation for creators</li>
                      <li>• Encourages more exclusive content creation</li>
                      <li>• Builds a respectful creator-fan relationship</li>
                      <li>• Ensures platform sustainability</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur rounded-lg p-6 border border-blue-100">
                  <p className="text-xl font-bold mb-4 text-blue-800">🔒 Official Content Guarantee</p>
                  <p className="text-blue-800 font-medium mb-4">
                    By subscribing to Gabby's official OnlyFans, you get:
                  </p>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Verified, authentic content updated daily</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Safe, secure payment and access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Direct interaction with Gabby</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Exclusive content not available elsewhere</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-xl mb-3">When does Gabby post new content?</h3>
                <p className="text-gray-700">
                  Gabby maintains an active daily posting schedule. You'll get fresh updates every day, including exclusive photos, personal messages, and special content throughout the week.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-xl mb-3">What exclusive content will I get access to?</h3>
                <p className="text-gray-700">
                  Your subscription includes premium photos, exclusive videos, intimate behind-the-scenes content, and personal interactions. Gabby regularly shares content that's never posted anywhere else.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-xl mb-3">How much does the subscription cost?</h3>
                <p className="text-gray-700">
                  Right now, you can get a special FREE trial (regular price: $14.99/month). This includes access to all regular content, with optional exclusive content available for purchase.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-xl mb-3">Can I chat with Gabby directly?</h3>
                <p className="text-gray-700">
                  Yes! All subscribers can send direct messages to Gabby and request custom content. While response times may vary due to message volume, she prioritizes responding to all her fans.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-xl mb-3">Is the content different from other platforms?</h3>
                <p className="text-gray-700">
                  Absolutely! Gabby's OnlyFans features exclusive content you won't find on any other platform. This includes premium photoshoots, personal moments, and special content made just for subscribers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#00AFF0] to-[#0055FF] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-4xl font-bold mb-8">Join Gabby Epstein's OnlyFans Today!</p>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't miss out on this exclusive FREE trial offer - Get instant access to all content now!
            </p>
            {SHOULD_OBFUSCATE_LINKS ? (
              <button 
                onClick={(e) => handleObfuscatedClick(e, ONLYFANS_URL, SHOULD_OBFUSCATE_LINKS)}
                className="inline-block bg-white text-[#0055FF] px-12 py-4 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all"
              >
                Get FREE Access Now
              </button>
            ) : (
              <a 
                href={RAW_ONLYFANS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#0055FF] px-12 py-4 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all"
              >
                Get FREE Access Now
              </a>
            )}
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-5xl w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-all z-10"
          >
            ‹
          </button>
          
          <div 
            className="relative w-[90vw] h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={images[selectedImageIndex]}
              alt={`Gallery image ${selectedImageIndex + 1}`}
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 cursor-zoom-in"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-5xl w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-all"
            >
              ×
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>

          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-5xl w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-all z-10"
          >
            ›
          </button>
        </div>
      )}

      {/* FOMO Banner */}
      <div className="mt-8 bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-xl text-center">
        <p className="text-xl font-bold mb-2">Don't Wait - Limited Time Offer!</p>
        <p className="text-sm opacity-90 mb-6">
          Only <span className="font-bold">50 FREE spots</span> remaining. Join <span className="font-bold">147 fans</span> who already claimed their access today!
        </p>
      </div>

    </div>
  );
}
