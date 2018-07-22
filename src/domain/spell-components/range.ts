import { Base } from './base'
import { IEntity } from '@/domain/interfaces/IEntity';

export class Range extends Base implements IEntity {
  _id: string = '';
  _type: string = 'Range';
}

export class RangeWithDistance extends Range {
  distance: string = '';
  _type: string = 'RangeWithDistance';

  constructor(model?: RangeWithDistance | { name?: string, description?: string, distance?: string }) {
    super(model)
    if (model) {
      if (model.distance) this.distance = model.distance;
    }
  }
}

export default Range;
