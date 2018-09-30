
import { Module, createNamespacedHelpers } from 'vuex'
import { RootState } from '@/store/types'

import Layout from './Layout'
import Character from './Character'

export const { mapActions } = createNamespacedHelpers('CharacterSheet');

export const CharacterSheet: Module<{}, RootState> = {
  namespaced: true,
  modules: { Layout, Character },
  actions: {
    async loadCharacter({ commit, dispatch }, characterId) {
      commit('Layout/toggleLoading', true);
      await dispatch('Character/loadCharacter', characterId);
      commit('Layout/toggleLoading', false);
    },
    async newCharacter({ commit, dispatch }) {
      commit('Layout/toggleLoading', true);
      dispatch('Character/newCharacter');
      commit('Layout/toggleLoading', false);
    }
  }
}

export default CharacterSheet
