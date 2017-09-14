var armor = function ({ name, type, acBonus, maxDex, checkPenalty, spellFailure, speed, weight, specialProperties }) {
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

exports.armor = armor;

var shield = function ({ name, acBonus, checkPenalty, spellFailure, weight, specialProperties }) {
    return {
        name: name || "",
        acBonus: acBonus || 0,
        checkPenalty: checkPenalty || "",
        spellFailure: spellFailure || "",
        weight: weight || "",
        specialProperties: specialProperties || ""
    };
}

exports.shield = shield;

var protectiveItem = function ({ name, acBonus, weight, specialProperties }) {
    return {
        name: name || "",
        acBonus: acBonus || 0,
        weight: weight || "",
        specialProperties: specialProperties || ""
    };
}

exports.protectiveItem = protectiveItem;

var gear = function ({ }) {
    return {
        armor: new armor({}),
        shield: new shield({}),
        protectiveItems: [new protectiveItem({}), new protectiveItem({})]
    }
}

exports.gear = gear;