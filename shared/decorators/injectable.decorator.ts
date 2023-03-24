import { provide } from 'inversify-binding-decorators'

export function Injectable() {
  return (constructor: Function) => provide(constructor)(constructor)
}
