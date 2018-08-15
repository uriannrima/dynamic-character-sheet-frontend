import { Spell } from '@domain/spell';
import { CastingTime } from '@domain/enums/casting-time-type';
import AbstractService from './abstract.service';

console.debug(Spell);

class SpellService extends AbstractService<Spell> {
  constructor() {
    super({ url: '/spells', constructors: [Spell] });
  }

  async getAllDescriptors() {
    return [];
  }

  async getAllComponents() {
    return [];
  }

  async getAllCastingTimes() {
    return CastingTime
  }

  async getAllRanges() {
    return [];
  }

  async getAllEffects() {
    return [];
  }

  async getAllDurations() {
    return [];
  }

  async getAllSavingThrowResolve() {
    return [];
  }
}

export default new SpellService()
