import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { CharacterSheetState } from '@/pages/CharacterSheet/Store/state';

export const actions: ActionTree<CharacterSheetState, RootState> = {
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

export default actions;
