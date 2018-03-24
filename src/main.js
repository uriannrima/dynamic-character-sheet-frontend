import Vue from 'vue';

import './plugins-import';
import './extensions-import';
import './styles-import';

import router from './router';
import store from './store';

import App from './App';

new Vue({
  store,
  el: '#dcs-app',
  router,
  render: h => h(App)
});
