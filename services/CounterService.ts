import 'reflect-metadata'
import { inject } from 'inversify'
import { Ref } from '../shared/decorators/ref.decorator'
import { Injectable } from '../shared/decorators/injectable.decorator'

@Injectable()
export class SomeClass {
  defaultCount = 10;
}

@Injectable()
export class CounterService {
  constructor(@inject(SomeClass) private someClass: SomeClass) {
    this._counter = someClass.defaultCount
  }

  @Ref
  private declare _counter: number;

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
