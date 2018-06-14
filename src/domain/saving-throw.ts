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
}

export default SavingThrow
