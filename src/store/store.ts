import { StoreOptions } from 'vuex'
import { RootState } from '@/store/types'
import Auth from '@/store/modules/auth'

export const store: StoreOptions<RootState> = {
  modules: { Auth }
}

export default store
