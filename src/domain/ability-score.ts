import { IMap } from './interfaces/IMap';

export class AbilityScore {
  name: string = '';
  value: number = 10;
  tempValue: number = 10;

  constructor(model?: AbilityScore | { name?: string, value?: number, tempValue?: number }) {
    Object.assign(this, model);
  }

  get modifier() {
    return Math.floor((this.value - 10) / 2);
  }

  get tempModifier() {
    return Math.floor((this.tempValue - 10) / 2);
  }
};

export default AbilityScore;

export const Strength: AbilityScore = new AbilityScore({
  name: 'Strength'
});

export const Dexterity: AbilityScore = new AbilityScore({
  name: 'Dexterity'
});

export const Constitution: AbilityScore = new AbilityScore({
  name: 'Constitution'
});

export const Intelligence: AbilityScore = new AbilityScore({
  name: 'Intelligence'
});

export const Wisdom: AbilityScore = new AbilityScore({
  name: 'Wisdom'
});

export const Charisma: AbilityScore = new AbilityScore({
  name: 'Charisma'
});

export const All: IMap<AbilityScore> = {
  Strength,
  Dexterity,
  Constitution,
  Intelligence,
  Wisdom,
  Charisma
};
