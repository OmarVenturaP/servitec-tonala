import React from "react";

export default function Marcas() {
  const brands = [
    { name: "Interfono", src: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1739579513/interfono__1_-removebg-preview_tqwgen.png" },
    { name: "CALEPC10", src: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1739579335/CALEPC10-h_lxntfb.webp" },
    { name: "Dahua", src: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1739579335/Dahua-Logo-01_wlos8p.png" },
    { name: "HiLook", src: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1739579335/HiLook-logo_uz7ayd.webp" },
    { name: "Ezviz", src: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1739579514/ezviz-logo-png_seeklogo-340396-removebg-preview_fyxfgl.png" }
  ];

  // Duplicamos los logos para el scroll infinito
  const infiniteBrands = [...brands, ...brands, ...brands];

  return (
    <section className="relative w-full my-12 py-12 overflow-hidden bg-[#000814]">
      {/* Fondo Decorativo: Círculo de luz central para quitar lo tenebroso */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 text-center mb-16 px-2">
        <h5 className="text-cyan-400/60 uppercase tracking-[0.4em] text-xs font-black">
          SOCIOS TECNOLÓGICOS DE CONFIANZA
        </h5>
      </div>
      
      <div className="relative w-full max-w-[100vw] overflow-hidden">
        {/* Carrusel Infinito */}
        <div className="flex animate-infinite-scroll whitespace-nowrap items-center gap-12 md:gap-32 w-max px-4">
          {infiniteBrands.map((brand, index) => (
            <div 
              key={index} 
              className="inline-block w-40 md:w-56 flex-shrink-0 transition-all duration-500 transform hover:scale-110 group"
            >
              <img
                src={brand.src}
                alt={brand.name}
                /* Filtro para hacer los logos claros/cian y más grandes */
                className="w-full h-20 md:h-24 object-contain brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(76,253,253,0.8)] transition-all"
                style={{ filter: 'brightness(0) saturate(100%) invert(88%) sepia(21%) font-family: inherit; saturate(1834%) hue-rotate(134deg) brightness(103%) contrast(101%)' }}
              />
            </div>
          ))}
        </div>

        {/* Gradientes laterales para suavizar el flujo */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#000814] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#000814] to-transparent z-20 pointer-events-none"></div>
      </div>
    </section>
  );
}
