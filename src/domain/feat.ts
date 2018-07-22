import { IEntity } from './interfaces/IEntity'
import { ISubValued } from './interfaces/ISubValued'
import { SubValue } from './sub-value'
import { FeatType } from './enums/feat-type';

export class Feat implements IEntity, ISubValued<SubValue> {
  readonly _id: string = '';
  _type: string = 'Feat';
  title: string = '';
  benefit: string = '';
  type: FeatType = FeatType.NONE;
  preRequisite: string = '';
  normal: string = '';
  special: string = '';
  unique: boolean = false;
  subValues: SubValue[] = [];

  constructor(model?: Feat | {
  _id?: string, title?: string, benefit?: string,
  type?: FeatType, preRequisite?: string, normal?: string,
  special?: string, unique?: boolean, subValues?: SubValue[]
  }) {
    if (model) {
      if (model._id) this._id = model._id;
      if (model.title) this.title = model.title;
      if (model.benefit) this.benefit = model.benefit;
      if (model.type) this.type = model.type;
      if (model.preRequisite) this.preRequisite = model.preRequisite;
      if (model.normal) this.normal = model.normal;
      if (model.special) this.special = model.special;
      if (model.unique) this.unique = model.unique;
      if (model.subValues) this.subValues = model.subValues.map(subValue => new SubValue(subValue));
    }
  }

  get hasSubValues() {
    return this.subValues && this.subValues.length >= 1
  }
};
