import * as Modules from '@/domain'
import { IMap } from '@/domain/interfaces/IMap'
import { KeyAbilityType } from '@/domain/enums/key-ability-type'
import { IEntity } from '@/domain/interfaces/IEntity'
import { Modifier } from '@/domain/interfaces/IModified';

export class Character implements IEntity {
  _id: string = '';

  _type: string = 'Character';

  description: Modules.Description = new Modules.Description();

  abilityScores: IMap<Modules.AbilityScore> = Modules.AbilityScores;

  alignment: Modules.Alignment = new Modules.Alignment();

  armorClass: Modules.ArmorClass = new Modules.ArmorClass();

  attacks: Modules.Attack[] = [];

  carryCapacities: Modules.CarryCapacities = new Modules.CarryCapacities();

  classes: Modules.Classe[] = [];

  feats: Modules.Feat[] = [];

  gear: Modules.Gear = new Modules.Gear();

  items: Modules.Item[] = []

  languages: Modules.Language[] = [];

  savingThrows: IMap<Modules.SavingThrow & { keyAbilityScore?: Modules.AbilityScore }> = Modules.SavingThrows;

  size: Modules.Size = new Modules.Size();

  skills: Modules.CharacterSkill[] = [];

  specialAbilities: Modules.SpecialAbility[] = [];

  spells: Modules.Spell[] = [];

  status: Modules.Status = new Modules.Status();

  wealth: Modules.Wealth = new Modules.Wealth();

  baseAttackBonus: number[] = [];

  grappleModifier: number = 0;

  initiativeModifiers: Modifier[] = [];

  domainSchool: string = '';

  speed: string = '30 ft.';

  damageReduction: string = '0';

  conditionModifiers: string = '';

  spellResistance: string = '0';

  campaign: string = '';

  experience: number = 0;

  constructor(model?: Character) {
    if (model) {
      this._id = model._id

      this.description = new Modules.Description(model.description)

      for (const key in model.abilityScores) {
        this.abilityScores[key] = new Modules.AbilityScore(model.abilityScores[key])
      }

      this.alignment = new Modules.Alignment(model.alignment)

      this.armorClass = new Modules.ArmorClass(model.armorClass)

      this.attacks = model.attacks.map(attack => new Modules.Attack(attack))

      this.carryCapacities = new Modules.CarryCapacities(model.carryCapacities)

      this.classes = model.classes.map(classe => new Modules.Classe(classe))

      this.feats = model.feats.map(feat => new Modules.Feat(feat))

      this.gear = new Modules.Gear(model.gear)

      this.items = model.items.map(item => new Modules.Item(item))

      this.languages = model.languages.map(language => new Modules.Language(language))

      for (const key in model.savingThrows) {
        this.savingThrows[key] = new Modules.SavingThrow(model.savingThrows[key])
      }

      this.size = new Modules.Size(model.size)

      this.skills = model.skills.map(skill => new Modules.CharacterSkill(skill))

      this.specialAbilities = model.specialAbilities.map(specialAbility => new Modules.SpecialAbility(specialAbility))

      this.spells = model.spells.map(spell => new Modules.Spell(spell))

      this.status = new Modules.Status(model.status)

      this.wealth = new Modules.Wealth(model.wealth)

      this.baseAttackBonus = model.baseAttackBonus

      this.initiativeModifiers = model.initiativeModifiers

      this.grappleModifier = model.grappleModifier

      this.domainSchool = model.domainSchool

      this.speed = model.speed

      this.damageReduction = model.damageReduction

      this.conditionModifiers = model.conditionModifiers

      this.spellResistance = model.spellResistance

      this.campaign = model.campaign

      this.experience = model.experience
    }
  }

  getAbilityScore(abilityName: KeyAbilityType) {
    return this.abilityScores[abilityName]
  }

  getSavingThrow(savingThrowName: string) {
    return this.savingThrows[savingThrowName]
  }
}

export default Character
