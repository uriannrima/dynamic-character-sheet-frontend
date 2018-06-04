import { IEntity } from './interfaces/IEntity';
import { ISubValued } from './interfaces/ISubValued';
import { SubValue } from './sub-value';

export enum FeatType {
  NONE = 'None',
  GENERAL = 'General',
  ITEM_CREATION = 'Item Creation',
  RESERVE = 'Reserve',
  METAMAGIC = 'Metamagic'
};

export class Feat implements IEntity, ISubValued<SubValue> {
  _id: string = '';
  title: string = '';
  benefit: string = '';
  type: FeatType = FeatType.NONE;
  preRequisite: string = '';
  normal: string = '';
  special: string = '';
  unique: boolean = false;
  subValues: SubValue[] = [];

  constructor(model?: Feat | { _id?: string, title?: string, benefit?: string, type?: FeatType, preRequisite?: string, normal?: string, special?: string, unique?: boolean, subValues?: SubValue[] }) {
    Object.assign(this, model);
  }

  get hasSubValues() {
    return this.subValues && this.subValues.length >= 1;
  }
};
