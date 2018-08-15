import { Base } from './base'
import { IEntity } from '@domain/interfaces/IEntity';

export class Duration extends Base implements IEntity {
  _id: string = '';
  _type: string = 'Duration';
}

export class TimedDuration extends Duration {
  duration: string = '';
  _type: string = 'TimedDuration';

  constructor(model?: TimedDuration | { name?: string, description?: string, duration?: string }) {
    super(model)
    if (model) {
      if (model.duration) this.duration = model.duration;
    }
  }
}
