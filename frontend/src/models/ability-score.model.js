export function abilityScore(name, value, updateFn) {
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
    return new abilityScore("strength", value, function (character) {
        this.updateSkills(character);

        // Update grapple.
        character.grapple.strengthModifier = this.getModifier();
    });
}

export function dexterity(value) {
    return new abilityScore("dexterity", value, function (character) {
        this.updateSkills(character);
        this.updateSavingThrows(character);

        const modifier = this.getModifier();
        
        // Update armor class.
        character.armorClass.dexModifier = modifier;

        // Update initiative.
        character.initiative.dexModifier = modifier;
    });
}

export function constitution(value) {
    return new abilityScore("constitution", value, function (character) {
        this.updateSkills(character);
        this.updateSavingThrows(character);
    });
}

export function intelligence(value) {
    return new abilityScore("intelligence", value, function (character) {
        this.updateSkills(character);
    });
}

export function wisdom(value) {
    return new abilityScore("wisdom", value, function (character) {
        this.updateSkills(character);
        this.updateSavingThrows(character);
    });
}

export function charisma(value) {
    return new abilityScore("charisma", value, function (character) {
        this.updateSkills(character);
    });
}