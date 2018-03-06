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
  name: "Strength"
});

export const Dexterity = new AbilityScore({
  name: "Dexterity"
});

export const Constitution = new AbilityScore({
  name: "Constitution"
});

export const Intelligence = new AbilityScore({
  name: "Intelligence"
});

export const Wisdom = new AbilityScore({
  name: "Wisdom"
});

export const Charisma = new AbilityScore({
  name: "Charisma"
});

export const All = {
  Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma
};
