import { Size } from '@/domain/size'
import AbstractService from '@/services/abstract.service'

class SizeService extends AbstractService<Size> {
  constructor () {
    super({ url: '/sizes' })
  }
}

export default new SizeService()
