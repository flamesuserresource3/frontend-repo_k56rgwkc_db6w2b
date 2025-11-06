import React, { useState } from 'react';

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
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Kontak</h2>
        <p className="mt-4 text-gray-700">
          Sampaikan kebutuhan Anda. Kami siap membantu mewujudkan solusi terbaik.
        </p>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Nama</label>
            <input
              type="text"
              required
              className="w-full rounded-md border border-black/20 px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Nama lengkap"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-md border border-black/20 px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="email@domain.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Pesan</label>
            <textarea
              required
              rows={5}
              className="w-full rounded-md border border-black/20 px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Tulis pesan Anda..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-black/90 transition-colors"
          >
            Kirim Pesan
          </button>
          {status && (
            <p className="text-sm text-gray-600">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
