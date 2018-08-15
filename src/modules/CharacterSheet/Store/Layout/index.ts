import { Module, createNamespacedHelpers } from 'vuex'
import { namespace } from 'vuex-class'
import { LayoutState } from './state'
import { RootState } from '@/store/types'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export { default as Mappings } from './mappings'
export { Actions, Mutations } from './mappings'

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
