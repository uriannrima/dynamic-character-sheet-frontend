var abilityScore = function ({ name, value, tempValue, updateFn }) {
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
        update: updateFn || function (character) {
            return;
        },
        updateSavingThrows: function (character) {
            const modifier = this.getModifier();
            // Update saving throws.
            var savingThrowsToUpdate = character.savingThrows.filter(savingThrow => savingThrow.keyAbility === this.name);
            savingThrowsToUpdate.forEach(savingThrow => {
                savingThrow.abilityModifier = modifier;
            });
        },
        updateSkills: function (character) {
            character.skills.forEach(skill => {
                if (skill.keyAbility === this.name) {
                    skill.abilityModifier = this.getModifier();
                }
            });
        }
    };
};

exports.abilityScore = abilityScore;

var factory = {
    create: function ({ name, value, tempValue }) {
        const template = factory.templates.filter(t => t.name === name)[0];
        return new abilityScore({
            name: template.name,
            value, tempValue,
            updateFn: template.updateFn
        });
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
    name: "strength",
    updateFn: function (character) {
        this.updateSkills(character);

        // Update grapple.
        character.grapple.strengthModifier = this.getModifier();
    }
});

factory.add({
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

factory.add({
    name: "constitution",
    updateFn: function (character) {
        this.updateSkills(character);
        this.updateSavingThrows(character);
    }
});

factory.add({
    name: "intelligence",
    updateFn: function (character) {
        this.updateSkills(character);
    }
});

factory.add({
    name: "wisdom",
    updateFn: function (character) {
        this.updateSkills(character);
        this.updateSavingThrows(character);
    }
});

factory.add({
    name: "charisma",
    updateFn: function (character) {
        this.updateSkills(character);
    }
});