
import { Module, createNamespacedHelpers } from 'vuex'
import { RootState } from '@/store/types'
import { CharacterSheetState } from './state';

import Layout from './Layout'
import Character from './Character'

import actions from './actions';
import getters from './getters';

export const { mapActions, mapGetters, mapState } = createNamespacedHelpers('CharacterSheet');

export const CharacterSheet: Module<CharacterSheetState, RootState> = {
  namespaced: true,
  modules: { Layout, Character },
  actions,
  getters
}

export default CharacterSheet
