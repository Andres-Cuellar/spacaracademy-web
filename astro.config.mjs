// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  // site: 'https://spacaracademy.com', // <- descomentar y poner el dominio real para SEO/sitemap
  build: {
    format: 'file', // genera nosotros.html en vez de nosotros/index.html (rutas limpias tipo estático)
  },
});
