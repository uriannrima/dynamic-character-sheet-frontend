import Mappings from './mappings';
import AuthService from 'shared/services/auth/AuthService';
import UserService from 'services/UserService';
// import ApplicationDatabase from 'shared/databases/ApplicationDatabase';

export default {
  async [Mappings.Actions.login]({ commit }, payload) {
    commit(Mappings.Mutations.toggleProcessing, true);
    var userSession = await AuthService.login(payload);
    commit(Mappings.Mutations.toggleProcessing, false);
    if (userSession && userSession.accessToken) {
      // await ApplicationDatabase.Instance.setItem('userSession', userSession);
      commit(Mappings.Mutations.saveUserSession, userSession);
      return true;
    }
    return false;
  },
  async [Mappings.Actions.logout]({ commit }) {
    commit(Mappings.Mutations.toggleProcessing, true);
    await AuthService.logout();
    // await ApplicationDatabase.Instance.removeItem('userSession');
    commit(Mappings.Mutations.saveUserSession, null);
    commit(Mappings.Mutations.toggleProcessing, false);
    return true;
  },
  async [Mappings.Actions.register]({ commit }, payload) {
    commit(Mappings.Mutations.toggleProcessing, true);
    await UserService.register(payload);
    commit(Mappings.Mutations.toggleProcessing, false);
  }
}