import { SpellSchool } from 'domain/spell-school'
import AbstractService from './abstract.service'

class SpellSchoolService extends AbstractService<SpellSchool> {
  constructor () {
    super({ url: '/spell-schools' })
  }
}

export default new SpellSchoolService()
