import { Size } from '@/domain/size'
import AbstractService from '@/services/domain/AbstractService'

class SizeService extends AbstractService<Size> {
  constructor () {
    super({ url: '/sizes' })
  }
}

export default new SizeService()
