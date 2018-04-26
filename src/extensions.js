import Vue from 'vue';
import './utils/array.extensions.js';

Vue.prototype.$extract = function (prop) {
  return { ...prop };
};
