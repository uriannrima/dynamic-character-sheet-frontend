import { IRevivable } from '@domain/interfaces/IEntity';

export abstract class Base implements IRevivable {
  name: string = '';
  description: string = '';
  _type: string = 'Base';

  constructor(model?: Base | { name?: string, description?: string }) {
    if (model) {
      if (model.name) this.name = model.name
      if (model.description) this.description = model.description
    }
  }
}
