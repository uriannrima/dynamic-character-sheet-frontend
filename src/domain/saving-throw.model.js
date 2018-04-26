export class SavingThrow {
  constructor({ name = '', keyAbility = '', base = 0, abilityModifier = 0, magicModifier = 0, miscModifier = 0, tempModifier = 0 } = {}) {
    Object.assign(this, {
      name,
      keyAbility,
      base,
      abilityModifier,
      magicModifier,
      miscModifier,
      tempModifier
    });
  }
}

export default SavingThrow;

export const Will = new SavingThrow({
  name: 'will',
  keyAbility: 'wisdom'
});

export const Reflex = new SavingThrow({
  name: 'reflex',
  keyAbility: 'dexterity'
});

export const Fortitude = new SavingThrow({
  name: 'fortitude',
  keyAbility: 'constitution'
});

export const All = {
  Will, Reflex, Fortitude
};
