// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config

// export default defineConfig({
// 	site: 'https://example.com',
// 	integrations: [mdx(), sitemap()],
// });

export default defineConfig({
	site: 'https://bc-cowork.github.io',
	base: '/astro-content-project',
	output: 'static',
	integrations: [mdx(), sitemap()],
});
