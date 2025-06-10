import { ViteImageOptimizer as viteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "nuxt-lucide-icons",
    "nuxt-swiper",
    "nuxt-cloudflare-analytics",
  ],
  site: {
    url: "https://classicsportscarcentre.com/",
    name: "Classic Sportscar Centre",
    description: "Classic and sportscar specialists.",
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
  },
  ogImage: {
    enabled: false,
  },
  lucide: {
    namePrefix: "Icon",
  },
  vite: {
    plugins: [viteImageOptimizer()],
  },
  i18n: {
    locales: [
      { code: "en", file: "en.json5" },
      { code: "nl", file: "nl.json5" },
      { code: "de", file: "de.json5" },
    ],
    lazy: true,
    langDir: "locales",
    restructureDir: 'app',
    defaultLocale: "en",
    compilation: {
      strictMessage: true,
    },
  },
  cloudflareAnalytics: {
    token: "206616c15e9743799e7c8216757aefb1",
  },
});
