import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@pinia/nuxt',
  ],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  }
})