var Domain = require('./');

export const Character = function ({
  _id, description, speed, size, damageReduction = "", classes, abilityScores,
  keyAbilityScores = {
    armor: 'dexterity',
    initiative: 'dexterity',
    grapple: 'strength',
    spells: 'intelligence'
  },
  status = {}, armorClass,
  initiative = new Domain.InitiativeModel.Initiative({}), conditionModifiers = "",
  savingThrows, baseAttackBonus = [0],
  spellResistance = 0, grapple, skills = [],
  attacks, gear, items = [], carryCapacities,
  campaign = "", experience = 0, wealth, feats = [], languages = [],
  specialAbilities = [], domainSchool = "", spellSave = 0,
  arcaneSpellFailure = 0, spellConditionModifier = "",
  spells = [], spellPerDayList = [] }) {

  //Parse to ability score object.
  for (var abilityScoreName in abilityScores) {
    var abilityScore = abilityScores[abilityScoreName];
    abilityScores[abilityScoreName] = new Domain.AbilityScoreModel.AbilityScore(abilityScore);
  }
  if (!abilityScores) abilityScores = Domain.AbilityScoreModel.All;

  for (var savingThrowName in savingThrows) {
    var savingThrow = savingThrows[savingThrowName];
    savingThrows[savingThrowName] = new Domain.SavingThrowsModel.SavingThrow(savingThrow);
  }
  if (!savingThrows) savingThrows = Domain.SavingThrowsModel.All;

  return {
    _id,
    description, speed,
    speed,
    damageReduction,
    conditionModifiers,
    size: size || new Domain.SizeModel.Size({
      name: "Medium",
      modifier: 1,
      grappleBonus: 0,
      hideBonus: 0,
      carryBonus: 1
    }),
    classes: classes || [
      new Domain.ClasseModel.Classe({})
    ],
    // TODO: Remove "factory" pattern later.
    abilityScores,
    keyAbilityScores,
    status: new Domain.StatusModel.Status(status),
    armorClass: armorClass ? new Domain.ArmorClassModel.ArmorClass(armorClass) : new Domain.ArmorClassModel.ArmorClass({
      base: 10,
      armorBonus: 0,
      shieldBonus: 0,
      dexModifier: 0,
      sizeModifier: 0,
      naturalArmor: 0,
      deflectionModifier: 0,
      miscModifier: 0
    }),
    initiative: initiative ? new Domain.InitiativeModel.Initiative(initiative) : new Domain.InitiativeModel.Initiative({
      dexModifier: 0,
      miscModifier: 0
    }),
    savingThrows,
    baseAttackBonus,
    spellResistance,
    grapple: grapple ? new Domain.GrappleModel.Grapple(grapple) : new Domain.GrappleModel.Grapple({
      baseAttackBonus: 0,
      strengthModifier: 0,
      sizeModifier: 0,
      miscModifier: 0
    }),
    skillPoints: 0,
    skills: skills.map(s => new Domain.SkillsModel.Skill(s)),
    attacks: attacks || [
      new Domain.AttackModel.Attack({}),
      new Domain.AttackModel.Attack({}),
      new Domain.AttackModel.Attack({}),
      new Domain.AttackModel.Attack({}),
      new Domain.AttackModel.Attack({})
    ],
    gear: gear || new Domain.GearModel.Gear({}),
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
    wealth: wealth || new Domain.WealthModel.Wealth({
      copper: 0,
      silver: 0,
      gold: 0,
      platinum: 0,
      treasure: ""
    }),
    feats: feats.map(f => new Domain.FeatModel.Feat(f)),
    languages,
    specialAbilities,
    domainSchool,
    spellSave,
    arcaneSpellFailure,
    spellConditionModifier,
    spells,
    spellPerDayList: spellPerDayList || [...Array(10).keys()].map(i => new Domain.SpellsPerDayModel.SpellsPerDay({
      spellLevel: i
    })),
    getTotalInitiative() {
      return this.abilityScores[this.keyAbilityScores.initiative].getTempModifier() + this.initiative.miscModifier;
    }
  }
}
