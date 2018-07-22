import { ISubValued } from '@/domain/interfaces/ISubValued';

export class SubValued<T> implements ISubValued<T> {
  subValues: T[] = [];

  constructor(model?: SubValued<T> | { subValues?: T[] }) {
    if (model) {
      if (model.subValues) this.subValues = model.subValues;
    }
  }

  get hasSubValues() {
    return this.subValues && this.subValues.length >= 1
  }
}
