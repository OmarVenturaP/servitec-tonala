"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    servicio: "Desarrollo Web",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const enviarWhatsApp = (e) => {
    e.preventDefault();
    
    // REEMPLAZA ESTE NÚMERO con tu WhatsApp real (código de país + número, sin signos ni espacios)
    // Ejemplo para México (52): "5219999999999"
    const numeroWhatsApp = "5219619326182"; 
    
    // Formateamos el mensaje con negritas de WhatsApp (*)
    const textoMensaje = `Hola SERVITEC, me comunico desde la página web.%0A%0A*Nombre:* ${formData.nombre}%0A*Servicio de interés:* ${formData.servicio}%0A*Mensaje:* ${formData.mensaje}%0A%0A¡Quedo a la espera de su respuesta!`;

    // Creamos la URL de la API de WhatsApp y abrimos una nueva pestaña
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoMensaje}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#00040f] text-white relative overflow-hidden">
      <Navbar />
      
      {/* Luces Ambientales */}
      <div className="absolute top-[20%] left-[0%] w-[500px] h-[500px] bg-[var(--color-servitec-cyan)]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[0%] right-[0%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-20 relative z-10">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase">
            CONTÁCTA<span className="text-[var(--color-servitec-cyan)]">NOS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            ¿Tienes un proyecto en mente o necesitas mejorar tu seguridad? Escríbenos y te asesoraremos sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          
          {/* Columna Izquierda: Información de Contacto */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">
                Información Directa
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Estamos listos para llevar tu negocio al siguiente nivel. Nuestro equipo te responderá a la brevedad posible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-servitec-cyan)] group-hover:bg-[var(--color-servitec-cyan)] group-hover:text-black transition-all">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Llámanos</p>
                <p className="text-white font-medium"><a href="tel:9619326182">9619326182</a></p>
                </div>
              </div>  

              <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-servitec-cyan)] group-hover:bg-[var(--color-servitec-cyan)] group-hover:text-black transition-all">
                    📍
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Ubicación</p>
                    <p className="text-white font-medium">Tonalá, Chiapas, México</p>
                  </div>
                </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-servitec-cyan)] group-hover:bg-[var(--color-servitec-cyan)] group-hover:text-black transition-all">
                  🕒
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Horario de Atención</p>
                  <p className="text-white font-medium">Lunes a Sábado: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario a WhatsApp */}
          <div className="bg-[#00040f]/50 p-8 rounded-3xl border border-white/5">
            <form onSubmit={enviarWhatsApp} className="space-y-6">
              
              {/* Campo Nombre */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Tu Nombre
                </label>
                <input 
                  type="text" 
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-servitec-cyan)] focus:bg-white/10 transition-all"
                  placeholder="Ej. Juan Pérez"
                />
              </div>

              {/* Selector de Servicio */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  ¿En qué podemos ayudarte?
                </label>
                <select 
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-servitec-cyan)] focus:bg-white/10 transition-all appearance-none cursor-pointer"
                >
                  <option value="Desarrollo Web" className="bg-[#000814] text-white">Desarrollo Web (Páginas, Tiendas)</option>
                  <option value="Cámaras de Seguridad" className="bg-[#000814] text-white">Cámaras de Seguridad (CCTV)</option>
                  <option value="Sistemas de Alarmas" className="bg-[#000814] text-white">Sistemas de Alarmas</option>
                  <option value="Otro Servicio" className="bg-[#000814] text-white">Otro (Mantenimiento, Redes, etc.)</option>
                </select>
              </div>

              {/* Campo Mensaje */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Detalles de tu solicitud
                </label>
                <textarea 
                  name="mensaje"
                  required
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-servitec-cyan)] focus:bg-white/10 transition-all resize-none"
                  placeholder="Cuéntanos un poco sobre lo que necesitas..."
                ></textarea>
              </div>

              {/* Botón Enviar */}
              <button 
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-4 bg-[var(--color-servitec-cyan)] text-black font-black uppercase tracking-widest rounded-xl hover:bg-white hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(76,253,253,0.2)]"
              >
                <span>Enviar por WhatsApp</span>
                {/* Icono simple de flecha para no cargar librerías extra */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>

    </main>
  );
}