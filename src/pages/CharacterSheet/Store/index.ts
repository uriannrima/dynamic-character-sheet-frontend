
import { Module, createNamespacedHelpers } from 'vuex'
import { RootState } from '@/store/types'
import { CharacterSheetState } from './state';

import Layout from './Layout'
import Character from './Character'

import actions from './actions';

export const { mapActions } = createNamespacedHelpers('CharacterSheet');

export const CharacterSheet: Module<CharacterSheetState, RootState> = {
  namespaced: true,
  modules: { Layout, Character },
  actions
}

export default CharacterSheet
