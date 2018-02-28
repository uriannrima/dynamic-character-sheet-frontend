import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
  modules: {
    Character: {
      getters: {
        abilityScore: state => (abilityScoreName) => {
          console.log(state, abilityScoreName);
        }
      }
    }
  }
});

window.Store = Store;
export default Store;
