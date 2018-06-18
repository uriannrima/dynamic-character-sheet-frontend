import { IEntity } from './interfaces/IEntity'
import { Descriptor } from './constants/descriptor'
import { SpellSchool } from './spell-school'
import { Component } from './constants/component'
import { Range } from './constants/range'
import { Effect } from './constants/effect'
import { Resolve } from './constants/resolve'
import { Duration } from './constants/duration'
import { CastingTime } from './enums/casting-time-type'

export class SpellSaveThrow {
  check: string = '';
  resolve: Resolve = new Resolve();

  constructor(model?: SpellSaveThrow | { check?: string, resolve?: Resolve }) {
    if (model) {
      if (model.check) this.check = model.check;
      if (model.resolve) this.resolve = new Resolve(model.resolve);
    }
  }
}

export class Spell implements IEntity {
  _id: string = '';
  name: string = '';
  school: SpellSchool = new SpellSchool();
  descriptors: Descriptor[] = [];
  level: number = 0;
  components: Component[] = [];
  castingTimeAmount: number = 1
  castingTime: CastingTime = CastingTime.STANDARD_ACTION;
  range: Range = new Range();
  targets: string = '';
  effect: Effect = new Effect();
  durations: Duration[] = [];
  savingThrow: SpellSaveThrow = new SpellSaveThrow();
  description: string = '';
  spellResistance: boolean = true;
  aditionalInformation: string = '';

  constructor(model?: Spell | {
    _id: string, name: string, school: SpellSchool, descriptors: Descriptor[],
    level: number, components: Component[], castingTimeAmount: number,
    castingTime: CastingTime, range: Range, targets: string, effect: Effect,
    durations: Duration[], savingThrow: SpellSaveThrow, description: string,
    spellResistance: boolean, aditionalInformation: string,
  }) {
    if (model) {
      if (model._id) this._id = model._id
      if (model.name) this.name = model.name
      if (model.school) this.school = new SpellSchool(model.school)
      if (model.descriptors) this.descriptors = model.descriptors.map(descriptor => new Descriptor(descriptor))
      if (model.level) this.level = model.level
      if (model.components) this.components = model.components.map(component => new Component(component))
      if (model.castingTime) this.castingTime = model.castingTime
      if (model.range) this.range = new Range(model.range)
      if (model.targets) this.targets = model.targets
      if (model.effect) this.effect = new Effect(model.effect)
      if (model.durations) this.durations = model.durations.map(duration => new Duration(duration))
      if (model.savingThrow) this.savingThrow = new SpellSaveThrow(model.savingThrow)
      if (model.description) this.description = model.description
      if (model.spellResistance) this.spellResistance = model.spellResistance
      if (model.aditionalInformation) this.aditionalInformation = model.aditionalInformation
    }
  }
}
