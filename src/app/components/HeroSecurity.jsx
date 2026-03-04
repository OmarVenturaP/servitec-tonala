import React from "react";

export default function HeroSecurity() {
  const features = [
    {
      img: "https://www.adt.com.mx/uploads/Group_36595.svg",
      title: "Protección 24/7",
      description: "Estamos a tu lado con equipos y marcas profesionales que trabajan para ti las 24 horas del día, los 7 días de la semana."
    },
    {
      img: "https://www.adt.com.mx/images/Group_36423.svg",
      title: "Seguridad para hogar y negocios",
      description: "Protegemos tu hogar o negocio con tecnología avanzada en sistemas de alarmas y cámaras de seguridad."
    },
    {
      img: "https://www.adt.com.mx/uploads/Group_36424.svg",
      title: "Control desde tu celular",
      description: "Ten el control total de lo que sucede en tu propiedad desde tu smartphone, sin importar dónde te encuentres."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto mt-20 px-4 text-center">
      <h3 className="text-3xl md:text-4xl font-bold mb-16 text-white uppercase tracking-tight">
        ¿Por qué <span className="text-[var(--color-servitec-cyan)]">elegirnos?</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <div 
            key={index} 
            className="group p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-[var(--color-servitec-cyan)]/30 transition-all duration-500 shadow-2xl flex flex-col items-center"
          >
            {/* Contenedor del Icono - Reemplaza .iconSecurity */}
            <div className="mb-6 p-4 rounded-full bg-black/20 group-hover:bg-[var(--color-servitec-cyan)]/10 transition-colors duration-500">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-16 h-16 md:w-20 md:h-20 object-contain" 
              />
            </div>
            
            <h4 className="text-xl font-bold mb-4 text-white group-hover:text-[var(--color-servitec-cyan)] transition-colors">
              {item.title}
            </h4>
            
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}