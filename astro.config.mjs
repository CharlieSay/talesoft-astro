import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://talesoft.digital",
  integrations: [tailwind(), sitemap(), mdx()],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
