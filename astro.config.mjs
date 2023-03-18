import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
    site: 'https://bedouijesser.github.io',
    base: '/porftolio',
    integrations: [AstroPWA({
        navigateFallback: '/404',
        registerType: "autoUpdate",
        devOptions: {
            enabled: true
        }
    }), sitemap(), prefetch()],
    experimental: {
        assets: true
    }
});