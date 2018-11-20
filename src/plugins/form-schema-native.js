import Vue from 'vue';
import FormSchemaNative, { Components } from '@formschema/native';
import MdcTextField from 'vue-mdc-adapter/dist/textfield';

const createMdcComponents = (Components) => {
  const components = new Components()
  components.set('text', MdcTextField)
  return components
};

FormSchemaNative.components = createMdcComponents(Components);
Vue.component('FormSchema', FormSchemaNative);
