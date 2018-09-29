import { SavingThrow } from '@/domain/saving-throw';
import AbstractService from '@/services/domain/AbstractService'

console.debug(SavingThrow);

class SavingThrowService extends AbstractService<SavingThrow> {
  constructor() {
    super({ url: '/saving-throws', constructors: [SavingThrow] })
  }
}

export default new SavingThrowService()
