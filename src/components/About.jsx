import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="w-full">
      <div className="grid md:grid-cols-2">
        <div className="relative bg-black text-white px-6 sm:px-10 lg:px-16 py-16 sm:py-24 overflow-hidden">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            Tentang Kami
          </motion.h2>
          <motion.p
            className="mt-6 text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Patabuga berfokus pada inovasi, teknologi, dan solusi kreatif. Kami membantu
            organisasi merancang, membangun, dan mengoperasikan produk digital yang
            presisi dan berdampak.
          </motion.p>
          <motion.blockquote
            className="mt-8 border-l-2 border-white/30 pl-4 italic text-gray-200"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            “Kesederhanaan adalah bentuk tertinggi dari kecanggihan.”
          </motion.blockquote>

          {/* ambient grid lines */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden>
            <div className="h-full w-full" style={{
              backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
          </div>
        </div>
        <div className="bg-white text-black px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
          <motion.h3
            className="text-xl sm:text-2xl font-semibold"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            Visi & Misi
          </motion.h3>
          <motion.ul
            className="mt-6 space-y-3 text-gray-700"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
            }}
          >
            {[
              'Menghadirkan solusi teknologi yang elegan dan efisien.',
              'Mendorong inovasi yang berkelanjutan dan berdampak nyata.',
              'Berkolaborasi erat dengan klien untuk mencapai presisi.',
            ].map((item) => (
              <motion.li key={item} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                • {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
