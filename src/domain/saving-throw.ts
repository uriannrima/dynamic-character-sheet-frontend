import { KeyAbilityType } from './enums/key-ability-type'

export class SavingThrow {
  name: string = '';
  keyAbility: KeyAbilityType = KeyAbilityType.NONE;
  base: number = 0;
  magicModifier: number = 0;
  miscModifier: number = 0;
  tempModifier: number = 0;

  constructor(model?: SavingThrow | {
    name?: string, keyAbility?: KeyAbilityType, base?: number,
    magicModifier?: number, miscModifier?: number, tempModifier?: number
  }) {
    if (model) {
      if (model.name) this.name = model.name;
      if (model.keyAbility) this.keyAbility = model.keyAbility;
      if (model.base) this.base = model.base;
      if (model.magicModifier) this.magicModifier = model.magicModifier;
      if (model.miscModifier) this.miscModifier = model.miscModifier;
      if (model.tempModifier) this.tempModifier = model.tempModifier;
    }
  }

  get total() {
    return this.base + this.magicModifier + this.miscModifier + this.tempModifier;
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
