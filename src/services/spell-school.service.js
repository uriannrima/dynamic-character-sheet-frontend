import * as SpellSchoolModule from 'domain/spell-school.model';
import AbstractService from './abstract.service';

class SpellSchoolService extends AbstractService {
  constructor() {
    super({
      model: SpellSchoolModule.SpellSchool,
      url: '/spellSchool'
    });
  }
  async getAll() {
    return SpellSchoolModule.SpellSchools;
  }
}

export default new SpellSchoolService();
