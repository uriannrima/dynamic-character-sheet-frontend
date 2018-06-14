export class SpellsPerDay {
  spellLevel: number = 0;
  spellsPerDay: number = 0;
  bonusSpells: number = 0;

  constructor(model?: SpellsPerDay | { spellLevel?: number, spellsPerDay?: number, bonusSpells?: number }) {
    if (model) {
      if (model.spellLevel) this.spellLevel = model.spellLevel;
      if (model.spellsPerDay) this.spellsPerDay = model.spellsPerDay;
      if (model.bonusSpells) this.bonusSpells = model.bonusSpells;
    }
  }
}

export default SpellsPerDay
