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

  constructor(model?: CharacterSkill | {
    _id?: string, name?: string, keyAbility?: KeyAbilityType,
    untrained?: boolean, armorCheckPenalty?: boolean, classSkill?: boolean,
    subValues?: SubValue[], rank?: number, abilityModifier?: number,
    miscModifier?: number, hiddenModifier?: number
  }) {
    if (model) {
      if (model._id) this._id = model._id;
      if (model.name) this.name = model.name;
      if (model.keyAbility) this.keyAbility = model.keyAbility;
      if (model.untrained) this.untrained = model.untrained;
      if (model.armorCheckPenalty) this.armorCheckPenalty = model.armorCheckPenalty;
      if (model.classSkill) this.classSkill = model.classSkill;
      if (model.subValues) this.subValues = model.subValues.map(subValue => new SubValue(subValue));
      if (model.rank) this.rank = model.rank;
      if (model.abilityModifier) this.abilityModifier = model.abilityModifier;
      if (model.miscModifier) this.miscModifier = model.miscModifier;
      if (model.hiddenModifier) this.hiddenModifier = model.hiddenModifier;
    }
  }

  get hasSubValues() {
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

  constructor(model?: Skill | {
    _id?: string, name?: string, keyAbility?: KeyAbilityType,
    untrained?: boolean, armorCheckPenalty?: boolean, classSkill?: boolean,
    hasSubValue?: boolean, subValues?: SubValue[], rank?: number,
    abilityModifier?: number, miscModifier?: number, hiddenModifier?: number,
    check?: string, action?: string, tryAgain?: string, special?: string,
    synergy?: string, untrainedDescription?: string, restriction?: string,
    miscellaneous?: string, aditionalInformation?: string,
  }) {
    super(model)
    if (model) {
      if (model.check) this.check = model.check;
      if (model.action) this.action = model.action;
      if (model.tryAgain) this.tryAgain = model.tryAgain;
      if (model.special) this.special = model.special;
      if (model.synergy) this.synergy = model.synergy;
      if (model.untrainedDescription) this.untrainedDescription = model.untrainedDescription;
      if (model.restriction) this.restriction = model.restriction;
      if (model.miscellaneous) this.miscellaneous = model.miscellaneous;
      if (model.aditionalInformation) this.aditionalInformation = model.aditionalInformation;
    }
  }
};

export default Skill
