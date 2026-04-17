import Link from "next/link";
import Navbar from "./components/Navbar";
import DataProjects from "./proyectos/DataProjects";
import HerramientasGrid from "./components/HerramientasGrid";

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
          SOFTWARE & DESARROLLO WEB
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-tight">
          ESCALA TU NEGOCIO EN EL <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-servitec-cyan)] to-blue-500">
            MUNDO DIGITAL
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Diseñamos y desarrollamos plataformas web modernas, tiendas virtuales altamente conversoras y software a la medida para potenciar el crecimiento de tu empresa.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
          <Link 
            href="/contacto" 
            className="px-10 py-4 bg-[var(--color-servitec-cyan)] text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(76,253,253,0.3)]"
          >
            Iniciar Proyecto
          </Link>
          <Link 
            href="/sobre-nosotros" 
            className="px-10 py-4 bg-white/5 border border-white/20 text-white font-bold uppercase tracking-widest rounded-2xl hover:bg-white/10 hover:border-[var(--color-servitec-cyan)] transition-all"
          >
            Conocer Más
          </Link>
        </div>
      </section>

      {/* 3. BANNER DE CONFIANZA */}
      <section className="border-y border-white/5 bg-[#000814]/50 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
            ESPECIALISTAS EN TECNOLOGÍA
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-xl font-black text-gray-700 uppercase tracking-widest">
            <span>Diseño UI/UX</span>
            <span className="hidden md:block">•</span>
            <span>Frontend Avanzado</span>
            <span className="hidden md:block">•</span>
            <span>Arquitectura Cloud</span>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE SERVICIOS (El enrutador visual) */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest">
            NUESTRAS <span className="text-[var(--color-servitec-cyan)]">SOLUCIONES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tarjeta: Landing Pages */}
          <div className="group block relative rounded-[3rem] p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-[var(--color-servitec-cyan)]/50 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-servitec-cyan)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            <div className="relative h-full bg-[#000814] rounded-[calc(3rem-4px)] p-10 overflow-hidden flex flex-col justify-between">
              
              <div className="text-5xl mb-8 transform group-hover:scale-110 group-hover:translate-x-2 transition-transform duration-500">
                🚀
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wider group-hover:text-[var(--color-servitec-cyan)] transition-colors">
                  Landing Pages
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  Páginas de un solo objetivo, súper rápidas y diseñadas para maximizar tus ventas y captación de clientes potenciales con excelente SEO.
                </p>
                <Link href="/desarrollo#landing-pages" className="inline-flex items-center gap-2 text-[var(--color-servitec-cyan)] font-bold uppercase tracking-widest text-sm">
                  Ver portafolio
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjeta: E-Commerce */}
          <div className="group block relative rounded-[3rem] p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            <div className="relative h-full bg-[#000814] rounded-[calc(3rem-4px)] p-10 overflow-hidden flex flex-col justify-between">
              
              <div className="text-5xl mb-8 transform group-hover:scale-110 group-hover:translate-x-2 transition-transform duration-500">
                🛒
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wider group-hover:text-purple-400 transition-colors">
                  E-Commerce
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  Tiendas en línea robustas, seguras y autogestionables. Pasarelas de pago integradas y control total de tu inventario 24/7.
                </p>
                <Link href="/desarrollo#ecommerce" className="inline-flex items-center gap-2 text-purple-400 font-bold uppercase tracking-widest text-sm">
                  Más información
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjeta: Software a la medida */}
          <div className="group block relative rounded-[3rem] p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/50 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            <div className="relative h-full bg-[#000814] rounded-[calc(3rem-4px)] p-10 overflow-hidden flex flex-col justify-between">
              
              <div className="text-5xl mb-8 transform group-hover:scale-110 group-hover:translate-x-2 transition-transform duration-500">
                ⚙️
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                  Software SaaS
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  Sistemas administrativos personalizados, aplicaciones web complejas, CRMs y automatización de procesos internos para tu empresa.
                </p>
                <Link href="/desarrollo#saas" className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm">
                  Cotizar app
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tech Stack Directo (Sin Carrusel) */}
      <section className="bg-[#000814] py-16 border-t border-white/5 relative z-10">
        <HerramientasGrid />
      </section>

      {/* Nuestro Proceso Section */}
      <section className="py-20 bg-[#000814] relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest">
              NUESTRO <span className="text-[var(--color-servitec-cyan)]">PROCESO</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Trabajamos con una metodología ágil y transparente enfocada en el diseño, desarrollo y lanzamiento eficiente de tu producto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-[#00040f] border border-white/10 rounded-3xl p-8 hover:border-[var(--color-servitec-cyan)]/50 transition-all text-center group">
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[var(--color-servitec-cyan)]/10 transition-all">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">Descubrimiento</h3>
              <p className="text-gray-400 text-sm">Analizamos tu modelo de negocio y definimos los objetivos técnicos exactos.</p>
            </div>
            
            <div className="bg-[#00040f] border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all text-center group">
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all">🎨</div>
              <h3 className="text-xl font-bold text-white mb-3">Prototipado</h3>
              <p className="text-gray-400 text-sm">Diseñamos la interfaz UI/UX interactiva para que apruebes el flujo visual.</p>
            </div>
            
            <div className="bg-[#00040f] border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-all text-center group">
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all">💻</div>
              <h3 className="text-xl font-bold text-white mb-3">Desarrollo Ágil</h3>
              <p className="text-gray-400 text-sm">Codificamos con tecnologías modernas enfocados en la escalabilidad.</p>
            </div>
            
            <div className="bg-[#00040f] border border-white/10 rounded-3xl p-8 hover:border-[var(--color-servitec-cyan)]/50 transition-all text-center group">
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[var(--color-servitec-cyan)]/10 transition-all">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Lanzamiento</h3>
              <p className="text-gray-400 text-sm">Desplegamos en la nube con altos estándares de seguridad y rendimiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Section in Homepage */}
      <section className="py-20 bg-[#00040f] border-t border-white/5 relative z-10">
              <div className="max-w-7xl mx-auto px-6 relative py-10 bg-gradient-to-b from-transparent to-[#000814]">
                
                {/* Contenedor que recorta la altura para mostrar solo 1 línea y media */}
                <div className="relative max-h-[850px] overflow-hidden">
                  <DataProjects />
                  
                  {/* Capa de difuminado (Fade-out) y Botón */}
                  <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#000814] via-[#000814]/90 to-transparent flex items-end justify-center pb-8 z-20">
                    <Link 
                      href="/proyectos" 
                      className="group flex items-center gap-3 px-8 py-4 bg-[var(--color-servitec-cyan)] text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(76,253,253,0.3)]"
                    >
                      Ver todos los proyectos
                      <svg 
                        className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
        
              </div>
      </section>

    </main>
  );
}