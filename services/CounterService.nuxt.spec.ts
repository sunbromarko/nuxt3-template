import { beforeAll, describe, expect, it } from 'vitest'
import { injectable } from 'inversify'
import { CounterService, SomeClass } from './CounterService'

@injectable()
class SomeClassMock implements SomeClass {
  defaultCount: number = 100
}

describe('SERVICE: CounterService', async () => {
  let counterService: CounterService

  beforeAll(() => {
    // Create TestContainer
    const container = useNuxtApp().$ioc;

    // Bind dependencies
    container.bind(CounterService).toSelf()
    container.bind(SomeClass).to(SomeClassMock)
  })

  it('should be created by IOC container', () => {
    counterService = useIOC(CounterService);
    expect(counterService).toBeDefined()
    expect(counterService).toBeInstanceOf(CounterService)
  })

  it('should have default value from SomeClass injection', ()=>{
    const someClassMocK = useIOC(SomeClass);
    expect(counterService.counter).toBe(someClassMocK.defaultCount);
  })

  it('should be increased on 5 by increment function call', () => {
    const initialValue = counterService.counter
    const increment = 5;
    counterService.increment()
    expect(counterService.counter).toBe(initialValue + increment)
  })

  it('should be decreased on 1 by decrement function call', () => {
    const initialValue = counterService.counter
    const decrement = 1;
    counterService.decrement()
    expect(counterService.counter).toBe(initialValue - decrement)
  })
})
