import { SpecialAbility } from '@domain/special-ability'
import AbstractService from './abstract.service'

class SpecialAbilityService extends AbstractService<SpecialAbility> {
  constructor () {
    super({ url: '/special-abilities' })
  }
}

export default new SpecialAbilityService()
