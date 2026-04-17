"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const getLinkClass = (path) => {
    if (pathname === path) {
      return "text-[var(--color-servitec-cyan)] font-black drop-shadow-[0_0_8px_rgba(76,253,253,0.5)]";
    }
    return "text-gray-300 hover:text-[var(--color-servitec-cyan)] font-bold";
  };

  const getMobileLinkClass = (path) => {
    if (pathname === path) {
      return "text-[var(--color-servitec-cyan)] font-black drop-shadow-[0_0_8px_rgba(76,253,253,0.5)]";
    }
    return "text-white hover:text-[var(--color-servitec-cyan)] font-bold";
  };

  return (
    <nav className="fixed w-full z-[100] bg-[#00040f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="https://res.cloudinary.com/dzgqpqv9f/image/upload/v1772641078/servitec-app-logo_fvw6it.png" 
            className="h-16 w-16 object-cover rounded-xl shadow-[0_0_15px_rgba(76,253,253,0.2)] group-hover:shadow-[0_0_25px_rgba(76,253,253,0.5)] transition-all duration-300" 
            alt="Logo SERVITEC" 
          />
          <div className="hidden sm:flex flex-col justify-center">
             <span className="text-xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
               SERVITEC
             </span>
             <span className="text-[10px] text-gray-400 tracking-widest uppercase">
               Al siguiente nivel
             </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-widest transition-colors">
          <Link href="/" className={getLinkClass('/')}>Inicio</Link>
          <Link href="/desarrollo" className={getLinkClass('/desarrollo')}>Desarrollo</Link>
          <Link href="/proyectos" className={getLinkClass('/proyectos')}>Portfolio</Link>
          <Link href="/sobre-nosotros" className={getLinkClass('/sobre-nosotros')}>Nosotros</Link>
          <Link href="/contacto" className={getLinkClass('/contacto')}>Contacto</Link>
          <Link 
            href="/contacto" 
            className="px-6 py-2 ml-4 border border-[var(--color-servitec-cyan)] text-[var(--color-servitec-cyan)] font-bold rounded-full hover:bg-[var(--color-servitec-cyan)] hover:text-black transition-all shadow-[0_0_10px_rgba(76,253,253,0.2)] hover:shadow-[0_0_20px_rgba(76,253,253,0.6)]"
          >
            Cotizar Proyecto
          </Link>
        </div>

        {/* Botón de Hamburguesa con animación sutil */}
        <button 
          className="lg:hidden text-white p-2 transform transition-transform duration-300 hover:scale-110 active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Menú Mobile Desplegable con Transición CSS Fluida */}
      <div 
        className={`lg:hidden absolute top-24 left-0 w-full bg-[#00040f]/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center gap-6 uppercase tracking-widest text-sm transition-all duration-500 ease-in-out overflow-hidden origin-top ${
          isOpen 
            ? "max-h-[500px] py-8 opacity-100 translate-y-0 pointer-events-auto" 
            : "max-h-0 py-0 opacity-0 -translate-y-4 pointer-events-none border-transparent"
        }`}
      >
        <Link href="/" onClick={() => setIsOpen(false)} className={getMobileLinkClass('/')}>Inicio</Link>
        <Link href="/desarrollo" onClick={() => setIsOpen(false)} className={getMobileLinkClass('/desarrollo')}>Desarrollo</Link>
        <Link href="/proyectos" onClick={() => setIsOpen(false)} className={getMobileLinkClass('/proyectos')}>Portfolio</Link>
        <Link href="/sobre-nosotros" onClick={() => setIsOpen(false)} className={getMobileLinkClass('/sobre-nosotros')}>Nosotros</Link>
        <Link href="/contacto" onClick={() => setIsOpen(false)} className={getMobileLinkClass('/contacto')}>Contacto</Link>
        <Link 
          href="/contacto" 
          onClick={() => setIsOpen(false)} 
          className="mt-2 px-8 py-3 bg-[var(--color-servitec-cyan)] text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(76,253,253,0.4)]"
        >
          Cotizar Proyecto
        </Link>
      </div>
    </nav>
  );
}