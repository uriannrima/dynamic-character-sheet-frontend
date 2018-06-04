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

export const Strength = new AbilityScore({
  name: 'Strength'
});

export const Dexterity = new AbilityScore({
  name: 'Dexterity'
});

export const Constitution = new AbilityScore({
  name: 'Constitution'
});

export const Intelligence = new AbilityScore({
  name: 'Intelligence'
});

export const Wisdom = new AbilityScore({
  name: 'Wisdom'
});

export const Charisma = new AbilityScore({
  name: 'Charisma'
});

export enum KeyAbilityType {
  NONE = 'None',
  STRENGTH = 'Strength,',
  DEXTERITY = 'Dexterity,',
  CONSTITUTION = 'Constitution,',
  INTELLIGENCE = 'Intelligence,',
  WISDOM = 'Wisdom,',
  CHARISMA = 'Charisma'
};

export enum CasterKeyAbilityType {
  NONE = 'None',
  INTELLIGENCE = 'Intelligence,',
  WISDOM = 'Wisdom,',
  CHARISMA = 'Charisma'
};

export const All = {
  Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma
};
