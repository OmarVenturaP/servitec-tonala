import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Desarrollo Web",
    description: "Crea páginas web únicas para tu negocio e impúlsalo al siguiente nivel.",
    image: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1701464342/codes_jkqj7s.png",
    link: "/desarrollo",
  },
  {
    title: "Sistemas de Seguridad",
    description: "Invertir en tu seguridad es clave para tu tranquilidad y la de tu familia.",
    image: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1701464342/cam_gdke6j.png",
    link: "/seguridad",
  },
  {
    title: "Portfolio de Proyectos",
    description: "Explora algunos de los trabajos realizados para nuestros clientes.",
    image: "https://res.cloudinary.com/dzgqpqv9f/image/upload/v1702962957/favicon_wnbflj.png",
    link: "/proyectos",
  },
];

export default function HomeItems() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {services.map((service, index) => (
        <Link 
          key={index} 
          href={service.link}
          className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[var(--color-servitec-cyan)]/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center shadow-2xl"
        >
          {/* Resplandor interno al hacer hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[var(--color-servitec-cyan)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative mb-6 p-4 rounded-full bg-black/20 invert group-hover:scale-110 transition-transform duration-500 ">
            <Image
              src={service.image}
              alt={service.title}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          
          <h3 className="relative text-2xl font-bold mb-4 text-white group-hover:text-[var(--color-servitec-cyan)] transition-colors">
            {service.title}
          </h3>
          
          <p className="relative text-gray-400 leading-relaxed">
            {service.description}
          </p>
        </Link>
      ))}
    </div>
  );
}