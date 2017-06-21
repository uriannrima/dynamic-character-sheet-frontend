export default function savingThrow({ name, keyAbility, base, abilityModifier, magicModifier, miscModifier, tempModifier }) {
    return {
        name,
        keyAbility,
        base: base || 0,
        abilityModifier: abilityModifier || 0,
        magicModifier: magicModifier || 0,
        miscModifier: miscModifier || 0,
        tempModifier: tempModifier || 0,
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

export function fortitude() {
    this.__proto__ = new savingThrow({ name: "fortitude", keyAbility: "constitution" });
}


export function reflex() {
    this.__proto__ = new savingThrow({ name: "reflex", keyAbility: "dexterity" });
}


export function will() {
    this.__proto__ = new savingThrow({ name: "will", keyAbility: "wisdom" });
}