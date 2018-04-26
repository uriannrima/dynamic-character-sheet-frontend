import Description from 'domain/description.model';
import * as Size from 'domain/size.model';
import { AbilityScore, Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma } from 'domain/ability-score.model';
import Status from 'domain/status.model';
import ArmorClass from 'domain/armor-class.model';
import Gear from 'domain/gear.model';
import Initiative from 'domain/initiative.model';
import Grapple from 'domain/grapple.model';
import { SavingThrow, Will, Reflex, Fortitude } from 'domain/saving-throw.model';
import Attack from 'domain/attack.model';
import Item from 'domain/item.model';
import CarryCapacities from 'domain/carry-capacities.model';
import Wealth from 'domain/wealth.model';
import SpellPerDay from 'domain/spells-per-day.model';

export class CharacterState {
  constructor() {
    Object.assign(this, {
      _id: null,
      description: new Description(),
      classes: [],
      size: new Size.Size(Size.Medium),
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
        grapple: 'strength',
        spells: 'intelligence'
      },
      armorClass: new ArmorClass(),
      status: new Status(),
      speed: '',
      damageReduction: '',
      gear: new Gear(),
      initiative: new Initiative(),
      baseAttackBonus: [0],
      grapple: new Grapple(),
      savingThrows: {
        fortitude: new SavingThrow(Fortitude),
        reflex: new SavingThrow(Reflex),
        will: new SavingThrow(Will)
      },
      conditionModifiers: '',
      spellResistance: 0,
      attacks: [new Attack(), new Attack(), new Attack(), new Attack()],
      skills: [],
      campaign: '',
      experience: '',
      items: [...Array(2 * 17)].map(() => new Item()),
      carryCapacities: new CarryCapacities(),
      wealth: new Wealth(),
      feats: [],
      specialAbilities: [],
      languages: [],
      spells: [],
      domainSchool: '',
      spellPerDayList: [...Array(10)].map(() => new SpellPerDay())
    });
  }
}

export default CharacterState;
