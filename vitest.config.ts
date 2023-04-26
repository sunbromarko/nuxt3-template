import { defineVitestConfig } from 'nuxt-vitest/config'
import typescript from '@rollup/plugin-typescript'
import vuetify from 'vite-plugin-vuetify'

export default defineVitestConfig({
  test: {
    globals: true,
    setupFiles: 'vuetify.config.ts',
    deps: {
      inline: ['vuetify'],
    },
    coverage: {
      provider: 'c8',
    },
  },
  plugins: [
    typescript(), // Плагин для восстановления поддержки декораторов в Vite
    vuetify({ autoImport: true }),
  ],
})
