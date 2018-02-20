export const ArmorClass = function ({ base, armorBonus, shieldBonus, dexModifier, sizeModifier, naturalArmor, deflectionModifier, miscModifier }) {
  return {
    base,
    armorBonus,
    shieldBonus,
    dexModifier,
    sizeModifier,
    naturalArmor,
    deflectionModifier,
    miscModifier,
    getTotalArmor: function () {
      return Object.keys(this).reduce((accumulator, key) => {
        if (typeof this[key] === 'number') {
          accumulator += this[key];
        }
        return accumulator;
      }, 0);
    },
    getTouchArmor: function () {
      return this.base + this.dexModifier + this.sizeModifier + this.miscModifier;
    },
    getFlatFooted: function () {
      return Object.keys(this).reduce((accumulator, key) => {
        if (typeof this[key] === "number" && key !== "dexModifier") {
          accumulator += this[key];
        }
        return accumulator;
      }, 0);
    }
  }
}
