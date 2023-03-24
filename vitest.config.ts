import { defineVitestConfig } from 'nuxt-vitest/config'
import vuetify from 'vite-plugin-vuetify'

export default defineVitestConfig({
  // @ts-expect-error
  // TODO: Написать бы разрабу что TS ругается на отсутствие test в объекте конфига
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
  plugins: [vuetify({ autoImport: true })],
})
