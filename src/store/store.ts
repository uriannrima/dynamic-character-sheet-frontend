import { StoreOptions } from 'vuex';
import { RootState } from './types';
import Auth from './modules/auth';

export const store: StoreOptions<RootState> = {
  modules: { Auth }
}

export default store;
