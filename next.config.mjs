/** @type {import('next').NextConfig} */
const nextConfig = {
  // Forzamos a que NO busque el compilador de React
  experimental: {
    reactCompiler: false,
  },
  // Opcional: Si usas imágenes de Cloudinary, añade esto aquí de una vez
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;