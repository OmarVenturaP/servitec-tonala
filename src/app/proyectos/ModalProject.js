import React from "react";

export default function ModalProject({ show, onHide, project }) {
  if (!show || !project) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Fondo oscuro con desenfoque (Backdrop) */}
      <div 
        className="absolute inset-0 bg-[#00040f]/80 backdrop-blur-sm transition-opacity"
        onClick={onHide}
      ></div>

      {/* Contenedor del Modal */}
      <div className="relative bg-[#000814] border border-[var(--color-servitec-cyan)]/30 rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-[0_0_40px_rgba(76,253,253,0.15)] transform transition-all">
        
        {/* Cabecera */}
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
          <h3 className="text-2xl font-black text-white uppercase tracking-wider">
            {project.nombre}
          </h3>
          <button 
            onClick={onHide}
            className="text-gray-400 hover:text-[var(--color-servitec-cyan)] transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cuerpo */}
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <img 
              className="rounded-xl object-cover max-h-64 shadow-lg border border-white/5" 
              src={project.img} 
              alt={project.nombre} 
            />
          </div>
          <p className="text-gray-300 leading-relaxed text-center">
            {project.descripcion}
          </p>
        </div>

        {/* Footer (Botones) */}
        <div className="flex justify-center gap-4 p-6 border-t border-white/10 bg-white/5">
        {project.url_demo == "proximamente" ? (
            <span className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white font-bold rounded-xl cursor-not-allowed">
              <span>🚧</span> Próximamente
            </span>
          ) : (   
          <a 
            href={project.url_demo} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--color-servitec-cyan)] text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all"
          >
            <span>🚀</span> Visitar
          </a>
          )}
          {/* 
            <a 
            href={project.url_repo} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all"
          >
            <span>💻</span> Repositorio
          </a>
            */}
          
        </div>
      </div>
    </div>
  );
}