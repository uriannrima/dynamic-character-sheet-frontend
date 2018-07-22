import { Base } from './base'
import { IEntity } from '@/domain/interfaces/IEntity';

export class Effect extends Base implements IEntity {
  _id: string = '';
  _type: string = 'Effect';
}

export class AreaType extends Base {
  _type: string = 'AreaType';
}

export class AreaFormat extends Base {
  _type: string = 'AreaFormat';
}

export class AreaEffect extends Effect {
  _type: string = 'AreaEffect';

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
