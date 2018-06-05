import { ISubValued } from './interfaces/ISubValued'
import { IEntity } from './interfaces/IEntity'
import { SubValue } from '@/domain/sub-value'

export enum SpecialAbilityType {
  NONE = 'None',
  EXTRAORDINARY_ABILITIES = 'Extraordinary Abilities',
  SPELL_LIKE_ABILITIES = 'Spell-Like Abilities',
  SUPERNATURAL_ABILITIES = 'Supernatural Abilities'
}

export class SpecialAbility implements IEntity, ISubValued<SubValue> {
  _id: string = '';
  name: string = '';
  description: string = '';
  type: SpecialAbilityType = SpecialAbilityType.NONE;
  subValues: SubValue[] = [];

  constructor (model?: SpecialAbility | { _id?: string, name?: string, description?: string, type?: SpecialAbilityType, subValues?: SubValue }) {
    Object.assign(this, model)
  }

  get hasSubValues () {
    return this.subValues && this.subValues.length >= 1
  }
}

export default SpecialAbility
