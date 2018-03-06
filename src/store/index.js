import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import feathers from '@Feathers';

Vue.use(Vuex);

const Store = new Vuex.Store(store);


feathers.service('characters').on('patched', ({ mutation, delta }) => {
  Store.commit(mutation.join('/'), delta);
});

window.Store = Store;
export default Store;
