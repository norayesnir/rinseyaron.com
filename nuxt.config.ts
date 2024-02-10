export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/image", "nuxt-icon", "@nuxtjs/tailwindcss", "@pinia/nuxt"],

  css: ["@/assets/style/main.scss"],
});
