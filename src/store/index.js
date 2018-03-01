import Vue from 'vue';
import Vuex from 'vuex';
import Character from './Character';
import CharacterService from 'Services/character.service';

Vue.use(Vuex);

const Store = new Vuex.Store({
  modules: { Character },
  actions: {
    async loadCharacter(state, id) {
      var characterData = await CharacterService.getData(id);
      state.dispatch('Character/loadState', characterData);
    }
  }
});

window.Store = Store;
export default Store;
