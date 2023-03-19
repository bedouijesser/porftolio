// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"
import type { TwitterCardType} from 'astro-seo'
/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://jesser-bedoui.tech/",
	description: "The personal portfolio of Jesser Bedoui", 
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630",
		alt: "OpenGraph thumbnail description.",
		width: 1200,
		height: 630
	},
	siteName: "Jesser Bedoui Porftolio Website",
	twitter: {
		card: <TwitterCardType>"summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Jesser Bedoui Portfolio",
	short_name: "Jesser Bedoui",
	description: seoConfig.description,
	theme_color: "#090b11",
	background_color: "#090b11",
	display: "minimal-ui",
	icons: [
		{
			src: "/android-chrome-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/android-chrome-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/android-chrome-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}