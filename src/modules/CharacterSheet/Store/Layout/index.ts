import { Module, createNamespacedHelpers } from 'vuex'
import { namespace } from 'vuex-class'
import { LayoutState } from '@/modules/CharacterSheet/Store/Layout/state'
import { RootState } from '@/store/types'
import getters from '@/modules/CharacterSheet/Store/Layout/getters'
import actions from '@/modules/CharacterSheet/Store/Layout/actions'
import mutations from '@/modules/CharacterSheet/Store/Layout/mutations'

export { default as Mappings } from '@/modules/CharacterSheet/Store/Layout/mappings'
export { Actions, Mutations } from '@/modules/CharacterSheet/Store/Layout/mappings'

const namespaceName = 'CharacterSheetLayout'
export const { mapState, mapGetters, mapActions, mapMutations } = createNamespacedHelpers(namespaceName)
export const Namespace = namespace(namespaceName)

export const layout: Module<LayoutState, RootState> = {
  namespaced: true,
  state: new LayoutState(),
  getters,
  actions,
  mutations
}

export default layout
