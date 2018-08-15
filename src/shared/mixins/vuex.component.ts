import Vue from 'vue';
import { Module } from 'vuex';

export class VuexComponentProps<TState = any, TRootState = any> {
  name: string;
  module: Module<TState, TRootState>;

  constructor(name: string, module: Module<TState, TRootState>) {
    this.name = name;
    this.module = module;
  }
}

export function VuexComponent(
  modules: VuexComponentProps | Array<VuexComponentProps>
) {
  return Vue.extend({
    created() {
      const store = this.$store;
      if (!Array.isArray(modules)) {
        modules = [modules];
      }
      modules.forEach(module => {
        if (!(store && store.state && store.state[module.name])) {
          store.registerModule(module.name, module.module);
        }
      });
    }
  });
}

export default VuexComponent;
