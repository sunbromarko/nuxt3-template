import { ref } from 'vue'

export const Ref = (target: any, property: string) => {
    const initialValue = (target as any)[property]
    const valueRef = ref(initialValue)
    
    Object.defineProperty(target, property, {
      get() {        
        return valueRef.value
      },
      set(newValue) {        
        return (valueRef.value = newValue)
      },
      configurable: false
    })
}
