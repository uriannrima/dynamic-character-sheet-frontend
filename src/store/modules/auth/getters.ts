import { GetterTree } from 'vuex'
import { AuthState } from '@/store/modules/auth/state'
import { RootState } from '@/store/types'
import Cookies from 'js-cookie';

export const getters: GetterTree<AuthState, RootState> = {
  getUserSession: state => {
    return state.userSession || Cookies.getJSON('userSession');
  },
  isAuthenticated: state => {
    return !!(state.userSession && state.userSession.accessToken)
  }
}

export default getters
