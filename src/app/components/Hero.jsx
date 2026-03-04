"use client"; // Necesario para la función de scroll
import React from "react";
import Image from "next/image";

export default function Hero() {
  const scrollToContent = () => {
    const servicesSection = document.getElementById("servicios");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video y Capa de Oscuridad (Igual que antes) */}
      <video 
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="https://res.cloudinary.com/dzgqpqv9f/video/upload/v1696659788/pc-dev_lc7mt7.mp4" 
        autoPlay loop muted playsInline
      />
      <div className="fixed inset-0 bg-black/50 -z-10"></div>

      {/* Logo Slogan */}
      <div className="relative z-20 p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_0_40px_rgba(76,253,253,0.1)]">
        <Image
          className="drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-full"
          src="https://res.cloudinary.com/dzgqpqv9f/image/upload/v1772636523/servitec-tonala-logo.png"
          alt="Slogan Logo"
          width={350}
          height={350}
          priority
        />
      </div>

      {/* Flecha "Angle Down" Flotante */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-10 z-30 text-[var(--color-servitec-cyan)] animate-bounce cursor-pointer hover:text-white transition-colors"
        aria-label="Ver más contenido"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="2" 
          stroke="currentColor" 
          className="w-10 h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>
  );
}
