import { IEntity } from './interfaces/IEntity'
import { ISubValued } from './interfaces/ISubValued'
import { FeatType } from './enums/feat-type';

export class Feat implements IEntity, ISubValued<string> {
  readonly _id: string = '';
  _type: string = 'Feat';
  name: string = '';
  type: FeatType = FeatType.NONE;

  class: string = '';
  snippet: string = '';
  page: string = '';

  benefit: string = '';
  preRequisite: string = '';
  normal: string = '';
  special: string = '';
  unique: boolean = false;
  subValues: string[] = [];

  constructor(model?: Feat | {
    _id?: string, name?: string, benefit?: string,
    type?: FeatType, preRequisite?: string, normal?: string,
    special?: string, unique?: boolean, subValues?: string[],
    class?: string, snippet?: string, page: string
  }) {
    if (model) {
      if (model._id) this._id = model._id;
      if (model.name) this.name = model.name;
      if (model.type) this.type = model.type;

      if (model.class) this.class = model.class;
      if (model.snippet) this.snippet = model.snippet;
      if (model.page) this.page = model.page;

      if (model.benefit) this.benefit = model.benefit;
      if (model.preRequisite) this.preRequisite = model.preRequisite;
      if (model.normal) this.normal = model.normal;
      if (model.special) this.special = model.special;
      if (model.unique) this.unique = model.unique;
      if (model.subValues) this.subValues = model.subValues;
    }
  }

  get hasSubValues() {
    return this.subValues && this.subValues.length >= 1
  }
};
