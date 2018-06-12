import Vue, { ComponentOptions } from 'vue';

declare module "vue/types/options" {
  interface VeeValidateOptions {
    validator: string
  }

  interface ComponentOptions<V extends Vue> {
    $_veeValidate?: { validator: 'new' }
  }
}
