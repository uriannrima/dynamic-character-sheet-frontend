import Vue from 'vue';
import './utils/array.extensions.js';

Vue.prototype.$setDisable = function ($event, value = true) {
  $event.target.disabled = value;
};

Vue.prototype.$extract = function (prop) {
  return { ...prop };
};