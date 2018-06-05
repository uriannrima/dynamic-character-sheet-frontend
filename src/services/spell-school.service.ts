import { SpellSchool, SpellSchools } from 'domain/spell-school'
import AbstractService from './abstract.service'

class SpellSchoolService extends AbstractService<SpellSchool> {
  constructor () {
    super({ url: '/spellSchool' })
  }

  async getAll () {
    return SpellSchools
  }
}

export default new SpellSchoolService()
