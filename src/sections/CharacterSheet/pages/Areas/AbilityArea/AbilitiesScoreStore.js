import ObjectUtils from 'Utils/object.utils.js';

export default {
  namespaced: true,
  state: {
    abilitiesScore: []
  },
  getters: {
    getModifier: state => (abilityScore) => {
      return Math.floor((abilityScore.value - 10) / 2);
    },
    getTempModifier: state => (abilityScore) => {
      return Math.floor((abilityScore.tempValue - 10) / 2);
    }
  },
  actions: {
    async loadStateAsync({ commit }, payload) {
      commit('loadState', payload);
    }
  },
  mutations: {
    loadState(state, { abilityScores }) {
      abilityScores.forEach(abilityScore => {
        abilityScore.getModifier = function () {
          return Math.floor((this.value - 10) / 2);
        };
        abilityScore.getTempModifier = function () {
          return Math.floor((abilityScore.tempValue - 10) / 2);
        };
        state.abilitiesScore.push(abilityScore);
      });
    },
    updateAbilityScore(state, { abilityScore }) {
      var storeScore = state.abilitiesScore.find(aScore => aScore.name === abilityScore.name);
      ObjectUtils.extractTo(abilityScore, storeScore, ['value', 'tempValue']);
    }
  }
};
