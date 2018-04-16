export class Initiative {
  constructor({ miscModifier = 0 } = {}) {
    Object.assign(this, { miscModifier });
  }
}

export default Initiative;
