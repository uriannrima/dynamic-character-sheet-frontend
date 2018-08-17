import { MutationTree } from 'vuex'
import { Mutations } from '@/modules/CharacterSheet/Store/Layout/mappings'
import { LayoutState } from '@/modules/CharacterSheet/Store/Layout/state'

export const mutations: MutationTree<LayoutState> = {
  [Mutations.toggleLoading](state, isLoading?: boolean) {
    state.isLoading = (isLoading !== undefined) ? isLoading : !state.isLoading;
  },
  [Mutations.setPortalName](state, portalName: string) {
    state.portalName = portalName;
  },
  [Mutations.toggleSectionMenu](state) {
    state.isSectionMenuOpen = !state.isSectionMenuOpen;
  },
  [Mutations.toggleSidebar](state, isOpen?: boolean) {
    state.isSidebarOpen = (isOpen !== undefined) ? isOpen : !state.isSidebarOpen;
  },
  [Mutations.setSelectedSection](state, selectedSection: string) {
    state.selectedSection = selectedSection;
  }
}

export default mutations
