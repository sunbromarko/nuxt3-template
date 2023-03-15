import { interfaces } from "inversify"

export const useIOC = <T>(constructor:interfaces.Newable<T>):T=>{

  return useNuxtApp().$ioc.resolve(constructor)
}