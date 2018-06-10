export class SpellsPerDay {
  spellLevel: number = 0;
  spellsPerDay: number = 0;
  bonusSpells: number = 0;

  constructor (model?: SpellsPerDay | { spellLevel?: number, spellsPerDay?: number, bonusSpells?: number }) {
    Object.assign(this, model)
  }
}

export default SpellsPerDay
