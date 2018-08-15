import { Module, createNamespacedHelpers } from 'vuex'
import { namespace } from 'vuex-class'
import { CharacterState } from './state'
import { RootState } from '@/store/types'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export { default as Mappings } from './mappings'
export { Actions, Mutations } from './mappings'

const namespaceName = 'Character'
export const { mapState, mapGetters, mapActions, mapMutations } = createNamespacedHelpers(namespaceName)
export const Namespace = namespace(namespaceName)

export const character: Module<CharacterState, RootState> = {
  namespaced: true,
  state: new CharacterState(),
  getters,
  actions,
  mutations
}

export default character
