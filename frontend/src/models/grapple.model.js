export default function grapple({ baseAttackBonus, strengthModifier, sizeModifier, miscModifier }) {
    return {
        baseAttackBonus,
        strengthModifier,
        sizeModifier,
        miscModifier,
        getTotal: function () {
            var result = 0;
            for (var key in this) {
                if (typeof this[key] !== "number") continue;
                result += this[key];
            }
            return result;
        }
    }
}