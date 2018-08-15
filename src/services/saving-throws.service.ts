import { SavingThrow } from '@domain/saving-throw';
import AbstractService from './abstract.service'

console.debug(SavingThrow);

class SavingThrowsService extends AbstractService<SavingThrow> {
  constructor() {
    super({ url: '/saving-throws', constructors: [SavingThrow] })
  }
}

export default new SavingThrowsService()
