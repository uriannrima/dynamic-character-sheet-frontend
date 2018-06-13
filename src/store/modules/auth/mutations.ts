import { MutationTree } from 'vuex'
import { Mutations } from './mappings'
import { AuthState } from '@/store/modules/auth/state'
import Cookies from 'js-cookie'

export const mutations: MutationTree<AuthState> = {
  [Mutations.saveUserSession](state, userSession: any = null) {
    state.userSession = userSession
    if (userSession) {
      Cookies.set('userSession', userSession)
    } else {
      Cookies.remove('userSession')
    }
  },
  [Mutations.clearUserSession](state) {
    state.userSession = null;
    Cookies.remove('userSession')
  },
  [Mutations.toggleProcessing](state, processing: boolean = false) {
    state.processing = processing
  }
}

export default mutations
