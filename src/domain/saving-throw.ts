import { KeyAbilityType } from './enums/key-ability-type';

export class SavingThrow {
  name: string = '';
  keyAbility: KeyAbilityType = KeyAbilityType.NONE;
  base: number = 0;
  abilityModifier: number = 0;
  magicModifier: number = 0;
  miscModifier: number = 0;
  tempModifier: number = 0;

  constructor(model?: SavingThrow | { name?: string, keyAbility?: KeyAbilityType, base?: number, abilityModifier?: number, magicModifier?: number, miscModifier?: number, tempModifier?: number }) {
    Object.assign(this, model);
  }
}

export default SavingThrow;

export const Will = new SavingThrow({
  name: 'Will',
  keyAbility: KeyAbilityType.WISDOM
});

export const Reflex = new SavingThrow({
  name: 'Reflex',
  keyAbility: KeyAbilityType.DEXTERITY
});

export const Fortitude = new SavingThrow({
  name: 'Fortitude',
  keyAbility: KeyAbilityType.CONSTITUTION
});

export const All: { [savingThrowName: string]: SavingThrow } = {
  Will, Reflex, Fortitude
};

export enum SavingThrowType {
  NONE = 'None',
  WILL = 'Will',
  REFLEX = 'Reflex',
  FORTITUDE = 'Fortitude'
};
