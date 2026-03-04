import Navbar from "../components/Navbar";
import PaquetesGrid from "./PaquetesGrid";
import Footer from "../components/Footer";

export default function CamarasPage() {
  return (
    <main className="min-h-screen bg-[#00040f] text-white relative overflow-hidden">
      <Navbar />
      
      {/* Luces de fondo decorativas */}
      <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-[var(--color-servitec-cyan)]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="pt-32 pb-10">
        <PaquetesGrid />
      </div>

    </main>
  );
}