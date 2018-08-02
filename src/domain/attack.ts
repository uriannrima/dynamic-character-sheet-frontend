import { KeyAbilityType } from './enums/key-ability-type'
import { AttackType } from './enums/attack-type'
import { IEntity } from '@/domain/interfaces/IEntity';
import UUID from '@/utils/uuid';

export class Attack implements IEntity {
  _id: string = '';
  _type: string = 'Attack';
  name: string = '';
  attackBonus: string = '';
  damage: string = '';
  critical: string = '';
  range: string = '';
  types: AttackType[] = [AttackType.NONE];
  notes: string = '';
  keyAbility: KeyAbilityType = KeyAbilityType.NONE;
  hasAmmunition: boolean = false;

  constructor(model?: Attack | { _id?: string, name?: string, attackBonus?: string, damage?: string, critical?: string, range?: string, types?: AttackType[], notes?: string, keyAbility?: KeyAbilityType, hasAmmunition?: boolean }) {
    if (model) {
      this._id = model._id ? model._id : UUID.generate();
      if (model.name) this.name = model.name;
      if (model.attackBonus) this.attackBonus = model.attackBonus;
      if (model.damage) this.damage = model.damage;
      if (model.critical) this.critical = model.critical;
      if (model.range) this.range = model.range;
      if (model.types) this.types = model.types;
      if (model.notes) this.notes = model.notes;
      if (model.keyAbility) this.keyAbility = model.keyAbility;
      if (model.hasAmmunition) this.hasAmmunition = model.hasAmmunition;
    }
  }

  get type() {
    return this.types[0];
  }
}

export default Attack
