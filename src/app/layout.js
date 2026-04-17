import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

// Mantenemos la fuente que elegiste
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  
  metadataBase: new URL('https://servitec-tonala.vercel.app'),

  title: {
    template: '%s | SERVITEC',
    default: 'SERVITEC | Agencia de Desarrollo Web y Software a la Medida',
    icons: {
      icon: "/favicon.ico",
    },
  },
  description: 'Agencia de desarrollo web y software en Tonalá, Chiapas. Expertos en páginas web a la medida, tiendas virtuales, aplicaciones SaaS y plataformas escalables.',
  keywords: [
    'desarrollo web', 'páginas web', 'tiendas virtuales', 'sistemas web', 
    'software a la medida', 'Next.js', 'aplicaciones web', 'Tonalá', 'Chiapas', 'agencia de tecnología'
  ],
  authors: [{ name: 'SERVITEC' }],
  creator: 'SERVITEC',
  // Open Graph para WhatsApp, Facebook, LinkedIn
  openGraph: {
    title: 'SERVITEC | Expertos en Desarrollo de Software',
    description: 'Transformamos e impulsamos tu negocio en el mundo digital con desarrollo web moderno, arquitectura cloud y diseño UX/UI de primer nivel.',
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
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}