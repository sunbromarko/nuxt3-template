import { beforeAll, describe, it, expect } from 'vitest'
import Counter from './Counter.vue'
import { CounterService, SomeClass } from '~~/services/CounterService'
import { BaseWrap } from '@/shared/utils/tests/BaseWrap'

class CounterWrap extends BaseWrap<typeof Counter> {
  counter = this.findByTestId('counter')
  incrementBtn = this.findByTestId('increment')
  decrementBtn = this.findByTestId('decrement')

  get counterValue() {
    return Number(this.counter.text())
  }

  async clickIncrementBtn() {
    await this.incrementBtn.trigger('click')
  }

  async clickDecrementBtn() {
    await this.decrementBtn.trigger('click')
  }
}

describe('InjectTest component', () => {
  let component: CounterWrap

  beforeAll(() => {
    const container = useNuxtApp().$ioc
    container.bind(CounterService).toSelf()
    container.bind(SomeClass).toSelf()
  })

  it('Counter Service is Available', () => {
    const service = useIOC(CounterService)
    expect(service).toBeDefined()
    expect(service).toBeInstanceOf(CounterService)
  })

  it('should renders correct', () => {
    component = new CounterWrap(Counter)

    expect(component.incrementBtn.text()).toBe('УВЕЛИЧИТЬ')
    expect(component.decrementBtn.text()).toBe('УМЕНЬШИТЬ')
    expect(component.counter.text()).toBe(new SomeClass().defaultCount.toString())
  })

  it('should decrease counter after DecrementButton performed', async () => {
    const initialValue = component.counterValue

    await component.clickDecrementBtn()
    const decreasedValue = component.counterValue

    expect(initialValue).toBeGreaterThan(decreasedValue)
  })

  it('should increase counter after IncrementButton performed', async () => {
    const initialValue = component.counterValue

    await component.clickIncrementBtn()
    const incrementedValue = component.counterValue

    expect(initialValue).toBeLessThan(incrementedValue)
  })
})
