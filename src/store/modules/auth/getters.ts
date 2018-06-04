import { GetterTree } from 'vuex';
import { AuthState } from '@/store/modules/auth/state';
import { RootState } from '@/store/types';

export const getters: GetterTree<AuthState, RootState> = {
  isAuthenticated: state => {
    return !!(state.userSession && state.userSession.accessToken);
  }
};

export default getters;
