import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://dispatch.pages.dev',
  build: {
    assets: '_astro',
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
