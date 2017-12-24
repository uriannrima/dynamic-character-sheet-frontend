var Modules = require('./');
_ = require('lodash');

export const Character = function ({
    _id, name, playerName,
    race, alignment, deity,
    size, age, gender, height,
    weight, eyes, hair, skin, speed,
    damageReduction, classes, abilityScores,
    status, armorClass, initiative, conditionModifier,
    savingThrows, baseAttackBonus,
    spellResistance, grapple, skills,
    weapons, gear, items, carryCapacity,
    campaign, experience, money, feats, languages,
    specialAbilities, domainSchool, spellSave,
    arcaneSpellFailure, spellConditionModifier,
    spells = [], spellPerDayList }) {
    return {
        _id,
        name,
        playerName,
        race,
        alignment,
        deity,
        age,
        gender,
        height,
        weight,
        eyes,
        hair,
        skin,
        speed,
        damageReduction,
        conditionModifier,
        size: size || new Modules.SizeModule.Size({
            name: "Medium",
            attackDCBonus: "0",
            grappleBonus: "0",
            hideBonus: "0",
            carryBonus: "1"
        }),
        classes: classes || [
            new Modules.ClasseModule.Classe({})
        ],
        abilityScores: abilityScores ? abilityScores.map(abilityScore => Modules.AbilityScoreModule.Factory.Create(abilityScore)) : [
            new Modules.AbilityScoreModule.Factory.Create({ name: 'strength' }),
            new Modules.AbilityScoreModule.Factory.Create({ name: 'dexterity' }),
            new Modules.AbilityScoreModule.Factory.Create({ name: 'constitution' }),
            new Modules.AbilityScoreModule.Factory.Create({ name: 'intelligence' }),
            new Modules.AbilityScoreModule.Factory.Create({ name: 'wisdom' }),
            new Modules.AbilityScoreModule.Factory.Create({ name: 'charisma' })
        ],
        status: status || new Modules.StatusModule.Status({
            healthPoints: 1,
            wounds: "",
            nonLethalDamage: 0
        }),
        armorClass: armorClass ? new Modules.ArmorClassModule.ArmorClass(armorClass) : new Modules.ArmorClassModule.ArmorClass({
            base: 10,
            armorBonus: 0,
            shieldBonus: 0,
            dexModifier: 0,
            sizeModifier: 0,
            naturalArmor: 0,
            deflectionModifier: 0,
            miscModifier: 0
        }),
        initiative: initiative ? new Modules.InitiativeModule.Initiative(initiative) : new Modules.InitiativeModule.Initiative({
            dexModifier: 0,
            miscModifier: 0
        }),
        savingThrows: savingThrows ? savingThrows.map(savingThrow => new Modules.SavingThrowsModule.SavingThrow(savingThrow)) : [
            new Modules.SavingThrowsModule.Factory.Create({ name: 'fortitude' }),
            new Modules.SavingThrowsModule.Factory.Create({ name: 'reflex' }),
            new Modules.SavingThrowsModule.Factory.Create({ name: 'will' })
        ],
        baseAttackBonus: baseAttackBonus || [0],
        spellResistance: spellResistance || 0,
        grapple: grapple ? new Modules.GrappleModule.Grapple(grapple) : new Modules.GrappleModule.Grapple({
            baseAttackBonus: 0,
            strengthModifier: 0,
            sizeModifier: 0,
            miscModifier: 0
        }),
        skillPoints: 0,
        skills: skills ? skills.map(s => new Modules.SkillsModule.Skill(s)) : Modules.SkillsModule.DEFAULT_SKILLS,
        weapons: weapons || [
            new Modules.WeaponModule.Weapon({}),
            new Modules.WeaponModule.Weapon({}),
            new Modules.WeaponModule.Weapon({}),
            new Modules.WeaponModule.Weapon({}),
            new Modules.WeaponModule.Weapon({})
        ],
        gear: gear || new Modules.GearModule.Gear({}),
        items: items || Modules.ItemModule.Factory(33),
        carryCapacity: carryCapacity || new Modules.CarryCapacityModule.CarryCapacity({
            lightLoad: 0,
            mediumLoad: 0,
            heavyLoad: 0,
            liftOverHead: 0,
            liftOffGround: 0,
            pushOrDrag: 0
        }),
        campaign: campaign || "",
        experience: experience || 0,
        money: money || new Modules.MoneyModule.Money({
            copper: 0,
            silver: 0,
            gold: 0,
            platinum: 0,
            treasure: ""
        }),
        feats: feats ? feats.map(f => new Modules.FeatModule.Feat(f)) : [],
        languages: languages || [],
        specialAbilities: specialAbilities || [],
        domainSchool: domainSchool || "",
        spellSave: spellSave || 0,
        arcaneSpellFailure: arcaneSpellFailure || 0,
        spellConditionModifier: spellConditionModifier || "",
        spells,
        spellPerDayList: spellPerDayList || [...Array(10).keys()].map(i => new Modules.SpellsPerDayModule.SpellsPerDay({
            spellLevel: i
        })),
        updateAbilityScore: function () {
            _.forEach(this.abilityScores, abilityScore => {
                abilityScore.updateCharacter(this);
            });
        },
        getAbilityScore: function (abilityScoreName) {
            return _.find(this.abilityScores, abilityScore => {
                return abilityScore.name.toUpperCase() === abilityScoreName.toUpperCase();
            });
        },
        getCasterAbility: function () {
            var casterAbility;
            casterAbility = this.getAbilityScore('intelligence');

            _.forEach(this.classes, classe => {
                if (classe.isCaster) {
                    casterAbility = this.getAbilityScore(classe.casterAbility);
                }
            });

            return casterAbility;
        }
    }
}
