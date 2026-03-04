import Navbar from "../components/Navbar";
import HerramientasGrid from "./HerramientasGrid";
import DataProjects from "../proyectos/DataProjects";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleInfo, faGlobe, faCode, faMobileScreen } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: 'Desarrollo Web | SERVITEC',
  description: 'Creamos plataformas digitales, e-commerce y sistemas web ultrarrápidos y optimizados para hacer crecer tu negocio.',
};

const productos = [
  {
    titulo: "Página Web estática",
    img: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1701463252/page_gjdcsa.png",
    desc: "Si eres un emprendedor, profesionista o simplemente quieres promocionar una marca o evento, esta opción es para ti. Genera confianza y atrae más clientes.",
    link: "https://wa.link/smhv4t"
  },
  {
    titulo: "Sitio Web",
    img: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1701463252/sitio_bofndf.png",
    desc: "Permite mostrar los diferentes productos y soluciones con los que cuentas, todo al alcance de un click, para crear una experiencia única entre los usuarios.",
    link: "https://wa.link/smhv4t"
  },
  {
    titulo: "Aplicación Web",
    img: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1701463250/app-web_udv55m.png",
    desc: "Disfruta de mayores herramientas: gestión de usuarios, pedidos automáticos y generación de campañas publicitarias, además de integrar tickets y comandas.",
    link: "https://wa.link/smhv4t"
  }
];

export default function DesarrolloWebPage() {
  return (
    <main className="min-h-screen bg-[#00040f] text-white relative overflow-hidden">
      <Navbar />
      
      {/* Luces de atmósfera de fondo */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[50%] right-[0%] w-[400px] h-[400px] bg-[var(--color-servitec-cyan)]/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Hero de Desarrollo Web */}
      <div className="pt-40 pb-10 px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
          DESARROLLO <span className="text-[var(--color-servitec-cyan)]">WEB</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Transformamos tus ideas en plataformas digitales de alto impacto. 
          Diseño a medida, tiendas virtuales y sistemas web optimizados para hacer crecer tu negocio.
        </p>
      </div>

      {/* Sección 1: Tecnologías */}
      <HerramientasGrid />

      {/* Sección 2: El Portafolio (Vista Previa con Efecto Difuminado) */}
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

      {/* Sección de Productos */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 uppercase tracking-widest">Nuestros <span className="text-[var(--color-servitec-cyan)]">Productos</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {productos.map((prod, i) => (
            <div key={i} className="group bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-[var(--color-servitec-cyan)]/50 transition-all duration-500 shadow-xl">
              <img src={prod.img} className="w-full h-48 object-contain mb-8 group-hover:scale-105 transition-transform duration-500" alt={prod.titulo} />
              <h3 className="text-2xl font-bold mb-4">{prod.titulo}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{prod.desc}</p>
              <a href={prod.link} className="block text-center py-3 rounded-xl border border-[var(--color-servitec-cyan)] text-[var(--color-servitec-cyan)] font-bold hover:bg-[var(--color-servitec-cyan)] hover:text-black transition-all">
                LO QUIERO
              </a>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}