import Vue from 'vue';

import './plugins';
import './extensions';
import './styles';
import './registerServiceWorker'

import router from './router';
import store from './store';

import App from './App';

Vue.config.productionTip = false

new Vue({
  store,
  el: '#dcs-app',
  router,
  render: h => h(App)
});
