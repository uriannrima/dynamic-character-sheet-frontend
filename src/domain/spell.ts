import { Descriptor } from './constants/descriptor'
import { IEntity } from './interfaces/IEntity'
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

  constructor (model?: SpellSaveThrow | { check?: string, resolve?: Resolve }) {
    Object.assign(this, model)
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
  effect: string = '';
  durations: Duration[] = [];
  savingThrow: SpellSaveThrow = new SpellSaveThrow();
  description: string = '';
  spellResistance: boolean = true;
  aditionalInformation: string = '';

  constructor (model?: Spell | {
  _id: string, name: string, school: SpellSchool, descriptors: Descriptor,
  level: number, components: Component, castingTimeAmount: number,
  castingTime: CastingTime, range: Range, targets: string, effect: string,
  durations: Duration, savingThrow: SpellSaveThrow, description: string,
  spellResistance: boolean, aditionalInformation: string,
  }) {
    Object.assign(this, model)
  }
}
