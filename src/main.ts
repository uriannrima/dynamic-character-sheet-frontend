import Vue from 'vue'

import './plugins'
import './extensions'
import './styles'
import './registerServiceWorker'

import router from './router'
import store from './store'

import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('signed', function (value: any) {
  if (value === undefined || value === null) return '';
  const sign = value >= 0 ? '+' : '-';
  return sign + Math.abs(value).toString();
})

new Vue({
  store,
  el: '#dcs-app',
  router,
  render: h => h(App)
})
