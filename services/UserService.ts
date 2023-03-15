import 'reflect-metadata'
import {  inject } from 'inversify'
import { provide  } from 'inversify-binding-decorators'
import { Ref } from '@/shared/decorators/ref.decorator'


@provide(SomeClass)
export class SomeClass {
  defaultCount = 10
}

@provide(CounterService)
export class CounterService {
  constructor(@inject(SomeClass) private someClass: SomeClass) {
    this._counter = someClass.defaultCount
  }

  @Ref
  private declare _counter

  get counter() {
    return this._counter + 1
  }

  increment() {
    this._counter += 1
  }

  decrement() {
    this._counter -= 1
  }
}
