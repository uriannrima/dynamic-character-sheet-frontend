const ALL_CLASSES = [
    {
        name: "Warrior",
        babPerLevel: 1,
        skillsPerLeve: 2,
        skillsMultiplier: 4
    }
];

export default {
    get: function () {
        return ALL_CLASSES;
    },
    getByName: function () {

    },
    update: function (character) {
        character.basicAttackBonus = 0;
        character.classes.forEach(characterClass => {
            const template = ALL_CLASSES.filter(c => c.name === characterClass.name)[0];
            character.basicAttackBonus += characterClass.level * template.babPerLevel;
        });
    }
}