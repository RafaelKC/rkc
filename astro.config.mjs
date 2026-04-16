import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chicovis.dev',
  base: '/',
  compressHTML: true,
  trailingSlash: 'always',
  integrations: [sitemap()],
});