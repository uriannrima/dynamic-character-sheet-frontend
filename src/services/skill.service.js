import * as SkillModule from 'modules/skill.module';
import AbstractService from './abstract.service';

class SkillService extends AbstractService {
  constructor() {
    super({
      model: SkillModule.Skill,
      url: '/skills'
    });
  }

  async getDefaultSkills() {
    const query = {
      default: true,
      $select: ["_id", "name", "keyScoreName", "untrained", "armorCheckPenalty", "hasSubValue"]
    };

    return await this.getAll(query);
  }
}

export default new SkillService();
