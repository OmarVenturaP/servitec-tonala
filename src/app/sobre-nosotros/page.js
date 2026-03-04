import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SobreNosotrosPage() {
  const valores = [
    {
      titulo: "Innovación",
      descripcion: "Nos mantenemos a la vanguardia tecnológica para ofrecerte las soluciones web y de seguridad más modernas del mercado.",
      icono: "💡"
    },
    {
      titulo: "Confianza",
      descripcion: "Tu seguridad y tus datos son nuestra prioridad. Trabajamos con total transparencia y ética profesional.",
      icono: "🤝"
    },
    {
      titulo: "Calidad",
      descripcion: "Desde el código que escribimos hasta las cámaras que instalamos, utilizamos estándares de primer nivel.",
      icono: "⭐"
    },
    {
      titulo: "Cercanía",
      descripcion: "Soporte técnico real y atención personalizada en Tonalá y alrededores. No te dejamos solo después de la venta.",
      icono: "📍"
    }
  ];

  return (
    <main className="min-h-screen bg-[#00040f] text-white relative overflow-hidden">
      <Navbar />
      
      {/* Luces Ambientales */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-[var(--color-servitec-cyan)]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-20 relative z-10">
        
        {/* Encabezado Principal */}
        <div className="text-center mb-24">
          <p className="text-[var(--color-servitec-cyan)] font-bold uppercase tracking-[0.3em] text-sm mb-4">
            CONOCE A SERVITEC
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
            TECNOLOGÍA QUE <span className="text-[var(--color-servitec-cyan)]">PROTEGE Y CONECTA</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa orgullosamente establecida en Tonalá, Chiapas, especializada en llevar 
            soluciones digitales y de seguridad electrónica al siguiente nivel. Transformamos la manera 
            en que proteges tu entorno y proyectas tu negocio en internet.
          </p>
        </div>

        {/* Sección: Misión y Visión (Diseño Asimétrico) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Misión */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:border-[var(--color-servitec-cyan)]/50 transition-all duration-500 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-servitec-cyan)]/10 rounded-bl-[100px] -z-10 group-hover:bg-[var(--color-servitec-cyan)]/20 transition-all"></div>
            <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-wider">
              Nuestra <span className="text-[var(--color-servitec-cyan)]">Misión</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Proveer soluciones tecnológicas integrales, desarrollando plataformas web de alto impacto 
              e instalando sistemas de seguridad de vanguardia que garanticen la tranquilidad y el 
              crecimiento de nuestros clientes, respaldados por un servicio técnico excepcional.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-gradient-to-br from-[#000814] to-[#00122a] border border-white/10 rounded-[2.5rem] p-10 hover:border-blue-500/50 transition-all duration-500 relative group overflow-hidden md:translate-y-8 shadow-2xl">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-tr-[100px] -z-10 group-hover:bg-blue-500/20 transition-all"></div>
            <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-wider">
              Nuestra <span className="text-blue-400">Visión</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Consolidarnos como la empresa líder en tecnología y seguridad electrónica en Chiapas, 
              reconocidos por nuestra innovación, la calidad inquebrantable de nuestros proyectos 
              y el compromiso absoluto con el éxito y la protección de cada usuario que confía en nosotros.
            </p>
          </div>
        </div>

        {/* Sección: Nuestros Valores */}
        <div className="pt-10 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest">
              Nuestros <span className="text-[var(--color-servitec-cyan)]">Valores</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {valor.icono}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{valor.titulo}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {valor.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </main>
  );
}