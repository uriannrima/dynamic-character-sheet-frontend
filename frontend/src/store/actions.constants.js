export default {
    Simple: 'SIMPLE.MUTATION',
    Character: {
        Replace: "REPLACE.CHARACTER",
        Add: {
            Spell: "CHARACTER.ADD.SPELL",
            Feat: "CHARACTER.ADD.FEAT",
            Skill: "CHARACTER.ADD.SKILL"
        },
        Remove: {
            Spell: "CHARACTER.REMOVE.SPELL",
            Feat: "CHARACTER.REMOVE.FEAT",
            Skill: "CHARACTER.REMOVE.SKILL"
        },
        Update: {
            AbilityScore: "CHARACTER.UPDATE.ABILITY_SCORE"
        }
    }
}
