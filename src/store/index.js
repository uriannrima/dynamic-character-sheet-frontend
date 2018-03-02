import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
  actions: {
    async loadCharacter(context, payload) {
      console.log(context)
    }
  }
});

window.Store = Store;
export default Store;
