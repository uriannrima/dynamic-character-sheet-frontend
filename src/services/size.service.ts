import { Size, All } from 'domain/size'
import AbstractService from './abstract.service'

class SizeService extends AbstractService<Size> {
  constructor () {
    super({ url: '/size' })
  }

  async getAll () {
    return All
  }
}

export default new SizeService()
