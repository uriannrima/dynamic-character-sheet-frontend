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

  constructor(model?: SpecialAbility | {
    _id?: string, name?: string, description?: string,
    type?: SpecialAbilityType, subValues?: SubValue[]
  }) {
    if (model) {
      if (model._id) this._id = model._id;
      if (model.name) this.name = model.name;
      if (model.description) this.description = model.description;
      if (model.type) this.type = model.type;
      if (model.subValues) this.subValues = model.subValues.map(subValue => new SubValue(subValue));
    }
  }

  get hasSubValues() {
    return this.subValues && this.subValues.length >= 1
  }
}

export default SpecialAbility
