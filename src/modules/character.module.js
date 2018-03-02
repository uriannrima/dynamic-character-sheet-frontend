var Modules = require('./');
_ = require('lodash');

export const Character = function ({
  _id, name = "", playerName = "",
  race = "", alignment = "", deity = "",
  size, age = "", gender = "", height = "",
  weight = "", eyes = "", hair = "", skin = "", speed = "",
  damageReduction = "", classes, abilityScores,
  status = {}, armorClass, initiative, conditionModifier = "",
  savingThrows, baseAttackBonus = [0],
  spellResistance = 0, grapple, skills = Modules.SkillsModule.DEFAULT_SKILLS,
  attacks, gear, items = [], carryCapacities,
  campaign = "", experience = 0, money, feats = [], languages = [],
  specialAbilities = [], domainSchool = "", spellSave = 0,
  arcaneSpellFailure = 0, spellConditionModifier = "",
  spells = [], spellPerDayList = []}) {
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
      modifier: 1,
      grappleBonus: 0,
      hideBonus: 0,
      carryBonus: 1
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
    money: money || new Modules.MoneyModule.Money({
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
