// Basado en tu archivo header.js de la carpeta seguridad
export default function HeaderSeguridad() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://res.cloudinary.com/dzgqpqv9f/image/upload/v1739633676/securty.png"
            alt="servitec-tonala-security"
            className="w-[300px] h-auto drop-shadow-[0_0_15px_rgba(76,253,253,0.3)]"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <p className="text-xl text-gray-300 leading-relaxed">
            Te ofrecemos soluciones de seguridad integrales que combinan lo mejor en tecnología, 
            diseño y profesionalismo para proteger <strong>tu hogar, tu negocio y tu familia</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold tracking-wide uppercase">
            <span className="text-[var(--color-servitec-cyan)]">✅ Cámaras de vigilancia</span>
            <span className="text-[var(--color-servitec-cyan)]">✅ Alarmas inteligentes</span>
            <span className="text-[var(--color-servitec-cyan)]">✅ Instalación experta</span>
            <span className="text-[var(--color-servitec-cyan)]">✅ Asesoría gratuita</span>
          </div>
          <div className="pt-4">
            <a href="https://wa.link/hdutgd" className="inline-block px-10 py-4 bg-[var(--color-servitec-cyan)] text-black font-black rounded-xl hover:bg-white transition-all">
              MÁS INFORMACIÓN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}