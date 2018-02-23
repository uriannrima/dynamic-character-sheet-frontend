
// CSS Imports.
import 'Assets/styles/utils.css';
// import 'Assets/styles/styles.css';
// import 'Assets/styles/tabs.css';
// import 'Assets/styles/form-validation.css';

// Promise polyfill for IE11.
import Es6Promise from 'es6-promise';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
// import VTooltip from 'v-tooltip';
import router from './router';
import { store } from 'Store';
import Layout from './shared/sections/Layout';
import vSelect from 'vue-select';
import './shared/directives/store-sync.directive';

var VueTouch = require('vue-touch');

Es6Promise.polyfill();

/** Extension method to remove element at index. */
Array.prototype.removeAt = function (index) {
  this.splice(index, 1);
};

// Extend Array with Group By.
Array.prototype.groupBy = function (funcProp) {
  return this.reduce(function (accumulator, value) {
    (accumulator[funcProp(value)] = accumulator[funcProp(value)] || []).push(value);
    return accumulator;
  }, {});
};

// Extend array with Order By.
Array.prototype.orderBy = function (funcProp, desc = false) {
  return this.sort((a, b) => {
    var aValue = funcProp(a);
    var bValue = funcProp(b);
    var type = typeof aValue;
    var result = 0;

    if (type === 'string') {
      aValue = aValue.toUpperCase();
      bValue = bValue.toUpperCase();
      if (aValue < bValue) {
        result = -1;
      } else if (aValue > bValue) {
        result = 1;
      }
    } else if (type === 'number') {
      result = aValue - bValue;
    }

    return desc ? result * -1 : result;
  });
};

Array.prototype.orderByDesc = function (funcProp) {
  return this.orderBy(funcProp, true);
}

// CSS Grid Polyfill
// import './utils/css-grid-polyfill';

const veeConfig = {
  classes: true,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  }
}

Vue.component('v-select', vSelect);
Vue.use(VeeValidate, veeConfig);
// Vue.use(VTooltip);

VueTouch.registerCustomEvent('tap', {
  type: 'tap',
  taps: 2
});

Vue.use(VueTouch, {
  name: 'v-touch'
});

new Vue({
  store,
  el: '#dcs-app',
  router,
  data: {
  },
  components: { Layout }
});
