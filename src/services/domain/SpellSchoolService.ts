import { SpellSchool } from '@/domain/spell-school'
import AbstractService from '@/services/domain/AbstractService'

class SpellSchoolService extends AbstractService<SpellSchool> {
  constructor () {
    super({ url: '/spell-schools' })
  }
}

export default new SpellSchoolService()
