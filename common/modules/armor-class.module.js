exports.armorClass = function ({ base, armorBonus, shieldBonus, dexModifier, sizeModifier, naturalArmor, deflectionModifier, miscModifier }) {
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
            var result = 0;
            for (var key in this) {
                if (typeof this[key] !== "number") continue;
                result += this[key];
            }
            return result;
        },
        getTouchArmor: function () {
            return this.base + this.dexModifier + this.sizeModifier + this.miscModifier;
        },
        getFlatFooted: function () {
            var result = 0;
            for (var key in this) {
                if (typeof this[key] !== "number") continue;
                if (key === "dexModifier") continue;
                result += this[key];
            }
            return result;
        }
    }
}