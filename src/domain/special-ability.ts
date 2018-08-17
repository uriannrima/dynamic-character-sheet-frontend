import { ISubValued } from '@/domain/interfaces/ISubValued'
import { IEntity } from '@/domain/interfaces/IEntity'

export enum SpecialAbilityType {
  NONE = 'None',
  RACIAL = 'Racial Trait',
  EXTRAORDINARY_ABILITIES = 'Extraordinary Abilities',
  SPELL_LIKE_ABILITIES = 'Spell-Like Abilities',
  SUPERNATURAL_ABILITIES = 'Supernatural Abilities'
}

export class SpecialAbility implements IEntity, ISubValued<string> {
  _id: string = '';
  _type: string = 'SpecialAbility';
  name: string = '';
  description: string = '';
  race: string = '';
  snippet: string = '';
  type: SpecialAbilityType = SpecialAbilityType.NONE;
  subValues: string[] = [];

  constructor(model?: SpecialAbility | {
  _id?: string, name?: string, description?: string,
  type?: SpecialAbilityType, subValues?: string[],
  race?: string, snippet?: string
  }) {
    if (model) {
      if (model._id) this._id = model._id;
      if (model.name) this.name = model.name;
      if (model.description) this.description = model.description;
      if (model.type) this.type = model.type;
      if (model.subValues) this.subValues = model.subValues;
      if (model.race) this.race = model.race;
      if (model.snippet) this.snippet = model.snippet;
    }
  }

  get hasSubValues() {
    return this.subValues && this.subValues.length >= 1
  }
}

export default SpecialAbility
