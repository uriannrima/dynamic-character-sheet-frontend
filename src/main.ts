import Vue from 'vue'

import './plugins'
import './extensions'
import '@/styles'
import './registerServiceWorker'

import router from '@/router'
import store from '@/store'

import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('signed', function (value: any) {
  if (value === undefined || value === null) return '';
  const sign = value >= 0 ? '+' : '-';
  return sign + Math.abs(value).toString();
})

Vue.filter('capitalized', function (text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
})

Vue.filter('spaced', function slugify(text: string) {
  return text.toString().replace(/([A-Z])/g, ' $1');
});

new Vue({
  store,
  el: '#dcs-app',
  router,
  render: h => h(App)
})
