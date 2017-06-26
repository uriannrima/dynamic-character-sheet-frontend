export function factory({ name, value, updateFn }) {
    switch (name) {
        case "strength":
            return new strength(value);
        case "dexterity":
            return new dexterity(value);
        case "constitution":
            return new constitution(value);
        case "intelligence":
            return new intelligence(value);
        case "wisdom":
            return new wisdom(value);
        case "charisma":
            return new charisma(value);
        default:
            return new abilityScore({ name, value, updateFn });
    }
}

export function abilityScore({ name, value, updateFn }) {
    return {
        name,
        value,
        tempValue: value,
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
}

export function strength(value) {
    return new abilityScore({
        name: "strength",
        value,
        updateFn: function (character) {
            this.updateSkills(character);

            // Update grapple.
            character.grapple.strengthModifier = this.getModifier();
        }
    });
}

export function dexterity(value) {
    return new abilityScore({
        name: "dexterity",
        value,
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
}

export function constitution(value) {
    return new abilityScore({
        name: "constitution",
        value,
        updateFn: function (character) {
            this.updateSkills(character);
            this.updateSavingThrows(character);
        }
    });
}

export function intelligence(value) {
    return new abilityScore({
        name: "intelligence",
        value,
        updateFn: function (character) {
            this.updateSkills(character);
        }
    });
}

export function wisdom(value) {
    return new abilityScore({
        name: "wisdom",
        value,
        updateFn: function (character) {
            this.updateSkills(character);
            this.updateSavingThrows(character);
        }
    });
}

export function charisma(value) {
    return new abilityScore({
        name: "charisma",
        value,
        updateFn: function (character) {
            this.updateSkills(character);
        }
    });
}