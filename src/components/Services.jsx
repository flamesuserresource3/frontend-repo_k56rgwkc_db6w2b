import React from 'react';
import { Code, Boxes, Lightbulb, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code,
    title: 'Pengembangan Web',
    desc: 'Website dan aplikasi modern dengan performa tinggi dan keamanan terbaik.'
  },
  {
    icon: Boxes,
    title: 'Desain Sistem Digital',
    desc: 'Arsitektur sistem yang skalabel dan rapi untuk kebutuhan jangka panjang.'
  },
  {
    icon: Wrench,
    title: 'Konsultasi Teknologi',
    desc: 'Pendampingan strategis untuk transformasi digital dan efisiensi operasional.'
  },
  {
    icon: Lightbulb,
    title: 'Inovasi Produk',
    desc: 'Eksplorasi ide, prototyping cepat, dan validasi produk berorientasi hasil.'
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Layanan
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Kami merancang solusi minimalis, modern, dan presisi untuk mempercepat pertumbuhan bisnis Anda.
        </motion.p>
        <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              className="group bg-white text-black rounded-xl p-6 border border-black/10 shadow-sm transition-transform duration-200 hover:-translate-y-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-black text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
