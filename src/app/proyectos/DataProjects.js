"use client";
import React, { useEffect, useState } from "react";
import ModalProject from "./ModalProject";

export default function DataProjects() {
  const [projects, setProjects] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [infoProject, setInfoProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorApi, setErrorApi] = useState(false);

  // Conexión blindada a tu base de datos en Render
  const getProjectsData = async () => {
    try {
      const res = await fetch("/api/proyectos", {
        next: { revalidate: 60 },
      });
      
      const data = await res.json();

      // VALIDACIÓN PRO: Comprobamos que 'data' sea un arreglo real
      if (Array.isArray(data)) {
        setProjects(data);
      } else if (data && Array.isArray(data.data)) {
        // Por si tu backend envía el arreglo dentro de una propiedad 'data'
        setProjects(data.data);
      } else {
        console.warn("La API no devolvió un arreglo esperado:", data);
        setProjects([]);
        setErrorApi(true);
      }
    } catch (error) {
      console.error("Error conectando con Render:", error);
      setProjects([]);
      setErrorApi(true);
    } finally {
      // setLoading false se ejecuta siempre, falle o tenga éxito
      setLoading(false); 
    }
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const openModal = (project) => {
    setInfoProject(project);
    setModalShow(true);
  };

  return (
    <>
      <div className="w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest">
            Nuestros <span className="text-[var(--color-servitec-cyan)]">Proyectos</span>
          </h2>
          <p className="mt-4 text-gray-400">Desarrollo web a la medida de tus necesidades.</p>
        </div>

        {loading ? (
          // Spinner de carga
          <div className="flex flex-col justify-center items-center h-40 gap-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[var(--color-servitec-cyan)]"></div>
            <p className="text-[var(--color-servitec-cyan)] text-sm uppercase tracking-widest animate-pulse">
              Conectando con el servidor...
            </p>
          </div>
        ) : errorApi || projects.length === 0 ? (
          // Mensaje de fallback si la API falla o está vacía
          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-[2rem]">
            <span className="text-4xl mb-4 block">🔌</span>
            <h3 className="text-xl font-bold text-white mb-2">Servidor en suspensión</h3>
            <p className="text-gray-400">
              Nuestra base de datos está despertando. Por favor, recarga la página en unos segundos.
            </p>
          </div>
        ) : (
          // Renderizado seguro de las tarjetas (ya sabemos que projects SÍ es un array aquí)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden hover:border-[var(--color-servitec-cyan)]/50 transition-all duration-500 shadow-xl"
                onClick={() => openModal(project)}
              >
                <div className="relative h-56 overflow-hidden bg-black/50">
                  <img 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                    src={project.img || "https://via.placeholder.com/400x300?text=Proyecto"} 
                    alt={project.nombre || "Proyecto"} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00040f] to-transparent opacity-80"></div>
                </div>
                
                <div className="p-6 text-center relative z-10 -mt-8">
                  <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-servitec-cyan)] transition-colors">
                    {project.nombre}
                  </h3>
                  <span className="inline-block mt-4 px-4 py-2 rounded-full border border-[var(--color-servitec-cyan)]/30 text-[var(--color-servitec-cyan)] text-xs uppercase tracking-widest font-bold group-hover:bg-[var(--color-servitec-cyan)] group-hover:text-black transition-all">
                    Ver Detalles
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ModalProject
        show={modalShow}
        onHide={() => setModalShow(false)}
        project={infoProject}
      />
    </>
  );
}