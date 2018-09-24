import Vue from 'vue'

import './plugins'
import './extensions'
import './styles'

import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#dcs-app')
