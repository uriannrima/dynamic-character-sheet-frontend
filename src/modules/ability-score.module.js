export const AbilityScore = function ({ name, value, tempValue, updateFn }) {
  return {
    name,
    value: value || 10,
    tempValue: tempValue || value || 10,
    getModifier: function () {
      return Math.floor((this.value - 10) / 2);
    },
    getTempModifier: function () {
      return Math.floor((this.tempValue - 10) / 2);
    },
    updateCharacter: updateFn || function (character) {

    },
    updateSavingThrows: function (character) {
      const modifier = this.getModifier() !== this.getTempModifier() ? this.getTempModifier() : this.getModifier();

      // Update saving throws.
      var savingThrowsToUpdate = character.savingThrows.filter(savingThrow => savingThrow.keyAbility === this.name);
      savingThrowsToUpdate.forEach(savingThrow => {
        savingThrow.abilityModifier = modifier;
      });
    },
    updateSkills: function (character) {
      character.skills.forEach(skill => {
        if (skill.keyAbility === this.name) {
          if (this.getModifier() !== this.getTempModifier()) {
            skill.abilityModifier = this.getTempModifier();
          } else {
            skill.abilityModifier = this.getModifier();
          }
        }
      });
    }
  };
};

export const Factory = {
  Create: function ({ name, value, tempValue }) {
    const template = Factory.templates.filter(t => t.name === name)[0];
    return new AbilityScore({
      name: template.name,
      value,
      tempValue,
      updateFn: template.updateFn
    });
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
  name: "strength",
  updateFn: function (character) {
    this.updateSkills(character);

    // Update grapple.
    character.grapple.strengthModifier = this.getModifier();
  }
});

Factory.add({
  name: "dexterity",
  updateFn: function (character) {
    this.updateSkills(character);
    this.updateSavingThrows(character);

    const modifier = this.getModifier();

    // Update armor class.
    character.armorClass.dexModifier = modifier;

    // Update initiative.
    character.initiative.dexModifier = modifier;
  }
});

Factory.add({
  name: "constitution",
  updateFn: function (character) {
    this.updateSkills(character);
    this.updateSavingThrows(character);
  }
});

Factory.add({
  name: "intelligence",
  updateFn: function (character) {
    this.updateSkills(character);
  }
});

Factory.add({
  name: "wisdom",
  updateFn: function (character) {
    this.updateSkills(character);
    this.updateSavingThrows(character);
  }
});

Factory.add({
  name: "charisma",
  updateFn: function (character) {
    this.updateSkills(character);
  }
});
