import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* gradient overlay improves text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* subtle animated rings for depth */}
      <motion.div
        aria-hidden
        className="absolute -right-20 top-24 h-72 w-72 rounded-full border border-white/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-10 top-40 h-96 w-96 rounded-full border border-white/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.35 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-start">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Patabuga — Where Innovation Meets Precision
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-base sm:text-lg text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Kami menciptakan solusi teknologi yang efisien dan berkelas untuk dunia modern.
        </motion.p>
        <motion.button
          onClick={handleScrollToAbout}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-white bg-white text-black px-6 py-3 text-sm font-semibold shadow-sm hover:bg-transparent hover:text-white hover:border-white transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Pelajari Lebih Lanjut
        </motion.button>

        {/* scroll indicator */}
        <motion.div
          className="mt-16 h-10 w-[2px] bg-white/30"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 40 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
    </section>
  );
}
