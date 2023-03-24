import { beforeAll, describe, it, expect } from 'vitest'
import { createPage } from '@nuxt/test-utils'
import { config, mount } from '@vue/test-utils'
import InjectTest from '../components/InjectTest.vue'
import Page from '../pages/index.vue'
import { Container } from 'inversify'
import { CounterService, SomeClass } from '~~/services/CounterService'
import {createVuetify} from 'vuetify'

describe('InjectTest component', () => {
  beforeAll(() => {
    const container = useNuxtApp().$ioc
    container.bind(CounterService).toSelf()
    container.bind(SomeClass).toSelf()
  })
  it('IOC container is defined', () => {
    const app = useNuxtApp()
    expect(app.$ioc).toBeDefined()
    expect(app.$ioc).toBeInstanceOf(Container)
  })

  it('Counter Service is Available', () => {
    const app = useNuxtApp()
    const service = useIOC(CounterService)
    expect(service).toBeDefined()
    expect(service).toBeInstanceOf(CounterService)
  })

  it('should renders correct', () => {
    const wrapper = mount(InjectTest)
  })
})
