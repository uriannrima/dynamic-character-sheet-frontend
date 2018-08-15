import { Character } from '@domain'
import { KeyAbilityType } from '@domain/enums/key-ability-type'

export class KeyAbilityScores {
  [check: string]: KeyAbilityType
}

export class CharacterState extends Character {
  keyAbilityScores: KeyAbilityScores = {
    armor: KeyAbilityType.DEXTERITY,
    initiative: KeyAbilityType.DEXTERITY,
    grapple: KeyAbilityType.STRENGTH,
    spells: KeyAbilityType.DEXTERITY
  };
}

export default CharacterState
