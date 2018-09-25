import { Feat } from '@/domain/feat'
import AbstractService from '@/services/domain/AbstractService'

class FeatService extends AbstractService<Feat> {
  constructor () {
    super({ url: '/feats' })
  }
}

export default new FeatService()
