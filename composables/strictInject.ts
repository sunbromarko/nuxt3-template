import { InjectionKey } from "nuxt/dist/app/compat/capi";

export const strictInject = <T extends object>(key: InjectionKey<T>): T=>{
  const injected: T | undefined = inject<T>(key)

  if(injected === undefined) throw new Error(`Injected Entity type of ${key.toString()} undefined`)

  return injected;
}