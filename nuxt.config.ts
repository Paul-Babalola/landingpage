// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],
  css: ['@fortawesome/fontawesome-free/css/all.css'],
  googleFonts: {
    families: {
      Saira: [100, 300, 400, 500, 600, 700, 800], 
    },
    display: 'swap',
  },
})