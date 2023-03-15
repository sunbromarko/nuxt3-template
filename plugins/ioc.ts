import 'reflect-metadata'
import { Container } from 'inversify'
import {  buildProviderModule } from 'inversify-binding-decorators'

export default defineNuxtPlugin(() => {
  const container = new Container();

  container.load(buildProviderModule())

  return {
    provide: {
      ioc: container,
    },
  }
})

declare module '#app' {
  interface NuxtApp {
    $ioc: Container
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $hello: Container
  }
}