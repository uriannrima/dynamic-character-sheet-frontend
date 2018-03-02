import CharacterService from "../../services/character.service";

export default {
  namespaced: true,
  state: {
    id: null
  },
  getters: {},
  mutations: {
    saveCharacterId(state, characterId) {
      state.id = characterId;
    }
  },
  actions: {
    async loadCharacterAsync(context, characterId) {
      const { commit, dispatch, state } = context;
      try {
        const character = await CharacterService.getData(characterId);
        // Debug purpose.
        commit('saveCharacterId', characterId);
        Object.keys(state).forEach(prop => {
          if (state[prop]._module) dispatch(`${prop}/loadStateAsync`, character);
        });
      } catch (error) {
        console.log('Ohnoes', error);
      }
    }
  }
};
