import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Terima kasih! Pesan Anda telah dikirim.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-white text-black py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Kontak
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-700"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Sampaikan kebutuhan Anda. Kami siap membantu mewujudkan solusi terbaik.
        </motion.p>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
            <label className="block text-sm font-medium mb-2">Nama</label>
            <input
              type="text"
              required
              className="w-full rounded-md border border-black/20 px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Nama lengkap"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: 0.05 }}>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-md border border-black/20 px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="email@domain.com"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <label className="block text-sm font-medium mb-2">Pesan</label>
            <textarea
              required
              rows={5}
              className="w-full rounded-md border border-black/20 px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Tulis pesan Anda..."
            />
          </motion.div>
          <motion.button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-black/90 transition-colors"
            whileTap={{ scale: 0.98 }}
            whileHover={{ y: -1 }}
          >
            Kirim Pesan
          </motion.button>
          <AnimatePresence>
            {status && (
              <motion.p
                className="text-sm text-gray-600"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
              >
                {status}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}
