import { IMap } from './interfaces/IMap'

export class AbilityScore {
  name: string = '';
  value: number = 10;
  tempValue: number = 10;

  constructor(model?: AbilityScore | { name: string, value?: number, tempValue?: number }) {
    if (model) {
      this.name = model.name;
      if (model.value) this.value = model.value;
      if (model.tempValue) this.tempValue = model.tempValue;
    }
  }

  get modifier() {
    return Math.floor((this.value - 10) / 2)
  }

  get tempModifier() {
    return Math.floor((this.tempValue - 10) / 2)
  }

  get modifierAbs() {
    return Math.abs(this.modifier);
  }

  get tempModifierAbs() {
    return Math.abs(this.tempModifier);
  }
};

export default AbilityScore

export const strength: AbilityScore = new AbilityScore({
  name: 'strength'
})

export const dexterity: AbilityScore = new AbilityScore({
  name: 'dexterity'
})

export const constitution: AbilityScore = new AbilityScore({
  name: 'constitution'
})

export const intelligence: AbilityScore = new AbilityScore({
  name: 'intelligence'
})

export const wisdom: AbilityScore = new AbilityScore({
  name: 'wisdom'
})

export const charisma: AbilityScore = new AbilityScore({
  name: 'charisma'
})

export const All: IMap<AbilityScore> = {
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma
}
