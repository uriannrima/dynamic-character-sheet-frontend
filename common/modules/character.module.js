var Modules = require('./');

exports.character = function ({
    _id, name, playerName,
    race, alignment, deity,
    size, age, gender, height,
    weight, eyes, hair, skin, speed,
    damageReduction, classes, abilityScores,
    status, armorClass, initiative, conditionModifier,
    savingThrows, baseAttackBonus,
    spellResistance, grapple, skills,
    attacks, gear, items, carryCapacity,
    campaign, experience, money, feats, languages,
    specialAbilities, domainSchool, spellSave,
    arcaneSpellFailure, spellConditionModifier,
    spellList, spellPerDayList }) {

    return {
        _id, name, playerName,
        race, alignment, deity,
        size, age, gender,
        height, weight, eyes,
        hair, skin, speed,
        damageReduction,
        conditionModifier,
        classes: classes || [
            new Modules.classeModule.classe({})
        ],
        abilityScores: abilityScores ? abilityScores.map(abilityScore => Modules.abilityScoreModule.factory.create(abilityScore)) : [
            new Modules.abilityScoreModule.factory.create({ name: 'strength' }),
            new Modules.abilityScoreModule.factory.create({ name: 'dexterity' }),
            new Modules.abilityScoreModule.factory.create({ name: 'constitution' }),
            new Modules.abilityScoreModule.factory.create({ name: 'intelligence' }),
            new Modules.abilityScoreModule.factory.create({ name: 'wisdom' }),
            new Modules.abilityScoreModule.factory.create({ name: 'charisma' })
        ],
        status: status || new Modules.statusModule.status({
            healthPoints: 1,
            wounds: "",
            nonLethalDamage: 0,
        }),
        armorClass: armorClass ? new Modules.armorClassModule.armorClass(armorClass) : new Modules.armorClassModule.armorClass({
            base: 10,
            armorBonus: 0,
            shieldBonus: 0,
            dexModifier: 0,
            sizeModifier: 0,
            naturalArmor: 0,
            deflectionModifier: 0,
            miscModifier: 0
        }),
        initiative: initiative ? new Modules.initiativeModule.initiative(initiative) : new Modules.initiativeModule.initiative({
            dexModifier: 0,
            miscModifier: 0
        }),
        savingThrows: savingThrows ? savingThrows.map(savingThrow => new Modules.savingThrowsModule.savingThrow(savingThrow)) : [
            new Modules.savingThrowsModule.factory.create({ name: 'fortitude' }),
            new Modules.savingThrowsModule.factory.create({ name: 'reflex' }),
            new Modules.savingThrowsModule.factory.create({ name: 'will' })
        ],
        baseAttackBonus: baseAttackBonus || 0,
        spellResistance: spellResistance || 0,
        grapple: grapple ? new Modules.grappleModule.grapple(grapple) : new Modules.grappleModule.grapple({
            baseAttackBonus: 0,
            strengthModifier: 0,
            sizeModifier: 0,
            miscModifier: 0
        }),
        skillPoints: 0,
        skills: skills ? skills.map(s => Modules.skillsModule.skill(s)) : Modules.skillsModule.DEFAULT_SKILLS,
        attacks: attacks || [
            new Modules.attackModule.attack({}),
            new Modules.attackModule.attack({}),
            new Modules.attackModule.attack({}),
            new Modules.attackModule.attack({}),
            new Modules.attackModule.attack({})
        ],
        gear: gear || new Modules.gearModule.gear({}),
        items: items || Modules.itemModule.factory(33),
        carryCapacity: carryCapacity || new Modules.carryCapacityModule.carryCapacity({
            lightLoad: 0,
            mediumLoad: 0,
            heavyLoad: 0,
            liftOverHead: 0,
            liftOffGround: 0,
            pushOrDrag: 0
        }),
        campaign: campaign || "",
        experience: experience || 0,
        money: money || new Modules.moneyModule.money({
            copper: 0,
            silver: 0,
            gold: 0,
            platinum: 0,
            treasure: ""
        }),
        feats: feats ? feats.map(f => new Modules.featModule.feat(f)) : [],
        languages: languages || [],
        specialAbilities: specialAbilities || "",
        domainSchool: domainSchool || "",
        spellSave: spellSave || 0,
        arcaneSpellFailure: arcaneSpellFailure || 0,
        spellConditionModifier: spellConditionModifier || "",
        spellList: spellList || [...Array(10).keys()].map(i => {
            return {
                level: i,
                spells: []
            };
        }),
        spellPerDayList: spellPerDayList || [...Array(10).keys()].map(i => new Modules.spellsPerDayModule.spellsPerDay({
            spellLevel: i
        }))
    }
}