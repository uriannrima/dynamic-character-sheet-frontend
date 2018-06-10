import { KeyAbilityType } from './enums/key-ability-type'

export class SavingThrow {
  name: string = '';
  keyAbility: KeyAbilityType = KeyAbilityType.NONE;
  base: number = 0;
  abilityModifier: number = 0;
  magicModifier: number = 0;
  miscModifier: number = 0;
  tempModifier: number = 0;

  constructor (model?: SavingThrow | { name?: string, keyAbility?: KeyAbilityType, base?: number, abilityModifier?: number, magicModifier?: number, miscModifier?: number, tempModifier?: number }) {
    Object.assign(this, model)
  }
}

export default SavingThrow

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
  will, reflex, fortitude
}

export enum SavingThrowType {
  NONE = 'none',
  WILL = 'will',
  REFLEX = 'reflex',
  FORTITUDE = 'fortitude'
};
