import Vue from 'vue';
import VeeValidate from 'vee-validate';
import vSelect from 'vue-select';
import VueTouch from 'vue-touch';
import VueFeathers from 'vue-feathers';
import VuejsDialog from "vuejs-dialog";

// CSS Imports.

import './utils/array.extensions.js';

// Promise polyfill for IE11.
import Es6Promise from 'es6-promise';

import router from './router';
import store from './store';
import feathers from './feathers';

import Layout from './shared/sections/Layout';

Es6Promise.polyfill();

Vue.use(VueFeathers, feathers);

Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  }
});

Vue.component('v-select', vSelect);

VueTouch.registerCustomEvent('tap', {
  type: 'tap',
  taps: 2
});

Vue.use(VueTouch, {
  name: 'v-touch'
});

Vue.use(VuejsDialog);

Vue.prototype.$setDisable = function ($event, value = true) {
  $event.target.disabled = value;
};

Vue.prototype.$extract = function (prop) {
  return { ...prop };
};

new Vue({
  store,
  el: '#dcs-app',
  router,
  components: { Layout },
  data: {
  }
});