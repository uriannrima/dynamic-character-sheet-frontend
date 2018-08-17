import { ActionTree } from 'vuex'
import { Actions, Mutations } from '@/store/modules/auth/mappings'
import AuthService from '@/shared/services/auth/AuthService'
import UserService from '@/services/user.service'
import { AuthState } from '@/store/modules/auth/state'
import { RootState } from '@/store/types'
import { LoginPayload } from '@/shared/services/auth/login-payload'

export const actions: ActionTree<AuthState, RootState> = {
  async [Actions.login]({ commit }, payload: LoginPayload) {
    commit(Mutations.toggleProcessing, true)
    var userSession = await AuthService.login(payload)
    commit(Mutations.toggleProcessing, false)
    if (userSession && userSession.accessToken) {
      commit(Mutations.saveUserSession, userSession)
      return true
    }
    return false
  },
  async [Actions.logout]({ commit }) {
    commit(Mutations.toggleProcessing, true)
    await AuthService.logout()
    commit(Mutations.clearUserSession)
    commit(Mutations.toggleProcessing, false)
    return true
  },
  async [Actions.register]({ commit }, payload) {
    commit(Mutations.toggleProcessing, true)
    await UserService.register(payload)
    commit(Mutations.toggleProcessing, false)
  },
  async [Actions.refresh]({ commit, getters }) {
    if (getters.isAuthenticated) {
      return true
    } else {
      const userSession = getters.getUserSession;
      if (userSession) {
        try {
          const newAccessToken = await AuthService.refresh({ accessToken: userSession.accessToken });
          if (newAccessToken) {
            userSession.accessToken = newAccessToken;
            commit(Mutations.saveUserSession, userSession)
          }
        } catch ({ code }) {
          if (code === 401) {
            commit(Mutations.clearUserSession)
          }
        }
        return getters.isAuthenticated
      }
    }

    return false
  }
}

export default actions;
