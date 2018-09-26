import { StoreOptions } from 'vuex'
import { RootState } from '@/store/types'
import Auth from '@/store/modules/auth'

export const store: StoreOptions<RootState> = {
  modules: { Auth },
  state: {
    version: '1.0.0'
  }
}

export default store
