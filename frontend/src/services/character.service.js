var charClass = function (name, level, updateFn) {
    return {
        name,
        level,
        update: updateFn || function (character) {
            return;
        }
    }
}

var abilityScore = function (name, value, updateFn) {
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
        }
    };
}

var savingThrow = function (name, keyAbility, base, abilityModifier, magicModifier, miscModifier, tempModifier) {
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

var characters = [
    {
        name: 'Buck Anvilhead',
        playerName: 'Peres',
        classes: [
            new charClass("Warrior", 1, function (character) {
                for (var index = 0; index < character.savingThrows.length; index++) {
                    console.log();
                    var savingThrow = character.savingThrows[index];
                    if (savingThrow.name === "fortitude") {
                        savingThrow.base = 2 + (Math.floor(this.level / 2));
                    }
                }
            })
        ],
        race: "Dwarf",
        alignment: "True Neutral",
        deity: "Durin",
        size: "Medium",
        age: 250,
        gender: "Male",
        height: "1.40",
        weight: "100kg",
        eyes: "Black",
        hair: "Grey",
        skin: "White",
        update: function () {
            for (var index = 0; index < this.abilityScores.length; index++) {
                var abilityScore = this.abilityScores[index];
                abilityScore.update(this);
            }
        },
        abilityScores: [
            new abilityScore("strength", 18),
            new abilityScore("dexterity", 14, function (character) {
                this.updateSavingThrows(character);

                const modifier = this.getModifier();
                // Update armor class.
                character.armorClass.dexModifier = modifier;

                // Update initiative.
                character.initiative.dexModifier = modifier;
            }),
            new abilityScore("constitution", 18, function (character) {
                this.updateSavingThrows(character);
            }),
            new abilityScore("intelligence", 13),
            new abilityScore("wisdom", 13, function (character) {
                this.updateSavingThrows(character);
            }),
            new abilityScore("charisma", 10)
        ],
        status: {
            healthPoints: 28,
            wounds: "",
            nonLethalDamage: 0,
        },
        armorClass: {
            base: 10,
            armorBonus: 4,
            shieldBonus: 3,
            dexModifier: 2,
            sizeModifier: 0,
            naturalArmor: 0,
            deflectionModifier: 0,
            miscModifier: 0,
            getTotalArmor: function () {
                var result = 0;
                for (var key in this) {
                    if (typeof this[key] !== "number") continue;
                    result += this[key];
                }
                return result;
            },
            getTouchArmor: function () {
                return this.base + this.dexModifier + this.sizeModifier + this.miscModifier;
            },
            getFlatFooted: function () {
                var result = 0;
                for (var key in this) {
                    if (typeof this[key] !== "number") continue;
                    if (key === "dexModifier") continue;
                    result += this[key];
                }
                return result;
            }
        },
        initiative: {
            dexModifier: 2,
            miscModifier: 0,
            getTotal: function () {
                return this.dexModifier + this.miscModifier;
            }
        },
        savingThrows: [
            new savingThrow("fortitude", "constitution", 2),
            new savingThrow("reflex", "dexterity"),
            new savingThrow("will", "wisdom")
        ]
    },
];

window.characters = characters;

module.exports = {
    get: function (id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(characters[0]);
            }, 200);
        });
    }
}