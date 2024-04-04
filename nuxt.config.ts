// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  tailwindcss: {
    config: {
      content: ["presets/**/*.{js,vue,ts}"],
      darkMode: "class",
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },
})