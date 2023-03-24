import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify/lib/framework.mjs'

export const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
})

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(vuetify)
})
