import Vue from 'vue';
import VeeValidate from 'vee-validate';
import vSelect from 'vue-select';
import VueTouch from 'vue-touch';
import VueFeathers from 'vue-feathers';
import VuejsDialog from "vuejs-dialog";
import Es6Promise from 'es6-promise';
import feathers from './feathers';

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