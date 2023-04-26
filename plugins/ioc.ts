import '@abraham/reflection'
import { container } from 'tsyringe'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      ioc: container,
    },
  }
})
