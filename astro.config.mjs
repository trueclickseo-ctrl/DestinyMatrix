// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://souliography.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => {
        // Exclude parameterized report pages or temporary test files if any
        return !page.includes('/report') || page.endsWith('/report/');
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

