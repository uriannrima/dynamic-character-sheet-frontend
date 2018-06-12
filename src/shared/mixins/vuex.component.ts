import Vue from 'vue';
import { Module } from 'vuex';

export function VuexComponent(
  moduleName: string,
  module: Module<any, any> & { registered?: boolean }
) {
  return Vue.extend({
    created() {
      if (module.hasOwnProperty('registered') && !module.registered) {
        this.$store.registerModule(moduleName, module);
        module.registered = true;
      }
    }
  });
}

export default VuexComponent;
