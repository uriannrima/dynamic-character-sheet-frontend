export class Grapple {
  constructor({ baseAttackBonus = 0, strengthModifier = 0, sizeModifier = 0, miscModifier = 0 } = {}) {
    Object.assign(this, {
      baseAttackBonus,
      strengthModifier,
      sizeModifier,
      miscModifier
    });
  }
}

export default Grapple;
