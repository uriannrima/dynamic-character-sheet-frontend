import { Size } from '@domain/size'
import AbstractService from './abstract.service'

class SizeService extends AbstractService<Size> {
  constructor () {
    super({ url: '/sizes' })
  }
}

export default new SizeService()
