import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Sistem E-Commerce Minimalis' },
  { id: 2, title: 'Dashboard Data Realtime' },
  { id: 3, title: 'Platform Kolaborasi Tim' },
  { id: 4, title: 'Produk IoT Terintegrasi' },
  { id: 5, title: 'Aplikasi Internal Perusahaan' },
  { id: 6, title: 'Website Brand Premium' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white text-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Proyek
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-700 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Cuplikan karya kami dalam nuansa monokromatik yang elegan.
        </motion.p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              className="relative aspect-[4/3] bg-black text-white rounded-xl overflow-hidden group border border-black/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
            >
              <div className="w-full h-full grid place-items-center">
                <span className="text-sm tracking-wide uppercase opacity-90">{p.title}</span>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-gray-100/80 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
