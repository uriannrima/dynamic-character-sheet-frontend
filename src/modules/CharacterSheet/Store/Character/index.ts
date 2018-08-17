import { Module, createNamespacedHelpers } from 'vuex'
import { namespace } from 'vuex-class'
import { CharacterState } from '@/modules/CharacterSheet/Store/Character/state'
import { RootState } from '@/store/types'
import getters from '@/modules/CharacterSheet/Store/Character/getters'
import actions from '@/modules/CharacterSheet/Store/Character/actions'
import mutations from '@/modules/CharacterSheet/Store/Character/mutations'

export { default as Mappings } from '@/modules/CharacterSheet/Store/Character/mappings'
export { Actions, Mutations } from '@/modules/CharacterSheet/Store/Character/mappings'

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
