import { Spell } from 'domain/spell';
import { CastingTime } from 'domain/enums/casting-time-type';
import AbstractService from './abstract.service';

import {
  Descriptor, Component, RangeWithDistance,
  Effect, AreaEffect, TimedDuration, Duration, Resolve, Range
} from '@/domain/spell-components';

// Or Types become undefined right bellow. Don't know why.
console.debug(Descriptor, Component, RangeWithDistance, Effect, AreaEffect, TimedDuration, Duration, Resolve, Range);

export class SpellDescriptorService extends AbstractService<Descriptor> {
  constructor() {
    super({ url: '/spell-descriptors', constructors: [Descriptor] });
  }
}

export class SpellComponentService extends AbstractService<Component> {
  constructor() {
    super({ url: '/spell-components', constructors: [Component] });
  }
}

export class SpellRangeService extends AbstractService<Range> {
  constructor() {
    super({ url: '/spell-ranges', constructors: [Range, RangeWithDistance] });
  }
}

export class SpellEffectService extends AbstractService<Effect> {
  constructor() {
    super({ url: '/spell-effects', constructors: [Effect, AreaEffect] });
  }
}

export class SpellDurationService extends AbstractService<Duration> {
  constructor() {
    super({ url: '/spell-durations', constructors: [Duration, TimedDuration] });
  }
}

export class SpellResolutionService extends AbstractService<Resolve> {
  constructor() {
    super({ url: '/spell-resolutions', constructors: [Resolve] });
  }
}

class SpellService extends AbstractService<Spell> {
  spellDescriptorService: SpellDescriptorService = new SpellDescriptorService();
  spellComponentService: SpellComponentService = new SpellComponentService();
  spellRangeService: SpellRangeService = new SpellRangeService();
  spellEffectsService: SpellEffectService = new SpellEffectService();
  spellDurationService: SpellDurationService = new SpellDurationService();
  spellResolveService: SpellResolutionService = new SpellResolutionService();

  constructor() {
    super({ url: '/spells' });
  }

  async getAllDescriptors() {
    return this.spellDescriptorService.getAll();
  }

  async getAllComponents() {
    return this.spellComponentService.getAll();
  }

  async getAllCastingTimes() {
    return CastingTime
  }

  async getAllRanges() {
    return this.spellRangeService.getAll();
  }

  async getAllEffects() {
    return this.spellEffectsService.getAll();
  }

  async getAllDurations() {
    return this.spellDurationService.getAll();
  }

  async getAllSavingThrowResolve() {
    return this.spellResolveService.getAll();
  }
}

export default new SpellService()
