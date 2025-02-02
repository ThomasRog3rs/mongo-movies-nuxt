// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      API_ROOT: process.env.API_ROOT,
      NUXT_ENV_NAME: process.env.NUXT_ENV_NAME
    },
  },
  css: [
    '@/assets/css/tailwind.css',
  ],
})
