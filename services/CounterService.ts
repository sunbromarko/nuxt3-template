import '@abraham/reflection'
import { singleton } from 'tsyringe'
import { ObservableObject, ObservableProperty } from '~/shared/decorators/observable.decorator'

@singleton()
export class SomeClass {
  defaultCount = 10
}

// Comments
@singleton()
@ObservableObject()
export class CounterService {
  constructor(someClass: SomeClass) {
    this._counter = someClass.defaultCount
  }

  @ObservableProperty()
  private _counter: number

  get counter() {
    return this._counter
  }

  increment() {
    this._counter += 5
  }

  decrement() {
    this._counter -= 1
  }
}
