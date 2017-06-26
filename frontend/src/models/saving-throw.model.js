export function factory({ name, value, updateFn }) {
    switch (name) {
        case "fortitude":
            return new fortitude(value);
        case "reflex":
            return new reflex(value);
        case "will":
            return new will(value);
        default:
            return new savingThrow({ name, value, updateFn });
    }
}

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
    return new savingThrow({ name: "fortitude", keyAbility: "constitution" });
}


export function reflex() {
    return new savingThrow({ name: "reflex", keyAbility: "dexterity" });
}


export function will() {
    return new savingThrow({ name: "will", keyAbility: "wisdom" });
}