import React from "react";

export default function HerramientasGrid() {
  // Tus 4 tecnologías principales (Las tarjetas grandes)
  const herramientasPrincipales = [
    {
      nombre: "Next.js",
      descripcion: "Desarrollo de aplicaciones web ultra rápidas y optimizadas para SEO con renderizado del lado del servidor.",
      icono: "🚀"
    },
    {
      nombre: "Tailwind CSS",
      descripcion: "Diseño de interfaces modernas, responsivas y completamente a la medida, píxel por píxel.",
      icono: "🎨"
    },
    {
      nombre: "JavaScript",
      descripcion: "Interactividad avanzada y lógica dinámica para experiencias de usuario fluidas.",
      icono: "⚡"
    },
    {
      nombre: "MySQL",
      descripcion: "Arquitectura de bases de datos relacionales robustas y seguras para el manejo de tu información.",
      icono: "🗄️"
    }
  ];

  // El resto de tu arsenal para el carrusel infinito
  const herramientasExtra = [
    "PHP", "Laravel", "CodeIgniter", "Node.js", "XAMPP", "MAMP", "Git", "GitHub", "React", "APIs REST", "LIVEWIRE", "Vercel", "Cloudinary"
  ];

  // Duplicamos el arreglo para que el efecto de scroll infinito sea perfecto y no se corte
  const infiniteTools = [...herramientasExtra, ...herramientasExtra, ...herramientasExtra];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
          Nuestro <span className="text-[var(--color-servitec-cyan)]">Stack Tecnológico</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Utilizamos las herramientas más modernas de la industria para garantizar que tu sitio web sea rápido, seguro y escalable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
        {herramientasPrincipales.map((tech, index) => (
          <div 
            key={index} 
            // Redujimos el padding (p-5 en móvil, p-8 en PC) y el radio del borde
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] p-5 md:p-8 hover:border-[var(--color-servitec-cyan)]/50 transition-all duration-500 hover:-translate-y-2 shadow-xl relative overflow-hidden"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-servitec-cyan)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10"></div>
            
            <div className="text-3xl md:text-4xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform origin-left">
              {tech.icono}
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-[var(--color-servitec-cyan)] transition-colors">
              {tech.nombre}
            </h3>
            
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              {tech.descripcion}
            </p>
          </div>
        ))}
      </div>

      {/* 2. Carrusel Infinito de Tecnologías Extra */}
      <div className="relative w-full max-w-[100vw] overflow-hidden py-4">        
        <div className="flex animate-infinite-scroll whitespace-nowrap items-center gap-6 w-max px-4">
          {infiniteTools.map((tool, index) => (
            <div 
              key={index} 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#000814]/50 backdrop-blur-md border border-white/5 rounded-full text-gray-300 font-bold tracking-widest uppercase hover:border-[var(--color-servitec-cyan)] hover:text-white hover:shadow-[0_0_20px_rgba(76,253,253,0.2)] transition-all cursor-default"
            >
              {tool}
            </div>
          ))}
        </div>

        {/* Difuminados laterales para que los botones aparezcan y desaparezcan suavemente */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#00040f] to-transparent z-20 pointer-events-none mt-12"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#00040f] to-transparent z-20 pointer-events-none mt-12"></div>
      </div>
    </section>
  );
}