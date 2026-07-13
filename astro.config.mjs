import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Zentrale Basis-Domain. Vor dem Go-Live prüfen / per ENV überschreiben (siehe DEPLOY.md).
const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://www.nina-nuechter.de';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/impressum') && !page.includes('/datenschutz'),
    }),
  ],
});
