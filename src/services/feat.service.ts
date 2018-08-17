import { Feat } from '@/domain/feat'
import AbstractService from '@/services/abstract.service'

class FeatService extends AbstractService<Feat> {
  constructor () {
    super({ url: '/feats' })
  }
}

export default new FeatService()
