import React from "react";
import Link from "next/link";

export default function ProductosGrid() {
  const productos = [
    {
      titulo: "Sistema de Alarmas",
      img: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1739504281/Sistemas-de-alarma_dz7ar6.jpg",
      link: "/alarmas",
      disponible: true
    },
    {
      titulo: "Cámaras de seguridad",
      img: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1739504280/tiposdecamarasdeseguridad_500_x_500_px_1512x_lczbrd.webp",
      link: "/camaras",
      disponible: true
    },
    {
      titulo: "Interfonos y videoporteros",
      img: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1739504662/interfono_e5lviv.png",
      link: "/interfono",
      disponible: false // En tu carousel original el botón de interfono estaba deshabilitado
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pt-10 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {productos.map((prod, index) => (
          <div 
            key={index} 
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 overflow-hidden hover:border-[var(--color-servitec-cyan)]/50 transition-all duration-500 shadow-2xl"
          >
            {/* Resplandor de fondo al hacer hover */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-servitec-cyan)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <h3 className="text-2xl font-bold mb-6 text-center text-white/90 group-hover:text-[var(--color-servitec-cyan)] transition-colors">
              {prod.titulo}
            </h3>
            
            <div className="relative h-56 mb-8 flex items-center justify-center">
              <img 
                src={prod.img} 
                alt={prod.titulo}
                className="max-h-full object-contain transform group-hover:scale-110 transition-transform duration-700" 
              />
            </div>

            <div className="text-center">
              {prod.disponible ? (
                <Link 
                  href={prod.link} 
                  className="inline-block w-full py-4 bg-[var(--color-servitec-cyan)] text-black font-black rounded-2xl hover:bg-white hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(76,253,253,0.2)]"
                >
                  VER CATÁLOGO
                </Link>
              ) : (
                <button 
                  disabled 
                  className="w-full py-4 bg-white/5 text-gray-500 font-bold rounded-2xl border border-white/5 cursor-not-allowed uppercase tracking-widest text-xs"
                >
                  Próximamente
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}