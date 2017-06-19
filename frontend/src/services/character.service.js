var abilityScore = function (name, value) {
    return {
        name,
        value,
        tempValue: value,
        getModifier: function () {
            return Math.floor((this.value - 10) / 2);
        },
        getTempModifier: function () {
            return Math.floor((this.tempValue - 10) / 2);
        }
    };
}

var characters = [
    {
        name: 'Buck Anvilhead',
        playerName: 'Peres',
        classes: [{
            name: 'Warrior',
            level: 1
        }],
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

                if (abilityScore.name === "dexterity") {
                    const dexModifier = abilityScore.getModifier();
                    this.armorClass.dexModifier = dexModifier;
                    this.initiative.dexModifier = dexModifier;                    
                }
            }
        },
        abilityScores: [
            new abilityScore("strength", 18),
            new abilityScore("dexterity", 14),
            new abilityScore("constitution", 18),
            new abilityScore("intelligence", 13),
            new abilityScore("wisdom", 13),
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
                    result += parseInt(this[key]);
                }
                return result;
            },
            getTouchArmor: function () {
                return this.base + this.dexModifier + this.sizeModifier + this.miscModifier;
            },
            getFlatFooted: function () {
                console.log(1);
                var result = 0;
                for (var key in this) {
                    if (typeof this[key] !== "number") continue;
                    if (key === "dexModifier") continue;
                    result += parseInt(this[key]);
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
    },
];

window.characters = characters;

module.exports = {
    empty: function () {
        return {

            name: '',
            playerName: '',
            classes: [],
            race: "",
            alignment: "",
            deity: "",
            size: "",
            age: 0,
            gender: "",
            height: "",
            weight: "",
            eyes: "",
            hair: "",
            skin: "",
            abilityScore: [
                new abilityScore("strength", 10),
                new abilityScore("dexterity", 10),
                new abilityScore("constitution", 10),
                new abilityScore("intelligence", 10),
                new abilityScore("wisdom", 10),
                new abilityScore("charisma", 10)
            ],
            status: {
                healthPoints: 1,
                wounds: "",
                nonLethalDamage: 0,
            },
            armorClass: {
                base: 10,
                armorBonus: 0,
                shieldBonus: 0,
                dexModifier: 0,
                sizeModifier: 0,
                naturalArmor: 0,
                deflectionModifier: 0,
                miscModifier: 0,
                getTotalArmor: function () {
                    var result = 0;
                    for (var key in this.armorClass) {
                        result += parseInt(this.armorClass[key]);
                    }
                    return result;
                },
                getTouchArmor: function () {
                    return this.base + this.dexModifier + this.sizeModifier + this.miscModifier;
                },
                getFlatFooted: function () {
                    var result = 0;
                    for (var key in this.armorClass) {
                        result += parseInt(this.armorClass[key]);
                    }
                    return result;
                }
            },
            initiative: {
                dexModifier: 2,
                miscModifier: 0,
                getTotal: function () {
                    return (this.dexModifier + this.miscModifier * 1);
                }
            },
        }
    },
    get: function (id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(characters[0]);
            }, 200);
        });
    }
}