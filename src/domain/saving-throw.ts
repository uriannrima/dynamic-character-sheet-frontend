import { KeyAbilityType } from '@/domain/enums/key-ability-type'
import { IEntity } from '@/domain/interfaces/IEntity';
import { IModified, Modifier } from '@/domain/interfaces/IModified';

export class SavingThrow implements IEntity<string>, IModified {
  _id: string = '';
  _type: string = 'SavingThrow';

  name: string = '';
  keyAbility: KeyAbilityType = KeyAbilityType.NONE;
  base: number = 0;

  modifiers: Modifier[] = [];

  constructor(model?: SavingThrow | { name?: string, keyAbility?: KeyAbilityType, base?: number, modifiers?: Modifier[] }) {
    if (model) {
      if (model.name) this.name = model.name;
      if (model.keyAbility) this.keyAbility = model.keyAbility;
      if (model.base) this.base = model.base;
      if (model.modifiers !== undefined) this.modifiers = model.modifiers;
    }
  }

  get total() {
    return this.modifiers.reduce((accumulator, modifier) => {
      return accumulator + modifier.value;
    }, this.base);
  }

  get hasModifiers() {
    return this.modifiers && this.modifiers.length >= 1;
  }
}

export const will = new SavingThrow({
  name: 'Will',
  keyAbility: KeyAbilityType.WISDOM
})

export const reflex = new SavingThrow({
  name: 'Reflex',
  keyAbility: KeyAbilityType.DEXTERITY
})

export const fortitude = new SavingThrow({
  name: 'Fortitude',
  keyAbility: KeyAbilityType.CONSTITUTION
})

export const All: { [savingThrowName: string]: SavingThrow } = {
  fortitude, reflex, will
}

export default SavingThrow
