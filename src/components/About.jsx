import React from 'react';

export default function About() {
  return (
    <section id="about" className="w-full">
      <div className="grid md:grid-cols-2">
        <div className="bg-black text-white px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Tentang Kami</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">
            Patabuga berfokus pada inovasi, teknologi, dan solusi kreatif. Kami membantu
            organisasi merancang, membangun, dan mengoperasikan produk digital yang
            presisi dan berdampak.
          </p>
          <blockquote className="mt-8 border-l-2 border-white/30 pl-4 italic text-gray-200">
            “Kesederhanaan adalah bentuk tertinggi dari kecanggihan.”
          </blockquote>
        </div>
        <div className="bg-white text-black px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
          <h3 className="text-xl sm:text-2xl font-semibold">Visi & Misi</h3>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Menghadirkan solusi teknologi yang elegan dan efisien.</li>
            <li>• Mendorong inovasi yang berkelanjutan dan berdampak nyata.</li>
            <li>• Berkolaborasi erat dengan klien untuk mencapai presisi.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
