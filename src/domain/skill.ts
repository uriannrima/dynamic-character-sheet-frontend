import { ISubValued } from './interfaces/ISubValued'
import { IEntity } from './interfaces/IEntity'
import SubValue from './sub-value'
import { KeyAbilityType } from './enums/key-ability-type'

export class CharacterSkill implements IEntity, ISubValued<SubValue> {
  _id: string = '';
  name: string = '';
  keyAbility: KeyAbilityType = KeyAbilityType.NONE;
  untrained: boolean = true;
  armorCheckPenalty: boolean = false;
  classSkill: boolean = false;
  subValues: SubValue[] = [];
  rank: number = 0;
  abilityModifier: number = 0;
  miscModifier: number = 0;
  hiddenModifier: number = 0;

  constructor (model?: CharacterSkill | {
  _id?: string, name?: string, keyAbility?: KeyAbilityType,
  untrained?: boolean, armorCheckPenalty?: boolean, classSkill?: boolean,
  hasSubValue?: boolean, subValues?: SubValue[], rank?: number,
  abilityModifier?: number, miscModifier?: number, hiddenModifier?: number
  }) {
    Object.assign(this, model)
  }

  get hasSubValues () {
    return this.subValues && this.subValues.length >= 1
  }
}

export class Skill extends CharacterSkill {
  check: string = '';
  action: string = '';
  tryAgain: string = '';
  special: string = '';
  synergy: string = '';
  untrainedDescription: string = '';
  restriction: string = '';
  miscellaneous: string = '';
  aditionalInformation: string = '';

  constructor (model?: Skill | {
  _id?: string, name?: string, keyAbility?: KeyAbilityType,
  untrained?: boolean, armorCheckPenalty?: boolean, classSkill?: boolean,
  hasSubValue?: boolean, subValues?: SubValue[], rank?: number,
  abilityModifier?: number, miscModifier?: number, hiddenModifier?: number,
  check?: string, action?: string, tryAgain?: string, special?: string,
  synergy?: string, untrainedDescription?: string, restriction?: string,
  miscellaneous?: string, aditionalInformation?: string,
  }) {
    super(model)
    Object.assign(this, model)
  }
};

export const All = [
  new Skill({ name: 'Appraise', keyAbility: KeyAbilityType.INTELLIGENCE, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Balance', keyAbility: KeyAbilityType.DEXTERITY, untrained: true, armorCheckPenalty: true }),
  new Skill({ name: 'Bluff', keyAbility: KeyAbilityType.CHARISMA, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Climb', keyAbility: KeyAbilityType.STRENGTH, untrained: true, armorCheckPenalty: true }),
  new Skill({ name: 'Concentration', keyAbility: KeyAbilityType.CONSTITUTION, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Craft', keyAbility: KeyAbilityType.INTELLIGENCE, untrained: true, armorCheckPenalty: true }),
  new Skill({ name: 'Decipher Script', keyAbility: KeyAbilityType.INTELLIGENCE, untrained: false, armorCheckPenalty: false }),
  new Skill({ name: 'Diplomacy', keyAbility: KeyAbilityType.CHARISMA, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Disable Device', keyAbility: KeyAbilityType.INTELLIGENCE, untrained: false, armorCheckPenalty: false }),
  new Skill({ name: 'Disguise', keyAbility: KeyAbilityType.CHARISMA, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Escape Artist', keyAbility: KeyAbilityType.DEXTERITY, untrained: true, armorCheckPenalty: true }),
  new Skill({ name: 'Forgery', keyAbility: KeyAbilityType.INTELLIGENCE, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Gather Information', keyAbility: KeyAbilityType.CHARISMA, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Handle Animal', keyAbility: KeyAbilityType.CHARISMA, untrained: false, armorCheckPenalty: false }),
  new Skill({ name: 'Heal', keyAbility: KeyAbilityType.WISDOM, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Hide', keyAbility: KeyAbilityType.DEXTERITY, untrained: true, armorCheckPenalty: true }),
  new Skill({ name: 'Intimidate', keyAbility: KeyAbilityType.CHARISMA, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Jump', keyAbility: KeyAbilityType.STRENGTH, untrained: true, armorCheckPenalty: true }),
  new Skill({ name: 'Knowledge', keyAbility: KeyAbilityType.INTELLIGENCE, untrained: false, armorCheckPenalty: false, hasSubValue: true }),
  new Skill({ name: 'Listen', keyAbility: KeyAbilityType.WISDOM, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Move Silently', keyAbility: KeyAbilityType.DEXTERITY, untrained: true, armorCheckPenalty: true }),
  new Skill({ name: 'Open Lock', keyAbility: KeyAbilityType.DEXTERITY, untrained: false, armorCheckPenalty: false }),
  new Skill({ name: 'Perform', keyAbility: KeyAbilityType.CHARISMA, untrained: false, armorCheckPenalty: false, hasSubValue: true }),
  new Skill({ name: 'Profession', keyAbility: KeyAbilityType.WISDOM, untrained: false, armorCheckPenalty: false, hasSubValue: true }),
  new Skill({ name: 'Ride', keyAbility: KeyAbilityType.DEXTERITY, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Search', keyAbility: KeyAbilityType.INTELLIGENCE, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Sense Motive', keyAbility: KeyAbilityType.WISDOM, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Sleight of Hands', keyAbility: KeyAbilityType.DEXTERITY, untrained: false, armorCheckPenalty: true }),
  new Skill({ name: 'Spellcraft', keyAbility: KeyAbilityType.INTELLIGENCE, untrained: false, armorCheckPenalty: false }),
  new Skill({ name: 'Spot', keyAbility: KeyAbilityType.WISDOM, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Survival', keyAbility: KeyAbilityType.WISDOM, untrained: true, armorCheckPenalty: false }),
  new Skill({ name: 'Swim', keyAbility: KeyAbilityType.STRENGTH, untrained: true, armorCheckPenalty: true }),
  new Skill({ name: 'Tumble', keyAbility: KeyAbilityType.DEXTERITY, untrained: false, armorCheckPenalty: true }),
  new Skill({ name: 'Use Magic Device', keyAbility: KeyAbilityType.CHARISMA, untrained: false, armorCheckPenalty: false }),
  new Skill({ name: 'Use Rope', keyAbility: KeyAbilityType.DEXTERITY, untrained: true, armorCheckPenalty: false })
]

export default Skill
