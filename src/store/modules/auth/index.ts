import { Module, createNamespacedHelpers } from 'vuex'
import { namespace } from 'vuex-class'
import { AuthState } from './state'
import { RootState } from '@/store/types'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export { default as Mappings } from './mappings'
export { Actions, Mutations } from './mappings'

const namespaceName = 'Auth'
export const { mapState, mapGetters, mapActions, mapMutations } = createNamespacedHelpers(namespaceName)
export const Namespace = namespace(namespaceName)

export const auth: Module<AuthState, RootState> = {
  namespaced: true,
  state: new AuthState(),
  getters,
  actions,
  mutations
}

export default auth
