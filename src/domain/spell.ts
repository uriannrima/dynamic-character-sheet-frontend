import { IEntity } from '@domain/interfaces/IEntity';
import { KeyAbilityType } from '@domain/enums/key-ability-type';

export enum CastingType {
  NONE = 'None',
  STANDARD_ACTION = 'Standard Action'
}
export class CastingTime {
  type: CastingType = CastingType.NONE;
  amount: number = 0;
}

export enum RangeType {
  NONE = 'None',
  TARGET = 'Target',
  SELF = 'Self'
}

export class Scale {
  value: number = 0;
  per: number = 0;
  max: number = 0;
}

export enum AreaType {
  NONE = 'None',
  CONE = 'Cone',
  LINE = 'Line',
  RADIUS = 'Radius'
}

export class Area {
  type: AreaType = AreaType.NONE;
  size: number = 0;
  scale?: Scale;
}

export class Range {
  type: RangeType = RangeType.NONE;
  distance: number = 0;
  scale?: Scale;
  area?: Area;
}

export class Duration {
  unit: string = '';
  scale?: Scale;
}

export class SavingThrow {
  keyAbility: KeyAbilityType = KeyAbilityType.NONE;
  resolve: string = '';
}

export class Hit {
  keyAbility: KeyAbilityType = KeyAbilityType.NONE;
  type: string = '';
}

export class Damage {
  damage: string = '';
  type: string = '';
  scale?: Scale;
}

export class Spell implements IEntity {
  _id: string = '';
  _type: string = 'Spell';
  name: string = '';
  level: number = 0;
  school: string = '';
  castingTime: CastingTime = new CastingTime();
  range: Range = new Range();
  duration: string | Duration = 'None';
  savingThrow: SavingThrow = new SavingThrow();
  hit?: Hit;
  effects: Array<string | Damage> = [];

  constructor(model: Spell | {
  _id?: string, _type?: string, name?: string,
  level?: number, school?: string, castingTime?: CastingTime,
  range?: Range, duration?: string | Duration, savingThrow?: SavingThrow,
  hit?: Hit, effects?: Array<string | Damage>,
  }) {
    if (model) {
      if (model._id !== undefined) this._id = model._id;
      if (model._type !== undefined) this._type = model._type;
      if (model.name !== undefined) this.name = model.name;
      if (model.level !== undefined) this.level = model.level;
      if (model.school !== undefined) this.school = model.school;
      if (model.castingTime !== undefined) this.castingTime = model.castingTime;
      if (model.range !== undefined) this.range = model.range;
      if (model.duration !== undefined) this.duration = model.duration;
      if (model.savingThrow !== undefined) this.savingThrow = model.savingThrow;
      if (model.hit !== undefined) this.hit = model.hit;
      if (model.effects !== undefined) this.effects = model.effects;
    }
  }
}
