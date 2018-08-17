import { ISubValued } from '@/domain/interfaces/ISubValued'
import { IEntity } from '@/domain/interfaces/IEntity'
import { KeyAbilityType } from '@/domain/enums/key-ability-type'
import UUID from '@/utils/uuid';

export abstract class AbstractSkill implements IEntity {
  _id: string = '';
  _type: string = 'AbstractSkill';

  name: string = '';
  keyAbility: KeyAbilityType = KeyAbilityType.NONE;
  untrained: boolean = true;
  armorCheckPenalty: boolean = false;

  constructor(model?: AbstractSkill | {
  _id?: string, name?: string, keyAbility?: KeyAbilityType,
  untrained?: boolean, armorCheckPenalty?: boolean
  }) {
    if (model) {
      if (model._id !== undefined) this._id = model._id;
      if (model.name !== undefined) this.name = model.name;
      if (model.keyAbility !== undefined) this.keyAbility = model.keyAbility;
      if (model.untrained !== undefined) this.untrained = model.untrained;
      if (model.armorCheckPenalty !== undefined) this.armorCheckPenalty = model.armorCheckPenalty;
    }
  }
}

export class Skill extends AbstractSkill {
  _type: string = 'Skill';

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
  untrained?: boolean, armorCheckPenalty?: boolean, check?: string,
  action?: string, tryAgain?: string, special?: string, synergy?: string,
  untrainedDescription?: string, restriction?: string, miscellaneous?: string,
  aditionalInformation?: string,
  }) {
    super(model);
    if (model) {
      if (model.check !== undefined) this.check = model.check;
      if (model.action !== undefined) this.action = model.action;
      if (model.tryAgain !== undefined) this.tryAgain = model.tryAgain;
      if (model.special !== undefined) this.special = model.special;
      if (model.synergy !== undefined) this.synergy = model.synergy;
      if (model.untrainedDescription !== undefined) this.untrainedDescription = model.untrainedDescription;
      if (model.restriction !== undefined) this.restriction = model.restriction;
      if (model.miscellaneous !== undefined) this.miscellaneous = model.miscellaneous;
      if (model.aditionalInformation !== undefined) this.aditionalInformation = model.aditionalInformation;
    }
  }
};

export class CharacterSkill extends AbstractSkill implements ISubValued<string> {
  readonly _type: string = 'CharacterSkill';
  _skillId: string = '';
  classSkill: boolean = false;
  subValues: Array<string> = [];
  rank: number = 0;
  miscModifier: number = 0;
  hiddenModifier: number = 0;

  constructor(model?: CharacterSkill | {
  _id?: string, _skillId?: string, classSkill?: boolean,
  subValues?: Array<string>, rank?: number, abilityModifier?: number,
  miscModifier?: number, hiddenModifier?: number
  }) {
    super(model);
    if (model) {
      if (model._skillId !== undefined) this._skillId = model._skillId;
      if (model.classSkill !== undefined) this.classSkill = model.classSkill;
      if (model.subValues !== undefined) this.subValues = model.subValues;
      if (model.rank !== undefined) this.rank = model.rank;
      if (model.miscModifier !== undefined) this.miscModifier = model.miscModifier;
      if (model.hiddenModifier !== undefined) this.hiddenModifier = model.hiddenModifier;
    }
  }

  get hasSubValues() {
    return this.subValues && this.subValues.length >= 1
  }

  static createFromSkill(skill: Skill): CharacterSkill {
    const { _id: _skillId, name, keyAbility, untrained, armorCheckPenalty } = skill;
    return new CharacterSkill({
      _id: UUID.generate(),
      _skillId,
      name,
      keyAbility,
      untrained,
      armorCheckPenalty
    });
  }
}

export default Skill
