import { ComponentMountingOptions, mount } from '@vue/test-utils';
import { DefineComponent } from 'nuxt/dist/app/compat/capi';

export class BaseWrap<T extends DefineComponent<any, any, any, any, any>> {
  constructor(component: T, options?: ComponentMountingOptions<T>) {
    this.component = mount(component, options);
  }

  protected component;
}
