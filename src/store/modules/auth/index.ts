import { Module, createNamespacedHelpers } from 'vuex';
import { namespace } from 'vuex-class';
import { AuthState } from './types';
import { RootState } from '@/store/types';
export { default as Mappings } from './mappings';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const namespaceName = 'Auth';
export const { mapState, mapGetters, mapActions, mapMutations } = createNamespacedHelpers(namespaceName);
export const Namespace = namespace(namespaceName);

export const auth: Module<AuthState, RootState> = {
  namespaced: true,
  state: new AuthState(),
  getters,
  actions,
  mutations
};

export default auth;