import { createNamespacedHelpers } from 'vuex';
import { AuthState } from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
export { default as Mappings } from './mappings';
export const { mapState, mapGetters, mapActions, mapMutations } = createNamespacedHelpers('AuthModule');

export default {
  namespaced: true,
  state: new AuthState(),
  getters,
  actions,
  mutations
};
