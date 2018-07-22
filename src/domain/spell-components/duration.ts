import { Base } from './base'
import { IEntity } from '@/domain/interfaces/IEntity';

export class Duration extends Base implements IEntity {
  _id: string = '';
  _type: string = 'Duration';
}

export class Timed extends Duration {
  duration: string = '';
  _type: string = 'Timed';

  constructor(model?: Timed | { name?: string, description?: string, duration?: string }) {
    super(model)
    if (model) {
      if (model.duration) this.duration = model.duration;
    }
  }
}
