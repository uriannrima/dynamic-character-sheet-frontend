import { Base } from './base'

export class Range extends Base { }

export class RangeWithDistance extends Range {
  distance: string = '';

  constructor(model?: RangeWithDistance | { name?: string, description?: string, distance?: string }) {
    super(model)
    if (model) {
      if (model.distance) this.distance = model.distance;
    }
  }
}