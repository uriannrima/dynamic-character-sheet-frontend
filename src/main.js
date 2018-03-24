import Vue from 'vue';

import './plugins';
import './extensions';
import './styles';

import router from './router';
import store from './store';

import App from './App';

new Vue({
  store,
  el: '#dcs-app',
  router,
  render: h => h(App)
});
