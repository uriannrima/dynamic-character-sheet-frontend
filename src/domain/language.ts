import { IEntity } from './interfaces/IEntity';

export class Language implements IEntity {
  _id: string = '';
  name: string = '';
  description: string = '';
  alphabet: string = '';
  speakers: string[] = [];

  constructor(model?: Language | { _id?: string, name?: string, description?: string, alphabet?: string, speakers?: string[] }) {
    Object.assign(this, model);
  }
}

export default Language;
