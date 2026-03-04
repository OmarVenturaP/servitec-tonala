import React from "react";
import Link from "next/link";

export default function PaquetesGrid() {
  const paquetes = [
    {
      nombre: "PAQUETE DUO",
      precio: "$2,990.00", // Ajusta estos precios según tu catálogo real
      descripcion: "Ideal para espacios pequeños o departamentos.",
      imagen: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1701464226/2cam_sgmphg.png", // Usa la URL de tu cámara
      caracteristicas: [
        "2 Cámaras Wi-Fi 360°",
        "Resolución Full HD 1080p",
        "Audio bidireccional",
        "Visión nocturna inteligente",
        "Instalación y configuración incluida"
      ],
      recomendado: false
    },
    {
      nombre: "BASIC 1",
      precio: "$4,990.00",
      descripcion: "La opción más popular para hogares y pequeños negocios.",
      imagen: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1701464230/4cam_qf4obg.png",
      caracteristicas: [
        "4 Cámaras de Seguridad HD",
        "DVR de 4 Canales",
        "Disco Duro de 1TB",
        "Monitoreo desde la App (iOS/Android)",
        "Instalación profesional incluida"
      ],
      recomendado: true // Esto hará que esta tarjeta resalte
    },
    {
      nombre: "BUSINESS PRO",
      precio: "$9,990.00",
      descripcion: "Cobertura total para oficinas, bodegas o comercios.",
      imagen: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1701464232/8cam_ufwa3x.png",
      caracteristicas: [
        "8 Cámaras de Seguridad HD",
        "DVR de 8 Canales",
        "Disco Duro de 2TB",
        "Resistencia a intemperie (IP67)",
        "Garantía extendida"
      ],
      recomendado: false
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
          Nuestros <span className="text-[var(--color-servitec-cyan)]">Paquetes</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Equipos de alta tecnología con instalación profesional garantizada en todo Tonalá y alrededores.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {paquetes.map((paquete, index) => (
          <div 
            key={index} 
            className={`relative flex flex-col p-8 rounded-[2.5rem] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
              paquete.recomendado 
                ? "bg-[#00040f]/80 border-2 border-[var(--color-servitec-cyan)] shadow-[0_0_30px_rgba(76,253,253,0.15)] md:scale-105 z-10" 
                : "bg-white/5 border border-white/10 hover:border-white/30"
            }`}
          >
            {/* Etiqueta de Recomendado */}
            {paquete.recomendado && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-servitec-cyan)] text-black font-black uppercase tracking-widest text-xs py-1.5 px-4 rounded-full shadow-[0_0_15px_rgba(76,253,253,0.5)]">
                Más Vendido
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{paquete.nombre}</h3>
              <p className="text-gray-400 text-sm h-10">{paquete.descripcion}</p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="relative w-40 h-40">
                {/* Brillo detrás de la cámara */}
                <div className="absolute inset-0 bg-[var(--color-servitec-cyan)]/20 blur-2xl rounded-full"></div>
                <img src={paquete.imagen} alt={paquete.nombre} className="relative z-10 w-full h-full object-contain drop-shadow-2xl" />
              </div>
            </div>

            <div className="text-center mb-8">
              <span className="text-4xl font-black text-white">{paquete.precio}</span>
              <span className="text-gray-500 text-sm block mt-1">MXN / Instalado</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {paquete.caracteristicas.map((caracteristica, i) => (
                <li key={i} className="flex items-start text-sm text-gray-300">
                  <span className="text-[var(--color-servitec-cyan)] mr-3">✓</span>
                  {caracteristica}
                </li>
              ))}
            </ul>

            <Link 
              href="https://wa.link/hdutgd" // Tu enlace de WhatsApp real
              target="_blank"
              className={`w-full py-4 text-center rounded-2xl font-black uppercase tracking-wider transition-all ${
                paquete.recomendado
                  ? "bg-[var(--color-servitec-cyan)] text-black hover:bg-white shadow-[0_0_20px_rgba(76,253,253,0.3)]"
                  : "bg-white/10 text-white hover:bg-[var(--color-servitec-cyan)] hover:text-black"
              }`}
            >
              Cotizar Ahora
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}