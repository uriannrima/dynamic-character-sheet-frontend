import { KeyAbilityType } from './enums/key-ability-type';
import { AttackType } from './enums/attack-type';

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
