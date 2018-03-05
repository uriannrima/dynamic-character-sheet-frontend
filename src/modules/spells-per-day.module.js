export const SpellsPerDay = function ({ spellLevel, spellsPerDay, bonusSpells }) {
  return {
    spellLevel: spellLevel || 0,
    spellsPerDay: spellsPerDay || 0,
    bonusSpells: bonusSpells || 0
  }
}
