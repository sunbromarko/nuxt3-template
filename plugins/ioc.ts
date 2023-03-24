import 'reflect-metadata'
import { Container } from 'inversify'
import {  buildProviderModule } from 'inversify-binding-decorators'

export default defineNuxtPlugin(() => {
  const container = new Container();

  container.load(buildProviderModule())

  return {
    provide: {
      ioc: container,
      default: 100500,
    },
  }
})
