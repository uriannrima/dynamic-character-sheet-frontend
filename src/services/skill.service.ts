import AbstractService from './abstract.service';
import { Skill } from '@/domain';

class SkillService extends AbstractService<Skill> {
  constructor() {
    super({ url: '/skills' });
  }

  async getDefaultSkills() {
    const query = {
      default: true,
      $select: ['_id', 'name', 'keyScoreName', 'untrained', 'armorCheckPenalty', 'hasSubValue']
    };

    return await this.getAll(query);
  }
}

export default new SkillService();
