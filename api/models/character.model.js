var Models = require('./');

module.exports = function character({
    _id, name, playerName,
    race, alignment, deity,
    size, age, gender, height,
    weight, eyes, hair, skin,
    classes, abilityScores,
    status, armorClass, initiative,
    savingThrows, baseAttackBonus,
    spellResistance, grapple, skills,
    attacks }) {

    var scores = abilityScores.map(abilityScore => Models.abilityScore.factory.create(abilityScore));

    return {
        _id, name, playerName,
        race, alignment, deity,
        size, age, gender,
        height, weight, eyes,
        hair, skin,
        classes: classes || [
            new Models.classe({})
        ],
        abilityScores: abilityScores.map(abilityScore => Models.abilityScore.factory.create(abilityScore)) || [
            new Models.abilityScore.strength(10),
            new Models.abilityScore.dexterity(10),
            new Models.abilityScore.constitution(10),
            new Models.abilityScore.intelligence(10),
            new Models.abilityScore.wisdom(10),
            new Models.abilityScore.charisma(10)
        ],
        status: status || new Models.status({
            healthPoints: 1,
            wounds: "",
            nonLethalDamage: 0,
        }),
        armorClass: armorClass ?  new Models.armorClass(armorClass) : new Models.armorClass({
            base: 10,
            armorBonus: 0,
            shieldBonus: 0,
            dexModifier: 0,
            sizeModifier: 0,
            naturalArmor: 0,
            deflectionModifier: 0,
            miscModifier: 0
        }),
        initiative: initiative ? new Models.initiative(initiative) : new Models.initiative({
            dexModifier: 0,
            miscModifier: 0
        }),
        savingThrows: savingThrows.map(savingThrow => new Models.savingThrows.savingThrow(savingThrow)) || [
            new Models.savingThrows.fortitude(),
            new Models.savingThrows.reflex(),
            new Models.savingThrows.will()
        ],
        baseAttackBonus: baseAttackBonus || 0,
        spellResistance: spellResistance || 0,
        grapple: grapple ? new Models.grapple(grapple) : new Models.grapple({
            baseAttackBonus: 0,
            strengthModifier: 0,
            sizeModifier: 0,
            miscModifier: 0
        }),
        skillPoints: 0,
        skills: skills ? skills.map(s => Models.skills.skill(s)) : Models.skills.DEFAULT_SKILLS,
        attacks: attacks || [
            new Models.attack({}),
            new Models.attack({}),
            new Models.attack({})
        ],
    }
}