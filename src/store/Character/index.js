import Description from './Description'

export default {
  namespaced: true,
  modules: {
    Description
  },
  actions: {
    loadState({ dispatch, state }, characterData) {
      Object.keys(state).forEach(subModule => {
        dispatch(`${subModule}/loadState`, { characterData });
      });
    }
  },
  getters: {
    abilityScore: state => (abilityScoreName) => {
      console.log(state, abilityScoreName);
    }
  }
};
