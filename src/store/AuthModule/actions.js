import Cookies from 'js-cookie';
import { Actions, Mutations } from './mappings';
import AuthService from 'shared/services/auth/AuthService';
import UserService from 'services/UserService';
import Feathers from '../../feathers';

export default {
  async [Actions.login]({ commit }, payload) {
    commit(Mutations.toggleProcessing, true);
    var userSession = await AuthService.login(payload);
    commit(Mutations.toggleProcessing, false);
    if (userSession && userSession.accessToken) {
      Cookies.set('userSession', userSession);
      commit(Mutations.saveUserSession, userSession);
      return true;
    }
    return false;
  },
  async [Actions.logout]({ commit }) {
    commit(Mutations.toggleProcessing, true);
    await AuthService.logout();
    Cookies.remove('userSession');
    commit(Mutations.saveUserSession, null);
    commit(Mutations.toggleProcessing, false);
    return true;
  },
  async [Actions.register]({ commit }, payload) {
    commit(Mutations.toggleProcessing, true);
    await UserService.register(payload);
    commit(Mutations.toggleProcessing, false);
  },
  async [Actions.refresh]({ commit, getters }) {
    if (getters.isAuthenticated) {
      return true;
    } else {
      const userSession = Cookies.getJSON('userSession');
      if (userSession) {
        try {
          await Feathers.authenticate({ strategy: 'jwt', accessToken: userSession.accessToken });
          commit(Mutations.saveUserSession, userSession);
        } catch ({ code }) {
          if (code === 401) {
            Cookies.remove('userSession');
            commit(Mutations.saveUserSession, null);
          }
        }
        return getters.isAuthenticated;
      }
    }

    return false;
  }
}