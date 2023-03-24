
import { beforeAll, describe, expect, it, test } from 'vitest'
import { startServer, createTestContext } from '@nuxt/test-utils'
import { Container, injectable } from 'inversify'
import { CounterService, SomeClass } from './CounterService'

@injectable()
class SomeClassMock implements SomeClass {
  defaultCount: number = 10
}

describe('My test', async () => {
  let container: Container
  let counterService: CounterService

  beforeAll(() => {
    // Create TestContainer
    container = new Container()

    // Bind dependencies
    container.bind(CounterService).toSelf()
    container.bind(SomeClass).to(SomeClassMock)
  })

  it('should be created by IOC container', () => {
    counterService = container.resolve(CounterService)
    expect(counterService).toBeDefined()
    expect(counterService).toBeInstanceOf(CounterService)
  })
})
