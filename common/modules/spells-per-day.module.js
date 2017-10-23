exports.SpellsPerDay = function ({ spellsKnown, spellSaveDC, spellLevel, spellsPerDay, bonusSpells }) {
    return {
        spellsKnown: spellsKnown || 0,
        spellSaveDC: spellSaveDC || 0,
        spellLevel: spellLevel || 0,
        spellsPerDay: spellsPerDay || 0,
        bonusSpells: bonusSpells || 0
    }
}