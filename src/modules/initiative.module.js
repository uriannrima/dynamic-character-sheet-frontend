export class Initiative {
  constructor({ dexModifier = 0, miscModifier = 0 } = {}) {
    Object.assign(this, { dexModifier, miscModifier });
    this.getTotal = function () {
      return this.dexModifier + this.miscModifier;
    }
  }
}

export default Initiative;
