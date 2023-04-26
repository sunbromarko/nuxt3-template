// https://nuxt.com/docs/api/configuration/nuxt-config
import typescript from '@rollup/plugin-typescript'
import '@abraham/reflection'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    'nuxt-vitest',
    '@nuxt/devtools',
    async (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        if (config.plugins) {
          const plugin = vuetify().map((e) => {
            e.enforce = 'post'
            return e
          })
          config.plugins.push(plugin)
        }
      })
    },
  ],
  vite: {
    plugins: [
      typescript(), // Плагин для восстановления поддержки декораторов в Vite
    ],
  },
})
