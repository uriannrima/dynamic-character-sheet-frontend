import Models from 'Models';

export class CharacterModel {
    constructor(model) {
        Object.assign(this, model);
    }

    getAbilityScore(abilityScoreName) {
        return this.abilityScores.filter(abilityScore => abilityScore.name === abilityScoreName)[0];
    }
}

export default function character(model) {
    var extension = {

    }

    var o = new CharacterModel(model);
    var character = Object.assign(extension, model);

    var character = {
        _id, name, playerName,
        race, alignment, deity,
        size, age, gender,
        height, weight, eyes,
        hair, skin,
        classes: [
            new Models.characterClass({})
        ],
        abilityScores: [
            new Models.abilityScore.strength(10),
            new Models.abilityScore.dexterity(10),
            new Models.abilityScore.constitution(10),
            new Models.abilityScore.intelligence(10),
            new Models.abilityScore.wisdom(10),
            new Models.abilityScore.charisma(10)
        ],
        status: new Models.status({
            healthPoints: 1,
            wounds: "",
            nonLethalDamage: 0,
        }),
        armorClass: new Models.armorClass({
            base: 10,
            armorBonus: 0,
            shieldBonus: 0,
            dexModifier: 0,
            sizeModifier: 0,
            naturalArmor: 0,
            deflectionModifier: 0,
            miscModifier: 0
        }),
        initiative: new Models.initiative({
            dexModifier: 0,
            miscModifier: 0
        }),
        savingThrows: [
            new Models.savingThrows.fortitude(),
            new Models.savingThrows.reflex(),
            new Models.savingThrows.will()
        ],
        baseAttackBonus: 0,
        spellResistance: 1,
        grapple: new Models.grapple({
            baseAttackBonus: 0,
            strengthModifier: 0,
            sizeModifier: 0,
            miscModifier: 0
        }),
        skillPoints: 0,
        skills: Models.skills.DEFAULT_SKILLS,
        attacks: [
            new Models.attack({}),
            new Models.attack({}),
            new Models.attack({})
        ],
    }
}