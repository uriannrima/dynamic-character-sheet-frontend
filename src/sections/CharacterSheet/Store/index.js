import { createNamespacedHelpers } from 'vuex';
import { CharacterState } from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import ChannelService from 'services/channel.service';

export { default as Mappings } from './mappings';
export { Actions, Mutations } from './mappings';
export const { mapState, mapGetters, mapActions, mapMutations } = createNamespacedHelpers('Character');

export class CharacterSyncing {
  constructor() {
    this.syncingMap = ['Character/updateSkill'];
  }

  emit(mutation, state) {
    const characterId = state.CharacterModule._id;
    ChannelService.sync(['characters', characterId], mutation);
  }

  register(store) {
    ChannelService.onSync((mutation) => {
      // TODO: Payload.sync included until mutation has meta options.
      var { sync, ...payload } = mutation.payload;
      if (sync) store.commit(mutation.type, payload);
    });
  }
}

export default {
  namespaced: true,
  state: new CharacterState(),
  getters,
  actions,
  mutations
};
