import { Feat } from 'domain/feat'
import AbstractService from './abstract.service'

class FeatService extends AbstractService<Feat> {
  constructor () {
    super({ url: '/feats' })
  }
}

export default new FeatService()
