var Modules = require('./');

export const Character = function ({
  _id, description, speed, size, damageReduction = "", classes, abilityScores,
  keyAbilityScores = {
    armor: 'dexterity',
    initiative: 'dexterity',
    grapple: 'strength',
    spells: 'intelligence'
  },
  status = {}, armorClass,
  initiative = new Modules.InitiativeModule.Initiative({}), conditionModifiers = "",
  savingThrows, baseAttackBonus = [0],
  spellResistance = 0, grapple, skills = Modules.SkillsModule.All.map(skill => new Modules.SkillsModule.Skill(skill)),
  attacks, gear, items = [], carryCapacities,
  campaign = "", experience = 0, wealth, feats = [], languages = [],
  specialAbilities = [], domainSchool = "", spellSave = 0,
  arcaneSpellFailure = 0, spellConditionModifier = "",
  spells = [], spellPerDayList = [] }) {

  //Parse to ability score object.
  for (var abilityScoreName in abilityScores) {
    var abilityScore = abilityScores[abilityScoreName];
    abilityScores[abilityScoreName] = new Modules.AbilityScoreModule.AbilityScore(abilityScore);
  }
  if (!abilityScores) abilityScores = Modules.AbilityScoreModule.All;

  for (var savingThrowName in savingThrows) {
    var savingThrow = savingThrows[savingThrowName];
    savingThrows[savingThrowName] = new Modules.SavingThrowsModule.SavingThrow(savingThrow);
  }
  if (!savingThrows) savingThrows = Modules.SavingThrowsModule.All;

  return {
    _id,
    description, speed,
    speed,
    damageReduction,
    conditionModifiers,
    size: size || new Modules.SizeModule.Size({
      name: "Medium",
      modifier: 1,
      grappleBonus: 0,
      hideBonus: 0,
      carryBonus: 1
    }),
    classes: classes || [
      new Modules.ClasseModule.Classe({})
    ],
    // TODO: Remove "factory" pattern later.
    abilityScores,
    keyAbilityScores,
    status: new Modules.StatusModule.Status(status),
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
    savingThrows,
    baseAttackBonus,
    spellResistance,
    grapple: grapple ? new Modules.GrappleModule.Grapple(grapple) : new Modules.GrappleModule.Grapple({
      baseAttackBonus: 0,
      strengthModifier: 0,
      sizeModifier: 0,
      miscModifier: 0
    }),
    skillPoints: 0,
    skills: skills.map(s => new Modules.SkillsModule.Skill(s)),
    attacks: attacks || [
      new Modules.AttackModule.Attack({}),
      new Modules.AttackModule.Attack({}),
      new Modules.AttackModule.Attack({}),
      new Modules.AttackModule.Attack({}),
      new Modules.AttackModule.Attack({})
    ],
    gear: gear || new Modules.GearModule.Gear({}),
    items: items,
    carryCapacities: carryCapacities || {
      lightLoad: {
        label: "Light<br>Load",
        value: 0
      },
      mediumLoad: {
        label: "Medium<br>Load",
        value: 0
      },
      heavyLoad: {
        label: "Heavy<br>Load",
        value: 0
      },
      liftOverHead: {
        label: "Lift Over<br>Head",
        small: "Equals Max Load",
        value: 0
      },
      liftOffGround: {
        label: "Lift Off<br>Ground",
        small: "2x Max Load",
        value: 0
      },
      pushOrDrag: {
        label: "Push Or<br>Drag",
        small: "5x Max Load",
        value: 0
      }
    },
    campaign,
    experience,
    wealth: wealth || new Modules.WealthModule.Wealth({
      copper: 0,
      silver: 0,
      gold: 0,
      platinum: 0,
      treasure: ""
    }),
    feats: feats.map(f => new Modules.FeatModule.Feat(f)),
    languages,
    specialAbilities,
    domainSchool,
    spellSave,
    arcaneSpellFailure,
    spellConditionModifier,
    spells,
    spellPerDayList: spellPerDayList || [...Array(10).keys()].map(i => new Modules.SpellsPerDayModule.SpellsPerDay({
      spellLevel: i
    })),
    getTotalInitiative() {
      return this.abilityScores[this.keyAbilityScores.initiative].getTempModifier() + this.initiative.miscModifier;
    }
  }
}
