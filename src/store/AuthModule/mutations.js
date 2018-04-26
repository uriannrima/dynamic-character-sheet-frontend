import { Mutations } from './mappings';

export default {
  [Mutations.saveUserSession](state, userSession) {
    state.userSession = userSession;
  },
  [Mutations.toggleProcessing](state, processing) {
    state.processing = processing;
  }
}
