import { MutationTree } from 'vuex'
import { Mutations } from '@/pages/CharacterSheet/Store/Layout/mappings'
import { LayoutState } from '@/pages/CharacterSheet/Store/Layout/state'

export const mutations: MutationTree<LayoutState> = {
  [Mutations.toggleLoading](state, isLoading?: boolean) {
    state.isLoading = (isLoading !== undefined) ? isLoading : !state.isLoading;
  },
  [Mutations.toggleSectionMenu](state) {
    state.isSectionMenuOpen = !state.isSectionMenuOpen;
  },
  [Mutations.toggleSidebar](state, isOpen?: boolean) {
    state.isSidebarOpen = (isOpen !== undefined) ? isOpen : !state.isSidebarOpen;
  },
  [Mutations.setSelectedSection](state, selectedSection: string) {
    state.selectedSection = selectedSection;
  },
  [Mutations.setSelectedAttribute](state, selectedAttribute: any) {
    state.selectedAttribute = selectedAttribute;
  },
  [Mutations.setSlideoutPanel](state, panelName: string) {
    state.panelName = panelName;
  }
}

export default mutations
