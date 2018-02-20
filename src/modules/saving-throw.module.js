export const SavingThrow = function ({ name, keyAbility, base, abilityModifier, magicModifier, miscModifier, tempModifier }) {
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

export const Factory = {
  Create: function ({ name, keyAbility, base, abilityModifier, magicModifier, miscModifier, tempModifier }) {
    const template = Factory.templates.filter(t => t.name === name)[0];
    return new SavingThrow(template);
  },
  templates: [],
  add: function (template) {
    Factory.templates.push(template);
  },
  clear: function () {
    Factory.template = [];
  }
}

Factory.add({
  name: "fortitude",
  keyAbility: "constitution"
});

Factory.add({
  name: "reflex",
  keyAbility: "dexterity"
});

Factory.add({
  name: "will",
  keyAbility: "wisdom"
});
