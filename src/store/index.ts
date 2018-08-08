import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)

const Store = new Vuex.Store(store)

declare global {
  interface Window { Store: any; }
}

window.Store = Store;

export default Store
