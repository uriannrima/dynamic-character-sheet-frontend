export const Armor = function ({ name, type, acBonus, maxDex, checkPenalty, spellFailure, speed, weight, specialProperties }) {
    return {
        name: name || "",
        type: type || "",
        acBonus: acBonus || 0,
        maxDex: maxDex || 0,
        checkPenalty: checkPenalty || "",
        spellFailure: spellFailure || "",
        speed: speed || "",
        weight: weight || "",
        specialProperties: specialProperties || ""
    };
};

export const Shield = function ({ name, acBonus, checkPenalty, spellFailure, weight, specialProperties }) {
    return {
        name: name || "",
        acBonus: acBonus || 0,
        checkPenalty: checkPenalty || "",
        spellFailure: spellFailure || "",
        weight: weight || "",
        specialProperties: specialProperties || ""
    };
}

export const ProtectiveItem = function ({ name, acBonus, weight, specialProperties }) {
    return {
        name: name || "",
        acBonus: acBonus || 0,
        weight: weight || "",
        specialProperties: specialProperties || ""
    };
}

export const Gear = function () {
    return {
        armor: new Armor(),
        shield: new Shield(),
        protectiveItems: [new ProtectiveItem(), new ProtectiveItem()]
    }
}
