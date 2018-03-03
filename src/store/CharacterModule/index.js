import { createNamespacedHelpers } from 'vuex';
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
export { default as Mappings } from './mappings';
export const { mapState, mapGetters, mapActions, mapMutations } = createNamespacedHelpers('CharacterModule'); ;

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
