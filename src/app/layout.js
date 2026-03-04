import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

// Mantenemos la fuente que elegiste
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  
  metadataBase: new URL('https://servitec-tonala.vercel.app'),

  title: {
    template: '%s | SERVITEC',
    default: 'SERVITEC | Desarrollo Web y Seguridad - Al siguiente nivel',
    icons: {
      icon: "/favicon.ico",
    },
  },
  description: 'Soluciones tecnológicas integrales en Tonalá, Chiapas. Expertos en desarrollo web a la medida, tiendas virtuales, cámaras de seguridad (CCTV) y sistemas de alarmas.',
  keywords: [
    'desarrollo web', 'páginas web', 'tiendas virtuales', 'cámaras de seguridad', 
    'CCTV', 'alarmas', 'seguridad electrónica', 'Tonalá', 'Chiapas', 'agencia de tecnología'
  ],
  authors: [{ name: 'SERVITEC' }],
  creator: 'SERVITEC',
  // Open Graph para WhatsApp, Facebook, LinkedIn
  openGraph: {
    title: 'SERVITEC | Tecnología que protege y conecta',
    description: 'Transformamos tu negocio con desarrollo web moderno y blindamos tu patrimonio con seguridad electrónica de primer nivel en Tonalá.',
    url: 'https://servitec-tonala.vercel.app/', // Cambia esto cuando tengas tu dominio final
    siteName: 'SERVITEC',
    images: [
      {
        url: 'https://res.cloudinary.com/dzgqpqv9f/image/upload/c_fill,w_800,h_600,f_jpg,q_auto/v1772641078/servitec-app-logo_fvw6it.png',
        width: 800,
        height: 600,
        alt: 'Logo de SERVITEC',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    // Cambiamos el idioma a español
    <html lang="es">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* Si más adelante usamos el AppProvider de Recoil, lo envolveremos aquí */}
        {children}
        <Footer />
      </body>
    </html>
  );
}