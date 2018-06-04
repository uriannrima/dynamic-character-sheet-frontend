export class Initiative {
  miscModifier: number = 0;

  constructor(model?: Initiative | { miscModifier?: number }) {
    Object.assign(this, model);
  }
}

export default Initiative;
