import { IMap } from './interfaces/IMap'

export class AbilityScore {
  name: string = '';
  value: number = 10;
  tempValue: number = 10;

  constructor (model?: AbilityScore | { name?: string, value?: number, tempValue?: number }) {
    Object.assign(this, model)
  }

  get modifier () {
    return Math.floor((this.value - 10) / 2)
  }

  get tempModifier () {
    return Math.floor((this.tempValue - 10) / 2)
  }
};

export default AbilityScore

export const strength: AbilityScore = new AbilityScore({
  name: 'Strength'
})

export const dexterity: AbilityScore = new AbilityScore({
  name: 'Dexterity'
})

export const constitution: AbilityScore = new AbilityScore({
  name: 'Constitution'
})

export const intelligence: AbilityScore = new AbilityScore({
  name: 'Intelligence'
})

export const wisdom: AbilityScore = new AbilityScore({
  name: 'Wisdom'
})

export const charisma: AbilityScore = new AbilityScore({
  name: 'Charisma'
})

export const All: IMap<AbilityScore> = {
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma
}
