import Navbar from "../components/Navbar";
import DataProjects from "./DataProjects";
import Footer from "../components/Footer";

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-[#00040f] text-white relative overflow-hidden">
      <Navbar />
      
      {/* Atmósfera de fondo para evitar lo tenebroso */}
      <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-[var(--color-servitec-cyan)]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-20">
        <DataProjects />
      </div>

    </main>
  );
}