import React from "react";
import Link from "next/link";

export default function AlarmasGrid() {
  const paquetes = [
    {
      nombre: "KIT BASICO",
      precio: "$4,500", // Precios de ejemplo, ajústalos a tu catálogo
      descripcion: "Protección esencial para casas y departamentos pequeños.",
      imagen: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1737152559/Alarmas_inalambricas_fewmwy.png", // Cambia esto por la foto de tu panel de alarma
      caracteristicas: [
        "1 Panel de Control con sirena",
        "1 Sensor de movimiento (PIR)",
        "1 Contacto magnético (puertas/ventanas)",
        "1 Control remoto",
        "Batería de respaldo"
      ],
      recomendado: false
    },
    {
      nombre: "KIT DAHUA",
      precio: "$4,490",
      descripcion: "El sistema más completo con control total desde tu celular.",
      imagen: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1739497309/ART-ARC3000H-03-W2-scaled_qzmqto.jpg",
      caracteristicas: [
        "Panel inteligente Wi-Fi / GSM",
        "1 Sensor de movimiento",
        "1 Contacto magnético",
        "Control total por App (iOS/Android)",
        "Avisos instantáneos al celular"
      ],
      recomendado: false // El paquete estrella
    },
    {
      nombre: "KIT HIKVISION",
      precio: "$5,990",
      descripcion: "Seguridad de grado comercial para negocios y bodegas.",
      imagen: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1739497308/HK-DS-PWA64-KIT-WB-scaled_blmp8j.jpg",
      caracteristicas: [
        "Panel Híbrido de alta capacidad",
        "Sensor de doble tecnología",
        "Contactos de uso rudo",
        "Sirena exterior tipo banco con estrobo",
        "Avisos instantáneos al celular"
      ],
      recomendado: true
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
          Sistemas de <span className="text-[var(--color-servitec-cyan)]">Alarmas</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Equipos contra intrusión de alta tecnología con instalación profesional garantizada en Tonalá, Chiapas y zonas aledañas.
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
              href="https://wa.link/hdutgd" 
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