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
        abilityScore: [
            { name: "strength", value: 18 },
            { name: "dexterity", value: 14 },
            { name: "constitution", value: 18 },
            { name: "intelligence", value: 13 },
            { name: "wisdom", value: 13 },
            { name: "charisma", value: 10 }
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
            miscModifier: 0
        }
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
                { name: "strength", value: 10 },
                { name: "dexterity", value: 10 },
                { name: "constitution", value: 10 },
                { name: "intelligence", value: 10 },
                { name: "wisdom", value: 10 },
                { name: "charisma", value: 10 }
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
                miscModifier: 0
            }
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