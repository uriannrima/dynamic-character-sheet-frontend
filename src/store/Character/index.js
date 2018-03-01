import Description from './Description'

const modules = { Description };
const state = {
  characterId: ""
};

export default {
  namespaced: true,
  state,
  modules,
  actions: {
    loadStateAsync({ commit, dispatch, state }, payload) {
      commit('loadState', payload);
      Object.keys(modules).forEach(subModule => {
        dispatch(`${subModule}/loadStateAsync`, payload);
      });
    }
  },
  mutations: {
    loadState(state, { characterData }) {
      state.characterId = characterData._id;
    }
  },
  getters: {
    abilityScore: state => (abilityScoreName) => {
      console.log(state, abilityScoreName);
    }
  }
};
