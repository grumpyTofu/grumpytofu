import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import cloudflare from '@astrojs/cloudflare';

import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs(), qwikdev()],
  output: 'server',
  adapter: cloudflare()
});