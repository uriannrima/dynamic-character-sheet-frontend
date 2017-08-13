var Models = require('./');

module.exports = function character({
    _id, name, playerName,
    race, alignment, deity,
    size, age, gender, height,
    weight, eyes, hair, skin, speed,
    damageReduction, classes, abilityScores,
    status, armorClass, initiative, conditionModifier,
    savingThrows, baseAttackBonus,
    spellResistance, grapple, skills,
    attacks, gear, items }) {

    return {
        _id, name, playerName,
        race, alignment, deity,
        size, age, gender,
        height, weight, eyes,
        hair, skin, speed,
        damageReduction,
        conditionModifier,
        classes: classes || [
            new Models.classe({})
        ],
        abilityScores: abilityScores ? abilityScores.map(abilityScore => Models.abilityScore.factory.create(abilityScore)) : [
            new Models.abilityScore.factory.create({ name: 'strength' }),
            new Models.abilityScore.factory.create({ name: 'dexterity' }),
            new Models.abilityScore.factory.create({ name: 'constitution' }),
            new Models.abilityScore.factory.create({ name: 'intelligence' }),
            new Models.abilityScore.factory.create({ name: 'wisdom' }),
            new Models.abilityScore.factory.create({ name: 'charisma' })
        ],
        status: status || new Models.status({
            healthPoints: 1,
            wounds: "",
            nonLethalDamage: 0,
        }),
        armorClass: armorClass ? new Models.armorClass(armorClass) : new Models.armorClass({
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
        savingThrows: savingThrows ? savingThrows.map(savingThrow => new Models.savingThrows.savingThrow(savingThrow)) : [
            new Models.savingThrows.factory.create({ name: 'fortitude' }),
            new Models.savingThrows.factory.create({ name: 'reflex' }),
            new Models.savingThrows.factory.create({ name: 'will' })
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
            new Models.attack({}),
            new Models.attack({}),
            new Models.attack({})
        ],
        gear: gear || new Models.gear.gear({}),
        items: items || Models.item.factory(33)
    }
}