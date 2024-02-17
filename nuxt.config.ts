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
});
