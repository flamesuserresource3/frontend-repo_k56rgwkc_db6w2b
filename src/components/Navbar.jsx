import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-black/60 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-semibold tracking-wide">Patabuga</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:opacity-80 transition-opacity">Tentang</a>
            <a href="#services" className="hover:opacity-80 transition-opacity">Layanan</a>
            <a href="#portfolio" className="hover:opacity-80 transition-opacity">Proyek</a>
            <a href="#contact" className="hover:opacity-80 transition-opacity">Kontak</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
