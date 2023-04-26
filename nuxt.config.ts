// https://nuxt.com/docs/api/configuration/nuxt-config
import typescript from '@rollup/plugin-typescript'
import '@abraham/reflection'

export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    'nuxt-vitest',
    '@nuxt/devtools',
    // 'nuxt-typed-router' // TODO: Написать issue разрабу, ломается автокомплит в верстке
  ],
  vite: {
    plugins: [
      typescript(), // Плагин для восстановления поддержки декораторов в Vite
    ],
  },
  nitro: {
    hooks: {
      'rollup:before'(ctx) {
        ctx.options.moduleSideEffects.push('reflect-metadata')
      },
    },
  },
})
