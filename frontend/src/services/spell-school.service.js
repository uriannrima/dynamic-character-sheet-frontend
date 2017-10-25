import SpellSchoolModule from 'Modules/spell-school.module';
import AbstractService from './abstract.service';

class SpellSchoolService extends AbstractService {
    constructor() {
        super({
            model: SpellSchoolModule.SpellSchool,
            url: '/spellSchool'
        });
    }
}

export default new SpellSchoolService();
