import * as SpecialAbilityModule from 'Modules/special-ability.module';
import AbstractService from './abstract.service';

class SpecialAbilityService extends AbstractService {
  constructor() {
    super({
      model: SpecialAbilityModule.SpecialAbility,
      url: '/special-abilities'
    });
  }
}

export default new SpecialAbilityService();
