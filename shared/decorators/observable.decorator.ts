const metadataKey = 'VueRef'
const metadataValue = true

type S = new (...args: any[]) => any

export function ObservableProperty() {
  return Reflect.metadata(metadataKey, metadataValue)
}

export function ObservableObject<T extends S>() {
  return (constructor: T): any => {
    return class extends constructor {
      constructor(...rest: any[]) {
        super(...rest)
        const propertiesNames = Object.getOwnPropertyNames(this)
        for (const propertyName of propertiesNames) {
          const isObservable = Reflect.getMetadata<boolean>(metadataKey, this, propertyName)
          if (isObservable) {
            const proxy = ref(this[propertyName])
            Reflect.defineProperty(this, propertyName, {
              get() {
                return proxy.value
              },
              set(v) {
                proxy.value = v
              },
            })
          }
        }
      }
    }
  }
}
