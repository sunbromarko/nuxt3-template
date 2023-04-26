import { DependencyContainer, container } from 'tsyringe'
import { describe, it, expect, beforeAll, vi } from 'vitest'

describe('client-side nuxt features', () => {
  it('can use core nuxt composables within test file', () => {
    expect(useNuxtApp().$ioc).toBe(container)
  })

  it('can access injections from nuxt plugins', () => {
    const app = useNuxtApp()
    expect(app.$router).toBeDefined()
  })

  it('global CSS = HUETA', () => {
    expect(global.CSS.supports('s')).toBe(false)
  })
})
