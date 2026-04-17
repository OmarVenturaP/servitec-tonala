import React from "react";
import Link from "next/link";

export default function Footer() {
  // Obtenemos el año actual automáticamente para el Copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000814] border-t border-white/5 pt-12 md:pt-20 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Contenedor Principal: Grid en PC, Columna en Móvil */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          {/* Columna 1: Marca (Centrada en móvil, izquierda en PC) */}
          <div className="flex flex-col items-center md:items-start md:col-span-2 text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src="https://res.cloudinary.com/dzgqpqv9f/image/upload/v1772641078/servitec-app-logo_fvw6it.png" 
                className="h-12 w-12 object-cover rounded-xl shadow-[0_0_15px_rgba(76,253,253,0.1)] group-hover:shadow-[0_0_20px_rgba(76,253,253,0.3)] transition-all" 
                alt="Logo SERVITEC" 
              />
              <span className="text-xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                SERVITEC
              </span>
            </Link>
            {/* Esta descripción se oculta en móvil para ahorrar espacio */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm hidden md:block">
              Soluciones tecnológicas de alto impacto. Desarrollo web moderno, tiendas virtuales e interfaces a la medida para potenciar tu negocio en el mundo digital.
            </p>
          </div>

          {/* Columna 2: Servicios */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Servicios
            </h4>
            <ul className="space-y-4 text-center md:text-left text-sm">
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-[var(--color-servitec-cyan)] transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-[var(--color-servitec-cyan)] transition-colors">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-500 hover:text-[var(--color-servitec-cyan)] transition-colors">
                  Software a la medida
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-500 hover:text-[var(--color-servitec-cyan)] transition-colors">
                  Diseño UI/UX
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Empresa y Contacto */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Empresa
            </h4>
            <ul className="space-y-4 text-center md:text-left text-sm">
              <li>
                <Link href="/sobre-nosotros" className="text-gray-400 hover:text-[var(--color-servitec-cyan)] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-[var(--color-servitec-cyan)] transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-gray-400 hover:text-[var(--color-servitec-cyan)] transition-colors">
                  Portafolio
                </Link>
              </li>
              <li className="pt-2">
                <a 
                  href="https://wa.link/hdutgd" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block px-6 py-2 border border-[var(--color-servitec-cyan)]/30 text-[var(--color-servitec-cyan)] rounded-full hover:bg-[var(--color-servitec-cyan)] hover:text-black font-bold transition-all"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Línea Divisoria y Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left uppercase tracking-widest">
            © {currentYear} SERVITEC. Al siguiente nivel.
          </p>
        </div>

      </div>
    </footer>
  );
}