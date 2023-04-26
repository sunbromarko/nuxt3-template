import '@abraham/reflection'
import { singleton } from 'tsyringe'
import { describe, expect, it } from 'vitest'

@singleton()
class RegisteredMock {}

class UnregisteredMock {}

describe('COMPOSABLE: useIOC', () => {
  it('should be defined', () => {
    expect(useIOC).toBeTypeOf('function')
  })

  it('should return Mock from container', () => {
    const mock = useIOC(RegisteredMock)
    expect(mock).toBeDefined()
    expect(mock).instanceOf(RegisteredMock)
  })

  it('should throw error if class does not registered', () => {
    useIOC(UnregisteredMock)
  })
})
