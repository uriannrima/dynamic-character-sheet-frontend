import Vue from 'vue';
import Vuex from 'vuex';
import Character from './Character';
import CharacterService from 'Services/character.service';

Vue.use(Vuex);

const modules = { Character };
const Store = new Vuex.Store({
  modules,
  actions: {
    async loadCharacter({ dispatch, state }, id) {
      var characterData = await CharacterService.getData(id);
      Object.keys(modules).forEach(subModule => {
        dispatch(`${subModule}/loadStateAsync`, { characterData });
      });
    }
  }
});

window.Store = Store;
export default Store;
