exports.factory = function ({ name, value, updateFn }) {
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

var savingThrow = function ({ name, keyAbility, base, abilityModifier, magicModifier, miscModifier, tempModifier }) {
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

exports.savingThrow = savingThrow;

var factory = {
    create: function ({ name, keyAbility, base, abilityModifier, magicModifier, miscModifier, tempModifier }) {
        const template = factory.templates.filter(t => t.name === name)[0];
        return new savingThrow(template);
    },
    templates: [],
    add: function (template) {
        factory.templates.push(template);
    },
    clear: function () {
        factory.template = [];
    }
}

exports.factory = factory;

factory.add({
    name: "fortitude",
    keyAbility: "constitution"
});

factory.add({
    name: "reflex",
    keyAbility: "dexterity"
});

factory.add({
    name: "will",
    keyAbility: "wisdom"
});