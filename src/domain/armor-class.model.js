export class ArmorClass {
  constructor({
    base = 10, armorBonus = 0, shieldBonus = 0,
    dexModifier = 0, sizeModifier = 0, naturalArmor = 0,
    deflectionModifier = 0, miscModifier = 0 } = {}) {
    Object.assign(this, {
      base,
      armorBonus,
      shieldBonus,
      dexModifier,
      sizeModifier,
      naturalArmor,
      deflectionModifier,
      miscModifier
    });
  }
}

export default ArmorClass;
