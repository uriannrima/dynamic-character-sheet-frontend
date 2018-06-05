import { MutationTree } from 'vuex'
import { Mutations } from './mappings'
import { AuthState } from '@/store/modules/auth/state'

export const mutations: MutationTree<AuthState> = {
  [Mutations.saveUserSession] (state, userSession: any = null) {
    state.userSession = userSession
  },
  [Mutations.toggleProcessing] (state, processing: boolean = false) {
    state.processing = processing
  }
}

export default mutations
