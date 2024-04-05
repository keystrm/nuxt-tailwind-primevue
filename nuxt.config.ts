// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:['~/assets/css/main.css'],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode","nuxt-primevue"],
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
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, "./presets/lara/") }, //import and apply preset
  },
});
