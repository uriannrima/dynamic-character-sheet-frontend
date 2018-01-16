import * as SkillModule from 'Modules/skill.module';
import AbstractService from './abstract.service';

class SkillService extends AbstractService {
    constructor() {
        super({
            model: SkillModule.Skill,
            url: '/skills'
        });
    }
}

export default new SkillService();
