import { KeyAbilityType } from './ability-score.model';

export enum AttackType {
  NONE = 'None',
  BLUDGEONING = 'Bludgeoning',
  PIERCING = 'Piercing',
  SLASHING = 'Slashing'
}

export class Attack {
  name: string = '';
  attackBonus: string = '';
  damage: string = '';
  critical: string = '';
  range: string = '';
  type: AttackType = AttackType.NONE;
  notes: string = '';
  keyAbility: KeyAbilityType = KeyAbilityType.NONE;
  hasAmmunition: boolean = false;

  constructor(model?: Attack | { name?: string, attackBonus?: string, damage?: string, critical?: string, range?: string, type?: AttackType, notes?: string, keyAbility?: KeyAbilityType, hasAmmunition?: boolean }) {
    Object.assign(this, model);
  }
}

export default Attack;
