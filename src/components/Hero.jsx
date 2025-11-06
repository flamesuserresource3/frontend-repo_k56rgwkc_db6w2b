import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlay to improve text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-start">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          Patabuga — Where Innovation Meets Precision
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-200">
          Kami menciptakan solusi teknologi yang efisien dan berkelas untuk dunia modern.
        </p>
        <button
          onClick={handleScrollToAbout}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-white bg-white text-black px-6 py-3 text-sm font-semibold shadow-sm hover:bg-transparent hover:text-white hover:border-white transition-colors"
        >
          Pelajari Lebih Lanjut
        </button>
      </div>
    </section>
  );
}
