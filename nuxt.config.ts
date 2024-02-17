import { ViteImageOptimizer as viteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-lucide-icons"],
  lucide: {
    namePrefix: "Icon",
  },
  vite: {
    plugins: [viteImageOptimizer()],
  },
});
