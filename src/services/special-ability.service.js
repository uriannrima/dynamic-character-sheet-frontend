import * as SpecialAbilityModule from 'domain/special-ability.model';
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
