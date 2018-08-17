import { Module, createNamespacedHelpers } from 'vuex'
import { namespace } from 'vuex-class'
import { AuthState } from '@/store/modules/auth/state'
import { RootState } from '@/store/types'
import getters from '@/store/modules/auth/getters'
import actions from '@/store/modules/auth/actions'
import mutations from '@/store/modules/auth/mutations'

export { default as Mappings } from '@/store/modules/auth/mappings'
export { Actions, Mutations } from '@/store/modules/auth/mappings'

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
