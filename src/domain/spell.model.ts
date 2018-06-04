import { Descriptor } from './descriptor';
import { IEntity } from './interfaces/IEntity';
import { SpellSchool } from './spell-school.model';
import { Component } from './component';
import { Range } from './range';
import { Effect } from './effect';
import { Resolve } from './resolve';
import { Duration } from './duration';
import { CastingTime } from './casting-time';

export class Spell implements IEntity {
  _id: string = '';
  name: string = '';
  school: SpellSchool = new SpellSchool();
  descriptors: Descriptor[] = [];
  level: number = 0;
  components: Component[] = [];
  castingTimeAmount = 1
  castingTime = 'Standard Action';
  range = ranges[0];
  targets = '';
  effect = '';
  durations = [], ;
  savingThrow = {
    check: ''
  resolve: ''
  };
  description;
  spellResistance = true;
  aditionalInformation;
  constructor({
    _id, name, school = new SpellSchoolModule.SpellSchool({}),
    descriptors = [], level = 0, components = [],
    castingTimeAmount = 1, castingTime = 'Standard Action', range = ranges[0], targets = '', effect = '', durations = [],
    savingThrow = { check: '', resolve: '' }, description, spellResistance = true, aditionalInformation }) {

  }
}
