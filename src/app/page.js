import Link from "next/link";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#00040f] text-white relative overflow-hidden">
      <Navbar />

      {/* Luces de Atmósfera Principal */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-servitec-cyan)]/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* 1. SECCIÓN HERO (El primer impacto) */}
      <section className="relative pt-40 pb-20 px-6 z-10 min-h-[80vh] flex flex-col justify-center items-center text-center">
        <div className="inline-block mb-6 px-6 py-2 rounded-full border border-[var(--color-servitec-cyan)]/30 bg-[var(--color-servitec-cyan)]/10 text-[var(--color-servitec-cyan)] text-xs md:text-sm font-bold tracking-[0.3em] uppercase backdrop-blur-md">
          TECNOLOGÍA Y SEGURIDAD
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-tight">
          LLEVA TU ENTORNO AL <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-servitec-cyan)] to-blue-500">
            SIGUIENTE NIVEL
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Diseñamos plataformas web modernas para potenciar tu negocio y blindamos tu patrimonio con sistemas de seguridad electrónica de última generación.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
          <Link 
            href="/contacto" 
            className="px-10 py-4 bg-[var(--color-servitec-cyan)] text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(76,253,253,0.3)]"
          >
            Cotizar Proyecto
          </Link>
          <Link 
            href="/sobre-nosotros" 
            className="px-10 py-4 bg-white/5 border border-white/20 text-white font-bold uppercase tracking-widest rounded-2xl hover:bg-white/10 hover:border-[var(--color-servitec-cyan)] transition-all"
          >
            Conocer Más
          </Link>
        </div>
      </section>

      {/* 2. SECCIÓN DE SERVICIOS (El enrutador visual) */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest">
            NUESTROS <span className="text-[var(--color-servitec-cyan)]">SERVICIOS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Tarjeta: Desarrollo Web */}
          <Link href="/desarrollo" className="group block relative rounded-[3rem] p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-[var(--color-servitec-cyan)]/50 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-servitec-cyan)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            <div className="relative h-full bg-[#000814] rounded-[calc(3rem-4px)] p-10 md:p-14 overflow-hidden flex flex-col justify-between">
              
              <div className="text-6xl mb-8 transform group-hover:scale-110 group-hover:translate-x-2 transition-transform duration-500">
                💻
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-wider group-hover:text-[var(--color-servitec-cyan)] transition-colors">
                  Desarrollo Web
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Páginas web responsivas, tiendas virtuales y sistemas a la medida con tecnología de punta (Next.js, Tailwind, MySQL, etc).
                </p>
                <span className="inline-flex items-center gap-2 text-[var(--color-servitec-cyan)] font-bold uppercase tracking-widest">
                  Ver portafolio
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Tarjeta: Seguridad */}
          <Link href="/seguridad" className="group block relative rounded-[3rem] p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/50 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            <div className="relative h-full bg-[#000814] rounded-[calc(3rem-4px)] p-10 md:p-14 overflow-hidden flex flex-col justify-between">
              
              <div className="text-6xl mb-8 transform group-hover:scale-110 group-hover:translate-x-2 transition-transform duration-500">
                🛡️
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                  Seguridad
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Venta e instalación profesional de cámaras CCTV y sistemas de alarmas para tu total tranquilidad, sea que estés en tu hogar o negocio.
                </p>
                <span className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest">
                  Ver paquetes
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* 3. BANNER DE CONFIANZA */}
      <section className="border-y border-white/5 bg-[#000814]/50 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
            CALIDAD GARANTIZADA EN
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-xl font-black text-gray-700 uppercase tracking-widest">
            <span>Diseño UI/UX</span>
            <span className="hidden md:block">•</span>
            <span>Instalación Física</span>
            <span className="hidden md:block">•</span>
            <span>Soporte Técnico</span>
          </div>
        </div>
      </section>
    </main>
  );
}