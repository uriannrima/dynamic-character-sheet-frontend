export class AbilityScore {
  constructor({ name, value = 10, tempValue = 10 } = {}) {
    this.name = name;
    this.value = value;
    this.tempValue = tempValue;
    // TODO: Remove these methods later.
    this.getModifier = () => {
      return Math.floor((this.value - 10) / 2);
    }
    this.getTempModifier = () => {
      return Math.floor((this.tempValue - 10) / 2);
    }
    this.modifier = this.getModifier();
    this.tempModifier = this.getTempModifier();
  }
};

export default AbilityScore;

export const Strength = new AbilityScore({
  name: 'strength'
});

export const Dexterity = new AbilityScore({
  name: 'dexterity'
});

export const Constitution = new AbilityScore({
  name: 'constitution'
});

export const Intelligence = new AbilityScore({
  name: 'intelligence'
});

export const Wisdom = new AbilityScore({
  name: 'wisdom'
});

export const Charisma = new AbilityScore({
  name: 'charisma'
});

export const All = {
  Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma
};
