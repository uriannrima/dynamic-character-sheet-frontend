import Mappings from './mappings';

export default {
  [Mappings.Mutations.saveUserSession](state, userSession) {
    state.userSession = userSession;
  },
  [Mappings.Mutations.toggleProcessing](state, processing) {
    state.processing = processing;
  }
}