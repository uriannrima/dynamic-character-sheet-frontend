export default {
  Simple: 'SIMPLE.MUTATION',
  Character: {
    Replace: "CHARACTER.REPLACE",
    Add:
        {
          Generic: "CHARACTER.ADD",
          Spell: "CHARACTER.ADD.SPELL",
          Feat: "CHARACTER.ADD.FEAT",
          Skill: "CHARACTER.ADD.SKILL"
        },
    Remove:
        {
          Generic: "CHARACTER.REMOVE",
          Spell: "CHARACTER.REMOVE.SPELL",
          Feat: "CHARACTER.REMOVE.FEAT",
          Skill: "CHARACTER.REMOVE.SKILL"
        },
    Update:
        {
          Generic: "CHARACTER.UPDATE",
          AbilityScore: "CHARACTER.UPDATE.ABILITY_SCORE"
        }
  }
}
