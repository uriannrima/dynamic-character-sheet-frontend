var charClass = function (name, level, updateFn) {
    return {
        name,
        level,
        update: updateFn || function (character) {
            return;
        }
    }
}

var warriorClass = function (level) {
    this.__proto__ = new charClass("Warrior", level);


    // Update character saving throws
    this.updateSavingThrows = function (character) {
        for (var index = 0; index < character.savingThrows.length; index++) {
            var savingThrow = character.savingThrows[index];
            if (savingThrow.name === "fortitude") {
                savingThrow.base = 2 + (Math.floor(this.level / 2));
            } else if (savingThrow.name === "reflex" || savingThrow.name === "will") {
                savingThrow.base = (Math.floor(this.level / 3));
            }
        }
    }

    // Update character bab.
    this.updateBaseAttackBonus = function (character) {
        character.baseAttackBonus = this.level;
        character.grapple.baseAttackBonus = this.level;
    }

    this.update = function (character) {
        this.updateSavingThrows(character);
        this.updateBaseAttackBonus(character);
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

var skill = function (name, keyAbility, untrained, armorCheckPenalty, classSkill, subValue, rank, abilityModifier, miscModifier) {
    return {
        name,
        keyAbility,
        untrained,
        armorCheckPenalty,
        classSkill,
        subValue,
        rank: rank || 0,
        abilityModifier: abilityModifier || 0,
        miscModifier: miscModifier || 0,
        getTotal: function () {
            var result = 0;
            for (var key in this) {
                if (typeof this[key] !== "number") continue;
                if (key !== "rank" || this.classSkill) {
                    result += this[key];
                } else {
                    result += Math.floor(this[key] / 2);
                }
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
            new warriorClass(1)
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
            // Be updated by char class.
            for (var index = 0; index < this.classes.length; index++) {
                var charClass = this.classes[index];
                charClass.update(this);
            }

            // Be updated by char ability score.
            for (var index = 0; index < this.abilityScores.length; index++) {
                var abilityScore = this.abilityScores[index];
                abilityScore.update(this);
            }
        },
        abilityScores: [
            new abilityScore("strength", 18, function (character) {
                this.updateSkills(character);
                // Update grapple.
                character.grapple.strengthModifier = this.getModifier();
            }),
            new abilityScore("dexterity", 14, function (character) {
                this.updateSkills(character);
                this.updateSavingThrows(character);

                const modifier = this.getModifier();
                // Update armor class.
                character.armorClass.dexModifier = modifier;

                // Update initiative.
                character.initiative.dexModifier = modifier;
            }),
            new abilityScore("constitution", 18, function (character) {
                this.updateSkills(character);
                this.updateSavingThrows(character);
            }),
            new abilityScore("intelligence", 13, function () {
                this.updateSkills(character);
            }),
            new abilityScore("wisdom", 13, function (character) {
                this.updateSavingThrows(character);
            }),
            new abilityScore("charisma", 10, function (character) {
                this.updateSkills(character);
            })
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
            new savingThrow("fortitude", "constitution"),
            new savingThrow("reflex", "dexterity"),
            new savingThrow("will", "wisdom")
        ],
        baseAttackBonus: 0,
        spellResistance: 1,
        grapple: {
            baseAttackBonus: 0,
            strengthModifier: 0,
            sizeModifier: 0,
            miscModifier: 0,
            getTotal: function () {
                var result = 0;
                for (var key in this) {
                    if (typeof this[key] !== "number") continue;
                    result += this[key];
                }
                return result;
            }
        },
        skills: [
            new skill('Appraise', 'intelligence', true, false, true),
            new skill('Balance', 'dexterity', true, true),
            new skill('Bluff', 'charisma', true, false),
            new skill('Climb', 'strength', true, true),
            new skill('Concentration', 'constitution', true, false),
            new skill('Craft', 'intelligence', true, false, false, true),
            new skill('Decipher Script', 'intelligence', false, false),
            new skill('Diplomacy', 'charisma', true, false),
            new skill('Disable Device', 'intelligence', false, false),
            new skill('Disguise', 'charisma', true, false),
            new skill('Escape Artist', 'dexterity', true, true),
            new skill('Forgery', 'intelligence', true, false),
            new skill('Gather Information', 'charisma', true, false),
            new skill('Handle Animal', 'charisma', false, false),
            new skill('Heal', 'wisdom', true, false),
            new skill('Hide', 'dexterity', true, true),
            new skill('Intimidate', 'charisma', true, false),
            new skill('Jump', 'strength', true, true),
            new skill('Knowledge', 'intelligence', false, false, false, true),
            new skill('Listen', 'wisdom', true, false),
            new skill('Move Silently', 'dexterity', true, true),
            new skill('Open Lock', 'dexterity', false, false),
            new skill('Perform', 'charisma', false, false),
            new skill('Profession', 'wisdom', false, false, false, true),
            new skill('Ride', 'dexterity', true, false),
            new skill('Search', 'intelligence', true, false),
            new skill('Sense Motive', 'wisdom', true, false),
            new skill('Sleight of Hands', 'dexterity', false, true),
            new skill('Spellcraft', 'intelligence', false, false),
            new skill('Spot', 'wisdom', true, false),
            new skill('Survival', 'wisdom', true, false),
            new skill('Swim', 'strength', true, true),
            new skill('Tumble', 'dexterity', false, true),
            new skill('Use Magic Device', 'charisma', false, false),
            new skill('Use Rope', 'dexterity', true, false),
        ],
        attacks: [
            {
                name: "Dwarven Waraxe",
                attackBonus: 6,
                damage: "1d10+4",
                critical: "x3",
                range: 0,
                type: "Slashing",
                notes: "",
                hasAmmunition: false,
                ammunition: {
                    name: "",
                    quantity: 0,
                    notes: ""
                }
            },
            {
                name: "Dwarven Waraxe",
                attackBonus: 6,
                damage: "1d10+4",
                critical: "x3",
                range: 0,
                type: "Slashing",
                notes: "",
                hasAmmunition: false,
                ammunition: {
                    name: "",
                    quantity: 0,
                    notes: ""
                }
            },
            {
                name: "Dwarven Waraxe",
                attackBonus: 6,
                damage: "1d10+4",
                critical: "x3",
                range: 0,
                type: "Slashing",
                notes: "",
                hasAmmunition: false,
                ammunition: {
                    name: "",
                    quantity: 0,
                    notes: ""
                }
            }
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