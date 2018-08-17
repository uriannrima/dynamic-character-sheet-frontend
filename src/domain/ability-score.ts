import { IMap } from '@/domain/interfaces/IMap'
import { IEntity } from '@/domain/interfaces/IEntity';
import { IModified, Modifier } from '@/domain/interfaces/IModified';

export class AbilityScore implements IEntity<string>, IModified {
  _type: string = 'AbilityScore';
  name: string = '';
  base: number = 10;
  modifiers: Modifier[] = [];

  constructor(model?: AbilityScore | { name: string, base?: number, modifiers?: Modifier[] }) {
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

  get hasModifiers() {
    return this.modifiers && this.modifiers.length >= 1;
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
