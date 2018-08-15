import { ISubValued } from '@domain/interfaces/ISubValued';

export class SpellSchool implements ISubValued<SubSchool> {
  _id: string = '';
  _type: string = 'SpellSchool';
  name: string = '';
  description: string = '';
  subject: string = '';
  subValues: SubSchool[] = [];

  constructor(model?: SpellSchool | { _id?: string, name?: string, description?: string, subject?: string, subValues?: SubSchool[] }) {
    if (model) {
      if (model._id) this._id = model._id;
      if (model.name) this.name = model.name;
      if (model.description) this.description = model.description;
      if (model.subject) this.subject = model.subject;
      if (model.subValues) this.subValues = model.subValues.map(subValue => new SubSchool(subValue));
    }
  }

  get hasSubValues() {
    return this.subValues && this.subValues.length >= 1
  }
}

export class SubSchool {
  name: string = '';
  description: string = '';

  constructor(model?: SubSchool | { name?: string, description?: string }) {
    if (model) {
      if (model.name) this.name = model.name;
      if (model.description) this.description = model.description;
    }
  }
};
