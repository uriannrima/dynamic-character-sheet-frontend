export class SpellsPerDay {
  constructor({ spellLevel = 0, spellsPerDay = 0, bonusSpells = 0 } = {}) {
    Object.assign(this, {
      spellLevel,
      spellsPerDay,
      bonusSpells
    });
  }
}

export default SpellsPerDay;