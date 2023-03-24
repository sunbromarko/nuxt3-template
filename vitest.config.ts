import { defineVitestConfig } from 'nuxt-vitest/config'
import vuetify from 'vite-plugin-vuetify'

export default defineVitestConfig({
  // @ts-expect-error
  test: {
    globals: true,
    setupFiles: 'vuetify.config.ts',
    deps: {
      inline: ['vuetify'],
    },
  },
  plugins: [vuetify({ autoImport: true })],
})
