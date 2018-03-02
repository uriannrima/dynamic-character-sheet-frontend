import CharacterService from "../../services/character.service";

export default {
  namespaced: true,
  state: {
    character: null
  },
  getters: {},
  mutations: {
    loadCharacter(state, character, rootState) {
      state.character = character;
    }
  },
  actions: {
    async loadCharacterAsync(context, characterId) {
      const { commit, dispatch, state } = context;
      try {
        const character = await CharacterService.getData(characterId);
        // Debug purpose.
        commit('loadCharacter', character);
        Object.keys(state).forEach(prop => {
          if (state[prop]._module) dispatch(`${prop}/loadStateAsync`, character);
        });
      } catch (error) {
        console.log('Ohnoes', error);
      }
    }
  }
};
