import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chicovis.dev',
  base: '/',
  compressHTML: true,
  trailingSlash: 'always',
});