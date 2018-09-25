import AbstractService from '@/services/domain/abstract.service'
import { Skill } from '@/domain'

class SkillService extends AbstractService<Skill> {
  constructor() {
    super({ url: '/skills' })
  }

  async getDefaultSkills() {
    const query = { default: true }
    return this.getAll(query)
  }
}

export default new SkillService()
