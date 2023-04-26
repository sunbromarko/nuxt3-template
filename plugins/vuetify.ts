import { createVuetify } from 'vuetify/lib/framework.mjs'

export const vuetify = createVuetify({
  ssr: true,
})

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(vuetify)
})
