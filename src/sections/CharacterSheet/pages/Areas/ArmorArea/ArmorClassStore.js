import ObjectUtils from 'Utils/object.utils.js';

export default {
  namespaced: true,
  state: {
    armorClass: {
      base: 10,
      naturalArmor: 0,
      miscModifier: 0
    }
  },
  actions: {
    async loadStateAsync({ commit }, payload) {
      commit('loadState', payload);
    }
  },
  mutations: {
    loadState(state, payload) {
      ObjectUtils.extractTo(payload, state);
    }
  },
  getters: {
    totalArmor(state, getters, rootState, rootGetters) {
      const tempModifier = rootGetters['Character/AbilitiesScore/getAbilityScoreTempModifier']('strength');
      return state.base + tempModifier + state.naturalArmor + state.miscModifier;
    }
  }
};
