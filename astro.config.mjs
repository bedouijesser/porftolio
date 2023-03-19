import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
    site: 'https://jesser-bedoui.tech/',
    base: '/',
    integrations: [
        sitemap(),
        prefetch()
    ],
    experimental: {
        assets: true
    }
});