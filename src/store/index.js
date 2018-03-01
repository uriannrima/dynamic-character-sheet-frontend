import Vue from 'vue';
import Vuex from 'vuex';
import CharacterService from '../services/character.service';

Vue.use(Vuex);

const Store = new Vuex.Store({
  mutations: {
    ModuleRegistered(state, { moduleConfiguration }) {
      console.debug('Module Registered:', moduleConfiguration);
    }
  },
  actions: {
    async loadCharacter(state, id) {
      console.log('Load:', id);
    }
  },
  modules: {
    Character: {
      namespaced: true,
      state: {},
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
