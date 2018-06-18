import { Base } from './base'

export class Duration extends Base { }

export class Timed extends Duration {
  duration: string = '';

  constructor(model?: Timed | { name?: string, description?: string, duration?: string }) {
    super(model)
    if (model) {
      if (model.duration) this.duration = model.duration;
    }
  }
}