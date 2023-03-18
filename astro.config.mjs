import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro'
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
    integrations: [
        AstroPWA({
            navigateFallback: '/404',
            registerType: "autoUpdate",
            devOptions: {
                enabled: true
            }        
        }),
        robotsTxt()],

    experimental: {
        assets: true
    }
});
