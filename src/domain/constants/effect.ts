import { Base } from './base'

export class Effect extends Base { }

export class AreaType extends Base { }

export class AreaFormat extends Base { }

export class AreaEffect extends Effect {
  types: AreaType[] = [];
  formats: AreaFormat[] = [];

  constructor(model?: AreaEffect | { name?: string, description?: string, types?: AreaType[], formats?: AreaFormat[] }) {
    super(model)
    if (model) {
      if (model.types) this.types = model.types.map(type => new AreaType(type));
      if (model.formats) this.formats = model.formats.map(format => new AreaFormat(format));
    }
  }
}