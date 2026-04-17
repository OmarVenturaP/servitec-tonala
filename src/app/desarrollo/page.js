import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: 'Desarrollo Web & Software | SERVITEC',
  description: 'Conoce nuestras soluciones en desarrollo de software: Landing Pages, Tiendas Virtuales, Web Apps y plataformas SaaS a la medida.',
};

export default function DesarrolloPage() {
  const servicios = [
    {
      id: "landing-pages",
      icono: "🚀",
      titulo: "Landing Pages",
      subtitulo: "Conversión de alto impacto",
      descripcion: "Páginas de un solo objetivo, súper rápidas y diseñadas estratégicamente para maximizar tus ventas y captación de clientes potenciales con excelente posicionamiento SEO.",
      tecnologias: ["Next.js", "Tailwind CSS", "Framer Motion"],
      color: "var(--color-servitec-cyan)",
      colorClass: "text-[var(--color-servitec-cyan)]",
      bgClass: "from-[var(--color-servitec-cyan)]/10"
    },
    {
      id: "ecommerce",
      icono: "🛒",
      titulo: "E-Commerce",
      subtitulo: "Tu tienda abierta 24/7",
      descripcion: "Tiendas en línea robustas, seguras y autogestionables. Integramos pasarelas de pago, control total de tu inventario y experiencias de compra sin fricciones para tus usuarios.",
      tecnologias: ["React", "Stripe / PayPal", "Node.js"],
      color: "#a855f7", // purple-500
      colorClass: "text-purple-400",
      bgClass: "from-purple-500/10"
    },
    {
      id: "web-apps",
      icono: "📱",
      titulo: "Progressive Web Apps",
      subtitulo: "Experiencia nativa en la web",
      descripcion: "Aplicaciones accesibles desde cualquier navegador o dispositivo, con tiempos de carga instantáneos e interfaces fluidas, sin necesidad de instalación desde tiendas.",
      tecnologias: ["React", "PWA", "Firebase"],
      color: "#ec4899", // pink-500
      colorClass: "text-pink-400",
      bgClass: "from-pink-500/10"
    },
    {
      id: "saas",
      icono: "⚙️",
      titulo: "Software SaaS & CRM",
      subtitulo: "Infraestructuras que escalan",
      descripcion: "Sistemas administrativos personalizados, bases de datos complejas y automatización de procesos internos para gobernar los datos y las reglas vitales de tu empresa.",
      tecnologias: ["Next.js", "MySQL", "Vercel"],
      color: "#3b82f6", // blue-500
      colorClass: "text-blue-400",
      bgClass: "from-blue-500/10"
    }
  ];

  return (
    <main className="min-h-screen bg-[#00040f] text-white relative overflow-hidden">
      <Navbar />

      {/* Luces de Atmósfera */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-servitec-cyan)]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10 text-center flex flex-col items-center">
        <div className="inline-block mb-6 px-6 py-2 rounded-full border border-[var(--color-servitec-cyan)]/30 bg-[var(--color-servitec-cyan)]/10 text-[var(--color-servitec-cyan)] text-xs md:text-sm font-bold tracking-[0.3em] uppercase backdrop-blur-md">
          ARQUITECTURA DE SOFTWARE
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 leading-tight max-w-4xl">
          SOLUCIONES DIGITALES <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-servitec-cyan)] to-blue-500">
            A LA MEDIDA
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
          No solo somos programadores; somos arquitectos tecnológicos. Construimos herramientas digitales potentes para escalar tu negocio sin límites.
        </p>
      </section>

      {/* Grid de Soluciones */}
      <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {servicios.map((servicio, index) => (
            <div 
              key={index}
              id={servicio.id}
              className={`group relative rounded-[2.5rem] p-1 bg-gradient-to-b from-white/10 to-transparent hover:${servicio.bgClass} transition-all duration-500 overflow-hidden shadow-xl scroll-mt-[100px]`}
            >
              {/* Resplandor hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${servicio.bgClass} to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl`}></div>
              
              <div className="relative h-full bg-[#000814] rounded-[calc(2.5rem-4px)] p-10 md:p-12 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {servicio.icono}
                  </div>
                  
                  <h4 className={`text-sm font-bold uppercase tracking-[0.2em] mb-2 ${servicio.colorClass}`}>
                    {servicio.subtitulo}
                  </h4>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-wider">
                    {servicio.titulo}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {servicio.descripcion}
                  </p>
                </div>
                
                {/* Metadatos (Tecnologías) */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">Stack Principal:</p>
                  <div className="flex flex-wrap gap-3">
                    {servicio.tecnologias.map((tech, idx) => (
                      <span key={idx} className="bg-white/5 border border-white/10 px-3 py-1 rounded-md text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Call To Action */}
      <section className="border-y border-white/5 bg-[#000814] py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            ¿LISTO PARA MODERNIZAR <br className="hidden md:block"/> TU EMPRESA?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Cuéntanos de tu visión. Transformaremos tus ideas en un producto de software excepcional.
          </p>
          <Link 
            href="/contacto" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-servitec-cyan)] text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(76,253,253,0.3)]"
          >
            Cotizar Tu Proyecto
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
