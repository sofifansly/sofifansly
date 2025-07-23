'use client';

const EmptySpacer = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-blue-100 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="text-center text-gray-400">
          {/* Subtle hint that there's more content */}
          <div className="animate-bounce">
            <svg className="w-8 h-8 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <p className="text-sm opacity-20">Scroll for more</p>
        </div>
      </div>
    </section>
  );
};

export default EmptySpacer;
