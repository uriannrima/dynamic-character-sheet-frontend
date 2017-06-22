import characterClass from 'Models/characterClass.model';
import * as abilityScore from 'Models/ability-score.model';
import status from 'Models/status.model';
import armorClass from 'Models/armor-class.model';
import initiative from 'Models/initiative.model';
import * as savingThrows from 'Models/saving-throw.model';
import grapple from 'Models/grapple.model';
import * as skills from 'Models/skill.model';
import attack from 'Models/attack.model';

export default function character({ name, playerName, classes, race, alignment, deity, size, age, gender, height, weight, eyes, hair, skin }) {
    return {
        name,
        playerName,
        classes,
        race,
        alignment,
        deity,
        size,
        age,
        gender,
        height,
        weight,
        eyes,
        hair,
        skin,
        abilityScores: [
            new abilityScore.strength(10),
            new abilityScore.dexterity(10),
            new abilityScore.constitution(10),
            new abilityScore.intelligence(10),
            new abilityScore.wisdom(10),
            new abilityScore.charisma(10)
        ],
        status: new status({
            healthPoints: 1,
            wounds: "",
            nonLethalDamage: 0,
        }),
        armorClass: new armorClass({
            base: 10,
            armorBonus: 0,
            shieldBonus: 0,
            dexModifier: 0,
            sizeModifier: 0,
            naturalArmor: 0,
            deflectionModifier: 0,
            miscModifier: 0
        }),
        initiative: new initiative({
            dexModifier: 0,
            miscModifier: 0
        }),
        savingThrows: [
            new savingThrows.fortitude(),
            new savingThrows.reflex(),
            new savingThrows.will()
        ],
        baseAttackBonus: 0,
        spellResistance: 1,
        grapple: new grapple({
            baseAttackBonus: 0,
            strengthModifier: 0,
            sizeModifier: 0,
            miscModifier: 0
        }),
        skillPoints: 0,
        skills: skills.DEFAULT_SKILLS,
        attacks: [
            new attack({

            }),
            new attack({

            }),
            new attack({

            })
        ],
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
    }
}