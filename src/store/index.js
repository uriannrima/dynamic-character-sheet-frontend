import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';

Vue.use(Vuex);

const Store = new Vuex.Store(store);

window.Store = Store;
export default Store;
