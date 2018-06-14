import { KeyAbilityType } from './enums/key-ability-type'
import { AttackType } from './enums/attack-type'

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
    if (model) {
      if (model.name) this.name = model.name;
      if (model.attackBonus) this.attackBonus = model.attackBonus;
      if (model.damage) this.damage = model.damage;
      if (model.critical) this.critical = model.critical;
      if (model.range) this.range = model.range;
      if (model.type) this.type = model.type;
      if (model.notes) this.notes = model.notes;
      if (model.keyAbility) this.keyAbility = model.keyAbility;
      if (model.hasAmmunition) this.hasAmmunition = model.hasAmmunition;
    }
  }
}

export default Attack
