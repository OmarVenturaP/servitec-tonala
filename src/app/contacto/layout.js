// Este archivo se ejecuta en el SERVIDOR (por defecto) y le inyecta el SEO a tu página.
export const metadata = {
  title: 'Contacto | SERVITEC',
  description: 'Contáctanos para obtener más información sobre nuestros servicios de desarrollo web y seguridad electrónica.',
};

export default function ContactoLayout({ children }) {
  // Simplemente envuelve a tu página de contacto
  return <>{children}</>;
}