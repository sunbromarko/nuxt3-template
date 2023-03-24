import { injectable } from 'inversify'
import { beforeAll, describe, expect, it } from 'vitest'

@injectable()
class RegisteredMock {}

@injectable()
class UnregisteredMock {}

describe('COMPOSABLE: useIOC', () => {
  beforeAll(() => {
    const container = useNuxtApp().$ioc
    container.bind(RegisteredMock).toSelf()
  })

  it('should be defined', () => {
    expect(useIOC).toBeTypeOf('function')
  })

  it('should return Mock from container', () => {
    const mock = useIOC(RegisteredMock)
    expect(mock).toBeDefined()
    expect(mock).instanceOf(RegisteredMock)
  })

  it('should throw error if class does not registered',()=>{
    useIOC(UnregisteredMock)
  })
})
