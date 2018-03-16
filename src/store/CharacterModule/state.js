import * as Size from 'modules/size.module';
import { AbilityScore, Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma } from 'modules/ability-score.module';
import Status from 'modules/status.module';
import ArmorClass from 'modules/armor-class.module';
import Gear from 'modules/gear.module';
import Initiative from 'modules/initiative.module';
import Grapple from 'modules/grapple.module';
import { SavingThrow, Will, Reflex, Fortitude } from 'modules/saving-throw.module';
import Attack from 'modules/attack.module';
import { Skill, All } from 'modules/skill.module';

export default {
  _id: null,
  name: "",
  playerName: "",
  classes: [],
  race: "",
  alignment: "",
  deity: "",
  size: new Size.Size(Size.Medium),
  age: "",
  gender: "",
  height: "",
  weight: "",
  eyes: "",
  hair: "",
  skin: "",
  abilityScores: {
    strength: new AbilityScore(Strength),
    dexterity: new AbilityScore(Dexterity),
    constitution: new AbilityScore(Constitution),
    intelligence: new AbilityScore(Intelligence),
    wisdom: new AbilityScore(Wisdom),
    charisma: new AbilityScore(Charisma)
  },
  keyAbilityScores: {
    armor: 'dexterity',
    initiative: 'dexterity',
    grapple: 'strength'
  },
  armorClass: new ArmorClass(),
  status: new Status(),
  speed: "",
  damageReduction: "",
  gear: new Gear(),
  initiative: new Initiative(),
  baseAttackBonus: [0],
  grapple: new Grapple(),
  savingThrows: {
    fortitude: new SavingThrow(Fortitude),
    reflex: new SavingThrow(Reflex),
    will: new SavingThrow(Will)
  },
  conditionModifiers: "",
  spellResistance: 0,
  attacks: [new Attack(), new Attack(), new Attack(), new Attack()],
  skills: All.map(skill => new Skill(skill)),
  campaign: "",
  experience: ""
}
