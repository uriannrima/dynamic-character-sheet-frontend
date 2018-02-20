import * as SpellModule from 'Modules/spell.module';
import AbstractService from './abstract.service'

class SpellService extends AbstractService {
  constructor() {
    super({
      model: SpellModule.Spell,
      url: '/spells'
    });
  }

  async getAllDescriptors() {
    return SpellModule.descriptors;
  }

  async getAllComponents() {
    return SpellModule.components;
  }

  async getAllCastingTimes() {
    return SpellModule.castingTimes;
  }

  async getAllRanges() {
    return SpellModule.ranges;
  }

  async getAllEffects() {
    return SpellModule.effects;
  }

  async getAllDurations() {
    return SpellModule.durations;
  }

  async getAllSavingThrowResolve() {
    return SpellModule.savingThrowResolve;
  }
}

export default new SpellService();
