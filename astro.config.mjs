import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sixthformresearchnetwork.co.uk',
  integrations: [sitemap()],
});
