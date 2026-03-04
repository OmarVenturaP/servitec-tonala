// Basado en tu archivo hero.js de la carpeta seguridad
export default function Hero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-60" 
        src="https://res.cloudinary.com/dzgqpqv9f/video/upload/v1739483561/1992-153555258_small_arh8sb.mp4" 
        autoPlay 
        loop 
        muted 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00040f]/50 to-[#00040f]"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
          SEGURIDAD <span className="text-[var(--color-servitec-cyan)]">TOTAL</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl text-lg uppercase tracking-[0.3em]">
          Protegiendo lo que más importa
        </p>
      </div>
    </div>
  );
}