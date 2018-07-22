import { IEntity } from './interfaces/IEntity'

export class Language implements IEntity {
  readonly _id: string = '';
  _type: string = 'Language';
  name: string = '';
  description: string = '';
  alphabet: string = '';
  speakers: string[] = [];

  constructor(model?: Language | { _id?: string, name?: string, description?: string, alphabet?: string, speakers?: string[] }) {
    if (model) {
      if (model._id) this._id = model._id;
      if (model.name) this.name = model.name;
      if (model.description) this.description = model.description;
      if (model.alphabet) this.alphabet = model.alphabet;
      if (model.speakers) this.speakers = model.speakers;
    }
  }
}

export default Language
