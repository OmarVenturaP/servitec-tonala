import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

// Mantenemos la fuente que elegiste
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "SERVITEC TONALÁ",
  description: "Desarrollo Web y Sistemas de Seguridad - Al siguiente nivel",
  icons: {
    icon: "/favicon.ico",
  },
}

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