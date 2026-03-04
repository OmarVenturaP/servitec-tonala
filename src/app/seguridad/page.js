import Navbar from "../components/Navbar";
import Hero from "./Hero";
import HeaderSeguridad from "../components/HeaderSeguridad";
import HeroSecurity from "../components/HeroSecurity";
import Marcas from "../components/Marcas"; 
import ProductosGrid from "./ProductosGrid";

export const metadata = {
  title: 'Seguridad | SERVITEC',
  description: 'Venta e instalación profesional de cámaras CCTV y sistemas de alarmas para tu total tranquilidad, sea que estés en tu hogar o negocio.',
};

export default function SeguridadPage() {
  return (
    <main className="bg-[rgb(0,4,15)] min-h-screen text-white">
    <Navbar />
      <section className="py-20">
      <Hero />
      <HeaderSeguridad />
      <HeroSecurity />
      <Marcas />
      <ProductosGrid />
      </section>
    </main>
  );
}