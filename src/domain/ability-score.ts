import { IMap } from './interfaces/IMap'
import { IEntity } from '@domain/interfaces/IEntity';

export class AbilityScoreModifier {
  name: string = '';
  value: number = 0;
  temporary: boolean = false;
}

export class AbilityScore implements IEntity<string> {
  _type: string = 'AbilityScore';
  name: string = '';
  base: number = 10;
  modifiers: AbilityScoreModifier[] = [];

  constructor(model?: AbilityScore | { name: string, base?: number, modifiers?: AbilityScoreModifier[] }) {
    if (model) {
      this.name = model.name;
      if (model.base !== undefined) this.base = model.base;
      if (model.modifiers !== undefined) this.modifiers = model.modifiers;
    }
  }

  get _id() {
    return this.name.toLowerCase();
  }

  get total() {
    return this.modifiers.reduce((accumulator, modifier) => {
      return accumulator + modifier.value;
    }, this.base);
  }

  get modifier() {
    return Math.floor((this.total - 10) / 2)
  }

  get modifierAbs() {
    return Math.abs(this.modifier);
  }
};

export default AbilityScore

export const strength: AbilityScore = new AbilityScore({
  name: 'strength'
})

export const dexterity: AbilityScore = new AbilityScore({
  name: 'dexterity'
})

export const constitution: AbilityScore = new AbilityScore({
  name: 'constitution'
})

export const intelligence: AbilityScore = new AbilityScore({
  name: 'intelligence'
})

export const wisdom: AbilityScore = new AbilityScore({
  name: 'wisdom'
})

export const charisma: AbilityScore = new AbilityScore({
  name: 'charisma'
})

export const All: IMap<AbilityScore> = {
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma
}
