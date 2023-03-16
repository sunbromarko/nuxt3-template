import 'reflect-metadata'
import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import { Ref } from '@/shared/decorators/ref.decorator'

function Injectable() {
  return (constructor: Function) => provide(constructor)(constructor)
}

function logType(target: any, key: string) {
  console.log('Я обосрался');
  console.log(target)
  
  var t = Reflect.getOwnMetadata('design:type', target)
  console.log(`${key} type: ${t}`)
}

@Injectable()
export class SomeClass {
  defaultCount = 10
}
@Injectable()
export class SomeClass1 {
  defaultCountss = 10
}

@Injectable()
export class CounterService {
  constructor(@inject(SomeClass) private someClass: SomeClass) {
    this._counter = someClass.defaultCount
  }

  @logType
  private declare field: SomeClass1;

  @Ref
  private declare _counter

  get counter() {
    return this._counter + 5
  }

  increment() {
    this._counter += 5
  }

  decrement() {
    this._counter -= 1
  }
}
