/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Isso gera a pasta 'out' com arquivos estáticos
  images: {
    unoptimized: true, // Necessário para o GitHub Pages
  },
}

module.exports = nextConfig